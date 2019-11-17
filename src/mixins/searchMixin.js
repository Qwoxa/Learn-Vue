export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => blog.title.includes(this.search));
    }
  }
};