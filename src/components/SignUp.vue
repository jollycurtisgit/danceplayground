<template>
  <div id="forAdvertisement">
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
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="inputPassword4"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Repeat Password</label>
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
            <label class="form-check-label" for="gridCheck">
              Agree to terms and condition
            </label>
          </div>
        </div>
        <hr />
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "SignUp",
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
    gotoSignUp: function () {
      this.$router.push("Login2");
    },
    async handleSubmit() {
      const response = await axios.post("members", {
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      });
      swal("Welcome!", "You may now login!", "success");
      this.$router.push("Login2");
    },
  },
};
</script>

<style scoped>
/* for desktop */
#forAdvertisement {
  width: 1000px;
  height: 800px;
  margin-right: 0px;
  margin-top: 0px;
  background-position: 0px 30px;
  background-repeat: no-repeat;
  background-size: 900px 600px;
  background-image: url("https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/272024971_3044864865752901_119031524630565305_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHrZurqUbaQo33UlGke2L3hZ6Ro36UdPjNnpGjfpR0-M1yLp2l0xJcO3sHuxrrEt7jXHFMNKOsgeoemFEThieKR&_nc_ohc=1Fp2H8JUw1UAX8hfEea&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT8QoX-PjcZBAotv3il8LJ_7X8DtYQki-60eaXdLXyQJ0Q&oe=61EB134F");
}

#SignUpForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 600px;
  height: 550px;
  padding: 40px 50px 40px 50px;
  margin-left: 780px;
  margin-top: 50px;
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