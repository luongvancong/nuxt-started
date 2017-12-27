<template lang="jade">
  ul(v-if="todos.length")
    todo-item(v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id")
</template>

<script>
  import TodoItem from '~/components/TodoItem'

  export default {
    name: 'TodoList',
    props: ['todos'],
    components: {
      TodoItem
    }
  }
</script>
