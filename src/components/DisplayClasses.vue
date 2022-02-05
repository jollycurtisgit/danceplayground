<template>
  <div id="DisplayClassesContainer">
    <!--Search bar-->
    <div id="search">
      <div class="d-flex">
        <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search" />
          <button class="btn btn-primary" type="button">Search</button>
        </form>
        <input
          class="form-control.2 me-2"
          type="search"
          placeholder="Search"
          v-model="wordSearch"
        />
        <button class="button btn-outline-success" type="submit">Search</button>
      </div>
    </div>
    <!--End of search bar-->
    <div id="Display">
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
    <!--End of Display-->
  </div>
</template>
<script>
import axios from "axios";
const API =
  "https://3000-jollychua-danceplaygroun-jlpvcr18ayh.ws-us30.gitpod.io/";
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
      let filtered = this.classes.filter((eachClasses) =>
        eachClasses.name.toLowerCase().includes(this.wordSearch.toLowerCase())
      );
      return filtered;
    },
  },
};
</script>

<style scoped>
#DisplayClassesContainer {
  display: flex;
  width: 1500px;
  height: 1000px;
  flex-wrap: wrap;
}

#search {
  background-color: green;
  height: 150px;
  margin: 0px;
}

#Display {
  background-color: blue-violet;
  width: 1500px;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
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
  height: 340px;
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