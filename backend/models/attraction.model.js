const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        location:{
            type: locationSchema
        } 

    
});



const locationSchema = new Schema({
    location: {
        address: ,
        city: String,
        state: String,
        zipcode:
    }
});

const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;