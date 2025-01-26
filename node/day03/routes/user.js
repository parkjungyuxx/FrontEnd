import express from "express";
import db from "../models/index.js";
import jwt from "jsonwebtoken";
import { jwtAuth } from "../middleware/jwtAuth.js";

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  // select * from dn_users where email = {req.email} limit 1
  const existUser = await db.Users.findOne({
    where: {
      email,
    },
  });

  if (existUser) {
    return res.status(400).json({
      code: "server:res.validdation",
      field: "email",
      reason: "exsiting user",
    });
  }

  await db.Users.create({
    email,
    password,
  });

  return res.status(200).json({
    message: "회원가입을 축하합니다",
  });
});

router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  const user = await db.Users.findOne({
    where: {
      email,
    },
  });
  if (!user || password !== user.password) {
    return res.status(400).json({
      code: "server:res.bad.request",
    });
  }

  // json web token
  // javascript object -> token
  const token = jwt.sign(
    {
      id: user.id,
    },
    "auth",
    {
      expiresIn: 1000 * 60 * 5,
    }
  );

  const refresh = jwt.sign(
    {
      id: user.id,
    },
    "refresh",
    {
      expiresIn: 1000 * 60 * 60 * 24 * 7,
    }
  );

  res.cookie(
    "DN_RT",
    refresh,
    {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    {
      httpOnly: true,
      // 자사크립트로 접근이 불가능 하도록

      // secure : true,
      // https일 때 탈취당해도 알아볼 수 없도록
    }
  );

  return res.status(200).json({
    token,
  });
});

router.get("/", jwtAuth, async (req, res) => {

  const user = await db.Users.findOne({
    where: {
      id: req.userId,
    },
    attributes: { exclude: ["passwrod"] },
  });
  return res.status(200).json(user);
});

export default router;
