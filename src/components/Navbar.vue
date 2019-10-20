<template>
<nav class="navbar navbar-expand-md navbar-custom navbar-dark">
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
        <g-link class="nav-item nav-link" to="/" exact>About me</g-link>
        <g-link class="nav-item nav-link" to="/resume/" exact>Résumé</g-link>
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

.navbar-dark {
  .navbar-brand {
    color: $light !important;
  }
}

$light-opacity: rgba(231, 255, 228, 90%);
.navbar-dark .navbar-nav .nav-link {
  color: $light-opacity;
}
</style>

