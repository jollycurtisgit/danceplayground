import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Login2 from "./components/Login2.vue";
import SignUp from "./components/SignUp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/LogIn", component: Login },
    { path: "/Login2", component: Login2 },
    { path: "/SignUp", component: SignUp }
  ]
});
