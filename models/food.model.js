const Schema = mongoose.Schema;
const foodSchema = new Schema({
    image: { type: String },
    link: { type: String },
    text: { type: String },
    title: { type: String },
});
const Food = mongoose.model('food', foodSchema, 'foods');
module.exports = Food;