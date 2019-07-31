INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('HY', '123', 'hy@gmail.com', 'Hui Yu', '1');

INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('gina', '456', 'gina@gmail.com', 'Gina', '1');

INSERT INTO ecosystems
(group_name, group_pw, description, admin_id, plans_id)
VALUES
('testgroup', '111', 'testing 123', '1', '1');

INSERT INTO plans
(period_in_weeks, weekly_exercise_sessions, weekly_cheats, start_date)
VALUES
('4', '3', '3', '2019-07-28');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Bah Chor Mee', '', 'FALSE', '1');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Ayam Penyet', '', 'FALSE', '1');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Prawn noodles', '', 'FALSE', '2');

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