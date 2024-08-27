import { createApp } from "vue";

// Importing the Pinia plugin
import { createPinia } from "pinia";

// Importing the Vuetify plugin
import { vuetify } from "./plugins/vuetify";

// importing icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPause, faPlay, faCopy } from "@fortawesome/free-solid-svg-icons";

// Importing the global css file
import "./style.css";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
const pinia = createPinia();

library.add(faPause, faPlay, faCopy);

app.component("font-awesome-icon", FontAwesomeIcon)
	.use(vuetify)
	.use(pinia)
	.use(router)
	.mount("#app");
