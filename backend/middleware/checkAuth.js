import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
  try {
    console.log('test2')
    const token = req.cookies.token;
    console.log('test3')
    console.log(token)
    const result = jwt.verify(token, process.env.JWT_SECRET);
    req.user = result
    next();
  } catch (error) {
    console.log(error)
    res.status(401).send("Authentification needed");
  }
};