<template>
    <h1>All Classes</h1>
</template>

<script>
import axios from "axios";

export default {
    name: 'DanceClasses',
    data: function(){
        return {
            library:[]
        }
    },
    created: async function () {
        let response = await axios.get(
            "https://catfact.ninja/fact"
        );
        this.library = response.data;
    },
};
</script>
