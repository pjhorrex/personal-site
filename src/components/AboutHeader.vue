<template>
  <div class="about-header bg-primary text-light">
    <div class="container h-100 d-flex">
      <div class="row justify-content-center my-md-auto mt-3 mb-5">
        <div class="justify-content-lg-center col-lg-2 col-md-3 col-4 my-md-auto mb-3">
          <g-image class="about-header-image w-100" alt="Example image" src="~/img/phil.jpg" width="500" />
        </div>
        <div class="col-xl-6 col-lg-7 col-md-8 my-auto">
          <h1 class="text-light">Hello there! <span>My name is Phil.</span></h1>

          <p class="mb-0">I'm a web developer and data analyst from the Philadelphia area, currently
          working at <a href="http://www.barrack.com" target="_blank">Barrack, Rodos &amp; Bacine</a>.
          I'm a runner, diehard Eagles fan, and video game lover. Probably out looking for my next cup
          of coffee.</p>

          <nav class="nav mt-2 justify-content-center justify-content-md-start">
            <a class="nav-link" target="_blank"
              v-for="(link, key) in social"
              :class="{ 'disabled': link.disabled }"
              :key="key"
              :href="link.href">
              <FontAwesomeIcon class="fa-2x" :icon="['fab', link.faClass]" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faKeybase } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faGithubAlt, faInstagram, faKeybase, faFacebook)

export default {
  components: {
    FontAwesomeIcon
  },
  data: function() {
    return {
      social: [
        {
          href: "https://github.com/pjhorrex",
          faClass: "github-alt",
          disabled: false
        },
        {
          href: "https://www.instagram.com/philliphorrex/",
          faClass: "instagram",
          disabled: false
        },
        {
          href: "https://keybase.io/pjhorrex",
          faClass: "keybase",
          disabled: false
        },
        {
          href: "https://www.facebook.com/pjhorrex",
          faClass: "facebook",
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../styles/custom";
@import "bootstrap/scss/bootstrap";

$disabled-link: rgba(23, 59, 49, 0.33);

.about-header {
  text-align: center;

  a {
    color: $light;
    text-decoration: underline;
  }

  nav > a.nav-link {
    padding: 0 0.75rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    &.disabled {
      color: $disabled-link;
    }
  }

  h1 > span:before {
    content: '\a';
    white-space: pre;
  }

  @include media-breakpoint-up(md) {
    height: 30rem;
    margin-top: -56px;
    text-align: left;
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
</style>