<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Side</th>
        <th>Weapon</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="char in chars">
        <th> {{ char.name }} </th>
        <th> {{ char.side }} </th>
        <th> {{ char.weapon.type }} </th>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'tablechars',
  props: ['chars'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
