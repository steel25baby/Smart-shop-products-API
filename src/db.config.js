import pkg from 'pg';
const { Pool} = pkg;

const pool = new Pool({
    user:"postgres",
    password:"steel@25baby",
    host:"localhost",
    port: 5432,
    database:"products_v1"
})

export default pool;