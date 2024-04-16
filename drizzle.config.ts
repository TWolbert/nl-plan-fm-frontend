import type { Config } from "drizzle-kit";

const PGURL = process.env.PG_URL;;
const PGUSERNAME = process.env.PG_USERNAME;
const PGPASSWORD = process.env.PG_PASSWORD;
const PGDATABASENAME = process.env.PG_DATABASE_NAME;

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    user: PGUSERNAME,
    password: PGPASSWORD,
    host: PGURL!,
    port: 5432,
    database: PGDATABASENAME!,
  }
} satisfies Config;