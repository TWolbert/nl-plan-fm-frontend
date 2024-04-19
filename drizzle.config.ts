import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  breakpoints: false,
  driver: "mysql2",
  dbCredentials: {
    host: process.env.PG_URL,
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE_NAME,
  },
} satisfies Config;