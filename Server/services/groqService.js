const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

async function getGroqReply(message) {

    const completion = await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        messages: [

            {
                role: "system",
                content:
                    "You are LimerxAI. You are a friendly AI assistant."
            },

            {
                role: "user",
                content: message
            }

        ]

    });

    return completion.choices[0].message.content;

}

module.exports = getGroqReply;