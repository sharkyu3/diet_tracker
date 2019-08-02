INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('HY', '123', 'hy@gmail.com', 'Hui Yu', '1');

INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('gina', '456', 'gina@gmail.com', 'Gina', '1');

INSERT INTO ecosystems
(group_name, group_pw, description, admin_id, weekly_exercise_sessions, weekly_cheats)
VALUES
('testgroup', '60f60c8536dafb4f4173bcc66a72a8fdb3aefba98e9fd8c2745a8c7cffce5bc1', 'testing 123', '1', '3', '3');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Bah Chor Mee', 's1ciq6irw15xkp3egc8a', 'FALSE', '1');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Ayam Penyet', 'vwiuiizuaymsnktjsd4t', 'FALSE', '1');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Prawn noodles', 'j7ub3lewf9zwjtxr3604', 'FALSE', '2');

INSERT INTO exercises
(type, duration, users_id)
VALUES
('Running', '20', '1');

INSERT INTO exercises
(type, duration, users_id)
VALUES
('Netball', '120', '2');

INSERT INTO exercises
(type, duration, users_id)
VALUES
('Yoga', '60', '2');

INSERT INTO comments
(comment, users_id)
VALUES
('Looks yummy!!!', '1');

INSERT INTO meals_comments
(meals_id, comments_id)
VALUES
('1', '1');