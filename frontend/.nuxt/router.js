import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _471fdc6e = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _7b031b6c = () => interopDefault(import('..\\pages\\filmes\\index.vue' /* webpackChunkName: "pages/filmes/index" */))
const _bc02ca06 = () => interopDefault(import('..\\pages\\help\\index.vue' /* webpackChunkName: "pages/help/index" */))
const _0e89669f = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _21d7105b = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _689b2136 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _59812144 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _471fdc6e,
    name: "about"
  }, {
    path: "/filmes",
    component: _7b031b6c,
    name: "filmes"
  }, {
    path: "/help",
    component: _bc02ca06,
    name: "help"
  }, {
    path: "/home",
    component: _0e89669f,
    name: "home"
  }, {
    path: "/register",
    component: _21d7105b,
    name: "register"
  }, {
    path: "/search",
    component: _689b2136,
    name: "search"
  }, {
    path: "/",
    component: _59812144,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
