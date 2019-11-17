<template>
  <div id="show-blogs">
    <div class="single-blog" id="blog">
      <router-link class="back" :to="'/'">Back</router-link>
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <p>Author: {{ blog.author }}</p>

      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get(`https://vue-series.firebaseio.com/posts/${this.id}.json`)
      .then(response => response.json())
      .then(data => this.blog = data);
  }
};
</script>


<style scoped>
.back {
  color: #222;
}

#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  height: calc(100vh - 56px)
}
</style>