const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");

})

const attractionRouter = require('./routes/attraction');

app.use('/attractions', attractionRouter)

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});