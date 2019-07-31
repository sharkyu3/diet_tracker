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
	groupName TEXT,
	groupPW TEXT,
	description TEXT,
	admin_id INTEGER,
	plans_id INTEGER
);

CREATE TABLE IF NOT EXISTS plans (
	id SERIAL PRIMARY KEY,
	periodInWeeks INTEGER,
	weeklyExerciseSessions INTEGER,
	weeklyCheats INTEGER,
	startDate DATE
);

CREATE TABLE IF NOT EXISTS meals (
	id SERIAL PRIMARY KEY,
	title TEXT,
	photoURL TEXT,
	creationInfo TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	cheat BOOLEAN,
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS exercises (
	id SERIAL PRIMARY KEY,
	type TEXT,
	duration INTEGER,
	creationInfo TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	users_id INTEGER
);