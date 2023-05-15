import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  fas,
  faEnvelope,
  faSpinner,
  faLock,
  faUser,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  fab,
  faGithub,
  faGitlab,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fas,
  fab,
  faSpinner,
  faEnvelope,
  faLock,
  faUser,
  faGithub,
  faGitlab,
  faLinkedin,
  faInstagram,
  faTimes
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
