<template>
  <div id="forAdvertisement">
    <!---firstform--->
    <form id="LoginForm" @submit.prevent="handleSubmit2">
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
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <br />
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Login2",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    manageSubmit: function () {
      const response = {
        email: this.email,
        password: this.password,
      };
      console.log(response);
      axios
        .post("http://localhost:3000", response)
        .then((res) => {
          localStorage.setItem("token", response.data.token);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      swal("Welcome!", "You are now inside your account!", "success");
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

#LoginForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 600px;
  height: 400px;
  padding: 40px 50px 80px 50px;
  margin-left: 780px;
  margin-top: 120px;
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