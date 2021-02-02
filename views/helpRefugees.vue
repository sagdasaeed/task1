<template>
    <div class="refugees">
        <app-header/>
        <refugees />
        <Footer/>
    </div>
</template>

<script>
import refugees from "@/components/refugees.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';


export default {
    name: "helpRefugees",
    components: {
        refugees,
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

