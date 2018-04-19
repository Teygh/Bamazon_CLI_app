DROP DATABASE IF EXISTS bamazon_db; 
/*If a db with this name exists it be be deleted */

CREATE DATABASE bamazon_db; /* DATABASE is Created */
USE bamazon_db;

/*The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)*/
   
   CREATE TABLE products (
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER (10) NULL,
  PRIMARY KEY (item_id)
   
   );
   
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toshiba Labtop", "Computers", 1500.25, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone-6", "Electronics", 1000.30, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bicycle", "Toys", 50.75, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Emeril Knife Set", "Kitchen", 98.01, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Batmobile", "Cars", 2000000, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wilson Basketball", "SPorts", 29.25, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hannibal", "Movies", 9.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rav-4", "Cars", 25000, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pressure Cooker", "Kitchen", 125.45, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Web Developer", "People", 0.00, 26);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mouse", "Computers", 14.60, 32);

SELECT * FROM products;

   