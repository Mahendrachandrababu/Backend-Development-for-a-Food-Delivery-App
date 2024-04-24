
const pool = require('../db'); 

class Organization {
    static async getAllOrganizations() {
        const query = 'SELECT * FROM organizations';
        const { rows } = await pool.query(query);
        return rows;
    }

    static async getOrganizationById(id) {
        const query = 'SELECT * FROM organizations WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }

}

module.exports = Organization;
