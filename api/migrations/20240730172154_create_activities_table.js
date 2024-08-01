/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('activities', table => {
      table.increments();
      table.string('name', 250).notNullable();
      
      table.string('description', 2500)
      //nature type 
      table.boolean('beach')
      table.boolean('mountain')
      table.boolean('forest')
      //population density
      table.boolean('downtown')
      table.boolean('countryside')
      table.boolean('suburbia')
      //activity types
      table.boolean('meal')
      table.boolean('entertainment')
      table.boolean('social')
      //availability times
      table.boolean('before_sunrise')
      table.boolean('late_morning')
      table.boolean('noon')
      table.boolean('afternoon')
      table.boolean('evening')
      table.boolean('night')
      table.string('photo', 250).notNullable();
    })
};
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('activities');
};
