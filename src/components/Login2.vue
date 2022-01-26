<template>
  <div id="removeMargin">
    <div id="forAdvertisement">
      <Background />
      <!---firstform--->
      <form id="LoginForm" @submit.prevent="manageSubmit">
        <div>
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
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Keep me signed in</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <br />
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Background from "./Background.vue";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
export default {
  name: "Login2",
  components: {
    Background,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async manageSubmit() {
      const response = await axios.post(API, {
        email: this.email,
        password: this.password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      this.$emit("welcome-user");
      swal("Welcome!", "You are now inside your account!", "success");
      //this.$router.push("Home");
    },
  },
};
</script>

<style scoped>
#removeMargin {
  margin-left: 0px;
  width: 1300px;
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
  margin-left: 5px;
  margin-top: 50px;
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