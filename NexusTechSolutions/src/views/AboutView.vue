<template>
    <div class="container mt-5" >
        <div class="row">
            <div class="col-md-6">
                <img src="../assets/about.jpg" alt="About Us" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
                <h2>About Us</h2>
                <p>
                    Learn more about our company and our mission. We strive for excellence and are dedicated to serving
                    our
                    clients with integrity.
                </p>
                <router-link class="btn btn-primary" to="/about">Learn More</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AboutView',
};
</script>

<style lang="scss" scoped>
h1 {
    color: #333;
}

p {
    margin: 15px;
    font-size: 18px;
    line-height: 1.6;
}
</style>
