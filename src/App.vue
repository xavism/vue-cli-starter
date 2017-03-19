<template>
  <div id="app">
    <navbar :routes="routes" id="navbar"/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import Router from '@/router/index'

let routes = Router.options.routes
export default {
  name: 'app',
  data () {
    return {
      routes
    }
  },
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar {
  margin-bottom: 30px;
}
</style>
