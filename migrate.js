const connection  = require("./models/dbs");
require("./models/user");



connection
    .sync({
        alter: true,
    })
    .then(() => console.log("Database synced"))
    .then(() => connection.close());

