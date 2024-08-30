/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: '4c46512d-b62f-4277-8f2f-a44c67c36880', firstname: 'User', lastname: 'User', email: 'user@gmail.com', password: '$2a$10$X.G59TO/X9LHchg0UOz7Zu8LSfyifTQhyTPloy.eRdj.GFo7DGQEu'},
  ]);
};
