drop database if exists bamazonDB;

CREATE DATABASE bamazonDB;



USE bamazonDB;



CREATE TABLE  inventory(

   id INT auto_increment NOT NULL,

   productName VARCHAR(100) NOT NULL,

   departmentName VARCHAR(100) NOT NULL,

   price float(6,2) NOT NULL,

   stockQuantity INT NOT NULL,

   
   PRIMARY KEY (id)


);

INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("rice cakes", "grocery" , 4.99, 100);
INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("milk", "grocery" , 2.75, 150);
INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("bread", "grocery" , 3.49, 73);

INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("x-men figure", "toys", 20.00, 25);
INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("my little pony", "toys", 10.00, 50);
INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("power ranger", "toys", 12.99, 75);

INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("tylonol", "health", 7.99, 60);
INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("band aids", "health", 1.99, 100);
INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("antibactrial cream", "health", 5.49, 75);


INSERT INTO inventory (productName, departmentName, price, stockQuantity)
VALUES ("32in HD TV", "electronics", 225.00, 25);

SELECT * FROM inventory;
