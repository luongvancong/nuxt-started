<template lang="jade">
  div
    .wrapper.row2
      #container.clear
        #fof.clear
          .hgroup.clear
            h1 404
            h2
              | Lỗi !
              span Không tìm thấy trang
          p Rất tiếc chúng tôi không tìm thấy trang bạn yêu cầu
          p
            nuxt-link(to="/") Quay lại trang chủ »
</template>

<script>
  export default {
    name: 'Error404',
    props: ['error']
  }
</script>

<style lang="scss" scoped>
  html {
    overflow-y: scroll;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
    color: #919191;
    background-color: #232323;
  }

  .justify {
    text-align: justify;
  }

  .bold {
    font-weight: bold;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  .nostart {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .hidden {
    display: none;
  }

  .clear {
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
      line-height: 0;
    }
    display: inline-block;
    clear: both;
  }

  html[xmlns] .clear {
    display: block;
  }

  * html .clear {
    height: 1%;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  .fl_left {
    float: left;
  }

  .fl_right {
    float: right;
  }

  img {
    margin: 0;
    padding: 0;
    border: none;
    line-height: normal;
    vertical-align: middle;
  }

  .imgholder, .imgl, .imgr {
    padding: 4px;
    border: 1px solid #D6D6D6;
    text-align: center;
  }

  .imgl {
    float: left;
    margin: 0 15px 15px 0;
    clear: left;
  }

  .imgr {
    float: right;
    margin: 0 0 15px 15px;
    clear: right;
  }

  address, article, aside, figcaption, figure, footer, header, hgroup, nav, section {
    display: block;
    margin: 0;
    padding: 0;
  }

  div.wrapper {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
  }

  .row1 {
    color: #C0BAB6;
    background-color: #333333;
    a {
      color: #C0BAB6;
      background-color: #333333;
    }
  }

  .row2 {
    color: #979797;
    background-color: #FFFFFF;
    a {
      color: #FF9900;
      background-color: #FFFFFF;
    }
  }

  .row3 {
    color: #919191;
    background-color: #232323;
    a {
      color: #919191;
      background-color: #232323;
    }
  }

  div.wrapper {
    h1, h2, h3, h4, h5, h6 {
      margin: 0 0 15px 0;
      padding: 0;
      font-size: 20px;
      font-weight: normal;
      line-height: normal;
    }
  }

  form, fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  legend {
    margin: 0;
    padding: 0;
    border: none;
    display: none;
  }

  input, textarea, select {
    font-size: 12px;
    font-family: Georgia,"Times New Roman",Times,serif;
  }

  #header, #container, #footer {
    display: block;
    width: 960px;
    margin: 0 auto;
  }

  #fof {
    display: block;
    width: 100%;
    padding: 150px 0;
    line-height: 1.6em;
    text-align: center;
    .hgroup {
      display: block;
      width: 80%;
      margin: 0 auto;
      padding: 0;
      h1, h2 {
        margin: 0 0 0 40px;
        padding: 0;
        float: left;
        text-transform: uppercase;
      }
      h1 {
        margin-top: -90px;
        font-size: 200px;
      }
      h2 {
        font-size: 60px;
        span {
          display: block;
          font-size: 24px;
        }
      }
    }
    p {
      margin: 25px 0 0 0;
      padding: 0;
      font-size: 16px;
      &:first-child {
        margin-top: 0;
      }
    }
  }



</style>

