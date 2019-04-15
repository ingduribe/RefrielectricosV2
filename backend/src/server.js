const express = require("express");
const app = express();
const cors = require("cors");
const categoriesRouter = require("./routes/categories");
const morgan = require("morgan");
const { PORT } = process.env;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
