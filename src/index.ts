import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const PGURL = process.env.PG_URL;
const PGPORT = process.env.PG_PORT;
const PGUSERNAME = process.env.PG_USERNAME;
const PGPASSWORD = process.env.PG_PASSWORD;
const PGDATABASENAME = process.env.PG_DATABASE_NAME;

const connectionString = `postgres://${PGUSERNAME}:${PGPASSWORD}@${PGURL}:${PGPORT}/${PGDATABASENAME}`;
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);

await migrate(db, { migrationsFolder: "drizzle" });

await sql.end();