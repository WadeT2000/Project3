/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {user_id: 1, activities: 1},
    {user_id: 1, activities: 1},
    {user_id: 1, activities: 1}
  ]);
};
