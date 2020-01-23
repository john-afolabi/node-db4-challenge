exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Tomato paste", measurment_units: "grams" },
        { ingredient_name: "Ground beef", measurment_units: "grams" },
        { ingredient_name: "Black pepper", measurment_units: "teaspoon" },
        { ingredient_name: "Dried basil", measurment_units: "teaspoon" },
        { ingredient_name: "Dried oregano", measurment_units: "teaspoon" },
        { ingredient_name: "Garlic", measurment_units: "cloves" },
        { ingredient_name: "Green bell pepper" },
        { ingredient_name: "Onion" },
        { ingredient_name: "Milk", measurment_units: "cup" },
        { ingredient_name: "Eggs" },
        { ingredient_name: "Vinegar", measurment_units: "tablespoon" },
        { ingredient_name: "Butter", measurment_units: "tablespoon" },
        { ingredient_name: "Baking Soda", measurment_units: "teaspoon" },
        { ingredient_name: "Baking Powder", measurment_units: "teaspoon" },
        { ingredient_name: "Salt", measurment_units: "teaspoon" },
        { ingredient_name: "Sugar", measurment_units: "teaspoon" },
        { ingredient_name: "Flour", measurment_units: "cup" }
      ]);
    });
};
