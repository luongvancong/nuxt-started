<template lang="jade">
  div
    input(type="text" @keyup.enter="addTodo")
</template>

<script>
  export default {
    name: 'TodoInput',
    methods: {
      addTodo: function (e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
      }
    }
  }
</script>
