const USER = require('../models/user');

async function handleSignUp(req, res){
    try{
        console.log('Data received on backend: ', req.body);
        const {username, email, password } = req.body;

        const userExists = await USER.findOne({ email });
        if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await USER.create({
            username: username,
            email: email,
            password: password,
        });
        res.status(201).json({
            message: 'User Created Successfully',
            user: newUser,
        });
    }
    catch(error){
        res.status(500).json({message: 'Error Creating User', error: error.message})
    }
};

async function handleLogin(req, res){
    try{
        const{ email, password } = req.body;
        const user = await USER.findOne({ email })
        console.log(user.email, user.password)
        if(user) {
            if(user && user.password === password){
                res.status(201).json({message: "User Logged in", user})
                console.log("User Password Correct");
            }
        }
        else{
            res.status(400).json({ error: "Some Error Occured" });
        }
    }
    catch(error) {
        res.status(500).json({message: "Error Login"})
    }
}

module.exports = {
    handleSignUp,
    handleLogin
};