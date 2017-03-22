<template lang="html">
  <div class="form-container">
    <h4 class="subtitle">Edit Character</h4>
    <div class="columns">
      <div class="column is-half">
        <div class="field">
          <label class="label">Name</label>
          <p class="control">
            <input v-model="character.name" class="input" type="text" placeholder="Name">
          </p>
        </div>
        <div class="field">
          <label class="label">Icon name</label>
          <p class="control">
            <input v-model="character.iconName" class="input" type="text" placeholder="Icon name">
          </p>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Side</label>
          <p class="control">
            <label class="radio">
              <input v-model="character.side" value="Light Side" type="radio" name="question">
              Light Side
            </label>
            <label class="radio">
              <input v-model="character.side" value="Dark Side" type="radio" name="question">
              Dark Side
            </label>
          </p>
        </div>
        <div class="field">
          <label class="label">Weapon</label>
          <p class="control">
            <span class="select">
              <select v-model="character.weapon">
                <option v-for="weapon in weapons" :value="weapon.id">
                  {{ weapon.type }} - {{ weapon.color }}
                </option>
              </select>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <div class="field is-grouped">
          <p class="control">
            <button @click="updateData" class="button is-primary">Submit</button>
          </p>
          <p class="control">
            <router-link class="button is-link" to="/chars">Cancel</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import charactersService from '@/services/charactersService'

export default {
  name: 'EditCharacter',
  props: ['character', 'weapons'],
  methods: {
    updateData () {
      this.$apollo.mutate({
        mutation: charactersService.updateCharacter,
        variables () {
          return {
            charId: this.character.id,
            name: this.character.name,
            side: this.character.side,
            weapon: this.character.weapon,
            iconName: this.character.iconName
          }
        }
      }).then(data => {
        console.log('Done updating.')
      })
    }
  }
}
</script>

<style lang="css" scoped>
.form-container {
  text-align: left;
  padding: 15px;
}
</style>
