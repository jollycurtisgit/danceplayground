<template>
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
      data-toggle="pill"
      href="#v-pills-home"
      role="tab"
      aria-controls="v-pills-home"
      aria-selected="true"
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
      id=""
      data-toggle="pill"
      href=""
      role="tab"
      aria-controls=""
      aria-selected="false"
      >Classes</a
    >
    <a
      class="nav-link"
      id=""
      data-toggle="pill"
      href=""
      role="tab"
      aria-controls=""
      aria-selected="false"
      >Enrolled Classes</a
    >
     <a
      class="nav-link"
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
      id="v-pills-messages-taaaaab"
      data-toggle="pill"
      href=""
      role="tab"
      aria-controls=""
      aria-selected="false"
      >Friends</a
    >
    <a
      class="nav-link"
      id="v-pills-messages-taaaaaaaab"
      data-toggle="pill"
      href=""
      role="tab"
      aria-controls=""
      aria-selected="false"
      >Directions</a
    >
    <a
      class="nav-link"
      id="v-pills-settttings-taaaaab"
      data-toggle="pill"
      v-on:click="LogOut"
      href=""
      role="tab"
      aria-controls=""
      aria-selected="false"
      >Log Out</a
    >
  </div>
  <!--End of Navbar-->
</template>

<script>
export default {
  name: "Nav_Home",
  methods: {
      gotoAddClasses: function () {
        this.page = "AddClasses";
        this.$router.push("/AddClasses")
      },
      LogOut() {
        localStorage.removeItem("token");
        this.$router.push("/");
      }
    },
};
</script>

<style>
#v-pills-tab {
  background-color: white;
  width: 400px;
  height: 900px;
  left: 0;
  position: fixed;
}
</style>