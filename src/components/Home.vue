<template>
  <div>
    <div v-for="n in login" v-bind:key="n.accountNum">
      <h3 v-if="Name">Hello, {{ n.email }}</h3>
      <h3 v-if="!Name">Hello You are not logged in!</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      Name: [],
    };
  },
  created: async function () {
    const response = await axios.get("");
    console.log(response);
    this.Name = response.data;
  },
};
</script>


<style scoped>
</style>