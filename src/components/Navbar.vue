<template>
<nav class="navbar navbar-expand navbar-custom navbar-dark">
  <div class="container">
    <g-link to="/" class="navbar-brand" exact>
      <span class="brand-icon"><FontAwesomeIcon icon="laptop-code" /></span>
      <span class="brand-name ml-2 d-none d-sm-inline">{{ $static.metadata.siteName }}</span>
    </g-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-items">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu-items">
      <div class="navbar-nav ml-auto">
        <g-link class="nav-item nav-link" to="/" exact>About me</g-link>
        <g-link class="nav-item nav-link" to="/resume/" exact>Resume</g-link>
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

