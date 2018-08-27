INSERT INTO events (Date, TABuilding, JobTitle, Factors1, BodyParts, Description)
VALUES (${eventdate}, ${tabldg}, ${jobtitle}, ${factors1}, ${bodyparts}, ${description});

SELECT *
FROM building_data3 P
    INNER JOIN events C ON C.TABuilding = P.TABuilding
WHERE Date IS NOT NULL;