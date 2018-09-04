DELETE FROM events
WHERE id = $1;

-- SELECT *
-- FROM building_data3 P
--     INNER JOIN events C ON C.TABuilding = P.TABuilding;


 SELECT to_date(DATE, 'MM/DD/YY'), * 
 FROM building_data3 P 
 INNER JOIN events C ON C.TABuilding = P.TABuilding
 WHERE to_date(date, 'MM/DD/YY') > (to_date(to_char(current_date -INTERVAL '6 months', 'YYYY-MM-DD'), 'YYYY-MM-DD')) AND date IS NOT NULL