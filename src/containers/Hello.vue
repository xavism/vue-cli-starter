<template>
  <div class="hello">
    <h1 class="title is-1" >{{ msg }}</h1>
      <img src="./../assets/vader.png" id="vader">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to the force'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

#vader {
  margin: 0 auto;
}
#vader {
  width: 300px;
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
