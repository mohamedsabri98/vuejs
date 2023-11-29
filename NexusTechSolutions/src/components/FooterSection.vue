<template>
    <footer class="footer bg-dark text-light py-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5>Contact Us</h5>
                    <div class="ms-2">
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>Quick Links</h5>
                    <div class="pl-5 ms-2">
                        <router-link class="text-light" to="/">Home</router-link><br>
                        <router-link class="text-light" to="/blog">Blog</router-link><br>
                        <router-link class="text-light" to="/services">Services</router-link><br>
                        <router-link class="text-light" to="/about">About</router-link><br>
                        <router-link class="text-light" to="/contactUs">Contact Us</router-link><br>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection',
};
</script>

<style scoped></style>
