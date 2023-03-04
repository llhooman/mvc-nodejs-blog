const express = require("express");
const router = require("./routes/index");
const app = express();
const port = 7000;
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./helpers/passport");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "keyboard cat and dogs",
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(flash());

app.set("view engine", "ejs");
app.use("/", router);
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`backend Connected, Port : ${port}`);
});
