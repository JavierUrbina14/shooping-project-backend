/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('admins').del()
  await knex('admins').insert([
    {
      id: '9d21b48d-d584-4562-8cff-ebd6a9cef44a',
      firstname: 'Super',
      lastname: 'Admin',
      email: 'admin@enabled.com',
      password: '$2a$10$X.G59TO/X9LHchg0UOz7Zu8LSfyifTQhyTPloy.eRdj.GFo7DGQEu',
      role: 'admin',
      status: 'enabled',
      phone: '1234567890',
      last_login: new Date().toISOString(),
      address: '123 Admin St, Admin City, Country',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'da79a2ff-f3fa-41ad-9e64-070830b82459',
      firstname: 'Product',
      lastname: 'Manager',
      email: 'admin@disabled.com',
      password: '$2a$10$X.G59TO/X9LHchg0UOz7Zu8LSfyifTQhyTPloy.eRdj.GFo7DGQEu',
      role: 'admin',
      status: 'disabled',
      phone: '1234567890',
      last_login: new Date().toISOString(),
      address: '123 Admin St, Admin City, Country',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ]);
};
