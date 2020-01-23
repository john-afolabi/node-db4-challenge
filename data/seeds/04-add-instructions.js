exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description:
            "Combine ground beef, onion, garlic, and green pepper in a large saucepan. Cook and stir until meat is brown and vegetables are tender. Drain grease."
        },
        {
          recipe_id: 1,
          step_number: 2,
          description:
            "Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1 hour, stirring occasionally."
        },
        {
          recipe_id: 2,
          step_number: 1,
          description:
            "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to sour."
        },
        {
          recipe_id: 2,
          step_number: 2,
          description:
            "Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into soured milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone."
        },
        {
          recipe_id: 2,
          step_number: 3,
          description:
            "Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side."
        }
      ]);
    });
};
