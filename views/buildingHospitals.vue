<template>
    <div class="hospital">
        <app-header/>
        <hospital />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import hospital from "@/components/hospital.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "buildingHospitals",
    components: {
       hospital,
        AppHeader,
        Footer
    }
};
</script>
<style scoped>
*{
         background-color: rgb(237, 255, 208);

}
</style>
