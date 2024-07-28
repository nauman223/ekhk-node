/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('full_name', 255);
        table.string('email', 255);
        table.string('role', 255);
        table.string('gender', 255);
        table.string('password', 255); 
        table.string('phone', 255); 
        table.string('image', 255).defaultTo("https://via.placeholder.com/350x350?text=Image+Not+Uploaded");
        table.boolean('is_deleted').defaultTo(false);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};

