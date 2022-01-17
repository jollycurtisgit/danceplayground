<template>
  <div id="app">
    <Nav />
    <div class="container-sm">
      <Login />
      <!--pages-->
      <!--Dance-classes v-if="page == 'DanceClasses'" />
        <!--AddClasses v-if="page == 'AddClasses'" />
        <Login />
      </div>
      <!--endofPages-->
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Login from "@/components/Login";

export default {
  name: "App",
  componentDidMount: function () {
    console.log("App has just been rendered for the first time.");
  },
  components: {
    Nav,
    Login,
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
    background-image: url("https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/272051571_3044126872493367_6797284298872454994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGth-4ajJfzjVhj2-NhUKGccgbPHUEbGbZyBs8dQRsZtuvZCU12Qk2Cc6-gFsLjB37GiYYAeIHPMi5-mLg8lkMY&_nc_ohc=hU1CxPs6yJoAX8SPlZ5&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT8iljL31qPY7m7l4mMRI0U5QXwi7dr-asfB6yE4Mwxa3w&oe=61E8BDC4");
    background-repeat: no-repeat;
    background-color: yellow;
    background-size: 500px 300px;
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
