<template>
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
  <div class="container">
    <g-link to="/" class="navbar-brand">{{ $static.metadata.siteName }}</g-link>
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
@import "../styles/custom";
@import "bootstrap/scss/bootstrap";

.navbar {
  font-family: $font-custom-headline; 
}
</style>

