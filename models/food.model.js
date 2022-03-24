const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    image: { type: String },
    title: { type: String },
    text: { type: String },
    link: { type: String },
});



const Food = mongoose.model('Food', foodSchema, 'foods');

module.exports = Food;