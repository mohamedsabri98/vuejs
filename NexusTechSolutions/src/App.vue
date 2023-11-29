<template>
    <div id="app">
        <!-- navbar header -->
        <NavbarSection />

        <!-- main content -->
        <router-view />

        <!-- footer -->
        <FooterSection />
    </div>
</template>
  
<script>
import FooterSection from './components/FooterSection.vue';
import NavbarSection from './components/NavbarSection.vue';

export default {
    name: 'App',
    components: {
        FooterSection,
        NavbarSection,
    },
};
</script>
  
<style lang="scss">
body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    color: #fff;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
  