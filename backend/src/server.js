const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const categoryRoutes = require("./routes/categories");
const userRoutes = require("./routes/users");
const strategies = require("./middlewares/auth/authStrategies");

const app = express();
const { PORT, SECRET } = process.env;

app.use(session({ secret: SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
strategies.login(passport);

app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
