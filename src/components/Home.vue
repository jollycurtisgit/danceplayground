<template>
  <div>
    <button @click="displayMe">Classes</button>
    <div v-for="n in Ako" v-bind:key="n.accountNum">
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
      Ako: [],
    };
  },
  created: async function () {
    const response = await axios.get("");
    console.log(response);
    this.Name = response.data;
  },
  methods: {
    async displayMe() {
      const response = await axios.get("http://localhost:3000");
      this.Ako = response.data;
      console.log(response.data);
    },
  },
};
</script>


<style scoped>
</style>