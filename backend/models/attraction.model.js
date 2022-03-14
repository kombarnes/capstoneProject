const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const locationSchema = new Schema({
//     location: {type: String},
//     address: {type: String},
//     city: {type: String},
//     state: {type: String},
//     zipcode: {type: String}
// });


const attractionSchema = new Schema({
        name: {type:  String},
        imageUrl:{type: String} ,
        description: {type: String},
        // location:{type: locationSchema}
});





const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;