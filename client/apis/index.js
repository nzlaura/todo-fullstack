import request from 'superagent'

const rootUrl = '/ap1/v1'

export function fetchTodos () {
  return request.get(rootUrl + 'tasks')
    .then(res => {
      return res.body
    })
    .catch(e =>
      console.log(e))
}

export function createTodo (todo) {
  return request
    .post(rootUrl + '/todos')
    .send({ todo })
    .then(res => {
      return res.body
    })
    .catch(e =>
      console.log(e))
}
