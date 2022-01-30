<template>
  <div class="masterList"></div>
</template>

<script>
//hindi sya pwedeng data() return page: loggedIn kasi nga may pa token effect ka diba, paano if walang token?
export default {
  name: "MasterList",
  props: ["User"],
  data() {
    return {
      page: "LoggedIn",
    };
  },
  components: {},
};
</script>


<style scoped>
.masterList {
  background-color: green;
  width: 600px;
  height: 900px;
  margin-top: 4px;
}

.spinner-border {
  margin-top: 20px;
  margin-left: 600px;
}
</style>