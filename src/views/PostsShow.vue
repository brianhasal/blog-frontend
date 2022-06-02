<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        post: {},
      };
    },
    created: function () {
      this.showPost();
    },
    methods: {
      showPost: function() {
        axios.get("/posts/" + this.$route.params.id).then((response) => {
          console.log("showing posts", response.data);
          this.post = response.data;
        })
      },
      
    },
  };
</script>

<template>
  <div class="home">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <div>
      <router-link v-bind:to="`/posts/${post.id}/edit`">Edit post</router-link>
      <div>
        <a href="/posts">Back to all posts</a>
      </div>
    </div>
  </div>
</template>

<style></style>