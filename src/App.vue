<template>
  <div id="app">
    <!---Nav-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Dance Playground</a>
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
              <a class="nav-link" v-on:click="gotoAddClasses" href="#"
                >Add Classes</a
              >
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
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!--end of Nav-->
    <div class="container-sm">
      <!--pages-->
      <Dance-classes v-if="page == 'DanceClasses'" />
      <AddClasses v-if="page == 'AddClasses'" />
      <SignUp v-if="page == 'SignUp'" />
      <Login v-if="page == 'LogIn'" />
    </div>
    <!--endofPages-->
  </div>
</template>

<script>
import DanceClasses from "@/components/DanceClasses";
import AddClasses from "@/components/AddClasses";
import SignUp from "@/components/SignUp";

import Login from "@/components/Login";

export default {
  name: "App",
  componentDidMount: function () {
    console.log("App has just been rendered for the first time.");
  },
  data: function () {
    return {
      page: "LogIn",
    };
  },
  components: {
    Login,
    DanceClasses,
    AddClasses,
    SignUp,
  },
  data: function () {
    return {
      page: "Login",
    };
  },
  methods: {
    gotoDanceClasses: function () {
      this.page = "DanceClasses";
    },
    gotoAddClasses: function () {
      this.page = "AddClasses";
    },
    gotoSignUp: function () {
      this.page = "SignUp";
    },
  },
};
</script>

<style>
body {
  background-image: url("https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/272024971_3044864865752901_119031524630565305_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHrZurqUbaQo33UlGke2L3hZ6Ro36UdPjNnpGjfpR0-M1yLp2l0xJcO3sHuxrrEt7jXHFMNKOsgeoemFEThieKR&_nc_ohc=1Fp2H8JUw1UAX8hfEea&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT8QoX-PjcZBAotv3il8LJ_7X8DtYQki-60eaXdLXyQJ0Q&oe=61EB134F");
  background-repeat: no-repeat;
  background-size: 900px 600px;
  background-color: blueviolet;
  background-position: 0px 100px;
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
}
</style>
