// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Custom fonts
import 'typeface-fira-sans'
import 'typeface-roboto'

// Bootstrap
import 'bootstrap'

import $ from 'jquery';

window.$ = $;

// FontAwesome
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faGithubAlt,
  faInstagram,
  faKeybase,
  faFacebookF,
  faBootstrap,
  faLaravel,
  faSass,
  faVuejs,
  faFontAwesome,
  faFontAwesomeLogoFull,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faLaptopCode,
  faEnvelope,
  faRunning,
  faBriefcase,
  faPhone,
  faHome,
  faPlane,
  faTimesCircle,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(
  faGithubAlt,
  faInstagram,
  faKeybase,
  faFacebookF,
  faLaptopCode,
  faEnvelope,
  faRunning,
  faBriefcase,
  faPhone,
  faHome,
  faPlane,
  faTimesCircle,
  faBootstrap,
  faLaravel,
  faSass,
  faVuejs,
  faFontAwesome,
  faGithub,
  faExternalLinkAlt
)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
