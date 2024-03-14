var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const PORT = 8000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());

const recipes = [
  {
    title: "Spaghetti Carbonara",
    id: 1,
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
    instructions: ["Cook pasta.", "In separate pan, cook pancetta.", "Whisk eggs and Parmesan, then combine with pasta and pancetta.", "Season with pepper."],
    image: "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=1024x1024&w=is&k=20&c=5ZRLITJjvwm0aEV6ynpdnJrjDmlraH-PD9mleSts6sQ="
  },
  {
    title: "Classic Margherita Pizza",
    id: 2,
    description: "A simple yet delicious pizza with tomatoes, mozzarella cheese, and fresh basil.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
    instructions: ["Roll out dough,", "apply sauce, add cheese and basil.", "Bake in a preheated oven until crust is golden."],
    image: "https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg"
  },
  {
    title: "Chicken Caesar Salad",
    id: 3,
    description: "A fresh, creamy, and classic Caesar salad with grilled chicken.",
    ingredients: ["Romaine lettuce", "Grilled chicken breast", "Caesar dressing", "Croutons", "Parmesan cheese"],
    instructions: ["Chop lettuce and slice grilled chicken.,", "Toss lettuce, chicken, croutons,", "and Parmesan cheese with Caesar dressing. Serve chilled."],
    image: "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg"
  },
  {
    title: "Vegetable Stir-Fry",
    id: 4,
    description: "A healthy and colorful vegetable stir-fry with a flavorful sauce.",
    ingredients: ["Mixed vegetables (bell peppers, broccoli, carrots, snap peas)", "Soy sauce", "Garlic", "Ginger", "Olive oil"],
    instructions: ["Heat olive oil in a pan over medium heat.,", "Add minced garlic and ginger, sauté for a minute.", "Add vegetables and stir-fry until tender.", "Add soy sauce and stir to coat. Serve hot."],
    image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
  },
  {
    title: "Classic Beef Tacos",
    id: 5,
    description: "Tasty and easy-to-make beef tacos with fresh toppings.",
    ingredients: ["Ground beef", "Taco seasoning", "Tortillas", "Shredded lettuce", "Diced tomatoes","Shredded cheese","Sour cream"],
    instructions: ["Cook ground beef with taco seasoning.", "Warm tortillas as per package instructions.", "Assemble tacos with beef, lettuce, tomatoes, cheese, and a dollop of sour cream."],
    image: "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1040,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fqtcu578og0gukdk_kb_rmg_gmi_hi_res_jpeg.jpeg%3F"
  },
  {
    title: "Lemon Garlic Shrimp Pasta",
    id: 6,
    description: "A light and zesty pasta dish with succulent shrimp.",
    ingredients: ["Pasta", "Shrimp, peeled and deveined", "Lemon juice", "Garlic", "Olive oil","Parsley"],
    instructions: ["Cook pasta as per package instructions.", "Sauté garlic in olive oil, add shrimp, and cook until pink.", "Add lemon juice to shrimp and heat through.", "Toss cooked pasta with shrimp and garnish with parsley."],
    image: "https://pinchandswirl.com/wp-content/uploads/2020/06/Lemon-Garlic-Shrimp-Pasta.jpg"
  },
  {
    title: "Grilled Cheese Sandwich",
    id: 7,
    description: "A classic, gooey grilled cheese sandwich.",
    ingredients: ["2 slices of bread", "2 slices of cheddar cheese", "Butter"],
    instructions: ["Butter one side of each bread slice.", "Place cheese slices between the bread (buttered sides out).", "Heat a pan over medium heat.", "Cook the sandwich until golden brown on each side and the cheese is melted."],
    image: "https://www.allrecipes.com/thmb/ICeU6n3kGzoTxOV4ONB0q_TpgYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/125434-GrilledCheeseoftheGods-mfs-3x2-067-267097af4d0b446ab646bba044445147.jpg"
  },
  {
    title: "Kung Pao Chicken",
    id: 8,
    description: "A classic Chinese takeout dish of stir-fried chicken, peanuts, and vegetables, is easy to make at home.",
    ingredients: ["Cornstarch", "White Wine", "Soy Sauce", "Sesame Oil", "Chicken Breast Halves", "Hot Chili Paste", "Brown Sugar", "Distilled White Vinegar", "Can Water Chestnuts", "Chopped Peanuts", "Chopped Onions", "Chopped Garlic"],
    instructions: ["Combine water and cornstarch in a cup; set aside.", "Combine 1 tablespoon wine, 1 tablespoon soy sauce, 1 tablespoon sesame oil, and 1 tablespoon cornstarch/water mixture in a large glass bowl.", "Add chicken pieces and toss to coat.", "Cover the dish and refrigerate for about 30 minutes."],
    image: "https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-1660x2048.jpg"
  }
];

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.post('/api/recipes',  (req, res) => {
  const body = req.body;

  const newRecipe = {
    id: recipes.length + 1,
    title: body.title,
    description: body.description,
    ingredients: body.ingredients,
    instructions: body.instructions,
    image: body.image
  };
  
  recipes.push(newRecipe);

  res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
  console.log('Server is running');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;