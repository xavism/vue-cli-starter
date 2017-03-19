<template>
  <tablechars :chars="characters" />
</template>

<script>
import { characters } from './../data.js'
import tablechars from './../components/table'

export default {
  name: 'List',
  components: { tablechars },
  data () {
    return {
      characters
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
