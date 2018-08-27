UPDATE events
SET TABuilding=$1, JobTitle=$2, Factors1=$3, BodyParts = $4, Description = $5 WHERE id = $6;

SELECT *
FROM building_data3 P
    INNER JOIN events C ON C.TABuilding = P.TABuilding;