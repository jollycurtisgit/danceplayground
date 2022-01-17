<template>
  <div>
    <form id="LoginForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <br />
      <hr />
      <button type="submit" class="btn btn-outline-primary">
        Create New Account
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* for desktop */
#LoginForm {
  background-color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 600px;
  height: 460px;
  padding: 50px 50px 80px 50px;
  margin-left: 750px;
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
}
</style>