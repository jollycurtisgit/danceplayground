<template>
  <div id="app">
    <!---Nav-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" v-on:click="gotoLogIn" href="#"
          >Dance Playground</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                v-on:click="gotoDanceClasses"
                aria-current="page"
                href="#"
                >Classes</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Members</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="gotoSignUp" href="#"
                >Not a member?</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">Gallery</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Contact Us</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <div class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!--end of Nav-->
    <div class="container-sm">
      <!--pages-->
      <DanceClasses v-if="page == 'DanceClasses'" />
      <Login2 v-if="page == 'Login2'" />
      <SignUp v-if="page == 'SignUp'" />
      <LoggedIn v-if="page == 'LoggedIn'" />
      <UpdateClass v-if="page == 'UpdateClass'" />
      <!--ClassDisplay /-->
      <router-view v-if="page == 'Login'" v-on:welcome-user="onWelcomeUser" />
    </div>
    <!--endofPages-->
  </div>
</template>

<script>
import DanceClasses from "@/components/DanceClasses";
import Login2 from "@/components/Login2";
import SignUp from "@/components/SignUp";
import LoggedIn from "@/components/LoggedIn";
import UpdateClass from "@/components/UpdateClass";

//import ClassDisplay from "@/components/ClassDisplay";
export default {
  name: "App",
  data: function () {
    return {
      page: "Login",
    };
  },
  components: {
    Login2,
    DanceClasses,
    SignUp,
    UpdateClass,
    //ClassDisplay,
    LoggedIn,
  },
  methods: {
    gotoDanceClasses: function () {
      this.page = "DanceClasses";
    },
    gotoSignUp: function () {
      this.page = "SignUp";
    },
    gotoLogIn: function () {
      this.page = "Login2";
    },
    //onNewRecipeCreated: function () {
    //  this.page = "DanceClasses";
    //},
    onWelcomeUser: function () {
      this.page = "LoggedIn";
    },
  },
};
</script>



<style>
body {
  background-color: blueviolet;
}
/* On screens that are 992px or less, set the background color to yellow */
@media screen and (max-width: 992px) {
  body {
    background-image: url("https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/272027619_3044447049128016_6083752026578421933_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeF5kZShzqlpUmrr7I6OckrMyQkOrs290ULJCQ6uzb3RQjAWO7KQsaf2TYmhKIqsyOGyBP1XbLf-bI5-GC1F7_M8&_nc_ohc=HwKDwfqQBnEAX_4XGh-&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT-ouT2FW1jhlzsB1TVufCRiSqNxASzAlVaHeDRtiNulaQ&oe=61E93055");
    background-repeat: no-repeat;
    background-color: yellow;
    background-size: cover;
  }
}
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-image: url("https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/272027619_3044447049128016_6083752026578421933_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeF5kZShzqlpUmrr7I6OckrMyQkOrs290ULJCQ6uzb3RQjAWO7KQsaf2TYmhKIqsyOGyBP1XbLf-bI5-GC1F7_M8&_nc_ohc=HwKDwfqQBnEAX_4XGh-&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT-ouT2FW1jhlzsB1TVufCRiSqNxASzAlVaHeDRtiNulaQ&oe=61E93055");
    background-repeat: no-repeat;
    background-color: blueviolet;
    background-size: 600px 580px;
  }
}
.container-sm {
  display: flex;
  height: 900px;
  width: 1500px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>