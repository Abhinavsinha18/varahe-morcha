const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// let connect =  mongoose.connect("mongodb+srv://abhinav:abhinav@varahe.etletzy.mongodb.net/?retryWrites=true&w=majority&appName=varahe",{ useNewUrlParser: true, useUnifiedTopology: true });
let connect =  mongoose.connect(process.env.MONGO_URL);
module.exports = connect;