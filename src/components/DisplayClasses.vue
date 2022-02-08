<template>
  <div class="Display">
    <!---A.1-->
    <div id="miniNavYellow">
      <!--A.1.Button-->
      <div>
        <button
          type="button"
          class="btn btn-warning"
          v-on:click="DisplayActiveClassesMethod"
        >
          Display All
        </button>
      </div>
      <!--A.1.1-->
      <div id="one">
        <h5>Please use any keyword:</h5>
        <input
          class="form-control me-2"
          type="search"
          placeholder="name, schedule, location, etc."
          v-model="wordSearch"
        />
      </div>
      <!--A.1.2-->
      <div id="two">
        <label>Duration per session: </label>
        <select v-model="duration">
          <option value="30mins">30 minutes</option>
          <option value="1hr">1 hour</option>
          <option value="1.5hrs">1.5 hours</option>
          <option value="2hrs">2 hours</option>
        </select>
      </div>
      <!--A.1.3-->
      <div id="three">
        <label class="form-label"
          >Is the class comprehensive or limited to a specific level:</label
        >
        <br />
        <!--A.1.3.option 1-->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            v-model="complexity"
            value="beginner"
          />
          <label class="form-check-label" for="inlineCheckbox1">Beginner</label>
        </div>
        <!--A.1.3.option 2-->
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
        <!--A.1.3.option 3-->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="advanced"
            v-model="complexity"
          />
          <label class="form-check-label" for="inlineCheckbox2">Advanced</label>
        </div>
        <!--End of A.1.3.option 3-->
      </div>
      <!--End of A.1.3-->
      <!--A.1.4-->
      <div>
        <label class="form-label">Best for: </label>
        <br />
        <!--A.1.4.option 1-->
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
        <!--A.1.4.option 2-->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            v-model="best_for"
            value="couples"
          />
          <label class="form-check-label" for="exampleRadios2"> Couples </label>
        </div>
      </div>
      <!--End of A.1.4-->
      <!-- A.1.5-->
      <div>
        <label class="form-label">Type of Dance:</label>
        <br />
        <!--A.1.5 option 1-->
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
        <!--A.1.5 option 2-->
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
        <!--A.1.5 option 3-->
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
        <!--End of A.1.5 option 3-->
      </div>
      <!--End of A.1.5-->
    </div>
    <!--End of A.1-->
    <!---end of mininav yellow---->
    <div>
      <DisplayClassesActive v-if="page == DisplayClassesActivePage" />
    </div>
  </div>
</template>
<script>
import DisplayClassesActive from "./DisplayClassesActive.vue";
export default {
  name: "DisplayClasses",
  components: {
    DisplayClassesActive,
  },
  data: function () {
    return {
      page: null,
      id: "",
      classBeingEdited: "",
      name: "",
      location: "",
      schedule: "",
      duration: "",
      complexity: [],
      best_for: "",
      category: "",
      price: "",
      link: "",
      instructorName: "",
      email: "",
      password: "",
      image: "",
    };
  },
  methods: {
    DisplayActiveClassesMethod: function () {
      this.page = "DisplayClassesActivePage";
    },
  },
};
</script>

<style scoped >
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

