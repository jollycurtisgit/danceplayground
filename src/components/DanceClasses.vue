  <template>
  <div>
    <h1>All Classes</h1>
    <button @click="showJoke">Show Joke</button>
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
      <p>{{ joke }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import ClassCard from "@/components/ClassCard";

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
