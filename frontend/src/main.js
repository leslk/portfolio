import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './styles/element/index.scss';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCodeFork, faCode, faGear, faPhone, faAt, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'element-plus/dist/index.css'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router);
library.add(faBars, faCodeFork, faCode, faGear, faSquareGithub, faLinkedin, faAt, faPhone, faTriangleExclamation);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(MotionPlugin);
app.use(ElementPlus);

app.mount('#app')