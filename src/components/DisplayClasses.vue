<template>
  <div>
    <div v-if="!classes" id="notClasses" class="Display">
      <div class="absolute">
        <h3>Please wait...</h3>
        <br />
        <br />
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="Display" v-if="classes">
      <div id="miniNavYellow">
        <!--1-->
        <div id="one">
          <h5>Please use any keyword:</h5>
          <input
            class="form-control me-2"
            type="search"
            placeholder="name, schedule, location, etc."
            v-model="wordSearch"
          />
        </div>
        <!--2-->
        <div id="two">
          <label>Duration per session: </label>
          <select v-model="duration">
            <option value="30mins">30 minutes</option>
            <option value="1hr">1 hour</option>
            <option value="1.5hrs">1.5 hours</option>
            <option value="2hrs">2 hours</option>
          </select>
        </div>
        <!--3-->
        <div id="three">
          <label class="form-label"
            >Is the class comprehensive or limited to a specific level:</label
          >
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              v-model="complexity"
              value="beginner"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >Beginner</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              v-model="complexity"
              value="intermediate"
            />
            <label class="form-check-label" for="inlineCheckbox2"
              >Intermediate</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="advanced"
              v-model="complexity"
            />
            <label class="form-check-label" for="inlineCheckbox2"
              >Advanced</label
            >
          </div>
        </div>
        <br />
        <br />
        <!--4-->
        <div>
          <label class="form-label">Best for: </label>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="solo"
              v-model="best_for"
            />
            <label class="form-check-label" for="exampleRadios1"> Solo </label>
          </div>
          <!--1.1.H-->
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              v-model="best_for"
              value="couples"
            />
            <label class="form-check-label" for="exampleRadios2">
              Couples
            </label>
          </div>
        </div>
        <br />
        <br />
        <!--end of radio buttons--->
        <!--5-->
        <label class="form-label">Type of Dance:</label>
        <br />
        <!--1.2.A-->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="modern"
            v-model="category"
          />
          <label class="form-check-label" for="exampleRadios1"> Modern </label>
        </div>
        <!--1.2.B-->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="not_so_modern"
            v-model="category"
          />
          <label class="form-check-label" for="exampleRadios2">
            Not-So-Modern
          </label>
        </div>
        <!--1.2.C-->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="traditional"
            v-model="category"
          />
          <label class="form-check-label" for="exampleRadios3">
            Traditional
          </label>
        </div>
      </div>
      <!------->
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
  "https://3000-jollycurtisgit-danceplay-uwoheb8rqm1.ws-us30.gitpod.io/";
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
  border-radius: 20px;
  display: flex;
  width: 1500px;
  height: 200px;
  border: 2px solid orange;
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
