UPDATE incident_data_subset
SET TABuilding=$1, JobTitle=$2, Factors1=$3, Factors2 =$4, BodyParts = $5, Description = $6 WHERE id = $7;

SELECT * FROM incident_data_subset;