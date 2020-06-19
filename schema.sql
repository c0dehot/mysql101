# NOTE: If mysql connection errors, please run these first TWO lines
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'r00tr00t';
FLUSH PRIVILEGES;

# Creating a database
CREATE DATABASE cms;

# Switching to the database
USE cms;


# Creating a table
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER
);

CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER
);



# Inserting data into a table
INSERT INTO department VALUES( 1, "Web Dev" );

INSERT INTO role VALUES( 1, "Developer", 60000.00, 1 );

INSERT INTO employee VALUES( 1, "Employee1", "Lastname1", 1, 0 );
INSERT INTO employee VALUES( 0, "Employee2", "Lastname2", 1, 1 );
INSERT INTO employee VALUES( 0, "Employee3", "Lastname3", 1, 1 );

SELECT * FROM employee;

