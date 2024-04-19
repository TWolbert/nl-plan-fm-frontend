CREATE TABLE `token` (
	`id` int NOT NULL,
	`token` text,
	`user_id` int,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `token_id` PRIMARY KEY(`id`)
);

CREATE TABLE `user` (
	`id` int NOT NULL,
	`name` text,
	`email` text,
	`image_id` int,
	`password` text,
	`role` text,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
