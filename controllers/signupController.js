const User = require("../models/User");
const get = (req, res) => {
    res.render("signup", {});
};
const post = async (req, res) => {
    await User.create({
        email: req.body.email,
        name: req.body.name,
        password: await User.encryptPassword(req.body.password),
        age: 0,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    res.render("signup", {});
    console.log(req.body);
};
module.exports = {
    get,
    post
};
