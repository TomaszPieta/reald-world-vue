import Vue from "vue";
import Router from "vue-router";
import EventShow from "./views/EventShow.vue";
import EventList from "./views/EventList.vue";
import EventCreate from "./views/EventCreate.vue";
import User from "./views/User.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList
    },
    {
      path: "./event:id",
      name: "EventShow",
      component: EventShow,
      props: true
    },
    {
      path: "./event/create",
      name: "EventCreate",
      component: EventCreate
    },
    {
      path: "./user/:username",
      name: "User",
      component: User,
      props: true
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
