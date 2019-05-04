const localStrategy = require("passport-local").Strategy;
const { cryptPassword, comparePassword, generateJWT } = require("../../utils");
const Users = require("../../model/users");

exports.create = passport => {
  passport.use(
    "local-signup",
    new localStrategy(
      {
        usernameField: "usernameLogin",
        passwordField: "passwordLogin",
        passReqToCallback: true
      },
      async (req, usernameLogin, passwordLogin, done) => {
        try {
          const user = await Users.findOne({ where: { usernameLogin } });

          if (user)
            return done(null, user.usernameLogin, {
              msg: "User already exist"
            });

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

exports.login = passport => {
  passport.use(
    "local-signin",
    new localStrategy(
      {
        usernameField: "usernameLogin",
        passwordField: "passwordLogin"
      },
      async (usernameLogin, passwordLogin, done) => {
        try {
          const user = await Users.findOne({ where: { usernameLogin } });
          if (!user)
            return done(null, false, {
              msg: "User not exist"
            });

          const matchPassword = await comparePassword(
            passwordLogin,
            user.passwordLogin
          );

          if (!matchPassword)
            return done(null, false, { msg: "Invalid password" });

          let token = generateJWT(user.id, user.usernameLogin, user.rolType);

          return done(null, true, {
            msg: `Welcome ${user.usernameLogin}`,
            token
          });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
