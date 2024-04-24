# cosi-103a
name: Zhenxu Chen
email: zhenxuchen@brandeis.edu

name: Qifeng He
email: qifenghe@brandeis.edu

name:Chengpeng Gao
email:cgao@brandeis.edu

name: Yifei Zhou
email:yifeizhou@brandeis.edu

Descriptions:

The landing page displays summaries of 8 recipes, which includes the recipe title, an image, and a link to the details page for the recipe.

By clicking the detail button of each recipe, user will be navigated to the recipe detail page for that recipe. The recipe details pages include the recipe title, description, ingredients, steps, and an image. A return button will direct you back to the landing page in each details page.

We also added an ingredients shopping cart that lets users to add the ingredients displayed in each recipe to the shopping cart. The ingredient shopping list is stored in the local storage, which makes it persistent when navigating through different routes (including different recipes, team page, etc.) and page reloading. The shopping cart supports add, remove, and clear operations by users.

We also added a Carousel mode in front-end to display the instructions. This mode makes the display of instructions user-friendly in mobile web browser.

The team page shows all the developers of this web application.

The back-end is developed using Express.js. The entry point of back-end is app.js file, and the PORT is 8000. The recipes is stored in /api/recipes. We used the REST APIs including GET, POST to let user to send recipe JSON file from front-end to back-end and push the changes to /api/recipes. Also, the front-end uses GET to get the recipes data from back-end.

To add a recipe JSON file, click the "Add Your Recipes" link in the Nav bar.

We also added an ingredients shopping cart that lets users to add the ingredients displayed in each recipe to the shopping cart. The ingredient shopping list is stored in the local storage, which makes it persistent when navigating through different routes (including different recipes, team page, etc.) and page reloading. The shopping cart supports add, remove, and clear operations by users. 

We also added a Carousel mode in front-end to display the instructions. This mode makes the display of instructions user-friendly in mobile web browser. 

The back-end is developed using Express.js. The entry point of back-end is app.js file, and the PORT is 8000. The recipes is stored in /api/recipes. We used the REST APIs including GET, POST to let user to send recipe JSON file from front-end to back-end and push the changes to /api/recipes. Also, the front-end uses GET to get the recipes data from back-end. 

To add a recipe JSON file, click the "Add Your Recipes" link in the Nav bar. 

The routes are set up in the App.js file. Each recipe detail (total 8) has its own route using dynamic segment. The landing page route directs to the RecipeList component.

Besides, our app is also connected with the USDA FoodData Central API. (API Key is hidden to the public in a file: .env) When user clicks an ingredient, the app will use the USDA FoodData Central API to search the ingredient name. Then, the app will open an ingredient details page in the USDA website (if the ingredient is available). When users click the 'Go Back' button in the web browser, it will navigate them back to the web application (We achieve this by using local storage). 

Moreover, three alerts for three different error conditions that seem likely and problematic for the website application are setup in the Azure cloud:
1. CPU Usage: Condition: UsageNanoCores > 0.1, Severity: Warning.
2. Network In: Condition: RxBytes > 200000 B, Severity: Warning.
3. Network Out: Condition: TxBytes > 1000000 B, Severity: Warning.

Instructions:
1. git clone git@github.com:Ailuruscp/cosi-103a.git
2. cd recipe-demo
3. npm install
4. npm start
   
