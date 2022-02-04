<template>
  <div id="forBG">
    <h1>Update Recipe</h1>
    <div id="EditClassForm">
      <div>
        <label class="form-label">Dance Name</label>
        <input type="text" v-model="name" class="form-control" />
      </div>
      <div>
        <label class="form-label">Location</label>
        <input type="text" v-model="location" class="form-control" />
      </div>
      <div>
        <label class="form-label">Schedule</label>
        <input type="text" v-model="schedule" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Price per Session:</label>
        <input type="text" v-model="price" class="form-control" />
      </div>
      <div>
        <label class="form-label">Image Link</label>
        <input
          type="text"
          v-model="link"
          class="form-control"
          placeholder="Please place a link/url of an image you want to add"
        />
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="processUpdate">
        Add New
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const API =
  "https://3000-jollychua-danceplaygroun-c2k75kskilv.ws-us30.gitpod.io/";
export default {
  name: "UpdateClass",
  props: ["classId"],
  data: function () {
    return {
      id: "",
      name: "",
      location: "",
      schedule: "",
      price: "",
      link: "",
      classBeingEdited: "",
    };
  },
  created: async function () {
    let response = await axios.get(API + "class/" + this.classId);
    this.name = response.data.name;
    this.location = response.data.location;
    this.price = response.data.price;
    this.schedule = response.data.schedule;
    this.link = response.data.link;
    alert("Nasa UpdateClass na ako: " + this.classId);
    alert(response);
    console.log(response.data + "UpdateClass na to ah");
  },
  methods: {
    // async updateClassFunction(classId) {
    //  const response = await axios.post(API + "AddClasses" + this.classId {
    //   name: this.name,
    //  location: this.location,
    //  schedule: this.schedule,
    // price: this.price,
    // });
    // console.log(response);
    //this.$emit("new-class-created");
    //},
    processUpdate: async function () {
      await axios.patch(API + "class/" + this.classId, {
        name: this.name,
        location: this.location,
        price: this.price,
        schedule: this.schedule,
        link: this.link,
      });
      //this.classBeingEdited = { classId };
      //this function should be done from here
      swal("Awesome!", "Thank you for keeping us updated!", "success");
      this.$emit("classes-updated");
    },
  },
};
</script>
<style scoped>
/* for desktop */
#forBG {
  width: 1000px;
  height: 800px;
  margin-right: 0px;
  margin-top: 0px;
  background-position: 0px 30px;
  background-repeat: no-repeat;
}
#AddClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 600px;
  height: 470px;
  padding: 40px 50px 80px 50px;
  margin-right: 780px;
  margin-top: 50px;
}
/* for tablet */
@media screen and (max-width: 992px) {
  #AddClassForm {
    background-color: white;
    border: 2px solid yellow;
    border-radius: 5px;
    width: 600px;
    height: 460px;
    padding: 50px 50px 80px 50px;
    margin-left: 60px;
    position: absolute;
  }
  #forBG {
    background: none;
  }
}
/* for celpphone */
@media screen and (max-width: 600px) {
  #AddClassForm {
    background-color: white;
    border: 2px solid green;
    border-radius: 5px;
    width: 300px;
    height: 460px;
    padding: 50px 20px 80px 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 50px;
    position: absolute;
  }
  #forBG {
    background: none;
  }
}
</style>