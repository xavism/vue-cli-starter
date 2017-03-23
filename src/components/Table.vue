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
      <tr class="has-text-centered">
        <td colspan="4"><router-link class="button is-primary" to="/create">Create</router-link></td>
      </tr>
      <tr v-for="char in chars">
        <td>
          <span class="character-icon">
            <i :class="'sw-' + char.iconName"></i>
          </span>
          <h2>{{ char.name }}</h2>
        </td>
        <td>
          <i v-if="char.side == 'Light Side'" class='sw-rebel-alliance big-icon'></i>
          <i v-else class='sw-imperial-emblem big-icon'></i>
        </td>
        <td>
          <i v-if="char.weapon.type == 'Blaster'" class="sw-blaster big-icon"></i>
          <i v-else class="sw-lightsaber big-icon"></i>
          <span :class="'weapon-color ' + char.weapon.color"></span>
        </td>
        <td><router-link class="button is-primary" :to="'/edit/' +  char.id ">Edit</router-link></td>
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

.big-icon {
  font-size: 3em;
}

.weapon-color {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
}

.weapon-color.Green {
  background-color: #23d160;
}

.weapon-color.Blue {
  background-color: #2F67F8;
}

.weapon-color.Red {
  background-color: #CE0C2C;
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
