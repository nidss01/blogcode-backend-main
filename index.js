const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
app.use(cors());
const port = 5000 ;
dotenv.config();

mongoose.connect("mongodb+srv://nidhi_patel:nidhi_123@cluster0.x3pkhhb.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('connected to db');
})
mongoose.connection.on('error', (err) => {
    console.log('error occured', err);
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


app.listen(port, () => {
    console.log('running on' + port);
});
