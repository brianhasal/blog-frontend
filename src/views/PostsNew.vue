<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newPostParams: {},
        errors: [],
      };
    },
    created: function () {},
    methods: {
      submit: function () {
        axios
          .post("/posts.json", this.newPostParams)
          .then((response) => {
            console.log("posts create", response.data);
            this.$router.push("/posts");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
  };
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>New Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="newPostParams.body" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="newPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>