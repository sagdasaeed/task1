<template>
    <div class="About">
        <app-header/>
        <water />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import water from "@/components/water.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "watering",
    components: {
        water,
        AppHeader,
        Footer
    }
};
</script>
<style scoped >
 *{
     background-color: rgb(237, 255, 208);
     
 }
 About{
        background-color: cadetblue;
    }
</style>
