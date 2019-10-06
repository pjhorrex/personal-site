<template>
<nav class="navbar navbar-expand-md navbar-dark bg-primary text-light">
  <div class="container">
    <g-link to="/" class="navbar-brand">
      <span class="brand-icon"><FontAwesomeIcon icon="laptop-code" /></span>
      <span class="brand-name ml-2">{{ $static.metadata.siteName }}</span>
    </g-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <div class="navbar-nav ml-auto">
        <g-link class="nav-item nav-link" to="/">Home</g-link>
        <g-link class="nav-item nav-link" to="/about/">About</g-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
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
.navbar {
  font-family: $font-custom-headline; 
}
</style>

