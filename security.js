const { Router } = require("express");

const router = new Router();

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email,
        },
    });

    if (!user) return res.sendStatus(401);
    if (!user.password !== password) {
        return res.sendStatus(401);
    }

    const token = jwt.sign({
        id: user.id,
        name: user.name,
    }, process.env.JWT_SECRET ?? "MyVeryVerySecrey");

    res.json({
        token,
    });
});

module.exports = router;

