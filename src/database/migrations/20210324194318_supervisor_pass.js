
exports.up = function(knex) {
  return knex.schema.createTable('secret_pass', function(table) {

    table.increments('id')
    table.string('password').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('secret_pass')
};
