
const pool = require('../db'); 

class Item {
    static async getAllItems() {
        const query = 'SELECT * FROM items';
        const { rows } = await pool.query(query);
        return rows;
    }

    static async getItemById(id) {
        const query = 'SELECT * FROM items WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }

}

module.exports = Item;
