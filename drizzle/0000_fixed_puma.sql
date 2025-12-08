CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"first_name" text,
	"last_name" text,
	"birthdate" timestamp NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
