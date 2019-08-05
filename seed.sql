INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('HY', 'f274614aef62d1c5aa8c039b96d1e3dd1be6554d06697c80ea7b25807e4f20bf', 'hy@gmail.com', 'Hui Yu', '1');

INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('gina', '7cb6f1af10f82307724aca274e36ec2c2c07bf79b3ffcd015437f57fca7723d8', 'gina@gmail.com', 'Gina', '1');

INSERT INTO users
(username, password, email, name, ecosystems_id)
VALUES
('tammy', '58133469835c31438a701820dbf04a7079254b0b6231cecde90acb2b9d0e7abc', 'tammy@gmail.com', 'tammy', '1');

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
('Seafood Pasta', 'l6kojhy4am2yj9bssyb4', 'FALSE', '1');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Roti Prata', 'fcphdl7iitbkejyyam9w', 'TRUE', '1');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Spaghetti', 'apye4wh3sqjdka7jlgih', 'FALSE', '2');

INSERT INTO meals
(title, photo_URL, cheat, users_id)
VALUES
('Prawn noodles', 'j7ub3lewf9zwjtxr3604', 'FALSE', '2');

INSERT INTO exercises
(type, duration, photo_URL, users_id)
VALUES
('Running', '20', 'gxxr4hdtthqhplt1ivrc', '1');

INSERT INTO exercises
(type, duration, photo_URL, users_id)
VALUES
('Netball', '120', 'kxrn78euow0sdfnen0oy', '2');

INSERT INTO exercises
(type, duration, photo_URL, users_id)
VALUES
('Yoga', '60', 'vivrgmb4mdrs5komck4x', '2');

INSERT INTO comments
(comment, users_id)
VALUES
('Looks yummy!!!', '1');

INSERT INTO meals_comments
(meals_id, comments_id)
VALUES
('1', '1');