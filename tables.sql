CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	email TEXT,
	name TEXT,
	ecosystems_id INTEGER
);

CREATE TABLE IF NOT EXISTS ecosystems (
	id SERIAL PRIMARY KEY,
	group_name TEXT,
	group_pw TEXT,
	description TEXT,
	admin_id INTEGER,
	start_date DATE DEFAULT now(),
	weekly_exercise_sessions INTEGER,
	weekly_cheats INTEGER
);

CREATE TABLE IF NOT EXISTS meals (
	id SERIAL PRIMARY KEY,
	title TEXT,
	photo_URL TEXT,
	creation_info TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
	cheat BOOLEAN,
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS exercises (
	id SERIAL PRIMARY KEY,
	type TEXT,
	duration INTEGER,
	creation_info TIMESTAMP WITHOUT TIME ZONE  DEFAULT now(),
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS comments (
	id SERIAL PRIMARY KEY,
	comment TEXT,
	creationInfo TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS exercise_comments (
	exercise_id INTEGER,
	comments_id INTEGER
);

CREATE TABLE IF NOT EXISTS meals_comments (
	meals_id INTEGER,
	comments_id INTEGER
);