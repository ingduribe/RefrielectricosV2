const localStrategy = require("passport-local").Strategy;
const { cryptPassword } = require("../../utils");
const Users = require("../../model/users");

exports.login = passport => {
  passport.use(
    "local",
    new localStrategy(
      {
        usernameField: "usernameLogin",
        passwordField: "passwordLogin",
        passReqToCallback: true
      },
      async (req, usernameLogin, passwordLogin, done) => {
        try {
          const user = await Users.findOne({ where: { usernameLogin } });

          if (user) return done(null, user.usernameLogin, "User already exist");

          let { name, lastName, rolType } = req.body;
          passwordLogin = await cryptPassword(passwordLogin);
          const newUser = {
            name,
            lastName,
            usernameLogin,
            passwordLogin,
            rolType
          };
          await Users.create(newUser);
          return done(null, newUser, "User created");
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
