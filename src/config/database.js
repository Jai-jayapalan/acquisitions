import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
    neonConfig.fetchEndpoint = 'http://neon-local:5432/sql';
    neonConfig.useSecureWebSocket = false;
    neonConfig.poolQueryViaFetch = true;
}

console.log(process.env.NODE_ENV)

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql)

export { sql, db };