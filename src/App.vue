<template>
  <div id="app">
    <div class="container-fluid">
      <Nav />
      <!--pages-->
      <div>
        <Dance-classes v-if="page == 'DanceClasses'" />
        <AddClasses v-if="page == 'AddClasses'" />
        <Login />
      </div>
      <!--endofPages-->
      <SignUp />
    </div>
  </div>
</template>

<script>
import AddClasses from "@/components/AddClasses";
import DanceClasses from "@/components/DanceClasses";
import Nav from "@/components/Nav";
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";

export default {
  name: "App",
  componentDidMount: function () {
    console.log("App has just been rendered for the first time.");
  },
  components: {
    AddClasses,
    DanceClasses,
    Nav,
    Login,
    SignUp,
  },
  data: function () {
    return {
      page: "DanceClasses",
    };
  },
  methods: {
    gotoDanceClasses: function () {
      this.page = "DanceClasses";
    },
    gotoAddClasses: function () {
      this.page = "AddClasses";
    },
  },
};
</script>

<style>
body {
  background-color: blueviolet;
}
</style>
