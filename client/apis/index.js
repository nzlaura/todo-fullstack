import request from 'superagent'

export function createTodo (todo) {
  return request
    .post('/api/v1/todos')
    .send({ todo })
    .then(res => {
      return res.body
    })
}
