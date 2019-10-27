<template>
  <footer class="text-light text-center py-2">
    
    <p class="mb-1">&copy; {{ currentYear }} <g-link to="/" exact>Phil Horrex</g-link>. All rights reserved.</p>
    <p>Made with <a href="https://gridsome.org/" target="_blank">Gridsome</a> and <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>. Icons by <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>.</p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear: function() {
      const now = new Date();
      return now.getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: darken($light, 5%);
    text-decoration: underline;
  }
</style>