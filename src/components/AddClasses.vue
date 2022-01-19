<template>
  <div>
    <h1>Add Recipe</h1>
    <div>
      <label>Dance Name</label>
      <input type="text" v-model="Dance_Name" />
    </div>
    <div>
      <label>Location</label>
      <input type="text" v-model="Location" />
    </div>
    <div>
      <label>Schedule</label>
      <input type="text" v-model="Schedule" class="form-control" />
    </div>
    <div>
      <label>Price per Session:</label>
      <input type="text" v-model="Price" class="form-control" />
    </div>
    <button v-on:click="addNew">Add New</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddClasses",
  data: function () {
    return {
      Dance_Name: "",
      Location: "",
      Schedule: "",
      Price: "",
    };
  },
  methods: {
    async addNew() {
      const response = await axios.post("/add.class", {
        Dance_Name: this.Dance_Name,
        Location: this.Location,
        Schedule: this.Schedule,
        Price: this.Price,
      });
      console.log(response);
    },
  },
};
</script>
