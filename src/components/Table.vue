<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Side</th>
        <th>Weapon</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="char in chars">
        <td>
          <span class="character-icon">
            <i :class="'sw-' + char.iconName"></i>
          </span>
          <h2>{{ char.name }}</h2>
        </td>
        <td> {{ char.side }} </td>
        <td> {{ char.weapon.type }} </td>
        <td><button class="modal-button button" :data-target="'#' + char.id"><i class="sw-pencil-square"></i></button></td>

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
th {
  padding: 0.5em 20px;
}

td {
  vertical-align: middle;
  position: relative;
  padding: 20px;
}

td h2 {
  display: inline;
  margin-left: 40px;
  font-size: 1.5em;
}

.character-icon {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: 42px;
  font-size: 3em;
}

td button {
  color: #00d1b2;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 28px;
  line-height: 28px;
  height: 28px;
}
</style>
