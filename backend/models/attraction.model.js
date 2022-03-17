const mongoose = require('mongoose');

const Schema = mongoose.Schema;

<<<<<<< HEAD

const attractionSchema = new Schema({
        name: {
          type:  String
        },
        imageUrl:{
            type: String
        } ,
        description: {
           type: String
        },
=======
const attractionSchema = new Schema({
    name: { type: String },
    imageUrl: { type: String },
    description: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String }
>>>>>>> 2a82b031c969784aeb8eaba8f04133afb9bec13b
});



const Attraction = mongoose.model('Attraction', attractionSchema, 'attractions');

module.exports = Attraction;