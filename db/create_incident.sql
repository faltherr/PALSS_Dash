INSERT INTO incident_data_subset (Date, TABuilding, JobTitle, Factors1, Factors2, BodyParts, Description)
VALUES (${Date}, ${TABuilding}, ${JobTitle}, ${Factors1}, ${Factors2}, ${BodyParts}, ${Description})
RETURNING *;