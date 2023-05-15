const { Pool } = require('pg')

// declare pool with db values, most of this is often defaulted, but db name will need to be updated
const pool = new Pool({
  user: 'postgres',
  db: 'node_api',
  password: 'postgres',
  port: 5432,
  host: 'localhost',
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  min: 0
})

module.exports = { pool }
