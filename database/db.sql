CREATE TABLE user_table (
    userid INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(40),
    userimg VARCHAR(150),
    userprhase TEXT
);


CREATE TABLE book_table (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) NOT NULL, 
    author VARCHAR(40),
    state VARCHAR(10) NOT NULL,  
    image VARCHAR(150), 
    notes TEXT,  
    pages INT   
);        