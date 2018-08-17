UPDATE incident_data_subset
SET Description = $1 WHERE id = $2
RETURNING *;