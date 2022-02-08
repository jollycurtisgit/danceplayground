<template>
  <div id="litaw">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/one.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/two.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/bg.png" class="d-block w-100" alt="..." />
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Background",
};
</script>

<style>
#litaw {
  width: 1200px;
  height: 500px;
}

#carouselExampleFade {
  width: 1200px;
  height: 500px;
}

button .carousel-control-next {
  margin: 0px;
  border: 0px;
  padding: 0px;
  z-index: -3;
}

.carousel-control-next {
  margin: 0px;
  border: 0px;
  padding: 0px;
}

/* On screens that are 992px or less, set the background color to yellow */
@media screen and (max-width: 992px) {
  #litaw {
    width: 990px;
    height: 500px;
    display: none;
  }
  #carouselExampleFade {
    width: 990px;
    height: 500px;
  }
  .carousel-inner {
    display: none;
  }
}
/* Cellphone: On screens that are 600px or less */
@media screen and (max-width: 600px) {
  #litaw {
    width: 450px;
    height: 500px;
    display: none;
  }
  #carouselExampleFade {
    width: 450px;
    height: 500px;
  }
  .carousel-inner {
    display: none;
  }
}
</style>


