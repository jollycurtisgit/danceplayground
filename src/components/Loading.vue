 <template>
  <div class="Display">
    <div class="absolute">
      <h3>Please wait...</h3>
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
  background-color: rosybrown;
}
</style>