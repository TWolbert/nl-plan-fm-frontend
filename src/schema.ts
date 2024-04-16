import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";

// Admin has permissions like removing songs from queue and disconnecting people.
export const user = pgTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  image_id: integer("image_id"),
  password: text("password"),
  role: text("role").$type<"admin" | "user">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});