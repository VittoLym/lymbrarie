CREATE TABLE user_profile (
    userid INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    userimg VARCHAR(500),
    userprhase TEXT
);


CREATE TABLE book (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    author VARCHAR(255),
    state VARCHAR(50) NOT NULL,  
    image VARCHAR(500), 
    notes TEXT,  
    pages INT   
);        