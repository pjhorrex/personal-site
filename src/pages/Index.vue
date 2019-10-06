<template>
  <Layout>
    <div class="about-header bg-primary text-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="justify-content-lg-center col-xl-2  col-lg-3 col-sm-4 col-5 my-lg-auto my-1">
            <g-image class="about-header-image rounded-circle w-100" alt="Example image" src="~/img/phil.jpg" width="500" />
          </div>
          <div class="col-xl-6 col-lg-8 col-md-12 my-lg-auto my-1">
            <h1 class="text-light">Hello, world!</h1>

            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi
            labore temporeexpedita, et iste tenetur suscipit explicabo! Dolores, aperiam
            non officia eos quod asperiores</p>

            <!--
            <p class="home-links">
              <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
              <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
            </p>
            -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
@import "../styles/custom";
@import "bootstrap/scss/bootstrap";

.about-header {
  @include media-breakpoint-up(lg) {
    height: 25rem;
  }
}

.about-header-image {
  border: 0.2rem $light solid;
}
</style>
