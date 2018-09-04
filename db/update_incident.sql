UPDATE events
SET TABuilding=$1, JobTitle=$2, Factors1=$3, BodyParts = $4, Description = $5 WHERE id = $6;

-- SELECT *
-- FROM building_data3 P
--     INNER JOIN events C ON C.TABuilding = P.TABuilding;

 SELECT to_date(DATE, 'MM/DD/YY'), * 
 FROM building_data3 P 
 INNER JOIN events C ON C.TABuilding = P.TABuilding
 WHERE to_date(date, 'MM/DD/YY') > (to_date(to_char(current_date -INTERVAL '6 months', 'YYYY-MM-DD'), 'YYYY-MM-DD')) AND date IS NOT NULL