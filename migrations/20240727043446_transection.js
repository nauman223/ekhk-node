/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('transection', (table) => {
        table.increments('id');
        table.string('description', 255);
        table.string('amount', 255);
        table.string('bill', 255);
        table.boolean('is_deleted').defaultTo(false);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('transection');
};

