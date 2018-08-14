INSERT INTO incident_data_subset (Date, TABuilding, JobTitle, Factors1, Factors2, BodyParts, Description)
VALUES (${eventdate}, ${tabldg}, ${jobtitle}, ${factors1}, ${factors2}, ${bodyparts}, ${description})
RETURNING *;