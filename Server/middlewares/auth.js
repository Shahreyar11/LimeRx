const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    // 1. Safely extract the token
    const token = req?.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: "Access denied. Please log in first." });
    }

    // 2. Sanity check for the secret key
    if (!process.env.SECRET_KEY) {
        console.error("Auth Middleware: SECRET_KEY is not defined.");
        return res.status(500).json({ message: "Internal Server Error" });
    }

    try {
        // 3. Verify and attach payload
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        // 4. Handle specific JWT errors gracefully
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Session expired. Please log in again." });
        }
        return res.status(401).json({ message: "Invalid token structure." });
    }
}

module.exports = auth;