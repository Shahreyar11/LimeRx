const express = require('express');
const { handleSignUp, handleLogin, handleAiChat } = require('../controllers/usercontroller')
const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.post("/ai-ask", handleAiChat);

module.exports = router