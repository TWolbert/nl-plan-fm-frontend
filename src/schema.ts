import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';
import mysql from "mysql2";
import { drizzle } from "drizzle-orm/mysql2";

// Admin has permissions like removing songs from queue and disconnecting people.
export const user = mysqlTable("user", {
    id: int("id").primaryKey().autoincrement(),
    name: text("name"),
    email: text("email"),
    image_id: int("image_id"),
    password: text("password"),
    role: text("role").$type<"admin" | "user">(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});

export const token = mysqlTable("token", {
    id: int("id").primaryKey().autoincrement(),
    token: text("token"),
    user_id: int("user_id"),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});

const PGURL = process.env.PG_URL;
const PGUSERNAME = process.env.PG_USERNAME;
const PGPASSWORD = process.env.PG_PASSWORD;
const PGDATABASENAME = process.env.PG_DATABASE_NAME;

const connection = mysql.createConnection({
    host: PGURL,
    user: PGUSERNAME,
    password: PGPASSWORD,
    database: PGDATABASENAME,
});

export const db = drizzle(connection);
