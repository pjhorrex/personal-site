<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
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
h1, h2, h3, h4, h5 {
  color: $primary;
  font-family: $font-custom-headline;
  font-weight: bolder;
}

.section-headline {
  border: 4px solid $primary;
  max-width: 26rem;
  border-radius: 1rem;
  color: $light;
  background-color: $primary;
}

</style>
