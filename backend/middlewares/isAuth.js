import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {  // no need for async
  try {
    const token = req.cookies?.token  // 👈 optional chaining prevents crash

    if (!token) {
      return res.status(401).json({ message: "token is not found" })  // 👈 401
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET)  // no await needed, it's sync
    req.userId = verifyToken.userId
    next()

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" })  // 👈 401 not 500
  }
}

export default isAuth