<template>
  <tablechars :chars="characters" />
</template>

<script>
import tablechars from './../components/table'
import charactersService from '@/services/charactersService'

export default {
  name: 'List',
  components: { tablechars },
  data: () => ({
    characters: [],
    loading: 0
  }),
  apollo: {
    characters: {
      query: charactersService.allCharactersQuery,
      loaginKey: 'loading'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
