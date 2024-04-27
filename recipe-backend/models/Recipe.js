// Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  id: Number,
  description: String,
  ingredients: [String],
  ingredientsInfo: [String],
  instructions: [String],
  image: [String],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
