<template>
  <div>
        <div v-if="user" id="LoggedIn">
            <Nav_Home />
            <div id ="container">
                <h3>Hello, you are logged in as: {{me.email}}</h3>
                  <div v-for="_id in user" v-bind:key="_id">
                      <h3>Hello, you are logged in as:{{ _id.email }}</h3>
                      <button class="btn btn-outline-primary">Log Out</button>
                  </div>
            </div>  
         </div>

         <div v-if="!user" id="LoggedIn">
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <br>
            <br>
         <h3>Please wait... unless you did not logged in</h3></div>
  </div>
</template>

<script>
import axios from "axios";
import Nav_Home from "./Nav_Home.vue";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
export default {
  name: "LoggedIn",
  data() {
    return {
      user: null,
      me: null
    };
  },
  components: {
      Nav_Home
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
#LoggedIn {
  margin-top: 0px;
  display: flex;
  width: 1500px;
}

#container{
  margin-top: 20px;
  margin-left: 600px;
  background-color: orange;
}
</style>