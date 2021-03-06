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

//loads the routers from other files
const attractionsRouter = require('./routes/attraction');
const artRouter = require('./routes/art');
const contactRouter = require('./routes/contact');
const nightRouter = require('./routes/night');
const sportRouter = require('./routes/sport')
const themeRouter = require('./routes/theme')

//middleware
app.use('/attractions', attractionsRouter);
app.use('/art', artRouter);
app.use('/contact', contactRouter);
app.use('/night', nightRouter);
app.use('/sport', sportRouter);
app.use('/theme', themeRouter)

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});