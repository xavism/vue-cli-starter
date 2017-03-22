<template lang="html">
  <EditCharacter :character="character" :weapons="weapons"></EditCharacter>
</template>

<script>
import EditCharacter from '@/components/EditCharacter'
import charactersService from '@/services/charactersService'
import weaponsService from '@/services/weaponsService'

export default {
  name: 'Edit',
  components: { EditCharacter },
  props: {
    characterId: {
      type: String,
      required: false
    }
  },
  data: () => ({
    character: {},
    weapons: {},
    loading: 0
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

</style>
