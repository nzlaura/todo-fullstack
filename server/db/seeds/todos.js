exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, task: 'clean car', priority: 'Low', completed: 'yes' },
        { id: 2, task: 'do dishes', priority: 'High', completed: 'no' },
        { id: 3, task: 'exercise', priority: 'Low', completed: 'no' }
      ])
    })
}
