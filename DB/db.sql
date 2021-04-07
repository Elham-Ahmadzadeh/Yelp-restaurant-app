-- for help \?
-- list database \l
-- list all tables \d name_of_table
-- connect to another db \c name_of_db
CREATE DATABASE yelp;
CREATE TABLE restaurants (
  ID BIGSERIAL NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Location VARCHAR(50) NOT NULL,
  Price_range INT NOT NULL CHECK(Price_range >= 1 AND Price_range <= 5)
);

ALTER TABLE products ADD COLUMN featured BOOLEAN;

ALTER TABLE products DROP COLUMN featured;

DROP TABLE products;


INSERT INTO restaurants (Name, Location , Price_range)
VALUES ('Macdonald', 'New york', 3 ) RETURNING *;

UPDATE restaurants SET name = 'Lobster' ,location = 'Miami' ,price_range = 3 WHERE id = 2 RETURNING *;

DELETE FROM restaurants WHERE id = $1;

SELECT * FROM restaurants;