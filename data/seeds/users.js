/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: '8c7d1861-8f5d-4b88-885d-9a2727e0c047', name: 'lucia', lastname: 'reeds', email: 'lucia@correo.com', password: '1234'},
    {id: '4c46512d-b62f-4277-8f2f-a44c67c36880', name: 'Javier', lastname: 'Urbina', email: 'javier@correo.com', password: '3210'},
    {id: 'ead8ba59-1115-42e8-a482-932a48420593', name: 'Joe', lastname: 'Doe', email: 'joedoe@correo.com', password: 'asdf'}
  ]);
};
