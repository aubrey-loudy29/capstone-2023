# SETUP

1. install postgresql via: https://www.postgresql.org/download/
2. run postgres server: see postgres docs
3. create new database
4. replace db name in dbConfig
5. comment out db<MODELNAME> lines in models/index.js
6. run `node models/index.js`
7. verify output in terminal is: `Executing (default): SELECT 1+1 AS result
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.`
8. cont. later
