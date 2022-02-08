 <template>
  <div class="Display">
    <div class="absolute">
      <h3>Please select any of the buttons...</h3>
      <br />
      <br />
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.Display {
  background-color: blueviolet;
}
h3 {
  left: 40%;
  color: yellow;
  position: absolute;
}

.spinner-border {
  position: absolute;
  left: 50%;
}
</style>