<template>
  <div>
    <div v-if="!classes" class="Display">
      <h3>Please wait</h3>
      <br />
      <br />
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div class="Display" v-if="classes">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Please input a key-word, you may use schedule, location or simply the name of the class"
        v-model="wordSearch"
      />
      <div class="card" v-for="id in filteredClasses" v-bind:key="id">
        <img :src="id.link" />
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const API =
  "https://3000-jollycurtisgit-danceplay-cwxrl0zxzch.ws-us30.gitpod.io/";
export default {
  name: "DisplayClasses",
  data: function () {
    return {
      classes: "",
      image: "",
      wordSearch: "",
    };
  },
  created: async function () {
    const response = await axios.get(API + "AddClasses");
    this.classes = response.data;
    this.image = response.data.link;
    console.log("classList");
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
};
</script>


<style scoped>
.Display {
  background-color: indigo;
  width: 1500px;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  top: 100px;
  position: relative;
  margin-left: 0px;
}

.form-control.2 {
  margin: 10px, 10px, 10px, 10px;
}

.button {
  margin: 10px, 10px, 10px, 10px;
}

.card {
  background-color: white;
  border-radius: 20px;
  height: 360px;
  width: 250px;
  margin: 7px;
  left: 80px;
  border: 5px;
  border-color: yellow;
}
.card-body {
  background-color: white;
  width: 220px;
  font-size: 14px;
  border-radius: 20px;
  position: absolute;
  left: 12px;
  top: 50%;
  color: indigo;
}

img {
  width: 220px;
  border-radius: 20px;
  object-fit: fill;
  height: 50%;
  left: 12px;
  position: absolute;
}
</style>
