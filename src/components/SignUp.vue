<template>
  <div id="removeMargin">
    <div id="forAdvertisement">
      <Background />
      <!---firstform--->
      <form id="SignUpForm" @submit.prevent="handleSubmit">
        <!---new form--->
        <div>
          <div class="my-1">
            <label for="validationCustom01" class="form-label">Name</label>
          </div>

          <div class="my-3">
            <input
              type="text"
              class="form-control"
              v-model="fName"
              id="validationCustom01"
              placeholder="First Name"
            />
          </div>
          <div class="my-3">
            <input
              type="text"
              class="form-control"
              v-model="lName"
              id="validationCustom01"
              placeholder="Last Name"
            />
          </div>

          <div class="mb-3">
            <label for="inputEmail4" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              id="inputEmail4"
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="mb-3">
            <label for="inputPassword4" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="inputPassword4"
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword4" class="form-label"
              >Repeat Password</label
            >
            <input
              type="password"
              class="form-control"
              v-model="password_confirm"
              id="inputPassword4"
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <a class="form-check-label" for="gridCheck" v-on:click="terms">
                Agree to terms and condition
              </a>
            </div>
          </div>
          <hr />
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Background from "./Background.vue";
//import swal from "sweetalert2/dist/sweetalert2.js";
const API = "https://herokudance.herokuapp.com/";
export default {
  name: "SignUp",
  components: {
    Background,
  },
  data: function () {
    return {
      fName: "",
      lName: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(API + "SignUp", {
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      });
      swal("Welcome!", "You may now login!", "success");
      this.$router.push("Login2");
      console.log(response);
    },
    terms() {
      swal(
        "Before you start:",
        "please be safe, do not place your real identity here ;)",
        "info"
      );
    },
  },
};
</script>

<style scoped>
#removeMargin {
  margin-left: 0px;
  width: 1400px;
}

/* for desktop */
#forAdvertisement {
  width: 1300px;
  height: 600px;
  margin-right: 0px;
  margin-top: 6px;
  margin-left: 0px;
  display: flex;
}

#SignUpForm {
  height: 550px;
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 400px;
  padding: 20px 30px 80px 30px;
  margin-left: 0px;
  margin-top: 50px;
  z-index: 1;
  position: absolute;
  left: 1050px;
}

#flex {
  display: flex;
}

/* for tablet */
@media screen and (max-width: 992px) {
  #SignUpForm {
    background-color: white;
    border: 2px solid yellow;
    border-radius: 5px;
    width: 600px;
    height: 460px;
    padding: 50px 50px 80px 50px;
    margin-left: 60px;
    position: absolute;
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