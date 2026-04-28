const express = require('express');
const { handleSignUp, handleLogin, handleAiChat, handlePersonalization } = require('../controllers/usercontroller')
const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.post("/ai-ask", handleAiChat);
router.post("/personalize", handlePersonalization)

module.exports = router