const express = require("expresse");
const userRouter = require("./routes/users");

const app = express();

app.use(express.json());

app.get("/" , (request, reponse, next) => {
    reponse.send("Hello ");

});

app.use(userRouter);
app.use(require("./routes/security"));


app.listen(process.env.PORT, () => 
console.log("Server listening on port " + process.env))