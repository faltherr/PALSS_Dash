DELETE FROM incident_data_subset
WHERE id = $1
RETURNING *;