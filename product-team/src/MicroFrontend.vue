<template>
  <main :id="`${name}-container`"/>
</template>

<script>
export default {
  name: 'ProductTeam',
  props: [
    'name',
    'host'
  ],
  async mounted () {
    const scriptId = `micro-frontend-script-${this.name}`;

    if (document.getElementById(scriptId)) {
      this.render();
      return;
    }

    const response = await fetch(`${this.host}/asset-manifest.json`)
    const manifest = await response.json()

    const script = document.createElement('script');
    script.id = scriptId;
    script.crossOrigin = '';
    script.src = `${this.host}/${manifest['app.js']}`;
    script.onload = this.render;
    document.head.appendChild(script);
  },
  methods: {
    render () {
      window[`render${this.name}`](`#${this.name}-container`)
    }
  }
}
</script>

