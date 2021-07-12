import request from 'superagent'

const rootUrl = '/api/v1/'

export function fetchTodos () {
  return request.get(rootUrl + 'todos')
    .then(res => {
      console.log('result received')
      return res.body
    })
    .catch(e =>
      console.log(e))
}

export function createTodo (todo) {
  return request
    .post(rootUrl + 'todos')
    .send({ todo })
    .then(res => {
      return res.body
    })
    .catch(e =>
      console.log(e))
}
