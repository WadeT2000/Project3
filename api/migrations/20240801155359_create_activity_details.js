/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('activity_details', table => {
    table.increments();
    table.string('activity_name', 2500)
    table.foreign('activity_name').references('name').inTable('activities');
    table.integer('price');
    table.string('address', 2500);
    table.string('participants', 2500);
    table.boolean('family_friendly');
    table.string('restrictions',2500);
    table.string('dress_code', 2500);
    table.boolean('aquarium', 2500);
    table.boolean('lodging');
    table.float('event_length');
    table.string('security', 1000)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('activity_details');
};
