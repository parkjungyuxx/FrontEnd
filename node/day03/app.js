import express from "express";
import db from "./models/index.js";

const app = express();

db.sequelize.sync().then(() => {
  console.log("database connected");
});

app.listen(3030, () => {
  console.log("start server port: 3030");
});
