const {Router} = require("express");
const usercontrollers = require("../controllers/users.js");


const router = new Router();

router.get("/users", usercontrollers.getAll);

router.post("/users",usercontrollers.create);

router.get("/users/:id", usercontrollers.getOne);

router.patch("/users/:id", usercontrollers.update);

router.delete("/users/id", usercontrollers.delete);

module.exports = router;

