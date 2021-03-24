
exports.seed = function(knex) {
  return knex('secret_pass').del()
    .then(function () {
      return knex('secret_pass').insert([
        {id: 1, password: 'TrabalheNaSaipos'}
      ]);
    });
};
