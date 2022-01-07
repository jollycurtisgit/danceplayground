<template>
  <div id="app">
    <div class="container-fluid">
      <!--navbar-->
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a v-on:click="gotoDanceClasses" class="nav-link active" aria-current="page">Dance Classes</a>
        </li>
        <li class="nav-item">
          <a v-on:click="gotoAddClasses" class="nav-link" >Add a New Class</a>
        </li>  
      </ul>
      <!--end of navbar-->
      <!--pages-->
      <div>
        <Dance-classes v-if="page=='DanceClasses'"/>
        <AddClasses v-if="page=='AddClasses'"/>
      </div>  
       <!--endofPages-->
    </div>
  </div>
</template>

<script>
import AddClasses from "@/components/AddClasses"
import DanceClasses from "@/components/DanceClasses"

export default {
  name: 'App',
  components: {
    AddClasses, DanceClasses
  },
  data: function() {
    return {
      'page': 'DanceClasses'
    }
  },
  methods:{
    'gotoDanceClasses': function() {
      this.page = "DanceClasses"
    },
    'gotoAddClasses': function() {
      this.page = "AddClasses"
    }
  },
}
</script>

<style>
</style>
