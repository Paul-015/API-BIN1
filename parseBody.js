// midddlWare

const jwt = require("jsonwebtoken");
const User = require("module/user")

module.exports = async (req, res, next) => {
    const headerValue = req.headers.authorization;
    if (!headerValue) return res.sendStatus(401);
    const [type, token] = headerValue.split(/\s+/);
    if(type !== "Bearer") return res.sendStatus(401);
    try{
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET ?? "MyVeryVerySecrey"

        );
        req.user = await User.findByPk(payload.id);
        next();
    } catch (e) {
        return res.sendStatus(401);
    }
    

 };