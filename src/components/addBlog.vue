<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>

    <form v-if="!submitted">
      <label for="blog-title">Blog Title:</label>
      <input id="blog-title" v-model.lazy="blog.title" type="text" required />

      <label for="blog-content">Blog Content:</label>
      <textarea id="blog-content" v-model.lazy="blog.content"></textarea>
    
      <div id="checkboxes">
        <label for="js-category">JS</label>
        <input id="js-category" type="checkbox" value="js" v-model="blog.categories" />

        <label for="windows-category">Windows</label>
        <input id="windows-category" type="checkbox" value="windows" v-model="blog.categories" />

        <label for="linux-category">Linux</label>
        <input id="linux-category" type="checkbox" value="linux" v-model="blog.categories" />

        <label for="java-category">Java</label>
        <input id="java-category" type="checkbox" value="java" v-model="blog.categories" />

        <label for="author">Author:</label>
        <select id="author" v-model="blog.author">
          <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
        </select>
      </div>

      <button @click.prevent="createPost">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>

      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>

      <p>Author: {{ blog.author }}</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        author: '',
        categories: []
      },
      authors: ['Nick', 'Alex', 'Bruce'],
      submitted: false,
    }
  },
  methods: {
    createPost () {
      this.$http.post(
        'https://vue-series.firebaseio.com/posts.json',
        this.blog
      )
      .then(data => {
        console.log(data);
        this.submitted = true;
      });
    }
  }
};
</script>



<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
