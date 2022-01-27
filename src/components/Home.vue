<template>
  <div class="Greetings">
    <LoggedIn v-if="page == 'LoggedIn'" />
    <LoggedOut v-if="page == 'LoggedOut'" />

    <div v-for="u in user" v-bind:key="u">
      <h3>Hello You are not logged in!</h3>
    </div>
  </div>
</template>

<script>
import LoggedIn from "./LoggedIn.vue";
//import LoggedOut from "./LoggedOut.vue";
//hindi sya pwedeng data() return page: loggedIn kasi nga may pa token effect ka diba, paano if walang token?
export default {
  name: "Home",
  props: ["User"],
  data() {
    return {
      page: "LoggedIn",
    };
  },
  components: {
    LoggedIn,
    // LoggedOut,
  },
};
</script>


<style scoped>
#v-pills-tab {
  background-color: white;
  width: 400px;
  height: 900px;
  left: 0;
  position: fixed;
}

.Greetings {
  background-color: white;
  width: 4000px;
  height: 300px;
  margin-left: 780px;
  margin-top: 50px;
}
</style>