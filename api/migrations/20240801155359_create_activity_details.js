/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('activity_details', table => {
    table.increments();
    table.string('activity_name', 250)
    table.foreign('activity_name').references('name').inTable('activities');
    table.integer('price');
    table.string('address', 250);
    table.string('participants', 250);
    table.boolean('family_friendly');
    table.string('restrictions',250);
    table.string('dress_code', 250);
    table.boolean('aquarium', 250);
    table.boolean('lodging');
    table.float('event_length');
    table.string('security', 100)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('activity_details');
};
