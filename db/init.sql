-- Old SQL Querries before addition of foreign key

-- CREATE TABLE incident_data_subset
-- (
--     id SERIAL PRIMARY KEY,
--     Date varchar(12),
--     TABuilding VARCHAR(10),
--     Latitude double precision,
--     Longitude double precision,
--     JobTitle VARCHAR (40),
--     Factors1 VARCHAR (40),
--     Factors2 VARCHAR (40),
--     BodyParts VARCHAR (40),
--     Description TEXT
-- );

-- CREATE TABLE building_data
-- (
--     id SERIAL PRIMARY KEY,
--     TABuilding VARCHAR(10),
--     Latitude double precision,
--     Longitude double precision
-- );




-- This is a block of code that was recreated to incorporate the new dataset and a foreign key join to reference building lat and long. For now using above code


CREATE TABLE building_data3(
id SERIAL,
TABuilding VARCHAR(10) PRIMARY KEY,
Latitude double precision,
Longitude double precision
);

select * from building_data3;


CREATE TABLE events(
id SERIAL PRIMARY KEY,
Date varchar(12) NOT NULL,
TABuilding VARCHAR(10) REFERENCES building_data3(TABuilding),
JobTitle VARCHAR (40),
Factors1 VARCHAR (40),
BodyParts VARCHAR (40),
Description TEXT
);

SELECT * FROM events

-- This creates the user table

CREATE TABLE users(
id serial PRIMARY KEY,
auth_id TEXT,
first_name VARCHAR(40),
last_name VARCHAR(40),
email VARCHAR,
admin_auth BOOLEAN DEFAULT false
)


-- Give Admin privelleges

UPDATE ONLY users
SET admin_auth = TRUE
WHERE auth_id = 'github|20692872'


-- This allows me to select from both the parent (Location Data) and the child (Events)

SELECT *
FROM building_data3 P
    INNER JOIN events C ON C.TABuilding = P.TABuilding


