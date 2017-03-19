<template lang="html">
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ this.char.name }}</p>
        <button class="delete"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success">Save changes</a>
        <a class="button">Cancel</a>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'editmodal',
  props: ['char', 'routes'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
