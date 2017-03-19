<template>
  <tablechars :chars="characters" />
</template>

<script>
import tablechars from './../components/table'
import gql from 'graphql-tag'

const charactersQuery = gql`query CharactersQuery{
  characters: allCharacters {
    name,
    side,
    weapon{
      type,
      color
    }
  }
}
`

export default {
  name: 'List',
  components: { tablechars },
  data: () => ({
    characters: [],
    loading: 0
  }),
  apollo: {
    characters: {
      query: charactersQuery,
      loaginKey: 'loading'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
