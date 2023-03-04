const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local");
passport.initialize();
passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        async function verify(email, password, done) {
            const user = await User.findOne({ where: { email: email } });
            try {
                if (!user) {
                    return done(null, false, {
                        message: "incorrect username or password"
                    });
                }
                if (!User.validatePassword(user, password)) {
                    return done(null, false, {
                        message: "incorrect username or password"
                    });
                }
                return done(null, user);
            } catch (err) {
                done(err);
            }
        }
    )
);
passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, {
            id: user.userid,
            email: user.email
        });
    });
});
passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findAll({
            where: { userid: id }
        });
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
