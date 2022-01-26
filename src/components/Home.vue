<template>
  <div>
    <div v-if="user" class="Greetings">
      <div v-for="u in user" v-bind:key="u">
        <h3>Hello, {{ u.email }}</h3>
        <button class="btn btn-outline-primary">Log Out</button>
        <!--Hheeeyy revieww!!-->
      </div>
    </div>
    <!--Hheeeyy revieww!!-->
    <div v-if="!user" class="Greetings">
      <div v-for="u in classes" v-bind:key="u">
        <h3>Hello You are not logged in!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  props: ["User"],
  data() {
    return {
      Name: [],
      Ako: [],
      user: [],
    };
  },
  created: async function () {
    const response = await axios.get("http://localhost:3000/home", {
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
#v-pills-tab {
  background-color: white;
  width: 400px;
  height: 900px;
  left: 0;
  position: fixed;
}

.Greetings {
  background-color: white;
  width: 4000px;
  height: 300px;
  margin-left: 780px;
  margin-top: 50px;
}
</style>