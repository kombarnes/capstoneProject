const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const nightSchema = new Schema({
    image: { type: String },
    link: { type: String },
    text: { type: String },
    title: { type: String },
});
const Night = mongoose.model('night', nightSchema, 'nights');
module.exports = Night;