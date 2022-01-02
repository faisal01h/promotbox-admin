import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Posters from "./pages/Posters.vue";
import Users from "./pages/Users.vue";
import Reports from "./pages/Reports.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/posters", component: Posters },
  { path: "/users", component: Users },
  { path: "/reports", component: Reports },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");

// createApp(App).mount('#app')
