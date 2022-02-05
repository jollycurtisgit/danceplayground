<template>
  <!--A-->
  <div>
    <!--A.1-->
    <div v-if="user" id="LoggedIn">
      <!--A.1.I-->
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <!--A.1.I.1-->
        <a
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          aria-controls="v-pills-home"
          aria-selected="true"
          >Home</a
        >
        <!--A.1.I.2-->
        <a
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          aria-controls="v-pills-profile"
          aria-selected="false"
          >Profile</a
        >
        <!--A.1.I.3-->
        <a
          class="nav-link"
          id="v-pills-classes-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-classes"
          type="button"
          aria-controls="v-pills-classes"
          v-on:click="gotoDanceClasses"
          aria-selected="false"
          >Classes</a
        >
        <!--A.1.I.4-->
        <a
          class="nav-link"
          id="v-pills-eClasses-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-eClasses"
          aria-selected="false"
          >Enrolled Classes</a
        >
        <!--A.1.I.5-->
        <a
          class="nav-link"
          id="v-pills-aClasses-tab"
          data-bs-toggle="pill"
          href="#v-pills-aClasses"
          role="tab"
          aria-controls="v-pills-aClasses"
          aria-selected="false"
          v-on:click="gotoAddClasses"
          >Add Classes</a
        >
        <!--A.1.I.6-->
        <a
          class="nav-link"
          id="v-pills-uClasses-tab"
          data-bs-toggle="pill"
          href="#v-pills-uClasses"
          role="tab"
          aria-controls="v-pills-uClasses"
          aria-selected="false"
          v-on:click="gotoUpdateClasses"
          >Update a Class</a
        >
        <!--A.1.I.7-->
        <a
          class="nav-link"
          id="v-pills-mList-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-mList"
          type="button"
          aria-controls="v-pills-mList"
          aria-selected="false"
          v-on:click="gotoMasterList"
          >Master List</a
        >
        <!--A.1.I.7-->
        <a
          class="nav-link"
          id="v-pills-messages-taaaaaaaab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-friends"
          aria-controls=""
          aria-selected="false"
          >Directions</a
        >
        <!--A.1.I.8-->
        <a
          class="nav-link"
          id="v-pills-settttings-taaaaab"
          data-bs-toggle="pill"
          v-on:click="LogOut"
          aria-controls=""
          aria-selected="false"
          >Log Out</a
        >
      </div>
      <!--End of Navbar-->
      <!--Start of Display-->
      <!--A.1.II-->
      <div class="container">
        <h3>Hello, you are logged in as: {{ me.email }}</h3>
      </div>
      <!--A.1.III-->
      <div class="tab-content" id="v-pills-tabContent">
        <!--A.1.III.1-->
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          aria-labelledby="v-pills-home-tab"
        ></div>
        <!--A.1.II.2-->
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          aria-labelledby="v-pills-profile-tab"
        >
          ...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc
        </div>
        <!--A.1.II.3-->
        <div
          class="tab-pane fade"
          id="v-pills-classes"
          aria-labelledby="v-pills-classes"
        >
          <DanceClasses
            v-if="page == 'DanceClasses'"
            v-on:update-class-function="updateClassFunction"
            v-on:delete-class-function="deleteClassFunction"
          />
        </div>

        <!--A.1.II.4-->
        <div
          class="tab-pane fade"
          id="v-pills-uClasses"
          aria-labelledby="v-pills-uClasses-tab"
        ></div>
        <!--A.1.II.5-->
        <div
          class="tab-pane fade"
          id="v-pills-aClasses"
          aria-labelledby="v-pills-aClasses-tab"
        >
          <AddClasses
            v-if="page == 'AddClasses'"
            v-on:addClass="gotoDanceClasses"
          />
        </div>
        <!--A.1.II.6-->
        <div
          class="tab-pane fade"
          id="v-pills-mList"
          aria-labelledby="v-pills-mList-tab"
        >
          <MasterList v-if="page == 'MasterList'" />
        </div>
        <!--A.1.II.7-->
        <div
          class="tab-pane fade"
          id="v-pills-friends"
          aria-labelledby="v-pills-friends-tab"
        >
          ...
        </div>
      </div>
      <!---End of Display--->
      <!--DanceClasses v-if="page == 'DanceClasses'" />
      <!--Please double check v-on, codesandbox automatically edits it-->
      <UpdateClass
        v-if="page == 'UpdateClasses'"
        v-bind:classId="classBeingEdited"
        v-on:classes-updated="goBackToClasses"
      />
      <DanceClasses
        v-if="page == 'DanceClasses'"
        v-on:update-class-function="updateClassFunction"
      />
      <AddClasses
        v-if="page == 'AddClasses'"
        v-on:addClass="gotoDanceClasses"
      />
      <DeleteClass
        v-if="page == 'DeleteClass'"
        v-bind:classId="classBeingDeleted"
      />
    </div>
    <!--End Of LoggedIn Div-->

    <!--A.2-->
    <div v-if="!user" class="container">
      <h3>Ooops! You are unauthorized!</h3>
      <br />
      <br />
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!--End of A.2-->
  </div>
