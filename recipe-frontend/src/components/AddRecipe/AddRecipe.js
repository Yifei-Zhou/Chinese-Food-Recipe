import axios from 'axios';
import React, { useState } from 'react';

const AddRecipe = ( {recipes} ) => {
  const [recipe, setRecipe] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);

  const handleChange = (e) => {
    setRecipe(e.target.value);
  };

  const validateAndSubmit = () => {
    try {
      // Attempt to parse the JSON to check its validity
      const parsedRecipe = JSON.parse(recipe);
      setIsValidJson(true);
      // Here, you can handle the valid JSON as needed, e.g., send it to an API
      console.log('Valid JSON:', recipe);
      alert('Recipe submitted successfully!');
      
      axios.post('http://localhost:8000/api/recipes', parsedRecipe, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log('Recipe added: ', response.data);
      }).catch(error => {
        console.log('Error adding recipe: ', error.response.data);
      });
    } catch (error) {
      setIsValidJson(false);
      alert('The provided recipe is not valid JSON.');
    }
  };

  return (
    <div>
      <h2>Input Your Recipe in JSON Format</h2>
      <textarea
        value={recipe}
        onChange={handleChange}
        rows="10"
        cols="50"
        style={{ fontFamily: 'monospace' }}
      />
      <div>
        <button onClick={validateAndSubmit}>Submit Recipe</button>
      </div>
      {!isValidJson && <p style={{ color: 'red' }}>Please enter valid JSON.</p>}
    </div>
  );
};

export default AddRecipe;