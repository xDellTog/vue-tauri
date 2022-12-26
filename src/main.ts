import { createApp } from "vue";
import App from "./app/App.vue";
import { createPinia } from "pinia";
import { router } from "./app/router";

const app = createApp(App);

app.use(router);

app.use(createPinia());

app.mount("#app");
