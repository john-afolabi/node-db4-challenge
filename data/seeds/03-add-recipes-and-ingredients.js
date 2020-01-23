exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_and_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_and_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: "200"
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: "500"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: "0.5"
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: "2"
        },
        {
          recipe_id: 1,
          ingredient_id: "5",
          quantity: "2"
        },
        {
          recipe_id: 1,
          ingredient_id: "6",
          quantity: "4"
        },
        {
          recipe_id: 1,
          ingredient_id: "7",
          quantity: "1"
        },
        {
          recipe_id: 1,
          ingredient_id: "8",
          quantity: "1"
        },
        {
          recipe_id: 2,
          ingredient_id: "9",
          quantity: "0.75"
        },
        {
          recipe_id: 2,
          ingredient_id: "10",
          quantity: "1"
        },
        {
          recipe_id: 2,
          ingredient_id: "11",
          quantity: "2"
        },
        {
          recipe_id: 2,
          ingredient_id: "12",
          quantity: "2"
        },
        {
          recipe_id: 2,
          ingredient_id: "13",
          quantity: "0.5"
        },
        {
          recipe_id: 2,
          ingredient_id: "14",
          quantity: "1"
        },
        {
          recipe_id: 2,
          ingredient_id: "15",
          quantity: "0.5"
        },
        {
          recipe_id: 1,
          ingredient_id: "15",
          quantity: "1"
        },
        {
          recipe_id: 2,
          ingredient_id: "16",
          quantity: "1"
        },
        {
          recipe_id: 2,
          ingredient_id: "17",
          quantity: "1"
        }
      ]);
    });
};
