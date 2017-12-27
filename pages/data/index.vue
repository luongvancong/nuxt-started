<template lang="jade">
  div
    nuxt-link(to="/http") Http
    button(v-on:click="createPost()") Create Post
    button(v-on:click="editPost()") Edit post
    p Last Insert ID: {{ last_insert_id }}
    div
      p Detail
      p {{ detail.title }}
    div(v-for="post in posts")
      p Title: {{ post.title }}
      p Id: {{ post.id }}
      p Body: {{ post.body }}
</template>

<script>
  import Http from '~/helpers/http-api'

  export default {
    data: function () {
      return {
        posts: [],
        detail: {},
        last_insert_id: null
      }
    },
    async asyncData () {
      let response = await Http.get('/posts')
      let responseDetail = await Http.get('/posts/1')

      return {
        posts: response.data,
        detail: responseDetail.data
      }
    },
    methods: {
      createPost: function () {
        let that = this
        Http.post('/posts', {
          params: {
            title: 'Hello I am a younger man',
            body: 'OK fine man'
          }
        }).then((response) => {
          console.log(response)
          that.last_insert_id = response.data.id
        })
      },

      editPost: function () {
        // let that = this
        Http.put('/posts/1', {
          data: {
            title: 'Tao edit bai nay nha'
          }
        }).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>
