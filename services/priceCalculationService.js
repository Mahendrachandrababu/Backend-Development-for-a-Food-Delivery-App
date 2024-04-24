const pool = require('../db');

class PriceCalculationService {
    static async calculateTotalPrice(organizationId, itemId, distance) {
        // Validate input parameters
        if (!organizationId || !itemId || isNaN(distance) || distance <= 0) {
            throw new Error('Invalid input parameters');
        }

        try {
            // Fetch pricing details from the database based on organizationId and itemId
            const pricingQuery = 'SELECT * FROM pricing WHERE organization_id = $1 AND item_id = $2';
            const pricingResult = await pool.query(pricingQuery, [organizationId, itemId]);

            if (pricingResult.rows.length === 0) {
                throw new Error('Pricing details not found');
            }

            const pricing = pricingResult.rows[0];

            let totalPrice = pricing.fix_price; 

            if (distance > pricing.base_distance_in_km) {
                const additionalDistance = distance - pricing.base_distance_in_km;
                totalPrice += additionalDistance * pricing.km_price;
            }

            return totalPrice;
        } catch (error) {
            throw new Error('Error calculating total price');
        }
    }
}

module.exports = PriceCalculationService;
