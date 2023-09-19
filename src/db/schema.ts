import { mysqlTable, bigint, varchar, text, timestamp, int, index } from "drizzle-orm/mysql-core";

export const user = mysqlTable("auth_user", {
	id: varchar("id", { length: 128 }).primaryKey(),
	username: varchar('username', { length: 110 }).unique(),
	email: varchar('email', { length: 150 }).unique(),
	avatar: varchar('avatar', { length: 256 })
});

export const key = mysqlTable("user_key", {
	id: varchar("id", { length: 255 }).primaryKey(),
	userId: varchar("user_id", { length: 15 }).notNull(),
	hashedPassword: varchar("hashed_password", { length: 255 })
});

export const session = mysqlTable("user_session", {
	id: varchar("id", { length: 128 }).primaryKey(),
	userId: varchar("user_id", { length: 128 }).notNull(),
	activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
	idleExpires: bigint("idle_expires", { mode: "number" }).notNull()
});

export const comments = mysqlTable("comments", {
	id: int('id').primaryKey().autoincrement(),
	body: text("body").notNull(),
	subject_id: bigint("subject_id", { mode: "number" }).notNull(),
	subject_type: varchar("subject_type", { length: 85 }).notNull(),
	userId: varchar("user_id", { length: 128 }).notNull(),
	reply: bigint("reply", { mode: 'number' }),
	createdAt: timestamp('createAt').defaultNow(),
	updatedAt: timestamp('updatedAt'),
}, (table) => {
  return {
    userIdx: index("user_id_idx").on(table.userId),
    replyIdx: index("reply_idx").on(table.reply),
  };
});

export const favorites = mysqlTable("favorites", {
	id: int('id').primaryKey().autoincrement(),
	subject_id: bigint("subject_id", { mode: "number" }).notNull(),
	subject_type: varchar("subject_type", { length: 30 }).notNull(),
	userId: varchar("user_id", { length: 128 }).notNull(),
}, (table) => {
  return {
    userIdx: index("user_id_idx").on(table.userId),
    subjectIdx: index("subject_id_idx").on(table.subject_id),
  };
});
