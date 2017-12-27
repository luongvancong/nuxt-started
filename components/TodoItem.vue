<template lang="jade">
  li
    input(type="checkbox" @change="toggle(todo)")
    span(:class="todo.check ? 'strike' : ''") {{ todo.text }}
    small(@click="remove(todo)") delete
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
      remove: function (todo) {
        this.$store.commit('todos/remove', todo)
      },
      toggle: function (todo) {
        this.$store.commit('todos/toggle', todo)
      }
    }
  }
</script>

<style lang="scss" scoped>
  span {
    &.strike {
      text-decoration: line-through;
    }
  }
</style>
