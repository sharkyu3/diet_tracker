INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('HY', '123', 'hy@gmail.com', 'Hui Yu', '1');

INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('gina', '456', 'gina@gmail.com', 'Gina', '1');

INSERT INTO ecosystems
(groupName, groupPW, description, admin_id, plans_id)
VALUES
('testgroup', '111', 'testing 123', '1', '1');

INSERT INTO plans
(periodInWeeks, weeklyExerciseSessions, weeklyCheats, startDate)
VALUES
('4', '3', '3', '2019-07-28');

INSERT INTO meals
(title, photoURL, creationInfo, cheat, users_id)
VALUES
('Bah Chor Mee', '', CURRENT_TIMESTAMP, 'FALSE', '1');

INSERT INTO meals
(title, photoURL, creationInfo, cheat, users_id)
VALUES
('Prawn noodles', '', CURRENT_TIMESTAMP, 'FALSE', '2');

INSERT INTO exercises
(type, duration, creationInfo, users_id)
VALUES
('Running', '20', CURRENT_TIMESTAMP, '1');

INSERT INTO exercises
(type, duration, creationInfo, users_id)
VALUES
('Netball', '120', CURRENT_TIMESTAMP, '2');