// initial state is an empty array

const initialState = []

export default function (state = initialState, action) {
  const { id, task } = action
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id, task }]
    default:
      return state
  }
}
