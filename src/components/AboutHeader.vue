<template>
  <div class="about-header text-light">
    <div class="container h-100 d-flex">
      <div class="about-info-container row justify-content-center"
        v-for="edge in $static.about.edges" :key="edge.node.id"
      >
        <div class="justify-content-lg-center col-lg-2 col-md-3 col-4 my-md-auto mb-3">
          <g-image class="about-header-image w-100" alt="Phil Horrex" src="~/img/phil.jpg" width="500" />
        </div>
        <div class="col-xl-6 col-lg-7 col-md-8 my-3">
          <h1 class="text-light">
            {{ edge.node.title }}
            <span>{{ edge.node.subtitle }}</span>
          </h1>

          <div class="mb-0" v-html="edge.node.content"></div>

          <nav class="nav mt-3 mb-2 justify-content-center justify-content-md-start"
            v-for="edge in $static.social.edges" :key="edge.node.id"
          >
            <a class="nav-link d-flex m-1" target="_blank"
              v-for="(service, key) in edge.node.services"
              :class="{ 'disabled': service.disabled }"
              :key="key"
              :href="service.href">
              <FontAwesomeIcon class="fa-2x fa-fw justify-content-center"
                :icon="[service.faprefix, service.faclass]"
                />
            </a>
          </nav>

          <span class="social-caption m-2">{{ edge.node.socialtext }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query IndexContent {
  about: allIndexContent(filter: {ident: {eq:"about"}}, limit: 1) {
    edges {
      node {
        id
        ident
        content
        title
        subtitle
        socialtext
        services {
          name
          href
          faprefix
          faclass
          disabled
        }
      }
    }
  },
  social: allIndexContent(filter: {ident: {eq:"social"}}, limit:1) {
    edges {
      node {
        id
        ident
        services {
          name
          href
          faprefix
          faclass
          disabled
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
$disabled-link: rgba(23, 59, 49, 0.33);

.about-header {
  text-align: center;
  background-color: rgba($primary, 0.8);
  margin-top: -56px;

  a {
    color: $light;
    text-decoration: underline;
  }

  nav {
    a.nav-link {
      padding: 0.4rem;
      margin: 0 0.5rem;
      background-color: darken($primary, 5%);
      border-radius: 0.75rem;
      border: 0.15rem $light solid;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &.disabled {
        color: $disabled-link;
      }
    }
  }

  span.social-caption {
    font-family: $font-custom-headline;
    font-weight: bold;
  }

  h1 > span:before {
    content: '\a';
    white-space: pre;
  }

  @include media-breakpoint-up(lg) {
    h1 > span:before {
      content: '';
    }
  }
}

.about-header-image {
  border: 0.2rem $light solid;
  border-radius: 1rem;
}

.about-info-container {
  $margin: 10rem;
  margin-top: calc(#{$margin} - 56px);

  @include media-breakpoint-up(md) {
    margin-bottom: calc(#{$margin} / 2);
    text-align: left;
  }
}
</style>