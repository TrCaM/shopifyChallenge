-- Create the database for used in the project
DROP DATABASE IF EXISTS simpleShop;
CREATE DATABASE simpleShop;

USE simpleShop;

-- Create Shop table
CREATE TABLE IF NOT EXISTS Shops (
	ShopId char(36) NOT NULL,
    Name varchar(70) NOT NULL,
    Owner varchar(70) NOT NULL,
    PRIMARY KEY (ShopId)
);

-- Create Products table
CREATE TABLE IF NOT EXISTS Products (
	ShopId char(36) NOT NULL,
	ProductId char(36) NOT NULL,
    ProductName varchar(70) NOT NULL,
    Description text,
    UnitPrice float NOT NULL,
    Inventory int,
    PRIMARY KEY (ProductId),
    FOREIGN KEY (ShopId) REFERENCES Shops(ShopId)
);
-- Create index for shopId as we want to search for all products of a shop
CREATE INDEX ShopIndexProducts ON Products (ShopId);

-- Create Orders table
CREATE TABLE IF NOT EXISTS Orders (
	OrderId char(36) NOT NULL,
    ShopId char(36) NOT NULL,
    CustomerName varchar(70) NOT NULL,
    PRIMARY KEY (OrderId),
    FOREIGN KEY (ShopId) REFERENCES Shops(ShopId)
);
-- Create index for shopId as we want to search for all orders of a shop
CREATE INDEX ShopIndexOrder ON Orders (ShopId);

-- Create LineItem table
CREATE TABLE IF NOT EXISTS LineItems (
    ProductId char(36) NOT NULL,
    OrderId char(36) NOT NULL,
    Quantity int NOT NULL,
    PRIMARY KEY (ProductId, OrderId),
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId),
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)
);
-- Create index for shopId as we want to search for allitems of an order
CREATE INDEX ItemIndexOrder ON LineItems (OrderId);

START TRANSACTION;

INSERT INTO Shops VALUES ('123465789', 'Sample Shop', 'Tri Cao');

INSERT INTO Products VALUES ('123465789', 'abcdefgh', 'Guitar', 'Budget guitar for beginner', 250.59, 50);
INSERT INTO Products VALUES ('123465789', 'qwertyer', 'Piano', 'Traditional piano for professinal', 3000.24, 20);
INSERT INTO Products VALUES ('123465789', 'zxcvbnmn', 'Violin', 'Modern standard with long ages violin', 400.99, 100);
INSERT INTO Products VALUES ('123465789', '123kjekd', 'Drum', 'For rockers', 1001.65, 15);

INSERT INTO Orders VALUES ('orderid1', '123465789', 'Customer 1', '2018-09-20 22:16:50');
INSERT INTO Orders VALUES ('orderid2', '123465789', 'Customer 1', '2018-09-20 23:15:50');
INSERT INTO Orders VALUES ('orderid3', '123465789', 'Customer 2', '2018-09-20 21:12:50');
INSERT INTO Orders VALUES ('orderid4', '123465789', 'Customer 3', '2018-09-20 20:26:50');

INSERT INTO LineItems VALUES ('abcdefgh', 'orderid1', 2);
INSERT INTO LineItems VALUES ('qwertyer', 'orderid1', 1);
INSERT INTO LineItems VALUES ('zxcvbnmn', 'orderid1', 3);

INSERT INTO LineItems VALUES ('abcdefgh', 'orderid2', 1);
INSERT INTO LineItems VALUES ('qwertyer', 'orderid2', 1);
INSERT INTO LineItems VALUES ('zxcvbnmn', 'orderid2', 1);
INSERT INTO LineItems VALUES ('123kjekd', 'orderid2', 2);

INSERT INTO LineItems VALUES ('abcdefgh', 'orderid3', 10);
INSERT INTO LineItems VALUES ('qwertyer', 'orderid3', 5);
INSERT INTO LineItems VALUES ('zxcvbnmn', 'orderid3', 20);
INSERT INTO LineItems VALUES ('123kjekd', 'orderid3', 40);


COMMIT;