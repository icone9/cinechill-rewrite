import { mysqlTable, bigint, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("auth_user", {
	id: varchar("id", {
		length: 15 // change this when using custom user ids
	}).primaryKey(),
	username: varchar('username', { length: 110 }).unique(),
	email: varchar('email', { length: 150 }).unique(),
	avatar: varchar('avatar', { length: 256 })
});

export const key = mysqlTable("user_key", {
	id: varchar("id", {
		length: 255
	}).primaryKey(),
	userId: varchar("user_id", {
		length: 15
	})
		.notNull(),
	hashedPassword: varchar("hashed_password", {
		length: 255
	})
});

export const session = mysqlTable("user_session", {
	id: varchar("id", {
		length: 128
	}).primaryKey(),
	userId: varchar("user_id", {
		length: 15
	})
		.notNull(),
	activeExpires: bigint("active_expires", {
		mode: "number"
	}).notNull(),
	idleExpires: bigint("idle_expires", {
		mode: "number"
	}).notNull()
});
