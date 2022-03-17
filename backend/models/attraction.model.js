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
});



const Attraction = mongoose.model('Attraction', attractionSchema, 'attractions');

module.exports = Attraction;