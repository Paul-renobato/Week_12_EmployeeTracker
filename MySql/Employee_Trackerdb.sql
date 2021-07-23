DROP DATABASE IF EXISTS Employee_Trackerdb;

CREATE DATABASE Employee_Trackerdb;

USE Employee_Trackerdb;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  naming VARCHAR(30)
);
  
CREATE TABLE roleDept (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);

INSERT INTO department (naming)
VALUES ("Finance"), ("Legal"), ("Sales"), ("Engineering");

INSERT INTO roleDept (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), ('Salesperson', 80000, 2), ('Lead Engineer', 150000, 3), ('Software Engineer', 120000, 4), ('Accountant', 125000, 5), ('Legal Team Lead', 250000, 6), ('Lawyer', 190000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1), ('Mike', 'Chan', 2, 2), ('Ashley', 'Rodriguez', 3, 3), ('Kevin', 'Tupik', 4, 4), ('Malia', 'Brown', 5, 5), ('Sarah', 'Lourd', 6, 6), ('Tom', 'Allen', 7, 7);

SELECT * FROM department;
SELECT * FROM roleDept;
SELECT * FROM employee;