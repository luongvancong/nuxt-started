<template lang="jade">
  div Token: {{ token }}
</template>

<script>
  export default {
    computed: {
      token () {
        return this.$store.state.api.token
      }
    }
  }
</script>