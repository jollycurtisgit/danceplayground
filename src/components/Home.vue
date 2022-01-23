<template>
  <div>
    <div
      class="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        class="nav-link active"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
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
        class="nav-link"
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
    <div id="Greetings">
      <h3 v-if="user">Hello data, {{ user }}</h3>
      <button class="btn btn-outline-primary">Log Out</button>
      <h3 v-if="!user">Hello You are not logged in!</h3>
    </div>

    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <p>Lorem Lorem Lorem</p>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        <p>Lorem Lorem Lorem</p>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-messages"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
      >
        <p>Lorem Lorem Lorem</p>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-settings"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
      >
        <p>Lorem Lorem Lorem</p>
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

#Greetings {
  background-color: white;
  width: 4000px;
  height: 300px;
  margin-left: 780px;
  margin-top: 50px;
}
</style>