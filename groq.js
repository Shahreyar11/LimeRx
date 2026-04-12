const Groq = require("groq-sdk");
require('dotenv').config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function testGroq() {
  try {
    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        { role: "user", content: "I am thinking to suicide" },
      ],
    });

    console.log("✅ Groq Response:");
    console.log(response.choices[0].message.content);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

testGroq();