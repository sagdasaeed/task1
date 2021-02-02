<template>
    <div class="orphans">
        <app-header/>
        <orphans />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import orphans from "@/components/orphans.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "helpOrphans",
    components: {
       orphans,
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
