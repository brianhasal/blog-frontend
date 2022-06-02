<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        editPostParams: {},
        post: {},
        errors: [],
      };
    },
    created: function () {
      axios
        .get("/posts/" + this.$route.params.id)
        .then((response) => {
          console.log("gathering post", response);
          this.post = response.data;
          this.editPostParams = this.post;
        })
    },
    methods: {
      updatePost: function (post) {
        axios
          .patch("/posts/" + post.id, this.editPostParams)
          .then((response) => {
            console.log("posts update", response);
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
    <form v-on:submit.prevent="updatePost(post)">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editPostParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="editPostParams.body" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="editPostParams.image" />
      </div>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>