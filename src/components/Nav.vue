<template>
  <div>
    <!--  -->

    <!--  -->

    <!--navbar-->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          v-on:click="gotoDanceClasses"
          class="nav-link active"
          aria-current="page"
          >Dance Classes</a
        >
      </li>
      <li class="nav-item">
        <a v-on:click="gotoAddClasses" class="nav-link">Add a New Class</a>
      </li>
    </ul>

    <!--end of navbar-->
  </div>
</template>



<script>
export default {
  name: "Nav",
  
  },
};
</script>



<style scoped>
</style>