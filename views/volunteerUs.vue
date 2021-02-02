<template>
    <div class="volunteer">
        <app-header/>
        <volunteer />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import volunteer from "@/components/volunteer.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "volunteerUs",
    components: {
        volunteer,
        AppHeader,
        Footer
    }
};
</script>
<style scoped >
*{
    background-color: rgba(226, 255, 212, 0.61);
}
 
</style>
