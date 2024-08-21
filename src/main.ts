import { createApp } from "vue";

// Importing the Pinia plugin
import { createPinia } from "pinia";

// Importing the Vuetify plugin
import { vuetify } from "./plugins/vuetify";

// Importing the global css file
import "./style.css";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
const pinia = createPinia();

app.use(vuetify).use(pinia).use(router).mount("#app");
