<template>
  <div>
    <div id="DanceClassForm" v-for="id in classesLimitDisplay" v-bind:key="id">
      <div id="miniNav">
        <h5>Please use any keyword:</h5>
        <input
          class="form-control"
          type="search"
          placeholder="Ex: name, schedule, location"
          v-model="wordSearch"
        />
        <button v-on:click="View1Method">List View</button>
        <button v-on:click="View2Method" class="btn btn-outline-primary">
          Large Icons View
        </button>
        <button v-on:click="goToAddClass" class="btn btn-outline-primary">
          +
        </button>
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody v-for="id in filteredClasses" v-bind:key="id">
              <tr>
                <th scope="row">{{ id.name }}</th>
                <td class="list-grou-item">{{ id.location }}</td>
                <td class="list--item">{{ id.schedule }}</td>
                <td class="list-grou-item">{{ id.price }}</td>
                <td class="list-grou-item">
                  <a
                    href="#"
                    class="btn btn-primary"
                    v-on:click="goToUpdate(id._id)"
                    >Update</a
                  >
                </td>
                <td class="list-grou-item">
                  <a
                    href="#"
                    class="btn btn-danger"
                    v-on:click="deleteClass(id._id)"
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
        <div class="flex-container">
          <div class="card-body" v-for="id in filteredClasses" v-bind:key="id">
            <img :src="id.link" />
            <h5 class="card-title">{{ id.name }}</h5>
            <p class="card-text">
              Location: {{ id.location }}
              <br />
              Schedule: {{ id.schedule }}
              <br />
              Price per session: {{ id.price }}
            </p>
            <a href="#" class="btn btn-primary" v-on:click="goToUpdate(id._id)"
              >Update</a
            >
            <a href="#" class="btn btn-danger" v-on:click="deleteClass(id._id)"
              >Delete</a
            >
          </div>
        </div>
      </div>

      <!--Third Set: Add One Class-->
      <div id="addArea" v-if="page == 'AddArea'" v-bind:key="id">
        <AddClasses v-on:addClass="gotoDanceClasses" />
      </div>

      <!--Fourth Set: Edit One Class-->
      <div id="updateArea" v-if="page == 'UpdateArea'">
        <UpdateClass v-on:update-class-event="editClassFunction" />
      </div>
      <!--end of dance class form div-->
    </div>
    <!--end of dance class form div-->
  </div>
</template>
<script>
import axios from "axios";
import AddClasses from "./AddClasses.vue";
import UpdateClass from "./UpdateClass.vue";
const API =
  "https://3000-jollycurtisgit-danceplay-cwxrl0zxzch.ws-us30.gitpod.io/";
//import ClassCard from "@/components/ClassCard";
export default {
  name: "DanceClasses",
  data: function () {
    return {
      classes: "",
      classesLimitDisplay: "",
      page: "View_1",
      classBeingEdited_forDelete: "",
      wordSearch: "",
    };
  },
  components: {
    AddClasses,
    UpdateClass,
  },
  async created() {
    const response = await axios.get(API + "AddClasses");
    this.classes = response.data;
    this.classesLimitDisplay = response.data;
    /* Never Delete*/
    /*     this.classesLimitDisplay = response.data.slice(0, 3);  */
    console.log("created async is here");
  },
  computed: {
    filteredClasses: function () {
      let filtered = this.classes.filter(
        (eachClasses) =>
          eachClasses.name
            .toLowerCase()
            .includes(this.wordSearch.toLowerCase()) ||
          eachClasses.location
            .toLowerCase()
            .includes(this.wordSearch.toLowerCase()) ||
          eachClasses.schedule
            .toLowerCase()
            .includes(this.wordSearch.toLowerCase())
      );
      return filtered;
    },
  },
  methods: {
    goToUpdate: function (classId) {
      alert("Una: this will go to updateclass: " + classId);
      //to diplay the update area component
      //send the classId to the form
      this.$emit("update-class-function", classId);
      //this.page = "UpdateArea";
    },
    View1Method() {
      this.page = "View_1";
    },
    View2Method() {
      this.page = "View_2";
    },
    goToAddClass() {
      this.page = "AddArea";
    },
    gotoDanceClasses: function () {
      this.page = "View_1";
    },
    deleteClass: async function (classId) {
      alert(
        "Una: this will go to deleteclass pero punta muna LoggedIn: " + classId
      );
      //to diplay the update area component
      //send the classId to the form
      this.$emit("delete-class-function", classId);
      // let response = await axios.delete(API + "/deleteClass/" + classId);
      // this.classBeingEdited_forDelete = classId;
      //alert(response);
      //alert(this.classBeingEdited_forDelete);
      // alert(classId);
    },
  },
};
</script>
<style>
/*Table*/
h5 {
  color: yellow;
  margin: 5px 5px 5px 5px;
}
#miniNav {
  background-color: indigo;
  border: 2px solid yellow;
  padding: 5px;
  display: flex;
  height: 50px;
}
#miniNav .form-control {
  width: 250px;
  margin: 5px 5px 5px 5px;
}

#miniNav button {
  background-color: yellow;
  margin: -1px 5px 5px 5px;
  font: bold indigo 12px;
  border-radius: 5px;
}

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
  padding: 40px 20px 80px 20px;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 0px;
}
#updateArea {
  background-color: red;
  margin-left: 0px;
}

.card {
  height: 8000px;
  margin: 7px;
  display: flex;
}
.flex-container {
  display: flex;
  width: 900px;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
}
.card-body {
  background-color: indigo;
  max-width: 200px;
  max-height: 370px;
  margin: 10px;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  border-color: yellow;
}
img {
  border-radius: 20px;
  object-fit: fill;
  width: 150px;
  height: 150px;
}
button {
  margin-right: 10px;
}
#Waiting {
  margin-top: 200px;
  background-color: white;
}
</style>