// Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  id: Number,
  description: String,
  ingredients: [String],
  instructions: [String],
  image: [String],
});

module.exports = mongoose.model('Recipe', recipeSchema);
