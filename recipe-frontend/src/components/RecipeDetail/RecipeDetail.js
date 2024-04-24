import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselSlider from './CarouselSlider';
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import axios from 'axios';


const RecipeDetail = ({ recipes, addToGroceryList }) => {
  const { id } = useParams();
  let recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if(recipe){
    localStorage.setItem('lastRecipe', JSON.stringify(recipe));
  }else{
    const recipeData = localStorage.getItem('lastRecipe');
    if (recipeData) {
      recipe = JSON.parse(recipeData)
    }
  }

  const searchUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  const api_key = `${process.env.REACT_APP_API_KEY}`;
  
  const [ingredientsData, setIngredientsData] = useState([]);

  const [showInstructions, setShowInstructions] = useState(false);

  const handleModalClose = () => {
    setShowInstructions(false);
  };

  const handleCarouselClick = (e) => {
    e.stopPropagation();
  };

  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleShowInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  useEffect(() => {
    const fetchIngredientsData = async () => {
      try {
        const fetchedIngredients = recipe.ingredients; 
        const fetchedData = await Promise.all(
        fetchedIngredients.map(async (ingredient) => {
          const response = await axios.get(`${searchUrl}?query=${ingredient}&api_key=${api_key}`);
            console.log(response.data.foods[0]);
            return response.data.foods[0];
          })
        );
        const fdcIdsArray = fetchedData.map(data => data.fdcId);
        setIngredientsData(fdcIdsArray);
      } catch (error) {
        console.error('Error fetching ingredients data:', error);
      }
    };

    fetchIngredientsData();
  }, [recipe.ingredients, ingredientsData]);

  if (!recipe) {
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
                          <a href={`https://fdc.nal.usda.gov/fdc-app.html#/food-details/${ingredientsData[index]}/nutrients`} target="_blank" rel="noopener noreferrer">{ingredient}</a>
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
                <Container className="mt-5">
                  <Row>
                    <Button
                      onClick={handleShowInstructions}
                      style={{
                        padding: '6px 10px',
                        fontSize: '1.0rem',
                        marginBottom: '10px',
                        backgroundColor: 'white',
                        color: 'black',
                      }}
                      variant="primary"
                      index={recipe.id}
                    >
                      Show Instructions
                    </Button>
                  </Row>
                </Container>
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
      {showInstructions && (
        <ModalWrapper onClick={handleModalClose}>
        <CarouselWrapper className="carousel-container" onClick={handleCarouselClick}>
        <CarouselProvider
          visibleSlides={slideCount}
          totalSlides={recipe.instructions.length}
          step={1}
          currentSlide={currentSlide}
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
        >
          <CarouselSlider
            setSlideCount={setSlideCount}
            setCurrentSlide={setCurrentSlide}
            recipe={recipe}
          />
        </CarouselProvider>
      </CarouselWrapper>
      </ModalWrapper>
    )}
    </Container>
  );
};

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); 
`;

export default RecipeDetail;

