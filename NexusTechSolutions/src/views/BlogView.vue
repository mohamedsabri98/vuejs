<template>
    <div class="blog">
        <header class="bg-dark text-light text-center py-5">
            <h1 class="display-4">Latest Blog Posts</h1>
            <p class="lead">Stay Informed and Inspired</p>
        </header>
        <section class="container mt-2">
            <router-link to="/" class="btn btn-warning">add blog</router-link>
        </section>
        <section class="container mt-5">
            <div class="row">
                <div class="col-md-8 border-dark">
                    <!-- Display blog posts here -->
                    <div v-for="post in blogPosts" :key="post.id" class="mb-4">
                        <h2>{{ post.title }}</h2>
                        <p class="text-muted">{{ post.date }}</p>
                        <p>{{ post.content }}</p>
                        <router-link :to="'/blog/show/' + post.id" class="btn btn-primary">Show</router-link>
                        <router-link :to="'/blog/edit/' + post.id" class="btn btn-warning ms-3 me-3">Edit</router-link>
                        <router-link :to="'/blog/delete/' + post.id" class="btn btn-danger">Delete</router-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-4">
                        <h3>Categories</h3>
                        <ul class="list-unstyled">
                            <li><router-link to="/blog/category/1">Category 1</router-link></li>
                            <li><router-link to="/blog/category/2">Category 2</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
    name: 'BlogView',
    data() {
        return {
            blogPosts: [
                {
                    id: 1,
                    title: 'Introduction to Vue.js',
                    date: '2023-01-15',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                },
                {
                    id: 2,
                    title: 'Introduction to Vue.js',
                    date: '2023-01-15',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                },
                {
                    id: 3,
                    title: 'Getting Started with Vuex',
                    date: '2023-02-01',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                },
                {
                    id: 4,
                    title: 'Getting Started with Vuex',
                    date: '2023-02-01',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                },
            ],
        };
    },
};
</script>
  
<style scoped></style>
  