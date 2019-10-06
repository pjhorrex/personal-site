<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <slot/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "../styles/custom";
@import "bootstrap/scss/bootstrap";

h1, h2, h3, h4, h5 {
  color: $primary;
  font-family: $font-custom-headline;
  font-weight: bolder;
}

</style>
