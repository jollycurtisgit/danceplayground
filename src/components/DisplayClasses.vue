<template>
  <div id="Display">
    <div
      class="card"
      style="width: 18rem"
      v-for="id in classes"
      v-bind:key="id"
    >
      <img :src="id.link" />

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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DisplayClasses",
  data: function () {
    return {
      classes: "",
      image: "",
    };
  },
  async created() {
    const response = await axios.get("http://localhost:3000/AddClasses");
    this.classes = response.data;
    this.image = response.data.link;
    console.log("classList");
  },
};
</script>

<style scoped>
.card {
  background-color: yellow;
  border-radius: 5px;
  height: 150px;
}
#Display {
  background-color: white;
  width: 1500px;
  height: 470px;
  display: flex;
}
</style>