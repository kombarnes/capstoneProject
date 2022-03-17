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

<<<<<<< HEAD
const attractionRouter = require('./routes/attraction');
const contactRouter = require('./routes/contact');

app.use('/attractions', attractionRouter)
app.use('/contact', contactRouter)
=======
//loads the routers from other files
const attractionsRouter = require('./routes/attraction');

//middleware
app.use('/attractions', attractionsRouter);

>>>>>>> 2a82b031c969784aeb8eaba8f04133afb9bec13b

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});