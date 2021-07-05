exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, task: 'clean car' },
        { id: 2, task: 'do dishes' },
        { id: 3, task: 'exercise' }
      ])
    })
}
