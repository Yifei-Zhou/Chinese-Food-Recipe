import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [dishImage, setDishImage] = useState('');
  const [instructions, setInstructions] = useState('');
  const [instructionsImages, setInstructionsImages] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleDishImageChange = (event) => {
    setDishImage(event.target.value);
  };

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const handleInstructionsImagesChange = (event) => {
    setInstructionsImages(event.target.value);
  };

  const handleSubmit = () => {
    const ingredientsArray = ingredients.split('\n');
    const dishImageURL = "https://drive.google.com/thumbnail?id=" + dishImage + "&sz=w1000";
    const instructionsArray = instructions.split('\n');

    const InstructionsImagesIDs = instructionsImages.split('\n');
    const InstructionsImagesURLs = InstructionsImagesIDs.map(id => "https://drive.google.com/thumbnail?id=" + id + "&sz=w1000");
    InstructionsImagesURLs.unshift(dishImageURL);

    const newRecipe = {
      title: title,
      description: description,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      image: InstructionsImagesURLs
    }

    axios.post('http://localhost:8000/api/recipes', newRecipe, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log('Recipe added: ', response.data);
    }).catch(error => {
      console.log('Error adding recipe: ', error.response.data);
    });
    
    setTitle('');
    setDescription('');
    setIngredients('');
    setDishImage('');
    setInstructions('');
    setInstructionsImages('');

  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="input-Title">Recipe Name</InputGroup.Text>
        <Form.Control
          placeholder="Enter Recipe Name"
          aria-label="Recipename"
          aria-describedby="input-Title"
          value={title}
          onChange={handleTitleChange}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="input-Description">Recipe Description</InputGroup.Text>
        <Form.Control
          placeholder="Enter Description"
          aria-label="Description"
          aria-describedby="input-Description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="input-Ingredients">Recipe Ingredients</InputGroup.Text>
        <Form.Control
          placeholder="Enter Ingredients (one ingredient per line)"
          aria-label="Ingredients"
          aria-describedby="input-Ingredients"
          value={ingredients}
          onChange={handleIngredientsChange}
        />
      </InputGroup>
      
      <Form.Label htmlFor="basic-dishImage">Dish Image URL in Google Drive</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="input-DishImageFront">
          https://drive.google.com/thumbnail?id=
        </InputGroup.Text>
        <Form.Control 
          placeholder="Enter Google Drive Sharing ID"
          id="basic-dishImage"
          aria-label="DishImage"
          aria-describedby="input-DishImageFront"
          value={dishImage}
          onChange={handleDishImageChange}
        />
        <InputGroup.Text id="input-DishImageBack">
          &sz=w1000
        </InputGroup.Text>
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="input-Instructions">Recipe Instructions</InputGroup.Text>
        <Form.Control
          placeholder="Enter Instructions (one instruction per line)"
          aria-label="Instructions"
          aria-describedby="input-Instructions"
          value={instructions}
          onChange={handleInstructionsChange}
        />
      </InputGroup>

      <Form.Label htmlFor="basic-instructionImages">Image for each Instruction (URL in Google Drive)</Form.Label>
      <InputGroup size="lg">
        <InputGroup.Text id="input-InstructionImagesFront">
          https://drive.google.com/thumbnail?id=
        </InputGroup.Text>
        <Form.Control
          placeholder="Enter Google Drive Sharing IDs (one ID per line)"
          aria-label="InstructionsImages"
          aria-describedby="input-InstructionImagesFront"
          value={instructionsImages}
          onChange={handleInstructionsImagesChange}
        />
      </InputGroup>

      <Button
        onClick={handleSubmit}
        style={{ padding: '6px 10px', fontSize: '1.0rem',
          marginBottom: '10px', backgroundColor: 'white', color: 'black',
        }}
        variant="primary">
        Submit
      </Button>

    </div>
  );
};

export default AddRecipe;