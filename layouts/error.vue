<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <error-404 v-bind:error="error" />
    </div>
  </div>
</template>

<script>

import Error404 from '~/components/error-404'

export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
  components: {
    Error404
  }
}
</script>