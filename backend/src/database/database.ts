
import { Client } from 'pg'

export const client : Client = new Client({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
})

export const startDatabase: () => Promise<void> = async () => {
    await client.connect();
    console.log('Database is connected');
  };