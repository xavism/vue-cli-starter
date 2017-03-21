<template lang="html">
  <nav class="nav">
    <div class="nav-left">
    <router-link class="nav-item" to="/">The Force</router-link>
    <router-link v-for="route in routes" class="nav-item is-tab" v-if="route.tab" :to="route.path" :key="route.path">{{ route.title }}</router-link>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </nav>
</template>

<script>

export default {
  name: 'navbar',
  props: ['routes'],
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
