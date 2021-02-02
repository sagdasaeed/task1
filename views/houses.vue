<template>
    <div class="About">
        <app-header/>
        <houseForm />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import houseForm from "@/components/houseForm.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "houses",
    components: {
        houseForm,
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
