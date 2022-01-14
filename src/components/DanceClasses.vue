<template>
  <div>
    <h1>All Classes</h1>
    <button @click="showJoke">Show Joke</button>
    <button @click="classList">Classes</button>

    <ClassCard />
    <div>
      <p>{{ classes }}</p>
    </div>
    <div>
      <p>{{ joke }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClassCard from "@/components/ClassCard";

export default {
  name: "DanceClasses",
  data: function () {
    return {
      classes: "",
      joke: "",
    };
  },
  created: {
    async function() {
      const response = await axios.get(
        "https://r5j2p.sse.codesandbox.io/classes"
      );
      this.classes = response.data;
    },
  },
  methods: {
    async showJoke() {
      const jokeTime = await axios.get("https://icanhazdadjoke.com", {
        headers: { Accept: "text/plain" },
      });
      this.joke = jokeTime.data;
      console.log(jokeTime);
    },
    async classList() {
      const response = await axios.get("http://localhost:3000/classes");
      this.classes = response.data;
      console.log(response.data);
    },
    async linkToImg() {
      const response = await axios.get("http://localhost:3000/classes");
      let image = response.data.link;
      this.linkToImg = image;
    },
  },
};
</script>
