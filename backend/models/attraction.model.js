const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attractionSchema = new Schema({
        name: {type:  String},
        imageUrl:{type: String} ,
        description: {type: String},
        location:{type: locationSchema}
});



const locationSchema = new Schema({
    location: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipcode: {type: String}
});

const Attraction = mongoose.model('attraction', attractionSchema);

module.exports = Attraction;