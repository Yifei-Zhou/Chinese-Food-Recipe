import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
describe('RecipeDetail Component', () => {
  const recipes = [
    {
      title: "Spaghetti Carbonara",
      id: 1,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
      instructions: "Cook pasta. In separate pan, cook pancetta. Whisk eggs and Parmesan, then combine with pasta and pancetta. Season with pepper.",
      image: "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=1024x1024&w=is&k=20&c=5ZRLITJjvwm0aEV6ynpdnJrjDmlraH-PD9mleSts6sQ="
    }
  ];

  it('renders recipe detail correctly', () => {
    const id = '1';
    const recipe = recipes.find(recipe => String(recipe.id) === id);

    render(
      <MemoryRouter initialEntries={[`/recipes/${id}`]}>
        <Routes>
          <Route path="/recipes/:id"  element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </MemoryRouter>
    );

    const recipeTitle = screen.getByText(recipe.title);
    expect(recipeTitle).toBeInTheDocument();

    const recipeDescription = screen.getByText(recipe.description);
    expect(recipeDescription).toBeInTheDocument();

    const recipeImage = screen.getByAltText(recipe.title);
    expect(recipeImage).toBeInTheDocument();

    recipe.ingredients.forEach((ingredient) => {
      const ingredientElement = screen.getByText(ingredient);
      expect(ingredientElement).toBeInTheDocument();
    });

    const recipeInstructions = screen.getByText(recipe.instructions);
    expect(recipeInstructions).toBeInTheDocument();
  })
});
