<template>
  <div id="Browse-App">
    <h3>Browse Team</h3>
    <ul>
      <li v-for="(value, key) in checks">
        {{ key }}:{{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BrowseApp',
  data () {
    return {
      checks: {}
    }
  },
  mounted () {
    window.eventBus.$on('FilterChange', payload => {
      this.$set(this.checks, payload.check, payload.checked)
    })
  }
}
</script>

