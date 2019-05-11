const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const categoryRoutes = require("./routes/categories");
const userRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const rolRoutes = require("./routes/roles");
const featureRoutes = require("./routes/features");
const rolesManagerRouter = require("./routes/rolesManager");
const storageRouter = require("./routes/storage");
const strategies = require("./middlewares/auth/authStrategies");

const app = express();
const { PORT, SECRET } = process.env;

app.use(session({ secret: SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
strategies.create(passport);
strategies.login(passport);
// app.use(formidableMiddleware(options));

app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/roles", rolRoutes);
app.use("/features", featureRoutes);
app.use("/rolesManager", rolesManagerRouter);
app.use("/storage", storageRouter);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
