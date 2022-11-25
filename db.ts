import knex from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env

const db = knex({
    client: 'mysql2',
    connection: {
        host: DB_HOST,
        port: Number(DB_PORT),
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
    },
})
export default db
