// initial state is an empty array

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, task } = action
      return [...state, { id, task }]
    default:
      return state
  }
}
