CREATE TABLE IF NOT EXISTS comments (
	id SERIAL PRIMARY KEY,
	comment TEXT,
	creationInfo TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
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