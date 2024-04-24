
const pool = require('../db'); 

class Pricing {
    static async getPricingByOrganizationAndItem(organizationId, itemId) {
        const query = 'SELECT * FROM pricing WHERE organization_id = $1 AND item_id = $2';
        const { rows } = await pool.query(query, [organizationId, itemId]);
        return rows[0];
    }

}

module.exports = Pricing;
