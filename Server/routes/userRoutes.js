const express = require("express");

const {
    handleSignUp,
    handleLogin,
    handlePersonalization,
    handleLogout,
    getCurrentUser,
} = require("../controllers/usercontroller");

const { chatController } = require("../controllers/chatController");

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.post("/personalize", handlePersonalization);
router.get("/me", auth, getCurrentUser);

router.post("/ask", auth, chatController);

router.post("/logout", handleLogout);

module.exports = router;