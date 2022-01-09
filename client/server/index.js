const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const mongoose = require("mongoose");

const { UserRouter } = require('./Routes/users')
const { AuthRouter } = require('./Routes/auth')
const { PostRouter } = require('./Routes/posts')
var cors = require('cors')
dotenv.config();
mongoose.connect(
  process.env.MONGO_URLADI,
  (err, data) => {
    console.log(err || data);
    console.log("mongodb connected");
  }
);
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use('/api/users', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/posts', PostRouter);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

