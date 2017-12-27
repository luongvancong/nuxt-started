<template lang="jade">
  div
    h2 Todo application
    todo-input
    todo-list(v-bind:todos="todos")
</template>

<script>
  import TodoInput from '~/components/TodoInput'
  import TodoList from '~/components/TodoList'

  export default {
    computed: {
      todos () {
        return this.$store.state.todos.todos
      }
    },
    components: {
      TodoInput,
      TodoList
    },
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'}
      ]
    }
  }
</script>
