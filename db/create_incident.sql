INSERT INTO events (Date, TABuilding, JobTitle, Factors1, BodyParts, Description)
VALUES (${eventdate}, ${tabldg}, ${jobtitle}, ${factors1}, ${bodyparts}, ${description});

-- SELECT *
-- FROM building_data3 P
--     INNER JOIN events C ON C.TABuilding = P.TABuilding
-- WHERE Date IS NOT NULL;


 SELECT to_date(DATE, 'MM/DD/YY'), * 
 FROM building_data3 P 
 INNER JOIN events C ON C.TABuilding = P.TABuilding
 WHERE to_date(date, 'MM/DD/YY') > (to_date(to_char(current_date -INTERVAL '6 months', 'YYYY-MM-DD'), 'YYYY-MM-DD')) AND date IS NOT NULL