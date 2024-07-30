/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('transection', (table) => {
        table.increments('id');
        table.string('note', 255);
        table.string('price', 255);
        table.string('image', 255);
        table.string('date', 255);
        table.string('bid', 255);
        table.string('uid', 255);
        table.string('cid', 255);
        table.boolean('is_get');
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

