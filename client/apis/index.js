import request from 'superagent'

const rootUrl = '/api/v1/'

export function fetchTodos () {
  return request.get(rootUrl + 'todos')
    .then(res => {
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

// api function for deleting a todo

export function deleteTodo (id) {
  return request.delete(`${rootUrl + '/todos'}/${id}`)
    .then(res => res.body)
    .catch(e =>
      console.log(e))
}
