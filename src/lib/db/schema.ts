// Database schema and types

import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const counters = pgTable("counters", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  count: integer("count").default(0).notNull(),
  isPublic: integer("is_public").default(1).notNull(), // 1 for public, 0 for private
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const counterHistory = pgTable("counter_history", {
  id: serial("id").primaryKey(),
  counterId: uuid("counter_id")
    .notNull()
    .references(() => counters.id, { onDelete: "cascade" }),
  previousValue: integer("previous_value").notNull(),
  newValue: integer("new_value").notNull(),
  changedAt: timestamp("changed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Counter = typeof counters.$inferSelect;
export type NewCounter = typeof counters.$inferInsert;
export type CounterHistory = typeof counterHistory.$inferSelect;
export type NewCounterHistory = typeof counterHistory.$inferInsert;
