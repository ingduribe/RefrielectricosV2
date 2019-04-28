const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

const app = express();
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");
const { PORT, SECRET } = process.env;

app.use(session({ secret: SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
