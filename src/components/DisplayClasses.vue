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
      <div id="one"></div>
      <!--A.1.2-->
      <div id="two">
        <label>Search by Duration: </label>
        <!--select v-model="duration">
          <option value="30mins">
            30 minutes
          </option>
          <option value="1hr">1 hour</option>
          <option value="1.5hrs">1.5 hours</option>
          <option value="2hrs">2 hours</option>
        </select-->
        <button
          type="button"
          class="btn btn-warning"
          v-on:click="DisplayClassesPerDurationMethod"
        >
          30 mins
        </button>
        <button
          type="button"
          class="btn btn-warning"
          v-on:click="OneHRDurationMethod"
        >
          1 hour
        </button>
        <button
          type="button"
          class="btn btn-warning"
          v-on:click="TwoHRDurationMethod"
        >
          2 hours
        </button>
      </div>
      <!--A.1.3-->
      <div id="three">
        <button type="button" class="btn btn-warning" v-on:click="Refresh">
          🔄 (Refresh)
        </button>
        <label
          >Please wait for 30 - 60 seconds before clicking another button, thank
          you</label
        >
        <!--label class="form-label"
          >Is the class comprehensive or limited to a specific level:</label
        >
        <br />
        <!--A.1.3.option 1-->
        <!--div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            v-model="complexity"
            value="beginner"
          />
          <label class="form-check-label" for="inlineCheckbox1">Beginner</label>
        </div-->
        <!--A.1.3.option 2-->
        <!--div class="form-check form-check-inline">
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
        </div-->
        <!--A.1.3.option 3-->
        <!--div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="advanced"
            v-model="complexity"
          />
          <label class="form-check-label" for="inlineCheckbox2">Advanced</label>
        </div-->
        <!--End of A.1.3.option 3-->
      </div>
      <!--End of A.1.3-->
      <!--A.1.4-->
      <!--div>
        <label class="form-label">Best for: </label>
        <br />
        <!--A.1.4.option 1-->
      <!--div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="solo"
            v-model="best_for"
          />
          <label class="form-check-label" for="exampleRadios1"> Solo </label>
        </div-->
      <!--A.1.4.option 2-->
      <!--div class="form-check form-check-inline">
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
      </div-->
      <!--End of A.1.4-->
      <!-- A.1.5-->
      <!--div>
        <label class="form-label">Type of Dance:</label>
        <br />
        <!--A.1.5 option 1-->
      <!--div class="form-check form-check-inline">
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
      <!--div class="form-check form-check-inline">
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
      <!--div class="form-check form-check-inline">
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
      <!--/div>
      <!--End of A.1.5-->
    </div>
    <!--End of A.1-->
    <!---end of mininav yellow---->
    <div>
      <Loading v-if="page == 'loadingpage'" />
      <DisplayClassesActive v-if="page == 'DisplayClassesActivePage'" />
      <DisplayClassesDuration v-if="page == 'DisplayClassesDurationPage'" />
      <OneHRDuration v-if="page == 'OneHRDurationPage'" />
      <TwoHRDuration v-if="page == 'TwoHRDurationPage'" />
    </div>
  </div>
</template>
<script>
import Loading from "./Loading.vue";
import DisplayClassesActive from "./DisplayClassesActive.vue";
import DisplayClassesDuration from "./DisplayClassesDuration.vue";
import OneHRDuration from "./OneHRDuration.vue";
import TwoHRDuration from "./TwoHRDuration.vue";
export default {
  name: "DisplayClasses",
  components: {
    DisplayClassesActive,
    Loading,
    DisplayClassesDuration,
    OneHRDuration,
    TwoHRDuration,
  },
  data: function () {
    return {
      page: "loadingpage",
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
      wordSearch: "",
    };
  },
  methods: {
    DisplayActiveClassesMethod: function () {
      this.page = "DisplayClassesActivePage";
    },
    DisplayClassesPerDurationMethod: function () {
      this.page = "DisplayClassesDurationPage";
    },
    OneHRDurationMethod: function () {
      this.page = "OneHRDurationPage";
    },
    TwoHRDurationMethod: function () {
      this.page = "TwoHRDurationPage";
    },
    Refresh: function () {
      this.page = "loadingpage";
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
/*
#miniNavYellow #one {
  display: flex;
  height: 70px;
  width: 500px;
  padding: 5px 5px 5px 5px;
  margin: 20px 0px 0px 20px;
}
*/
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
  background-color: blueviolet;
  width: 1500px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  top: 100px;
  position: relative;
  margin-left: 0px;
}

#miniNavYellow {
  background-color: yellow;
  /*border-radius: 20px;*/
  display: flex;
  width: 1500px;
  height: 200px;
  /*border: 2px solid orange;*/
}
.form-control.2 {
  margin: 10px, 10px, 10px, 10px;
}

button {
  margin: 10px, 10px, 10px, 10px;
}

.cardBig {
  background-color: white;
  border-radius: 20px;
  height: 410px;
  width: 250px;
  margin: 7px;
  left: 80px;
  border: 5px;
  color: indigo;
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

/* Tablet: On screens that are 992px or less */
@media screen and (max-width: 992px) {
  .Display {
    background-color: blueviolet;
    width: 750px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    top: 100px;
    position: relative;
    margin-left: 0px;
  }
  #miniNavYellow {
    background-color: yellow;
    /*border-radius: 20px;*/
    display: flex;
    width: 750px;
    height: 200px;
    /*border: 2px solid orange;*/
  }
}
</style>