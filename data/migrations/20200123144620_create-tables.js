exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table.string("ingredient_name", 128).notNullable();
      table.string("measurement_units", 128);
    })
    .createTable("recipes_and_ingredients", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.float("quantity");
    })
    .createTable("instructions", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("step_number").notNullable();
      table.string("description", 120).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes_and_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
