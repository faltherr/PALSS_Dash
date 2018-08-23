SELECT *
FROM building_data3 P
    INNER JOIN events C ON C.TABuilding = P.TABuilding
WHERE Date IS NOT NULL;