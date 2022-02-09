<template>
  <!--1-->
  <div id="forBG">
    <!--1.1-->
    <div id="AddClassForm">
      <!--1.1.A-->
      <div>
        <label class="form-label">Add all the info here:</label>
        <br />
        <br />
        <label class="form-label">Dance Name</label>
        <input type="text" v-model="name" class="form-control" />
      </div>
      <!--1.1.B-->
      <div>
        <label class="form-label">Location</label>
        <input type="text" v-model="location" class="form-control" />
      </div>
      <!--1.1.C-->
      <div>
        <label class="form-label">Schedule</label>
        <input type="text" v-model="schedule" class="form-control" />
      </div>
      <br />
      <br />
      <!--duration-->
      <div>
        <label>Duration per session: </label>
        <select v-model="duration">
          <option value="30mins">30 minutes</option>
          <option value="1hr">1 hour</option>
          <option value="1.5hrs">1.5 hours</option>
          <option value="2hrs">2 hours</option>
        </select>
      </div>
      <!---Checkboxes-->
      <br />

      <br />
      <!--Radios--->
    </div>

    <!--End of first form-->
    <!--Start of second form-->
    <!--1.2-->
    <div id="AddClassForm">
      <label class="form-label"
        >Is the class comprehensive or limited to a specific level:</label
      >
      <br />
      <!--1.1.D-->
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
      <!--1.1.E-->
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
      <!--1.1.F-->
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
      <br />
      <br />
      <div>
        <label class="form-label">Best for: </label>
        <br />
        <!--1.1.G-->
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
          <label class="form-check-label" for="exampleRadios2"> Couples </label>
        </div>
      </div>
      <br />
      <br />
      <!--end of radio buttons--->
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
      <br />
      <br />
      <!--1.2.D-->
      <div class="mb-3">
        <label class="form-label">Price per Session:</label>
        <input type="number" v-model="price" class="form-control" />
      </div>
    </div>

    <!--End of second form-->
    <div id="AddClassForm">
      <div>
        <label class="form-label">Image Link</label>
        <input
          type="text"
          v-model="link"
          class="form-control"
          placeholder="Link/url of an image you want to add"
        />
      </div>
      <br />
      <div>
        <label class="form-label">Instructor's Name</label>
        <input type="text" v-model="instructorName" class="form-control" />
      </div>
      <br />
      <div>
        <label class="form-label">Email</label>
        <input type="text" v-model="email" class="form-control" />
      </div>
      <br />
      <div>
        <label class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <br />
      <button type="submit" class="btn btn-primary" v-on:click="addNew">
        Add New
      </button>
    </div>
  </div>
  <!--End of third form-->

  <!--end of for BG-->
</template>

<script>
import axios from "axios";
//import swal from "sweetalert2/dist/sweetalert2.js";
const API = "https://herokudance.herokuapp.com/";
export default {
  name: "AddClasses",
  data: function () {
    return {
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
    };
  },
  components: {},
  methods: {
    async addNew() {
      const response = await axios.post(API + "TryClass", {
        name: this.name,
        location: this.location,
        schedule: this.schedule,
        duration: this.duration,
        complexity: this.complexity,
        best_for: this.best_for,
        category: this.category,
        price: this.price,
        link: this.link,
        instructorName: this.instructorName,
        email: this.email,
        password: this.password,
      });
      swal(
        "Great!",
        "Thank you for making the community a healthier place!",
        "success"
      ).then((value) => {
        swal(
          "One more thing",
          "Please be patient, it will take a while for your new class to appear",
          "warning"
        );
      });
      this.$emit("addClass");
      //this.$router.push("DanceClasses");
    },
    gotoAddClasses() {
      this.$router.push("/AddClasses");
    },
    LogOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    Home() {
      this.$router.push("/Home");
    },
    DanceClasses() {
      this.$router.push("/DanceClasses");
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
  margin-left: 0px;
  margin-top: 0px;
  background-position: 0px 30px;
  background-repeat: no-repeat;
  background-color: indigo;
  display: flex;
}
#AddClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 300px;
  height: 450px;
  padding: 10px 10px 80px 10px;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 16px;
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
    display: flex;
  }
}
</style>