exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Tomato paste", measurement_units: "grams" },
        { ingredient_name: "Ground beef", measurement_units: "grams" },
        { ingredient_name: "Black pepper", measurement_units: "teaspoon" },
        { ingredient_name: "Dried basil", measurement_units: "teaspoon" },
        { ingredient_name: "Dried oregano", measurement_units: "teaspoon" },
        { ingredient_name: "Garlic", measurement_units: "cloves" },
        { ingredient_name: "Green bell pepper" },
        { ingredient_name: "Onion" },
        { ingredient_name: "Milk", measurement_units: "cup" },
        { ingredient_name: "Eggs" },
        { ingredient_name: "Vinegar", measurement_units: "tablespoon" },
        { ingredient_name: "Butter", measurement_units: "tablespoon" },
        { ingredient_name: "Baking soda", measurement_units: "teaspoon" },
        { ingredient_name: "Baking powder", measurement_units: "teaspoon" },
        { ingredient_name: "Salt", measurement_units: "teaspoon" },
        { ingredient_name: "Sugar", measurement_units: "teaspoon" },
        { ingredient_name: "Flour", measurement_units: "cup" }
      ]);
    });
};
