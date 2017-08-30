CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE produce(
	item__id INT NOT NULL auto_increment,
    product_name VARCHAR(45) Null,
    department_name VARCHAR (45) Null,
    price DECIMAL (10, 2) Null,
    stock_quantity INT (45) Not Null,
    PRIMARY KEY (item_id)
    );

INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("sweet potatoes", "vegetables", 1.50, 1);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("onions", "vegetables", 1.50, 150);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("shallots", "vegetables", 1.0, 50);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("cucumber", "vegetables", 1.25, 200);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("watermelon", "fruit", .25, 600);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("plums", "fruit", 2.00, 200);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("pears", "fruit", 2.50, 100);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("eggs", "eggs", 6.25, 10);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("garlic", "vegetables", 1, 75);
INSERT INTO produce (product_name, department_name, price, stock_quantity)
VALUES ("blood oranges", "fruit", 2.00, 1.50);

select * from produce
