<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        message: "All Posts",
        posts: [],
      };
    },
    created: function () {
      this.indexPosts();
    },
    methods: {
      indexPosts: function() {
        axios.get("/posts").then((response) => {
          console.log("showing posts", response.data);
          this.posts = response.data;
        })
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div>
        <a v-bind:href="`/posts/${post.id}`">Show More Info</a>
      </div>
    </div>
  </div>
</template>

<style></style>