require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://${process.env.Mongo_Username}:${process.env.Mongo_password}@cluster0.wqubgzo.mongodb.net/ecomerce?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlParser: true})
.then(() => console.log("connected to mongodb"))
.catch(err => console.log(err))

mongoose.connection.on("error", err => {
    console.log(err)
})