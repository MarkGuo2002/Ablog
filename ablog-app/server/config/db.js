const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,  // should be 'db' for Docker Compose
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
 // user: 'admin',
  //host: 'localhost',
  //database: 'ablog',
  //password: '1234',
  //port: 5432,
});

module.exports = pool;