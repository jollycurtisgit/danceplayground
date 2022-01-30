<template>
  <div>
    <div v-if="user" id="LoggedIn">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          >Home</a
        >
        <a
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
          >Profile</a
        >
        <a
          class="nav-link"
          id="v-pills-classes-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-classes"
          type="button"
          role="tab"
          aria-controls="v-pills-classes"
          v-on:click="gotoDanceClasses"
          aria-selected="false"
          >Classes</a
        >

        <a
          class="nav-link"
          id="v-pills-eClasses-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-eClasses"
          aria-selected="false"
          >Enrolled Classes</a
        >
        <a
          class="nav-link"
          id="v-pills-aClasses-tab"
          data-bs-toggle="pill"
          href="#v-pills-aClasses"
          role="tab"
          aria-controls="v-pills-aClasses"
          aria-selected="false"
          v-on:click="gotoAddClasses"
          >Add Classes</a
        >
        <a
          class="nav-link"
          id="v-pills-friends-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-friends"
          type="button"
          role="tab"
          aria-controls="v-pills-friends"
          aria-selected="false"
          >Friends</a
        >
        <a
          class="nav-link"
          id="v-pills-messages-taaaaaaaab"
          data-bs-toggle="pill"
          href=""
          role="tab"
          aria-controls=""
          aria-selected="false"
          >Directions</a
        >
        <a
          class="nav-link"
          id="v-pills-settttings-taaaaab"
          data-bs-toggle="pill"
          v-on:click="LogOut"
          href=""
          role="tab"
          aria-controls=""
          aria-selected="false"
          >Log Out</a
        >
      </div>
      <!--End of Navbar-->
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          ...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          ...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc
        </div>
        <!--div class="tab-pane fade" id="v-pills-classes" .bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcj </div>-->

        <DanceClasses
          v-if="page == 'DanceClasses'"
          class="tab-pane fade"
          id="v-pills-classes"
          role="tabpanel"
          aria-labelledby="v-pills-aClasses-tab"
        />

        <div
          class="tab-pane fade"
          id="v-pills-eClasses"
          role="tabpanel"
          aria-labelledby="v-pills-eClasses-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-aClasses"
          role="tabpanel"
          aria-labelledby="v-pills-aClasses-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-friends"
          role="tabpanel"
          aria-labelledby="v-pills-friends-tab"
        >
          ...
        </div>
      </div>
      <!---End of Nav--->
      <div id="container">
        <h3>Hello, you are logged in as: {{ me.email }}</h3>
        <DanceClasses v-if="page == 'DanceClasses'" />
      </div>
    </div>
    <!--End Of LoggedIn-->
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
import DanceClasses from "./DanceClasses.vue";
import AddClasses from "./AddClasses.vue";

//import Nav_Home from "./Nav_Home.vue";
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
    DanceClasses,
    AddClasses,
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
    gotoAddClasses() {
      /*this.$router.push("/AddClasses");*/
      this.page = "DanceClasses";
    },
    LogOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    Home() {
      this.$router.push("/Home");
    },
    gotoDanceClasses: function () {
      this.page = "DanceClasses";
    },
    DanceClasses() {
      /* this.$router.push("/DanceClasses");*/
      alert("Napindot mo ang DanceClasses");
      this.page = "DanceClasses";
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

#v-pills-tab {
  background-color: white;
  width: 230px;
  height: 900px;
  left: 0;
  position: fixed;
}

#v-pills-classes {
  background-color: red;
  width: 9000px;
  height: 9000px;
}
</style>