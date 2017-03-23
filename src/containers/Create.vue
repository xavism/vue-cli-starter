<template lang="html">
  <CreateCharacter :weapons="weapons"></CreateCharacter>
</template>

<script>
import CreateCharacter from '@/components/CreateCharacter'
import weaponsService from '@/services/weaponsService'

export default {
  name: 'Create',
  components: { CreateCharacter },
  data: () => ({
    weapons: {},
    loading: 0
  }),
  apollo: {
    weapons: {
      query: weaponsService.allWeaponsQuery,
      loadingKey: 'loading'
    }
  }
}
</script>

<style lang="css">
</style>
