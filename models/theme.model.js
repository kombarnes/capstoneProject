const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const themeSchema = new Schema({
    image: { type: String },
    link: { type: String },
    text: { type: String },
    title: { type: String },
});
const Theme = mongoose.model('theme', themeSchema, 'themes');
module.exports = Theme;