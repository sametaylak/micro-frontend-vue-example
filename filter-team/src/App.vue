<template>
  <div id="Filter-App">
    <h3>Filter Team</h3>
    <input @change="toggleCheck('check1', $event)" type="checkbox"> Check 1<br>
    <input @change="toggleCheck('check2', $event)" type="checkbox"> Check 2<br>
    <input @change="toggleCheck('check3', $event)" type="checkbox"> Check 3<br>
  </div>
</template>

<script>
export default {
  name: 'FilterApp',
  methods: {
    toggleCheck (check, e) {
      window.eventBus.$emit('FilterChange', {
        check,
        checked: e.target.checked
      })
    }
  }
}
</script>

