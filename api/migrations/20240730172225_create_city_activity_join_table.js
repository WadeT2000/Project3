/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('city_activity', table => {
      table.integer('city_id').unsigned().notNullable();
      table.foreign('city_id').references('id').inTable("cities").onDelete('CASCADE');

      table.integer('activities_id').unsigned().notNullable();
      table.foreign('activities_id').references('id').inTable('activities').onDelete('CASCADE');
    })
};
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('city_activity');
};
