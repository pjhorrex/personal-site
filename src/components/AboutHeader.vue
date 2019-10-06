<template>
  <div class="about-header bg-primary text-light">
    <div class="container h-100 d-flex">
      <div class="about-info-container row justify-content-center">
        <div class="justify-content-lg-center col-lg-2 col-md-3 col-4 my-md-auto mb-3">
          <g-image class="about-header-image w-100" alt="Example image" src="~/img/phil.jpg" width="500" />
        </div>
        <div class="col-xl-6 col-lg-7 col-md-8 my-auto">
          <h1 class="text-light" v-html="aboutHeadline"></h1>

          <p class="mb-0" v-html="aboutText"></p>

          <nav class="nav mt-3 mb-2 justify-content-center justify-content-md-start">
            <a class="nav-link d-flex" target="_blank"
              v-for="(link, key) in social"
              :class="{ 'disabled': link.disabled }"
              :key="key"
              :href="link.href">
              <FontAwesomeIcon class="fa-2x fa-fw justify-content-center" :icon="['fab', link.faClass]" />
            </a>
          </nav>

          <span class="social-caption m-2">{{ socialText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      aboutHeadline: `Hello there! <span>My name is Phil.</span>`,
      aboutText: `I'm a web developer and data analyst from the Philadelphia area, currently working
        at <a href="http://www.barrack.com" target="_blank">Barrack, Rodos &amp; Bacine</a>. I'm
        a runner, diehard Eagles fan, and video game lover. Probably out looking for my next cup
        of coffee.`,
      socialText: "Find me online",
      social: [
        {
          href: "https://github.com/pjhorrex",
          faClass: "github-alt",
          disabled: false
        },
        {
          href: "https://www.instagram.com/philliphorrex/",
          faClass: "instagram",
          disabled: true
        },
        {
          href: "https://keybase.io/pjhorrex",
          faClass: "keybase",
          disabled: false
        },
        {
          href: "https://www.facebook.com/pjhorrex",
          faClass: "facebook-f",
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$disabled-link: rgba(23, 59, 49, 0.33);

.about-header {
  text-align: center;

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
  @include media-breakpoint-up(md) {
    //height: 30rem;
    $margin: 10rem;

    margin-top: calc(#{$margin} - 56px);
    margin-bottom: $margin;
    text-align: left;
  }
}
</style>