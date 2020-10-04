SELECT * FROM room;

SELECT * FROM bombillo;

SELECT * FROM bombillo_user;

DELETE FROM bombillo_user WHERE ID_BOMBILLO = 21;

INSERT INTO bombillo_user (id_bombillo, id_user) VALUES (2, 1);

SELECT * FROM users;

SELECT id, name from bombillo;

describe USERS;

DESCRIBE bombillo;

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30),
    name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(255),
    created_at DATETIME,
    uploated_at DATETIME,
    remember_token VARCHAR(255)
);

INSERT INTO users (username, name, last_name, email, password, id_rol) VALUES ('Sauron', 'Jhojan', 'Gómez', 'jhojan@email.com', '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225', 1);
INSERT INTO users (username, name, last_name, email, password, id_rol) VALUES ('Euler', 'Euler', 'Palmer', 'euler@email.com', '123456789', 2);

