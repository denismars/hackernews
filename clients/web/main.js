/**
 * Boot up the Vue instance and wire up the router.
 */
var hn = {}
var Vue = require('vue')
var Router = require('director').Router
hn.app = new Vue(require('./app.vue'))
hn.router = new Router()

Vue.config.debug = true

hn.router.on('/', function () {
  window.scrollTo(0, 0)
  hn.app.view = 'news-view'
  hn.app.params.page = 1
})

hn.router.on('/news', function () {
  window.scrollTo(0, 0)
  hn.app.view = 'news-view'
  hn.app.params.page = 1
})

hn.router.on('/news/:page', function (page) {
  window.scrollTo(0, 0)
  hn.app.view = 'news-view'
  hn.app.params.page = +page
})

hn.router.on('/user/:id', function (id) {
  window.scrollTo(0, 0)
  hn.app.view = 'user-view'
  hn.app.params.userId = id
})

hn.router.on('/item/:id', function (id) {
  window.scrollTo(0, 0)
  hn.app.view = 'item-view'
  hn.app.params.itemId = id
})

hn.router.configure({
  html5history: true,
  notfound: function () {
    hn.router.setRoute('/news/1')
  }
})

hn.router.init()

window.hn = hn