<template>
  <div id="forBG">
    <h1>Add Recipe</h1>
    <div id="AddClassForm">
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

      <button type="submit" class="btn btn-primary" v-on:click="addNew">
        Add New
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddClasses",
  data: function () {
    return {
      name: "",
      location: "",
      schedule: "",
      price: "",
    };
  },
  methods: {
    async addNew() {
      const response = await axios.post("/AddClasses", {
        name: this.name,
        location: this.location,
        schedule: this.schedule,
        price: this.price,
      });
      console.log(response);
      //alert("hoy!");
      swal(
        "Great!",
        "Thank you for making the community a healthier place!",
        "success"
      );
      this.$emit("addClass");
      //this.$router.push("DanceClasses");
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