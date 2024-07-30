/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE cities CASCADE')
  await knex('cities').del()
  await knex('cities').insert([
    {name: 'Colorado Springs'},
    {name: 'Chicago'},
    {name: 'Denver'},
    {name: 'Catania'},
    {name: 'Albuquerque'},
    {name: 'Narnia'},
    {name: 'Minas Tirith'},
    {name: "Los Angeles"},
    {name: "Fairfield"}
  ]);
};
