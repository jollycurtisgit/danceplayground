<template>
  <div>
    <div v-if="user" id="LoggedIn">
      <Nav_Home />
      <div id="container">
        <h3>Hello, you are logged in as: {{ me.email }}</h3>
      </div>
    </div>

    <div v-if="!user" id="Waiting">
      <h3>Ooops! You are unauthorized!</h3>
      <br />
      <br />
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
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
      me: null,
    };
  },
  components: {
    Nav_Home,
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
    this.me = response.data[response.data.length - 1];
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
#Waiting {
  margin-top: 200px;
  background-color: white;
}

#LoggedIn {
  margin-top: 0px;
  display: flex;
  width: 1500px;
}

#container {
  margin-top: 20px;
  margin-left: 600px;
  background-color: orange;
}
</style>