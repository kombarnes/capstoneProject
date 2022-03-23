const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const artSchema = new Schema({
    image: { type: String },
    link: { type: String },
    text: { type: String },
    title: { type: String },
});
const Art = mongoose.model('art', artSchema, 'arts');
module.exports = Art;