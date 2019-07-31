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
	plans_id INTEGER
);

CREATE TABLE IF NOT EXISTS plans (
	id SERIAL PRIMARY KEY,
	period_in_weeks INTEGER,
	weekly_exercise_sessions INTEGER,
	weekly_cheats INTEGER,
	start_date DATE
);

CREATE TABLE IF NOT EXISTS meals (
	id SERIAL PRIMARY KEY,
	title TEXT,
	photo_URL TEXT,
	creation_info TIMESTAMP DEFAULT now(),
	cheat BOOLEAN,
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS exercises (
	id SERIAL PRIMARY KEY,
	type TEXT,
	duration INTEGER,
	creation_info TIMESTAMP DEFAULT now(),
	users_id INTEGER
);