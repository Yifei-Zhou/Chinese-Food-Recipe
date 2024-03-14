import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Developer from "./components/Developer/Developer";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import axios from 'axios';

const App = () => {
  const getLocalStorage = () => {
    const groceryData = localStorage.getItem('groceryData')
    if (groceryData) {
      return JSON.parse(groceryData)
    } else {
      return []
    }
  }

  const [recipes, setRecipes] = useState([]);

  const [groceryList, setGroceryList] = useState(getLocalStorage);

  const handleAddToGroceryList = (ingredient) => {
    handleShow();
    setGroceryList((prevList) => {
      prevList = [...prevList,ingredient]
      localStorage.setItem('groceryData', JSON.stringify(prevList))
      return prevList
    });
  };

  const handleRemoveFromGroceryList = (ingredient) => {
    setGroceryList((prevList) => {
      prevList = prevList.filter((item) => item !== ingredient)
      localStorage.setItem('groceryData', JSON.stringify(prevList))
      if(prevList.length === 0){
        localStorage.removeItem('groceryData');
      }
      return prevList
    });
  };

  const handleClearGroceryList = () => {
    localStorage.removeItem('groceryData');
    setGroceryList([]);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes').then(response => {
      setRecipes(response.data);
      const recipeData = response.data;
    }).catch(error => {
      console.error('Error: ', error);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Recipe Book</h1>
        </header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Home Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Recipes Links" id="basic-nav-dropdown">
                  {recipes.map((recipe) => (
                    <NavDropdown.Item href={"/recipes/" + recipe.id}>{recipe.title}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link onClick={handleShow}>Grocery List</Nav.Link>
                <Nav.Link href="/addrecipes">Add Your Recipes</Nav.Link>
                <Nav.Link href="/developer">Developer</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="grocery-list">
            <ul>
              {groceryList.map((item, index) => (
                <li key={index}>
                  <Container>
                    <Row>
                      <Col md={8} order={1}>
                        {item}
                      </Col>
                      <Col md={3} order={2}>
                        <Button
                          onClick={() => handleRemoveFromGroceryList(item)}
                          style={{ padding: '2px 6px', fontSize: '0.8rem',
                                   marginBottom: '10px', backgroundColor: 'white',
                                   color: 'black' }}
                          variant="primary">
                          Remove
                        </Button>
                      </Col>                      
                    </Row>
                  </Container>
                </li>
              ))}
            </ul>
            <Button onClick={handleClearGroceryList}>Clear List</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

        <Routes>
          <Route
            path="/"
            element={<RecipeList recipes={recipes} />}
          />
          <Route
            path="/recipes/:id"
            element={<RecipeDetail recipes={recipes} addToGroceryList={handleAddToGroceryList} />}
          />
          <Route path="/developer" element={<Developer />} />
          <Route path="/addrecipes" element={<AddRecipe recipes={recipes}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
