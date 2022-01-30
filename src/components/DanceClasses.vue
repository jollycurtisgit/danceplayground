<template>
  <div>
    <div id="DanceClassForm">
      <h1>All Classes</h1>
      <button v-on:click="View1Method" class="btn btn-outline-primary">
        List View
      </button>
      <button v-on:click="View2Method" class="btn btn-outline-primary">
        Large Icons View
      </button>

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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody v-for="id in classes" v-bind:key="id">
              <tr>
                <th scope="row">{{ id.name }}</th>
                <td class="list-grou-item">{{ id.location }}</td>
                <td class="list--item">{{ id.schedule }}</td>
                <td class="list-grou-item">{{ id.price }}</td>
                <td class="list-grou-item">
                  <a href="#" class="btn btn-primary" v-on:click="goToUpdate"
                    >Update</a
                  >
                </td>
                <td class="list-grou-item">
                  <a href="#" class="btn btn-danger" v-on:click="Delete"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--End of First Set-->
      <!-- First Set Loading-->
      <div v-if="page == '!View_1'" id="Waiting">
        <h3>
          Please wait (Retrieving from API)... We have something good instore
          for you
        </h3>
        <br />
        <br />
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <!--Second Set-->
      <div class="card" v-if="page == 'View_2'">
        <!--Button Test Set-->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <!--Button Test Set-->
        <div id="flex-box">
          <div
            class="card-body"
            v-for="id in classesLimitDisplay"
            v-bind:key="id"
          >
            <img :src="id.link" />
            <h5 class="card-title">{{ id.name }}</h5>
            <p class="card-text">
              Location: {{ id.location }}
              <br />
              Schedule: {{ id.schedule }}
              <br />
              Price per session: {{ id.price }}
            </p>
            <a href="#" class="btn btn-primary" v-on:click="goToUpdate"
              >Update</a
            >
            <a href="#" class="btn btn-danger" v-on:click="Delete">Delete</a>
          </div>
        </div>
      </div>

      <!--Third Set: Edit One Class-->
      <div v-if="page == 'UpdateArea'">
        <AddClasses />
      </div>
      <!--end of dance class form div-->
    </div>
    <!--end of dance class form div-->
  </div>
</template>

<script>
import axios from "axios";
import AddClasses from "./AddClasses.vue";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
//import ClassCard from "@/components/ClassCard";
export default {
  name: "DanceClasses",
  data: function () {
    return {
      classes: "",
      classesLimitDisplay: "",
      page: "View_1",
    };
  },
  components: {
    AddClasses,
  },
  async created() {
    const response = await axios.get(API + "AddClasses");
    this.classes = response.data;
    this.classesLimitDisplay = response.data;
    /* Never Delete*/
    /*     this.classesLimitDisplay = response.data.slice(0, 3);  */
    console.log("created async is here");
  },
  methods: {
    goToUpdate() {
      this.page = "UpdateArea";
    },
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
/*Table*/
.table {
  border: 3px, black;
}

#MainList {
  background-color: yellow;
}

#DanceClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 1010px;
  height: 8000px;
  padding: 40px 50px 80px 50px;
  margin-left: 300px;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 0px;
}

#v-pills-tab {
  background-color: white;
  width: 230px;
  height: 900px;
  left: 0;
  position: fixed;
  margin-top: 0px;
}

#flex-box {
  display: flex;
  background-color: green;
  width: 700px;
  height: 8000px;
}

.card {
  background-color: red;
  border-radius: 20px;
  height: 800px;
  margin: 7px;
  /*object-fit: fill;*/
  display: flex;
  /*flex: 1;*/
}
.card-body {
  background-color: yellow;
  width: 180px;
  height: 350px;
  margin: 15px;
}

img {
  border-radius: 20px;
  object-fit: fill;
  width: 150px;
  height: 150px;
}

#Waiting {
  margin-top: 200px;
  background-color: white;
}

.carousel-control-prev {
  background-color: black;
  border: green;
}

.carousel-control-next {
  background-color: black;
  border: green;
}
</style>