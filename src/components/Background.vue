<template>
  <div id="litaw">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAT4zBs.img?h=630&w=1119&m=6&q=60&o=f&l=f&x=512&y=308"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAT4RK8.img?h=714&w=1075&m=6&q=60&o=f&l=f"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAT4XD3.img?h=785&w=1075&m=6&q=60&o=f&l=f&x=348&y=354"
            class="d-block w-100"
            alt="..."
          />
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
  background-color: red;
}

#carouselExampleFade {
  width: 300px;
}
</style>

