<template>
  <div>
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import header from "./components/header";

export default {
  components: {
    ["add-blog"]: addBlog,
    ["show-blogs"]: showBlogs,
    ["app-header"]: header
  },
  data() {
    return {
      number: "",
      comment: "",
      component: "Header"
    };
  },
  methods: {
    handlesubmit() {
      console.log(`Number: ${this.number}
      Comment: ${this.comment}`);
    }
  },
  name: "app"
};
</script>


<style>
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

#show-blogs {
  background: #ddd;
  padding: 20px
}
</style>