<template>
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
</template>


<script>
export default {
  name: "ClassDisplay",
};
</script>

<style scoped>
.card {
  background-color: gray;
}

#Display {
  background-color: white;
}
</style>
