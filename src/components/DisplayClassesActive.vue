<template>
  <div v-if="classes">
    <div id="miniNavYellow">
      <h5>Please use any keyword:</h5>
      <input
        class="form-control me-2"
        type="search"
        placeholder="name, schedule, location, etc."
        v-model="wordSearch"
      />
    </div>
    <div class="card" v-for="id in filteredClasses" v-bind:key="id">
      <img :src="id.link" />
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
    <!--Not--->
  </div>
</template>


<script>
import axios from "axios";
const API =
  "https://3000-jollycurtisgit-danceplay-uwoheb8rqm1.ws-us30.gitpod.io/";
export default {
  name: "DisplayClassesActive",
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
    alert("Active");
    alert(response);
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
#RED {
  background-color: red;
}
.absolute {
  margin-left: 45%;
}
#notClasses {
  color: yellow;
  width: 100%;
  width: 1500px;
  text-align: center;
  border-radius: 20px;
}
.spinner-border {
  color: yellow;
  position: absolute;
}

h6 {
  color: indigo;
  margin: 5px 5px 5px 5px;
  padding: 15px 0px 5px 5px;
}
#miniNavYellow .form-control {
  width: 250px;
  height: 30px;
  margin: 0px 5px 5px 5px;
}

#miniNavYellow #one {
  display: flex;
  height: 70px;
  width: 500px;
  padding: 5px 5px 5px 5px;
  margin: 20px 0px 0px 20px;
}

#miniNavYellow #two {
  display: relative;
  height: 70px;
  width: 100px;
  padding: 5px 5px 5px 5px;
  margin-right: 15px;
}

#miniNavYellow #three {
  display: relative;
  height: 70px;
  width: 200px;
  padding: 5px 5px 5px 5px;
  margin: 0px 20px 0px 20px;
}

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

#miniNavYellow {
  background-color: yellow;
  display: flex;
  width: 1500px;
  height: 50px;
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
  border: 2px solid yellow;
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