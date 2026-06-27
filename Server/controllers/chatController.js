const getGroqReply = require("../services/groqService");

async function chatController(req, res) {

    try {

        const { message } = req.body;

        const reply = await getGroqReply(message);

        return res.json({
            reply,
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: "Server Error",
        });

    }

}

module.exports = {
    chatController,
};