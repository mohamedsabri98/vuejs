<template>
    <div class="row">
        <div class="col-md-6">
            <h2>Our Services</h2>
            <p>
                Explore our wide range of services designed to meet your needs. We are committed to delivering
                quality and
                excellence.
            </p>
            <router-link class="btn btn-primary" to="/services">View Services</router-link>
        </div>
        <div class="col-md-6">
            <img src="../assets/service.png" alt="Services" class="img-fluid rounded">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesSection',
};
</script>