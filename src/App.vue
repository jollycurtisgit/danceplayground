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
/* Set the background color of body to tan */
body {
  background-image: url("https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/272051571_3044126872493367_6797284298872454994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGth-4ajJfzjVhj2-NhUKGccgbPHUEbGbZyBs8dQRsZtuvZCU12Qk2Cc6-gFsLjB37GiYYAeIHPMi5-mLg8lkMY&_nc_ohc=hU1CxPs6yJoAX8SPlZ5&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT8iljL31qPY7m7l4mMRI0U5QXwi7dr-asfB6yE4Mwxa3w&oe=61E8BDC4");
  background-repeat: no-repeat;
  background-position: auto;
  background-color: blueviolet;
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  body {
    background-image: url("https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/272051571_3044126872493367_6797284298872454994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGth-4ajJfzjVhj2-NhUKGccgbPHUEbGbZyBs8dQRsZtuvZCU12Qk2Cc6-gFsLjB37GiYYAeIHPMi5-mLg8lkMY&_nc_ohc=hU1CxPs6yJoAX8SPlZ5&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT8iljL31qPY7m7l4mMRI0U5QXwi7dr-asfB6yE4Mwxa3w&oe=61E8BDC4");
    background-repeat: no-repeat;
    background-color: yellow;
    background-size: contain;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-image: url("https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/272051571_3044126872493367_6797284298872454994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGth-4ajJfzjVhj2-NhUKGccgbPHUEbGbZyBs8dQRsZtuvZCU12Qk2Cc6-gFsLjB37GiYYAeIHPMi5-mLg8lkMY&_nc_ohc=hU1CxPs6yJoAX8SPlZ5&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT8iljL31qPY7m7l4mMRI0U5QXwi7dr-asfB6yE4Mwxa3w&oe=61E8BDC4");
    background-repeat: no-repeat;
    background-color: olive;
  }
}
</style>
