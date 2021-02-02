<template>
  <div class="home">
    <app-header/>
    <charity-pic />
    <HomePage />
    <about-us/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import HomePage from "@/components/HomePage.vue";
import CharityPic from "@/components/CharityPic.vue";
import AboutUs from "@/components/AboutUs.vue";
import AppHeader from "@/components/AppHeader.vue";
 import UserService from '../services/user.services';
 
export default {
  
  name: "Home",
  components: {
    Footer,
    HomePage,
    CharityPic,
    AboutUs,
    AppHeader
  },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
