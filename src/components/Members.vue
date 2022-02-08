<template>
  <div>
    <!--Navbar-->
    <div
      class="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        class="nav-link"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        v-on:click="Home"
        >Home</a
      >
      <a
        class="nav-link"
        id="v-pills-profile-tab"
        data-toggle="pill"
        href="#v-pills-profile"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
        >Profile</a
      >
      <a
        class="nav-link active"
        id="v-pills-messages-tab"
        data-toggle="pill"
        href="#v-pills-messages"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        v-on:click="DanceClasses"
        >Classes</a
      >
      <a
        class="nav-link"
        id="v-pills-messages-tab"
        data-toggle="pill"
        href="#v-pills-messages"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        >Enrolled Classes</a
      >
      <a
        class="nav-link"
        id="v-pills-messages-tab"
        data-toggle="pill"
        href="#v-pills-messages"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        v-on:click="gotoAddClasses"
        >Add Classes</a
      >
      <a
        class="nav-link"
        id="v-pills-messages-tab"
        data-toggle="pill"
        href="#v-pills-messages"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        >Friends</a
      >
      <a
        class="nav-link"
        id="v-pills-messages-tab"
        data-toggle="pill"
        href="#v-pills-messages"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        >Directions</a
      >
      <a
        class="nav-link"
        id="v-pills-settings-tab"
        data-toggle="pill"
        v-on:click="LogOut"
        href="#v-pills-settings"
        role="tab"
        aria-controls="v-pills-settings"
        aria-selected="false"
        >Log Out</a
      >
    </div>
    <!--End of Navbar-->
    <!--Members Div-->
    <div v-for="_id in user" v-bind:key="_id">
      <h3>Hello, you are logged in as:{{ _id.email }}</h3>
      <button class="btn btn-outline-primary">Log Out</button>
    </div>
    <!--End of Members Div-->
  </div>
</template>
<script>
import axios from "axios";
const API = "https://herokudance.herokuapp.com/";
export default {
  name: "Members",
  data() {
    return {
      members: "",
    };
  },
  created: async function () {
    const response = await axios.get(API + "home", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    this.members = response.data;
  },
  methods: {
    gotoAddClasses() {
      this.$router.push("/AddClasses");
    },
    LogOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    Home() {
      this.$router.push("/Home");
    },
    DanceClasses() {
      this.$router.push("/DanceClasses");
    },
  },
};
</script>

<style>
</style>