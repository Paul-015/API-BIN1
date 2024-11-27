const express = require('express');
const userRouter = require("./routes/users");

const app = express();

app.get("/", (request, reponse, next) => {
    reponse.send("Hello");
});

app.use(userRouter);

app.listen(process.env.PORT,() => 
    console.log("Server est en écoute sur " + process.env.PORT)
);

