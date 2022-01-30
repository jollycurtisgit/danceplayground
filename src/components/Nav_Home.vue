<template>
  <div>
    <!--Navbar-->
    <div
      class="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        class="nav-link active"
        id="v-pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-home"
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        >Home</a
      >
      <a
        class="nav-link"
        id="v-pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-profile"
        type="button"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
        >Profile</a
      >
      <a
        class="nav-link"
        id="v-pills-classes-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-classes"
        type="button"
        role="tab"
        aria-controls="v-pills-classes"
        v-on:click="DanceClasses"
        aria-selected="false"
        >Classes</a
      >
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
      <a
        class="nav-link"
        id="v-pills-friends-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-friends"
        type="button"
        role="tab"
        aria-controls="v-pills-friends"
        aria-selected="false"
        >Friends</a
      >
      <a
        class="nav-link"
        id="v-pills-messages-taaaaaaaab"
        data-bs-toggle="pill"
        href=""
        role="tab"
        aria-controls=""
        aria-selected="false"
        >Directions</a
      >
      <a
        class="nav-link"
        id="v-pills-settttings-taaaaab"
        data-bs-toggle="pill"
        v-on:click="LogOut"
        href=""
        role="tab"
        aria-controls=""
        aria-selected="false"
        >Log Out</a
      >
    </div>
    <!--End of Navbar-->
    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        ...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        ...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc...bjvjvjhcvhjcjcjchjcjhcjhcfjhcjc
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-classes"
        role="tabpanel"
        aria-labelledby="v-pills-classes-tab"
      >
        <DanceClasses />
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-eClasses"
        role="tabpanel"
        aria-labelledby="v-pills-eClasses-tab"
      >
        ...
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-aClasses"
        role="tabpanel"
        aria-labelledby="v-pills-aClasses-tab"
      >
        ...
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-friends"
        role="tabpanel"
        aria-labelledby="v-pills-friends-tab"
      >
        ...
      </div>
    </div>
  </div>
</template>

<script>
import DanceClasses from "./DanceClasses.vue";

export default {
  name: "Nav_Home",
  components: {
    DanceClasses,
  },
  methods: {
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

<style>
</style>