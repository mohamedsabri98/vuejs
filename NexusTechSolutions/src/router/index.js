// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import BlogDetailView from '../views/BlogDetailView.vue';


const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/blog', component: BlogView },
    { path: '/services', component: ServicesView },
    { path: '/blog/:postId', component: BlogPostView, props: true },
    {
        path: '/blog/show/:postId',
        name: 'blog-show',
        component: BlogDetailView,
        props: route => ({ post: findPostById(route.params.postId) }),
    },
];
function findPostById(postId) {
    const foundPost = this.BlogView.find(post => post.id === postId);
    if (!foundPost) {
        console.error('Post not found');
        return null;
    }

    return foundPost;
}

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
