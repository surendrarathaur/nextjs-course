require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/UserRoute');

const app = express();
const port = process.env.port || 5000;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());

const uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Database Connected successfully"))
.catch(error => console.log({error:error.message}));

app.get('/', (req, res) => {
    res.status(200).json('Welcome to Node Application')
});
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})