<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <img src="@/assets/head-logo.png" alt="Logo" width="80" height="35"> Nexus Tech Solutions
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link btn btn-outline-info" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn btn-outline-info" to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn btn-outline-info" to="/services">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn btn-outline-info" to="/about">About</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <router-link class="btn btn-outline-info me-2" to="/contact">Contact Us</router-link>
                    <button class="btn btn-outline-warning">Get Started</button>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'NavbarSection',
};
</script>
  
<style lang="scss">
.navbar {
    background-color: #343a40;
}

.navbar-brand img {
    filter: brightness(0) invert(1);
}

.navbar-toggler {
    border: 1px solid #fff;
}

.navbar-nav .nav-item {
    margin-right: 10px;
}

.nav-link {
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #ffc107;
}

.dropdown-menu {
    background-color: #343a40;
}

.dropdown-item {
    color: #fff;
    transition: background-color 0.3s;
}

.dropdown-item:hover {
    background-color: #ffc107;
    color: #343a40;
}

.btn-outline-warning {
    color: #ffc107;
    border-color: #ffc107;
}

.btn-outline-warning:hover {
    background-color: #ffc107;
    color: #343a40;
}

.btn-outline-info {
    color: #17a2b8;
    border-color: #17a2b8;
}

.btn-outline-info:hover {
    background-color: #17a2b8;
    color: #fff;
}
</style>
  