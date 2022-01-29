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

    <div id="DanceClassForm">
      <h1>All Classes</h1>
      <button v-on:click="View1Method">List View</button>
      <button v-on:click="View2Method">Large Icons View</button>
      <!--Second Set-->
      <div class="card" style="width: 18rem" v-if="page == 'View_2'">
        <div id="flex-box">
          <div class="card-body" v-for="id in classes" v-bind:key="id">
            <img :src="id.link" />
            <h5 class="card-title">{{ id.name }}</h5>
            <p class="card-text">
              Location: {{ id.location }}
              <br />
              Schedule: {{ id.schedule }}
              <br />
              Price per session: {{ id.price }}
            </p>
            <a href="#" class="btn btn-primary" v-on:click="Enroll">Enroll</a>
          </div>
        </div>
      </div>
      <!--First Set-->
      <div v-if="page == 'View_1'">
        <div>
          <table class="table">
            <thead id="MainList">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Schedule</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-for="id in classes" v-bind:key="id">
              <tr>
                <th scope="row">{{ id.name }}</th>
                <td class="list-grou-item">{{ id.location }}</td>
                <td class="list--item">{{ id.schedule }}</td>
                <td class="list-grou-item">{{ id.price }}</td>
                <td class="list-grou-item">
                  <a href="#" class="btn btn-primary" v-on:click="Enroll"
                    >Enroll</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--End of First Set-->
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
      page: "View_1",
    };
  },
  async created() {
    const response = await axios.get(API + "AddClasses");
    this.classes = response.data;
    console.log(response.data);
    console.log("created async is here");
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
    View1Method() {
      this.page = "View_1";
    },
    View2Method() {
      this.page = "View_2";
    },
  },
};
</script>

<style>
img {
  border-radius: 20px;
  object-fit: fill;
  width: 200px;
  height: 200px;
}

.table {
  border: 3px, black;
}
/*Table*/
#MainList {
  background-color: yellow;
}

#flex-box {
  display: flex;
  background-color: red;
  width: 900px;
  height: 600px;
}
#DanceClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 900px;
  height: 600px;
  padding: 40px 50px 80px 50px;
  margin-left: 450px;
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 30px;
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
  border-radius: 20px;
  height: 150px;
  margin: 7px;
  /*object-fit: fill;*/
  display: flex;
  /*flex: 1;*/
}
.card-body {
  background-color: yellow;
}
</style>