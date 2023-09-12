CREATE TABLE `comments` (
	`int` int AUTO_INCREMENT NOT NULL,
	`body` text NOT NULL,
	`subject_id` bigint NOT NULL,
	`subject_type` bigint NOT NULL,
	`user_id` varchar(128) NOT NULL,
	`reply` bigint,
	`createAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp,
	CONSTRAINT `comments_int` PRIMARY KEY(`int`)
);
--> statement-breakpoint
CREATE TABLE `favorites` (
	`int` int AUTO_INCREMENT NOT NULL,
	`subject_id` bigint NOT NULL,
	`subject_type` varchar(30) NOT NULL,
	`user_id` varchar(128) NOT NULL,
	CONSTRAINT `favorites_int` PRIMARY KEY(`int`)
);
--> statement-breakpoint
CREATE TABLE `user_key` (
	`id` varchar(255) NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`hashed_password` varchar(255),
	CONSTRAINT `user_key_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_session` (
	`id` varchar(128) NOT NULL,
	`user_id` varchar(128) NOT NULL,
	`active_expires` bigint NOT NULL,
	`idle_expires` bigint NOT NULL,
	CONSTRAINT `user_session_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `auth_user` (
	`id` varchar(128) NOT NULL,
	`username` varchar(110),
	`email` varchar(150),
	`avatar` varchar(256),
	CONSTRAINT `auth_user_id` PRIMARY KEY(`id`),
	CONSTRAINT `auth_user_username_unique` UNIQUE(`username`),
	CONSTRAINT `auth_user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `comments` (`user_id`);--> statement-breakpoint
CREATE INDEX `reply_idx` ON `comments` (`reply`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `favorites` (`user_id`);--> statement-breakpoint
CREATE INDEX `subject_id_idx` ON `favorites` (`subject_id`);