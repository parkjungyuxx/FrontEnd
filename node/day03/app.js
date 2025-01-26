import express from "express";
import db from "./models/index.js";
import user from "./routes/user.js";
import cookie from "cookie-parser";

const app = express();

db.sequelize.sync().then(() => {
  console.log("database connected");
});

// body에 실린 json 데이터를 읽을 수 있음
app.use(cookie());
app.use(express.json());
app.use("/user", user);

app.listen(3030, () => {
  console.log("start server port: 3030");
});
