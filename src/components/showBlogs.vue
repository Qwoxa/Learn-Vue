<template>
  <div v-theme="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>

    <input type="text" v-model="search" placeholder="search blogs" />

    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-if="blog.id != -1" :to="`/blog/${blog.id}`">
        <h2>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <p>{{ blog.content | snippet }}</p>
    </div>
  </div>
</template>


<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [
        {
          title: "No posts found",
          id: -1,
          content:
            "Posts are not found. Probably you have problems with connection.."
        }
      ],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://vue-series.firebaseio.com/posts.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.blogs = Object.entries(data).map(entry => ({
          ...entry[1],
          id: entry[0]
        }));
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>


<style scoped>
#show-blogs,
input {
  max-width: 800px;
  margin: 0 auto;
}

#show-blogs {
  background: #ddd;
  padding: 20px
}

input {
  width: 100%;
  padding: 2px 5px;
}
</style>

<style>
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>