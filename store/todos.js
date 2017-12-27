export const state = () => ({
  todos: []
})

export const mutations = {
  add (state, text) {
    state.todos.push({
      text: text,
      check: false
    })
  },

  toggle (state, todo) {
    todo.check = !todo.check
  },

  remove (state, todo) {
    let index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  }
}
