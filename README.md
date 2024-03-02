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

In each recipe detail page, the ingredients can be added to the shopping cart. The items in the shopping cart can be removed, and all items in the shopping cart can be cleared. The shopping carts persist when navigating to different recipe websites and page reloading. We achieve this by using local storage. 

The team page shows all the developers of this web application. 

The routes are set up in the App.js file. Each recipe detail (total 8) has its own route using dynamic segment. The landing page route directs to the RecipeList component.

Instructions:
1. git clone git@github.com:Ailuruscp/cosi-103a.git
2. cd recipe-demo
3. npm install
4. npm start
   
