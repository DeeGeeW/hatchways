import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://api.hatchways.io/assessment" : "/";
createApp(App).use(router).mount("#app");
