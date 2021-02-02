<template>
  <div class="contact">
    <app-header/>
    <contact/>
  </div>
</template>
<script>
import AppHeader from '../components/AppHeader.vue';
import Contact from '../components/contact.vue';
export default {
  components: {
    Contact,
    AppHeader
  
  },
  name: "contactUs",
};
</script>
<style scoped>
*{
  background-image: url('../assets/philanthropreneurs.jpg');
  background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
}
</style>