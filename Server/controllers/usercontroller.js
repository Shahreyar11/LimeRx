const USER = require('../models/user');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require("express");
const Groq = require("groq-sdk");
const cookieParser = require("cookie-parser")

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

async function handleSignUp(req, res) {
    try {
        console.log('Data received on backend: ', req.body);
        const { username, email, password } = req.body;

        const userExists = await USER.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await USER.create({
            username: username,
            email: email,
            password: hashedPassword,
        });

        const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
        console.log(token)

        //         1. res.cookie()
        // res = response object (server → client)
        // .cookie() = method to set a cookie in the user's browser

        // 👉 So this line is basically saying:

        // "Hey browser, store this data for me."

        res.cookie("token", token, { httpOnly: true, secure: false, sameSite:"lax" });

        //         ✅ httpOnly: true
        // Cookie cannot be accessed using JavaScript (like document.cookie)
        // Only accessible by the server

        res.status(201).json({
            message: 'User Created Successfully',
            data: { email: newUser.email }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error Creating User', error: error.message })
    }
};

async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await USER.findOne({ email })
        console.log(user.email, user.password)
        if (!user) {
            return res.status(400).json({ status: false, message: "User not found" })
        }
        else {
            // res.status(400).json({ error: "Some Error Occured" });
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(400).json({ status: false, message: "Invalid credentials" });
            }
            const token = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: "7d" });
            console.log(token)

            res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "lax" });


            res.status(201).json({
                message: 'User LoggedIn Successfully',
                data: { email: email }
            });



            // compares the password from mongoDB        
            // 1. res.cookie()
            // res = response object (server → client)
            // .cookie() = method to set a cookie in the user's browser

            // 👉 So this line is basically saying:

            // "Hey browser, store this data for me."
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error Login" })
    }
}

async function handleAiChat(req, res) {
    try {
        const { message } = req.body;

        const response = await groq.chat.completions.create({
            model: "llama3-70b-8192", // best for now
            messages: [
                {
                    role: "system",
                    content: "You are a helpful health assistant. Give safe, general advice only.",
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        res.json({
            reply: response.choices[0].message.content,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports = {
    handleSignUp,
    handleLogin,
    handleAiChat
};