</template>
<script>
import axios from "axios";
import DanceClasses from "./DanceClasses.vue";
import AddClasses from "./AddClasses.vue";
import UpdateClass from "./UpdateClass.vue";
import MasterList from "./MasterList.vue";
import DeleteClass from "./DeleteClass.vue";

const API =
  "https://3000-jollychua-danceplaygroun-jlpvcr18ayh.ws-us30.gitpod.io/";
export default {
  name: "LoggedIn",
  data() {
    return {
      user: null,
      me: null,
      page: "",
      classBeingEdited: "",
      classBeingDeleted: "",
    };
  },
  components: {
    DanceClasses,
    AddClasses,
    MasterList,
    UpdateClass,
    DeleteClass,
  },
  created: async function () {
    const response = await axios.get(API + "home", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      //this.Name = response.data;
      //this.user = response.data
      //}
    });
    this.user = response.data;
    this.me = response.data[response.data.length - 1];
    console.log(response.data[response.data.length - 1]);
  },
  methods: {
    gotoAddClasses() {
      /*this.$router.push("/AddClasses");*/
      this.page = "AddClasses";
    },
    LogOut() {
      localStorage.removeItem("token");
      this.$router.push("/Login2");
    },
    Home() {
      this.$router.push("/Home");
    },
    gotoDanceClasses: function () {
      this.page = "DanceClasses";
    },
    /*DanceClasses() {
      /* this.$router.push("/DanceClasses");*/
    // alert("Napindot mo ang DanceClasses");
    //this.page = "DanceClasses";*/
    //},
    gotoMasterList() {
      this.page = "MasterList";
    },
    gotoUpdateClasses: function () {
      this.page = "UpdateClasses";
    },
    updateClassFunction: function (classId) {
      console.log(classId);
      //this function aims to send the classId to my UpdateClass.vue
      this.classBeingEdited = classId;
      alert("pangalawa (andito pa):" + this.classBeingEdited);
      alert(
        "pangatlo: this will go to updateclass: " + classId + "Horrraaaayyy!"
      );
      this.page = "UpdateClasses";
      //this.$router.push("/UpdateClass");
      alert(this.classBeingEdited);
    },
    deleteClassFunction: function (classId) {
      console.log(classId);
      //this function aims to send the classId to my UpdateClass.vue
      this.classBeingDeleted = classId;
      alert("pangalawa (andito pa delete):" + this.classBeingDeleted);
      alert(
        "pangatlo: this will go to updateclass: " + classId + "Horrraaaayyy!"
      );
      this.page = "DeleteClass";
      //this.$router.push("/UpdateClass");
      alert("pang apat" + this.classBeingDeleted);
    },
    goBackToClasses: function () {
      this.page = "DanceClasses";
    },
  },
};
</script>
<style scoped>
#LoggedIn {
  margin-top: 0px;
  margin-left: 300px;
  width: 900px;
  background-color: gray;
}
.container {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  margin-top: 20px;
  max-height: 50px;
}
#v-pills-tab {
  background-color: white;
  width: 230px;
  height: 900px;
  left: 0;
  position: fixed;
}
</style> 