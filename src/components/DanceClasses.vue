<template>
  <div>
    <h1>All Classes</h1>
    <button @click="showMembers">Show Members</button>
    <button @click="classList">Classes</button>
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
    <div>
      <p>{{ members }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API = "https://herokudanceplaygroundapi.herokuapp.com/";
//import ClassCard from "@/components/ClassCard";
export default {
  name: "DanceClasses",
  data: function () {
    return {
      classes: "",
      members: "",
    };
  },
  methods: {
    async showMembers() {
      const response = await axios.get(API + "home");
      this.members = response.data;
      console.log(response.data);
    },
    async classList() {
      const response = await axios.get(API + "AddClasses");
      this.classes = response.data;
      console.log(response.data);
    },
  },
};
</script>