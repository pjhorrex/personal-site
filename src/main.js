// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Custom fonts
import 'typeface-fira-sans'
import 'typeface-roboto'

// FontAwesome
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faGithubAlt,
  faInstagram,
  faKeybase,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'
import {
  faLaptopCode,
  faEnvelope,
  faRunning,
  faBriefcase
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
  faBriefcase
)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
