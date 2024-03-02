import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from 'react-router-dom';


const RecipeDetail = ({ recipes, addToGroceryList }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    // Handle case where recipe is not found
    return <div>Recipe not found</div>;
  }

  const handleAddToGroceryList = (ingredient) => {
    addToGroceryList(ingredient);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} lg={10}>
          <h1 className="text-center mb-4">{recipe.title}</h1>
          <Row className="mb-4">
            <Col xs={12} md={6} order={1}>
              <div className="text-muted">
                <p className="mb-3" style={{ fontSize: '18px', fontStyle: 'italic' }}>
                  {recipe.description}
                </p>
                <h3 className="mb-3">Ingredients:</h3>
                <ul className="list-unstyled">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} style={{ fontSize: '16px' }}>
                      <Container>
                        <Row>
                          <Col md={6}>
                            {ingredient}
                          </Col>
                          <Col md={6}>
                            <Button
                              onClick={() => handleAddToGroceryList(ingredient)}
                              style={{ padding: '2px 10px', fontSize: '0.8rem',
                                      marginBottom: '10px', backgroundColor: 'white', 
                                      color: 'black' }}
                              variant="primary">
                              Add to Grocery List
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </li>
                  ))}
                </ul>
                <h3 className="mb-3">Instructions:</h3>
                <p style={{ fontSize: '16px' }}>{recipe.instructions}</p>
              </div>
            </Col>
            <Col xs={12} md={6} order={2}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="img-fluid rounded"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
          <Row>
            <Link to={`/`}>
              <Button
                style={{ padding: '6px 10px', fontSize: '1.0rem',
                  marginBottom: '10px', backgroundColor: 'white', color: 'black',
                }}
                variant="primary"
                index={recipe.id}>
                Back To Home
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetail;
