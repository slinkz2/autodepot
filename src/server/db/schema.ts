// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { not, sql } from "drizzle-orm";
import { varchar } from "drizzle-orm/mysql-core";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `autodepot_${name}`);

export const images = createTable(
  "images",
  (d) => ({
    id: d.integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: d.varchar("name",{ length: 256 }).notNull(),
    url: d.varchar("url",{length:1024}).notNull(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);
