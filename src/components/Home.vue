<template>
<div class="Home">
    <LoggedIn v-if="page == 'LoggedIn'" />
</div>
</template>

<script>
import LoggedIn from "./LoggedIn.vue";

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
    LoggedIn
  },
};
</script>


<style scoped>
/*
.Home {
  background-color: white;
  width: 600px;
  height: 900px;
  margin-top: 4px;
}

*/


.spinner-border{
  margin-top: 20px;
  margin-left: 600px;
}

</style>