library(readr)
library(dplyr)

setwd("/Users/l245854/Desktop/devmtn/personalProject/pals/data")

stf_data <- read_csv('injury_coordinates_munged.csv')
stf_data_subset <- stf_data[,c(1,17,2,6,8,9)]

no_bldg_na <- stf_data_subset[ grep("NA", stf_data_subset$ta_bldg, invert = TRUE) , ]

factors <- unique(no_bldg_na$FACTORS1)
jobs <- unique(no_bldg_na$`Job Title`)
body_parts <- unique(no_bldg_na$BODY_PARTS)

write.table(factors, file='Unique_factors.csv', row.names = FALSE, col.names = FALSE, sep=",", na="")
write.table(jobs, file='Unique_jobs.csv', row.names = FALSE, col.names = FALSE, sep=",", na="")
write.table(body_parts, file='Unique_bodyParts.csv', row.names = FALSE, col.names = FALSE, sep=",", na="")

buildings <- read_csv('building_data_cleaned.csv')


data_to_write <- no_bldg_na[no_bldg_na$ta_bldg %in% buildings$ta_building, ]

write_csv(data_to_write, "stf_data.csv")

# New json dataset to fiddle with
# install.packages('rjson')
install.packages('jsonlite')
# library(rjson)
library(jsonlite)
data_demo <- read_csv("stf_data.csv")
data_demo_subset <- data_demo[1:200,]

jsonData <- toJSON(data_demo_subset, pretty=TRUE, flatten=TRUE, auto_unbox=TRUE)
cat(jsonData)
write_json(jsonData, "jsonSubset.json")

?rjson
