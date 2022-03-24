const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const sportSchema = new Schema({
    image: { type: String },
    link: { type: String },
    text: { type: String },
    title: { type: String },
});
const Sport = mongoose.model('sport', sportSchema, 'sports');
module.exports = Sport;