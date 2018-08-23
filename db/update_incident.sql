UPDATE events
SET TABuilding=$1, JobTitle=$2, Factors1=$3, Factors2 =$4, BodyParts = $5, Description = $6 WHERE id = $7;

SELECT *
FROM building_data3 P
    INNER JOIN events C ON C.TABuilding = P.TABuilding;