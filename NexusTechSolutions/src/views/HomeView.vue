<template>
    <div class="home">
        <header class="bg-dark text-light text-center py-5">
            <h1 class="display-4">Welcome to Our Website</h1>
            <p class="lead">Discover the Best Services and Solutions</p>
        </header>
        <!-- services -->
        <section class="container mt-5">
            <services-view />
        </section>
        <!-- Blogs -->
        <section class="bg-light text-dark py-5">
            <blog-view />
        </section>
        <!-- about -->
        <section class="container mt-5">
            <about-view />
        </section>
    </div>
</template>
  
<script>
import ServicesView from './ServicesView.vue';
import BlogView from './BlogView.vue';
import AboutView from './AboutView.vue';

export default {
    name: "HomeView",
    components: {
        'services-view': ServicesView,
        'blog-view': BlogView,
        'about-view': AboutView
    },
};
</script>

  
<style scoped></style>
  