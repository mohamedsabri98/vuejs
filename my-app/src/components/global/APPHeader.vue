<template>
    <div class="header">
        <div
            class="container d-flex justify-content-between align-items-center m-0"
        >
            <div class="logo">Mohamed Vue</div>
            <nav class="ml-auto">
                <router-link to="/">Home</router-link>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/services">Services</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/help">Help</router-link>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "APPHeader",
};
</script>
<style lang="scss" scoped>
.header {
    background-color: #333;
    color: white;
    overflow: hidden;
}
.logo {
    font-size: 24px;
    padding: 20px;
    float: left;
}
a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
}
</style>
