import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const RecipeList = ( {recipes} ) => {

  return (
      <Container>
        <Row>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {recipes.map((recipe) => (
              <Card key={recipe.id} style={{ width: '18rem', height: '25rem', margin: '10px', backgroundColor: 'black', border: '1px solid white' }}>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Img variant="top" src={recipe.image} alt={recipe.title} style={{ width: '17rem', height: '18rem', marginBottom: '10px' }} />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{recipe.title}</Card.Title>
                  <Link to={`/recipes/${recipe.id}`}>
                    <Button 
                      style={{ padding: '6px 10px', fontSize: '1.0rem', marginBottom: '10px', backgroundColor: 'white', color: 'black' }}
                      variant="primary" index={recipe.id}>
                      Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Row>
      </Container>
  );
};

export default RecipeList;