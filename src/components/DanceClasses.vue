<template>
  <div>
    <h1>All Classes</h1>
    <button @click="showJoke">Show Joke</button>
    <button @click="classList">Classes</button>
    <div>
      <p>{{ library }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DanceClasses",
  data: function () {
    return {
      library: [],
      joke: "",
    };
  },
  created: {
    async function() {
      const response = await axios.get(
        "https://r5j2p.sse.codesandbox.io/classes"
      );
      this.library = response.data;
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
      this.library = response.data;
      console.log(response.data);
    },
  },
};
</script>
