const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = requrie("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("")
  .then(() => {
    console.log("database is connected");
  })
  .catch(console.error);

app.use(cors());
app.use(express.json());
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`server is running on${PORT}`);
});
