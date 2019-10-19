<template>
  <footer class="text-light text-center py-2">
    <p class="mb-1">&copy; {{ currentYear }} <a href="#">Phil Horrex</a>.</p>
    <p>Made with <a href="https://gridsome.org/">Gridsome</a> and <a href="https://getbootstrap.com/">Bootstrap</a>. Icons by <a href="https://fontawesome.com/">Font Awesome</a>.</p>
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