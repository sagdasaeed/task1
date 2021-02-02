<template>
    <div class="foodBoxes">
        <app-header/>
        <food />
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import food from "@/components/food.vue";
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "foodBoxes",
    components: {
       food,
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
