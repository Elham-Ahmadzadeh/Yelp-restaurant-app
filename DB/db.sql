-- for help \?
-- list database \l
-- list all tables \d name_of_table
-- connect to another db \c name_of_db
--to see constrains with table \d name of table
--references is foreign key t
CREATE DATABASE yelp;
CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
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

--foreign key is references table-name(col)
--not null must not be behind bigint
CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL CHECK(rating >= 1 AND rating <= 5)
);


-- restaurant_id is a foreign key komes back to id of restaurants table
INSERT INTO reviews (restaurant_id, name, review, rating)
VALUES (28, 'Reyhana', 'bad restaurant', 3);


SELECT COUNT(*) AS counting-review FROM reviews WHERE restaurant_id = 2;
SELECT TRUNC(AVG(rating), 2) AS Avg_Rating FROM reviews WHERE restaurant_id = 2;


SELECT location, COUNT(location) FROM restaurants GROUP BY location;


SELECT restaurant_id,  COUNT(restaurant_id) FROM reviews GROUP BY restaurant_id;


-- to see all restaurants even those which dont have reviews
SELECT * FROM restaurants  LEFT JOIN reviews ON restaurants.id = reviews.restaurant_id;


--Aggregate func
SELECT * FROM restaurants  LEFT JOIN (
  SELECT restaurant_id,  COUNT(*), TRUNC(AVG(rating), 2) AS Average_Rating
  FROM reviews GROUP BY restaurant_id)reviews ON restaurants.id = reviews.restaurant_id;