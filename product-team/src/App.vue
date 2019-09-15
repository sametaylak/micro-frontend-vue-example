<template>
  <div id="Product-Team">
    <span id="Product-Team-Header">Product Team</span>
    <micro-frontend name="Filter" host="http://localhost:3002"/>
    <micro-frontend name="Browse" host="http://localhost:3001"/>
  </div>
</template>

<script>
import MicroFrontend from '@/MicroFrontend'

export default {
  name: 'ProductTeam',
  components: {
    MicroFrontend
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#Product-Team {
  display: grid;
  grid-template-areas:
    "header header"
    "filter browse";
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: auto 1fr;
  border: 1px dashed red;
  margin: 16px;
}

#Product-Team-Header {
  grid-area: header;
}

#Filter-App {
  grid-area: filter;
  border: 1px dashed blue;
  margin: 16px;
  height: 400px;
}

#Browse-App {
  grid-area: browse;
  border: 1px dashed green;
  margin: 16px;
  height: 400px;
}
</style>

