/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('audit_logs').del()
  await knex('audit_logs').insert([
    {
      admin_id: '9d21b48d-d584-4562-8cff-ebd6a9cef44a',
      action: 'create_product',
      details: 'Created product with data: {"name":"Sample Product","price":100}',
      created_at: new Date().toISOString(),
    },
    {
      admin_id: '9d21b48d-d584-4562-8cff-ebd6a9cef44a',
      action: 'update_order_status',
      details: 'Updated order 123 to status: shipped',
      created_at: new Date().toISOString(),
    }
  ]);
};
