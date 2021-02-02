<template>
    <div class="hygiene">
        <app-header/>
        <hygiene />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import hygiene from "@/components/hygiene.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "hygieneTools",
    components: {
        hygiene,
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
