<template>
    <div class="winter">
        <app-header/>
        <winter />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import  winter from "@/components/winter.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "winterClothes",
    components: {
        winter,
        AppHeader,
        Footer
    }
};
</script>
<style scoped >
 *{
     background-color: rgb(237, 255, 208);
     
 }
 
</style>
