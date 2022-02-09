<template>
  <!--1-->
  <div id="forBG">
    <!--1.1-->
    <div id="EditClassForm">
      <!--1.1.A-->
      <div>
        <img :src="this.link" />
        <br />
        <label class="form-label">Update all the info here:</label>
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

      <!---Checkboxes-->
      <br />

      <br />
      <!--Radios--->
    </div>
    <!--End of first form-->
    <!--Start of second form-->
    <!--1.2-->
    <div id="EditClassForm">
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
      <br />
      <br />
      <div>
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
      <div>
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
      </div>
      <!--1.2.D-->
      <div class="mb-3">
        <label class="form-label">Price per Session:</label>
        <input type="number" v-model="price" class="form-control" />
      </div>
    </div>

    <!--End of second form-->
    <div id="EditClassForm">
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
        <label class="form-label">Contact Me (Email)</label>
        <input type="text" v-model="email" class="form-control" />
      </div>
      <br />
      <div>
        <label class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <br />
      <button type="submit" class="btn btn-primary" v-on:click="processDelete">
        Delete Now!
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import swal from "sweetalert2/dist/sweetalert2.js";
const API = "https://herokudance.herokuapp.com/";
export default {
  name: "DeleteClass",
  props: ["classId"],
  data: function () {
    return {
      id: "",
      name: "",
      location: "",
      schedule: "",
      price: "",
      link: "",
      classBeingDeleted: "",
      duration: "",
      complexity: [],
      best_for: "",
      category: "",
      instructorName: "",
      email: "",
      password: "",
    };
  },
  created: async function () {
    let response = await axios.get(API + "class/" + this.classId);
    this.name = response.data.name;
    this.location = response.data.location;
    this.duration = response.data.duration;
    this.complexity = response.data.complexity;
    this.best_for = response.data.best_for;
    this.category = response.data.category;
    this.price = response.data.price;
    this.link = response.data.link;
    this.instructorName = response.data.instructorName;
    this.schedule = response.data.schedule;
    this.email = response.data.email;
    this.password = response.data.password;
    this.image = response.data.link;
  },
  methods: {
    // async updateClassFunction(classId) {
    //  const response = await axios.post(API + "AddClasses" + this.classId {
    //   name: this.name,
    //  location: this.location,
    //  schedule: this.schedule,
    // price: this.price,
    // });
    // console.log(response);
    //this. $emit("new-class-created");
    //},
    processDelete: async function () {
      await axios.delete(API + "delete.class/" + this.classId);
      alert("na delete na yan ahh  " + this.classId);
      //this.classBeingEdited = { classId };
      //this function should be done from here
      swal(
        "Awesome!",
        "Thank you for deleting outdated announcements!",
        "success"
      );
      this.$emit("classes-deleted");
    },
  },
};
</script>
<style scoped>
/* for desktop */
#EditClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 350px;
  height: 450px;
  padding: 10px 10px 80px 10px;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 14px;
}

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
}
</style>