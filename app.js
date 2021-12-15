const express = require("express")
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const postsRoute = require('./routes/users')

app.use(bodyParser.json())
app.use('/users', postsRoute)

app.get('/', (req, res) => {
    res.send("You are at the Home page!")
})

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to MongoDB!")
})

app.listen(3000);