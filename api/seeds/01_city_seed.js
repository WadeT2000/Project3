/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE cities CASCADE')
  await knex('cities').del()
  await knex('cities').insert([
    {name: 'Colorado Springs', photo: '/pictures/springs.jpeg'},
    {name: 'Chicago', photo: '/pictures/chicago.jpeg'},
    {name: 'Denver', photo: '/pictures/denver.jpeg'},
    {name: 'Catania', photo: '/pictures/catania.jpeg'},
    {name: 'Albuquerque', photo: '/pictures/albuquerque.jpeg'},
    {name: 'Narnia', photo: '/pictures/narnia.jpeg'},
    {name: 'Minas Tirith', photo: '/pictures/minas.jpeg'},
    {name: "Los Angeles", photo: '/pictures/angeles.jpeg'},
    {name: "Fairfield", photo: '/pictures/fairfield.jpeg'}
  ]);
};
