import jwt from "jsonwebtoken";

export const jwtAuth = (req, res, next) => {
  let userId;
  const cookies = req.cookies;
  const refresh = cookies["DN_RT"];
  try {
    // bearer
    const token = req.headers.authorization.split("Bearer ")[1];
    jwt.verify(token, "refresh");
    userId = jwt.verify(token, "auth");
    req.userId = userId;
    next();
  } catch (err) {
    if (!refresh) {
      return res.status(401).json({
        code: "server.res.authorization",
      });
    }
    return res.status(422).json({
      code: "server.res.refresh.access",
    });
  }
};
