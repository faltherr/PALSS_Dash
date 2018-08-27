INSERT INTO events (Date, TABuilding, JobTitle, Factors1, BodyParts, Description)
VALUES (${eventdate}, ${tabldg}, ${jobtitle}, ${factors1}, ${bodyparts}, ${description})
RETURNING *;