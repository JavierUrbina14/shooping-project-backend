/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('audit_logs', table => {
        table.increments('id').primary();
        table.string('admin_id', 36).notNullable();
        table.string('action').notNullable();
        table.text('details').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Llave foránea para relacionar con la tabla de admins
        table.foreign('admin_id').references('id').inTable('admins').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('audit_logs');
};
