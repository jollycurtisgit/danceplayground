<template>
  <div id="AddClass">
    <!--Navbar-->
    <div
    class="nav flex-column nav-pills"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
  >
    <a
      class="nav-link"
      id="v-pills-home-tab"
      data-toggle="pill"
      href="#v-pills-home"
      role="tab"
      aria-controls="v-pills-home"
      aria-selected="true"
      v-on:click="Home"
      >Home</a
    >
    <a
      class="nav-link"
      id="v-pills-profile-tab"
      data-toggle="pill"
      href="#v-pills-profile"
      role="tab"
      aria-controls="v-pills-profile"
      aria-selected="false"
      >Profile</a
    >
    <a
      class="nav-link"
      id="v-pills-messages-tab"
      data-toggle="pill"
      href="#v-pills-messages"
      role="tab"
      aria-controls="v-pills-messages"
      aria-selected="false"
      >Classes</a
    >
    <a
      class="nav-link"
      id="v-pills-messages-tab"
      data-toggle="pill"
      href="#v-pills-messages"
      role="tab"
      aria-controls="v-pills-messages"
      aria-selected="false"
      >Enrolled Classes</a
    >
     <a
      class="nav-link active"
      id="v-pills-messages-tab"
      data-toggle="pill"
      href="#v-pills-messages"
      role="tab"
      aria-controls="v-pills-messages"
      aria-selected="false"
      v-on:click="gotoAddClasses"
      >Add Classes</a
    >
    <a
      class="nav-link"
      id="v-pills-messages-tab"
      data-toggle="pill"
      href="#v-pills-messages"
      role="tab"
      aria-controls="v-pills-messages"
      aria-selected="false"
      >Friends</a
    >
    <a
      class="nav-link"
      id="v-pills-messages-tab"
      data-toggle="pill"
      href="#v-pills-messages"
      role="tab"
      aria-controls="v-pills-messages"
      aria-selected="false"
      >Directions</a
    >
    <a
      class="nav-link"
      id="v-pills-settings-tab"
      data-toggle="pill"
      v-on:click="LogOut"
      href="#v-pills-settings"
      role="tab"
      aria-controls="v-pills-settings"
      aria-selected="false"
      >Log Out</a
    >
  </div>
  <!--End of Navbar-->
    <div id="forBG">
    <h1>Add a Class</h1>
    <div id="AddClassForm">
      <div>
        <label class="form-label">Dance Name</label>
        <input type="text" v-model="name" class="form-control" />
      </div>
      <div>
        <label class="form-label">Location</label>
        <input type="text" v-model="location" class="form-control" />
      </div>
      <div>
        <label class="form-label">Schedule</label>
        <input type="text" v-model="schedule" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Price per Session:</label>
        <input type="text" v-model="price" class="form-control" />
      </div>
      <div>
        <label class="form-label">Image Link</label>
        <input
          type="text"
          v-model="link"
          class="form-control"
          placeholder="Please place a link/url of an image you want to add"
        />
      </div>

      <button type="submit" class="btn btn-primary" v-on:click="addNew">
        Add New
      </button>
    </div>
  </div>
  </div>
</template>


methods: {
     
    },

<script>
import axios from "axios";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
export default {
  name: "AddClasses",
  data: function () {
    return {
      name: "",
      location: "",
      schedule: "",
      price: "",
      link: "",
    };
  },
  methods: {
    async addNew() {
      const response = await axios.post(API + "AddClasses", {
        name: this.name,
        location: this.location,
        schedule: this.schedule,
        price: this.price,
        link: this.link,
      });
      console.log(response);
      //alert("hoy!");
      swal(
        "Great!",
        "Thank you for making the community a healthier place!",
        "success"
      );
      this.$emit("addClass");
      //this.$router.push("DanceClasses");
    },
     gotoAddClasses () {
        this.$router.push("/AddClasses")
      },
      LogOut() {
        localStorage.removeItem("token");
        this.$router.push("/");
      },
      Home() {
        this.$router.push("/Home")
      }
  },
};
</script>

<style scoped>
/* for desktop */
#forBG {
  width: 1000px;
  height: 800px;
  margin-right: 0px;
  margin-top: 0px;
  background-position: 0px 30px;
  background-repeat: no-repeat;
}

#AddClass {
  margin-top: 0px;
}

#v-pills-tab {
  background-color: white;
  width: 400px;
  height: 900px;
  left: 0;
  position: fixed;
  margin-top: 0px;
}

#AddClassForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 600px;
  height: 470px;
  padding: 40px 50px 80px 50px;
  margin-left: 780px;
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
}
</style>