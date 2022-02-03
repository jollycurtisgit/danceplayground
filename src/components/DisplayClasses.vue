<template>
  <div>
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
          aria-label="Search"
        />
        <button class="button btn-outline-success" type="submit">Search</button>
      </div>
    </div>
    <!--End of search bar-->
    <div id="Display">
      <div
        class="card"
        style="width: 18rem"
        v-for="id in classes"
        v-bind:key="id"
      >
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
  "https://3000-jollychua-danceplaygroun-f549nqucx4c.ws-us30.gitpod.io/";
export default {
  name: "DisplayClasses",
  data: function () {
    return {
      classes: "",
      image: "",
    };
  },
  async created() {
    const response = await axios.get(API + "AddClasses");
    this.classes = response.data;
    this.image = response.data.link;
    console.log("classList");
  },
  methods: {},
};
</script>

<style scoped>
#search {
  display: flex;
  width: 1500px;
  height: 50px;
  background-color: orange;
}

.form-control.2 {
  margin: 10px, 10px, 10px, 10px;
}
,
.button {
  margin: 10px, 10px, 10px, 10px;
}

.card {
  background-color: yellow;
  border-radius: 5px;
  height: 150px;
  margin: 7px;
}
.card-body {
  background-color: yellow;
}
#Display {
  background-color: white;
  width: 1500px;
  height: 470px;
  display: flex;
}

img {
  width: 190px;
  height: 200px;
}
</style>