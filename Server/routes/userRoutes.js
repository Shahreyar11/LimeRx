const express = require('express');
const { handleSignUp, handleLogin, handleAiChat, handlePersonalization, handleLogout, getCurrentUser } = require('../controllers/usercontroller')
const auth = require('../middlewares/auth')
const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.post("/ai-ask", auth,  handleAiChat);
router.post("/personalize", handlePersonalization)
router.get("/me", auth, getCurrentUser);
router.post("/logout", handleLogout)

module.exports = router