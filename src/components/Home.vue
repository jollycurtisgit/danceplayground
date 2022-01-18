<template>
  <h3></h3>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  created: function () {
    const response = {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    };
    console.log();
    axios
      .get("http://localhost:3000", response)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>


<style scoped>
</style>