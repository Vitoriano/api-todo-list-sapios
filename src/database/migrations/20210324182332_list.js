
exports.up = function(knex) {
  return knex.schema.createTable('list', function(table) {
    table.increments('id')
    table.string('name').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('update_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('list')
};
