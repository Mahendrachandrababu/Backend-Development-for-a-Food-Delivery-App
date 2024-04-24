
const PriceCalculationService = require('../services/priceCalculationService');

class PricingController {
    static async calculateTotalPrice(req, res) {
        try {
            const { organization_id, item_id, total_distance } = req.body;
            const totalPrice = await PriceCalculationService.calculateTotalPrice(organization_id, item_id, total_distance);
            return res.status(200).json({ total_price: totalPrice });
        } catch (error) {
            console.error('Error calculating total price:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = PricingController;
