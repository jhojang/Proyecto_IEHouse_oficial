CREATE TABLE room (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

CREATE TABLE bombillo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    state BOOLEAN,
    id_room INT,
    FOREIGN KEY (id_room) REFERENCES room(id)
);

CREATE TABLE rol (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(30) NOT NULL,
    name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(255),
    create_at DATETIME,
    updated_at DATETIME,
    remember_token VARCHAR(255),
    id_rol INT,
    FOREIGN KEY (id_rol) REFERENCES rol(id)
);

CREATE TABLE bombillo_user (
    id_bombillo INT,
    id_user INT,
    FOREIGN KEY (id_bombillo) REFERENCES bombillo(id),
    FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE horary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    starts_at DATETIME,
    ends_at DATEtIME
);

CREATE TABLE bombillo_horary (
    id_bombillo INT,
    id_horary INT,
    FOREIGN KEY (id_bombillo) REFERENCES bombillo(id),
    FOREIGN KEY (id_horary) REFERENCES horary(id)
);

CREATE TABLE inform (
    id INT PRIMARY KEY AUTO_INCREMENT,
    potencia_bombillo DEC(5,2),
    hours_on DEC(5,2),
    date DATETIME
);

CREATE TABLE bombillo_inform (
    id_bombillo INT,
    id_inform INT,
    FOREIGN KEY (id_bombillo) REFERENCES bombillo(id),
    FOREIGN KEY (id_inform) REFERENCES inform(id)
);

CREATE TABLE history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hora_inicio TIME,
    hora_fin TIME
);

CREATE TABLE bombillo_history (
    id_bombillo INT,
    id_history INT,
    FOREIGN KEY (id_bombillo) REFERENCES bombillo(id),
    FOREIGN KEY (id_history) REFERENCES historial(id)
);