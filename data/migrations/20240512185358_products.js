/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('products', table => {
        table.string('id', 36).notNullable().primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.integer('price').notNullable();
        table.string('category').notNullable();
        table.integer('stock').notNullable();
    })
    .createTable('products_details', table => {
        table.string('id', 36).notNullable().primary();
        table.string('product_id', 36).notNullable().references('id').inTable('products');
        table.string('description').notNullable();
        table.string('rating');
        table.string('size');
        table.string('brand');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('products_details')
        .dropTableIfExists('products');
};
