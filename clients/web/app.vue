<style lang="stylus">
@import "./clients/web/shared.styl"
html, body
  font-family Verdana
  font-size 13px
  margin 0
  height 100%
  background-color $bg

ul
  list-style-type none
  padding 0
  margin 0

a
  color #000
  cursor pointer
  text-decoration none

#header
  background-color #f60
  height 24px
  position relative
  h1
    font-weight bold
    font-size 13px
    display inline-block
    vertical-align middle
    margin 0
  .source
    color #fff
    font-size 11px
    position absolute
    top 4px
    right 4px
    a
      color #fff
      &:hover
        text-decoration underline

#yc
  border 1px solid #fff
  margin 2px
  display inline-block
  vertical-align middle
  img
    vertical-align middle

.view
  position absolute
  width 100%
  transition opacity .1s ease
  box-sizing border-box
  padding 8px 20px
  &.v-enter, &.v-leave
    opacity 0

footer
  position fixed
  right 10px
  bottom 10px
  font-size 9px
</style>

<template>
  <!-- header -->
  <div id="header">
    <a id="yc" href="http://www.ycombinator.com">
      <img src="https://news.ycombinator.com/y18.gif">
    </a>
    <h1><a href="#">Hacker News </a></h1>
    <span class="source">
      Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
      <a href="https://github.com/yyx990803/vue-hackernews" target="_blank">Source</a>
    </span>
  </div>
  <!-- main view -->
  <div v-component="{{view}}" v-with="params:params" v-transition></div>
  <footer>{{hacker}}</footer>
</template>

<script>

//Bring in any libraries using require('anything') - this is what makes vue/components a treat - no more worrying about importing dependencies manually.
var _ = require('underscore');
console.log('We are running Underscore Ver. ', _.VERSION);


// Set up the main app here.
module.exports = {
  el: '#app', //Important to reference the top level App using (Css selector '#app')
  data: { //This data object will bind to all elements and accessible interfaces.
    view: '',
    hacker : 'Denis Mars',
    params: {
      page: 1,
      userId: null,
      itemId: null
    }
  },
  filters: {//Load in your filters here to use anywhere througout your app.
    fromNow: require('./filters/from-now'),
    domain: require('./filters/domain')
  },
  components: { //Load in all the componenets for this app here.
    'news-view': require('./views/news-view.vue'),
    'item-view': require('./views/item-view.vue'),
    'user-view': require('./views/user-view.vue')
  }
}
</script>