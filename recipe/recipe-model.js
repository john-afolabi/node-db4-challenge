const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join(
      "recipes_and_ingredients",
      "recipes_and_ingredients.ingredient_id",
      "ingredients.id"
    )
    .join("recipes", "recipes.id", "recipes_and_ingredients.recipe_id")
    .select("ingredient_name", "quantity", "measurement_units")
    .where({ "recipes.id": recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions")
    .join("recipes", "recipes.id", "instructions.recipe_id")
    .select("step_number", "description")
    .where({ "recipes.id": recipe_id })
    .orderBy("step_number");
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};
