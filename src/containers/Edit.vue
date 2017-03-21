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
              <input v-model="character.side" value="Ligh Side" type="radio" name="question">
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
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary">Submit</button>
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
import weaponsService from '@/services/weaponsService'

export default {
  name: 'edit',
  props: {
    characterId: {
      type: String,
      required: false
    }
  },
  data: () => ({
    character: {},
    weapons: {}
  }),
  apollo: {
    character: {
      query: charactersService.characterQuery,
      loaginKey: 'loading',
      variables () {
        return {
          id: this.characterId
        }
      }
    },
    weapons: {
      query: weaponsService.allWeaponsQuery,
      loadingKey: 'loading'
    }
  }
}
</script>

<style lang="css" scoped>
.form-container {
  text-align: left;
}
</style>
