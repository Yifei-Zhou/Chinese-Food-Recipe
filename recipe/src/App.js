import React, { useState } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Developer from "./components/Developer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'; // Add this line

const App = () => {
  const getLocalStorage = () => {
    const groceryData = localStorage.getItem('groceryData')
    if (groceryData) {
      return JSON.parse(groceryData)
    } else {
      return []
    }
  }

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

  const recipes = [
    {
      title: "Spaghetti Carbonara",
      id: 1,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
      instructions: "Cook pasta. In separate pan, cook pancetta. Whisk eggs and Parmesan, then combine with pasta and pancetta. Season with pepper.",
      image: "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=1024x1024&w=is&k=20&c=5ZRLITJjvwm0aEV6ynpdnJrjDmlraH-PD9mleSts6sQ="
    },
    {
      title: "Classic Margherita Pizza",
      id: 2,
      description: "A simple yet delicious pizza with tomatoes, mozzarella cheese, and fresh basil.",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
      instructions: "Roll out dough, apply sauce, add cheese and basil. Bake in a preheated oven until crust is golden.",
      image: "https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg"
    },
    {
      title: "Chicken Caesar Salad",
      id: 3,
      description: "A fresh, creamy, and classic Caesar salad with grilled chicken.",
      ingredients: ["Romaine lettuce", "Grilled chicken breast", "Caesar dressing", "Croutons", "Parmesan cheese"],
      instructions: "Chop lettuce and slice grilled chicken. Toss lettuce, chicken, croutons, and Parmesan cheese with Caesar dressing. Serve chilled.",
      image: "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg"
    },
    {
      title: "Vegetable Stir-Fry",
      id: 4,
      description: "A healthy and colorful vegetable stir-fry with a flavorful sauce.",
      ingredients: ["Mixed vegetables (bell peppers, broccoli, carrots, snap peas)", "Soy sauce", "Garlic", "Ginger", "Olive oil"],
      instructions: "Heat olive oil in a pan over medium heat. Add minced garlic and ginger, sauté for a minute. Add vegetables and stir-fry until tender. Add soy sauce and stir to coat. Serve hot.",
      image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
    },
    {
      title: "Classic Beef Tacos",
      id: 5,
      description: "Tasty and easy-to-make beef tacos with fresh toppings.",
      ingredients: ["Ground beef", "Taco seasoning", "Tortillas", "Shredded lettuce", "Diced tomatoes","Shredded cheese","Sour cream"],
      instructions: "Cook ground beef with taco seasoning. Warm tortillas as per package instructions. Assemble tacos with beef, lettuce, tomatoes, cheese, and a dollop of sour cream.",
      image: "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1040,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fqtcu578og0gukdk_kb_rmg_gmi_hi_res_jpeg.jpeg%3F"
    },
    {
      title: "Lemon Garlic Shrimp Pasta",
      id: 6,
      description: "A light and zesty pasta dish with succulent shrimp.",
      ingredients: ["Pasta", "Shrimp, peeled and deveined", "Lemon juice", "Garlic", "Olive oil","Parsley"],
      instructions: "Cook pasta as per package instructions. Sauté garlic in olive oil, add shrimp, and cook until pink. Add lemon juice to shrimp and heat through. Toss cooked pasta with shrimp and garnish with parsley.",
      image: "https://pinchandswirl.com/wp-content/uploads/2020/06/Lemon-Garlic-Shrimp-Pasta.jpg"
    },
    {
      title: "Grilled Cheese Sandwich",
      id: 7,
      description: "A classic, gooey grilled cheese sandwich.",
      ingredients: ["2 slices of bread", "2 slices of cheddar cheese", "Butter"],
      instructions: "Butter one side of each bread slice. Place cheese slices between the bread (buttered sides out). Heat a pan over medium heat. Cook the sandwich until golden brown on each side and the cheese is melted.",
      image: "https://www.allrecipes.com/thmb/ICeU6n3kGzoTxOV4ONB0q_TpgYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/125434-GrilledCheeseoftheGods-mfs-3x2-067-267097af4d0b446ab646bba044445147.jpg"
    },
    {
      title: "Kung Pao Chicken",
      id: 8,
      description: "A classic Chinese takeout dish of stir-fried chicken, peanuts, and vegetables, is easy to make at home.",
      ingredients: ["Cornstarch", "White Wine", "Soy Sauce", "Sesame Oil", "Chicken Breast Halves", "Hot Chili Paste", "Brown Sugar", "Distilled White Vinegar", "Can Water Chestnuts", "Chopped Peanuts", "Chopped Onions", "Chopped Garlic"],
      instructions: "Combine water and cornstarch in a cup; set aside. Combine 1 tablespoon wine, 1 tablespoon soy sauce, 1 tablespoon sesame oil, and 1 tablespoon cornstarch/water mixture in a large glass bowl. Add chicken pieces and toss to coat. Cover the dish and refrigerate for about 30 minutes.",
      image: "https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-1660x2048.jpg"
    }
  ];

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
                <Nav.Link href="/developer">Developer Info</Nav.Link>
                <NavDropdown title="Recipes Links" id="basic-nav-dropdown">
                  {recipes.map((recipe) => (
                    <NavDropdown.Item href={"/recipes/" + recipe.id}>{recipe.title}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link onClick={handleShow}>Grocery List</Nav.Link>
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
            element={<RecipeList recipes={recipes} addToGroceryList={handleAddToGroceryList} />}
          />
          <Route
            path="/recipes/:id"
            element={<RecipeDetail recipes={recipes} addToGroceryList={handleAddToGroceryList} />}
          />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
