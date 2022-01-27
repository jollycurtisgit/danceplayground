<template>
  <div>
    <h3 v-if="user">Hello {{user.email}}</h3>
    <h3 v-if="!user">You are not logged in</h3>
    <!--div v-for="_id in user" v-bind:key="_id">
      <h3>Hello, {{ _id.email }}</h3>
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
      user: null,
    };
  },
  created: async function () {
    const response = await axios.get(API + "home", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
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