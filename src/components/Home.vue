<template>
  <div v-bind:key="accountNum">
    <h3 v-if="Name">Hello, {{ accountNum.fName }} {{ accountNum.lName }}</h3>
    <h3 v-if="!Name">Hello You are not logged in!</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      Name: null,
    };
  },
  async created() {
    const response = await axios.get("");
    console.log(response);
    this.Name = response.data;
  },
};
</script>


<style scoped>
</style>