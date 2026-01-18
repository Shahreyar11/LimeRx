require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const USER = require('./models/user')
const { connectToDB } = require('./connect')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoutes')

connectToDB(process.env.MONGO_URI)
  .then(()=>console.log('MongoDb Connected'));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json())
app.use(cookieParser())

app.use("/", userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})