
exports.up = function(knex) {
  return knex.schema.createTable('task_list_item', function(table) {
    table.increments('id')
    table.string('name').notNullable()
    table.string('describe').notNullable()
    table.string('email').notNullable()
    table.integer('list_id')
      .unsigned()
      .references('list.id')
    table.integer('update_count').notNullable().defaultTo(0)
    table.boolean('is_done').defaultTo(false)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('update_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('task_list_item')
};
