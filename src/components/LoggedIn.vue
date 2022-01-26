<template>
  <div>
    <div v-for="id in user" v-bind:key="id">
      <h3>Hello, {{ id.email }}</h3>
      <button class="btn btn-outline-primary">Log Out</button>
      <!--Hheeeyy revieww!!-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
export default {
  name: "LoggedIn",
  data() {
    return {
      user: [],
    };
  },
  created: async function () {
    const response = await axios.get(API + "home", {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
      //this.Name = response.data;
      //this.user = response.data
      //}
    });
    this.user = response.data;
    console.log(response.data);
  },
  methods: {
    LogOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>


<style scoped>
</style>