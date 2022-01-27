<template>
  <div>
  <h3>{{me.email}}</h3>
    <!--h3 v-if="user">Hello {{user.email}}</h3-->
    <!--h3 v-if="!user">You are not logged in</h3-->
            <div v-if="user">
              <div v-for="_id in user" v-bind:key="_id">
                <h3>Hello, you are logged in as:{{ _id.email }}</h3>
                <button class="btn btn-outline-primary">Log Out</button>
                <!--Hheeeyy revieww!!-->
              </div>
            </div>  

            <div v-if="!user"><h3>You are not logged in</h3></div>
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
      me: null
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
    this.me = response.data[response.data.length - 1]
    console.log(response.data[response.data.length - 1]);
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