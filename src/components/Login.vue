<template>
  <div id="removeMargin">
    <div id="forAdvertisement">
      <Background />
      <!---firstform--->
      <form id="LoginForm" @submit.prevent="manageSubmit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            v-model="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <!--password-->
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="exampleInputPassword1"
          />
        </div>
        <!--check box-->
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Keep me signed in</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <br />
        <br />
        <hr />
        <button
          type="submit"
          v-on:click="gotoSignUp"
          class="btn btn-outline-primary"
        >
          Create New Account
        </button>

        <!--end of checkbox-->
      </form>

      <!--this is the other part-->
    </div>
    <div id="Display">
      <div
        class="card"
        style="width: 18rem"
        v-for="id in classes"
        v-bind:key="id"
      >
        <!--img src="..." class="card-img-top" alt="..."-->
        <div class="card-body">
          <h5 class="card-title">{{ id.name }}</h5>
          <p class="card-text">
            Location: {{ id.location }}
            <br />
            Schedule: {{ id.schedule }}
            <br />
            Price per session: {{ id.price }}
          </p>
          <a href="#" class="btn btn-primary">Enroll</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Background from "./Background.vue";
const API =
  "https://3000-jollychua-danceplaygroun-wnrgtq6k926.ws-us28.gitpod.io/";
export default {
  name: "Login",
  components: {
    Background,
  },
  data() {
    return {
      email: "",
      password: "",
      classes: "",
      members: "",
    };
  },

  methods: {
    gotoSignUp: function () {
      this.$router.push("SignUp");
    },
    async manageSubmit() {
      const response = await axios.post(API, {
        email: this.email,
        password: this.password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      this.$emit("welcome-user");
      swal("Welcome!", "You are now inside your account!", "success");
      this.$router.push("Home");
    },
  },
};
</script>

<style scoped>
#removeMargin {
  margin-left: 0px;
}

/* for desktop */
#forAdvertisement {
  width: 1300px;
  height: 800px;
  margin-right: 0px;
  margin-top: 50px;
  margin-left: 0px;
  display: flex;
}
#LoginForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 800px;
  height: 470px;
  padding: 40px 30px 80px 30px;
  margin-left: 0px;
  margin-top: 50px;
}
.card {
  background-color: gray;
}
#Display {
  background-color: white;
  width: 600px;
  height: 470px;
}
/* for tablet */
@media screen and (max-width: 992px) {
  #LoginForm {
    background-color: white;
    border: 2px solid yellow;
    border-radius: 5px;
    width: 600px;
    height: 460px;
    padding: 50px 50px 80px 50px;
    margin-left: 0px;
    /*position: absolute;*/
  }
  #forAdvertisement {
    background: none;
  }
}
/* for celpphone */
@media screen and (max-width: 600px) {
  #LoginForm {
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
  #forAdvertisement {
    background: none;
  }
}
</style>