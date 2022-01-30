<template>
  <!--This will desplay one card-->
  <div class="card" v-if="page == 'View_2'">
    <!--Button Test Set-->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <!--Button Test Set-->
    <div id="flex-box">
      <div class="card-body" v-for="id in classesLimitDisplay" v-bind:key="id">
        <img :src="id.link" />
        <h5 class="card-title">{{ id.name }}</h5>
        <p class="card-text">
          Location: {{ id.location }}
          <br />
          Schedule: {{ id.schedule }}
          <br />
          Price per session: {{ id.price }}
        </p>
        <a href="#" class="btn btn-primary" v-on:click="goToUpdate">Update</a>
        <a href="#" class="btn btn-danger" v-on:click="Delete">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecycleCard",
};
</script>

<style scoped>
#flex-box {
  display: flex;
  background-color: green;
  width: 700px;
  height: 8000px;
}

.card {
  background-color: red;
  border-radius: 20px;
  height: 800px;
  margin: 7px;
  /*object-fit: fill;*/
  display: flex;
  /*flex: 1;*/
}
.card-body {
  background-color: yellow;
  width: 180px;
  height: 350px;
  margin: 15px;
}

img {
  border-radius: 20px;
  object-fit: fill;
  width: 150px;
  height: 150px;
}
</style>