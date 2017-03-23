<template>
  <tablechars :chars="characters" />
</template>

<script>
import tablechars from './../components/table'

import { characters } from './../data'
export default {
  name: 'List',
  components: { tablechars },
  data: () => ({
    characters: characters,
    loading: 0
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
