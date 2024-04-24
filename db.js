const { Pool } = require('pg');

// Create a new Pool instance with database connection details
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'food_delivery_db', 
  password: 'Database', 
  port: 5432, 
});



// module.exports = {
//     query: (text, params) => pool.query(text, params),
//   };

module.exports = pool;
