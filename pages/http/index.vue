<template lang="jade">
  div
    p Token: {{ token }}
    p Exp: {{ expire }}
    nuxt-link(to="/data") Link data
    button(v-on:click="loadPosts") Load posts
    ul
      li(v-for="item in items") {{ item.title }}
</template>

<script>
  import HttpApi from '~/helpers/http-api'
  export default {
    computed: {
      token () {
        return this.$store.state.api.token
      },
      expire () {
        return this.$store.state.api.token_expire
      }
    },

    data: function () {
      return {
        items: []
      }
    },

    methods: {
      loadPosts: function () {
        HttpApi.setToken(this.$store.state.api.token)
        HttpApi.get('/posts')
          .then((response) => {
            this.items = response.data
          })
      }
    }
  }
</script>