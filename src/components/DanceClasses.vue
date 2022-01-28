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
    <h1>All Classes</h1>
  <div id ="DanceClassForm">
    <div
      class="card"
      style="width: 18rem"
      v-for="id in classes"
      v-bind:key="id"
    >
      <!--img src="..." class="card-img-top" alt="..."-->
      <div class="card-body">
        <h5 class="card-title">{{ id.name }}</h5>
        <p class="card-text">
          Location: {{ id.location }}
          <br />
          Schedule: {{ id.schedule }}
          <br />
          Price per session: {{ id.price }}
        </p>
        <a href="#" class="btn btn-primary">Enroll</a>
      </div>

    
    </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
//import ClassCard from "@/components/ClassCard";
export default {
  name: "DanceClasses",
  data: function () {
    return {
      classes: "",
    };
  },
  async created() {
      const response = await axios.get(API + "AddClasses");
      this.classes = response.data;
      console.log(response.data);
      console.log("created async is here");
  },  
  methods: {
    gotoAddClasses () {
        this.$router.push("/AddClasses")
      },
      LogOut() {
        localStorage.removeItem("token");
        this.$router.push("/");
      },
      Home() {
        this.$router.push("/Home")
      },
  },
};
</script>

<style>

#DanceClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 900px;
  height: 600px;
  padding: 40px 50px 80px 50px;
  margin-left: 600px;
  margin-top: 50px;
  margin-right:30px;
  margin-buttom:30px;
  Display:flex;
}

#v-pills-tab {
  background-color: white;
  width: 400px;
  height: 900px;
  left: 0;
  position: fixed;
  margin-top: 0px;
}
.card {
  background-color: yellow;
  border-radius: 5px;
  height: 150px;
  margin: 7px;
}
.card-body {
  background-color: yellow;
}

</style>