<template>
  <div id="projects">
    <app-header/>
    <charity-pic/>
    <edit-profile/>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import CharityPic from '../components/CharityPic.vue';
import EditProfile from '../components/editProfile.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Projects", 
  components: {
    EditProfile,
    AppHeader,
    
    Footer,
    CharityPic
  }
};
</script>
<style scoped>
*{
    background-color: rgba(226, 255, 212, 0.61);
}
</style>
