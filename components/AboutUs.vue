<template>
  <div>
    <!-- Page content -->
    <div class="w3-content" style="max-width:1200px">
      <!-- About Section -->
      <div class="w3-row w3-padding-64" id="about">
        <div class="w3-col m6 w3-padding-large w3-hide-small">
          <img
            src="../assets/philanthropreneurs.jpg"
            class="w3-round w3-image w3-opacity-min"
            alt="Table Setting"
            width="600"
            height="750"
          />
        </div>

        <div class="w3-col m6 w3-padding-large">
          <h1 class="w3-center">About Charity</h1>
          <br />
          <h5 class="w3-center">Tradition since 1889</h5>
          <p class="w3-large">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use
            <span class="w3-tag w3-light-grey">seasonal</span> ingredients.
          </p>
          <p class="w3-large w3-text-grey w3-hide-medium">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div class="section green">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-xs-12 col-md-9">
            <div class="section-subtitle">
              <h3 class="text-normal margin-clear" style="font-size:2rem">
                Your time and skills could help us in saving a precious life!
              </h3>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12 col-md-3">
            <div class="section-content">
              <router-link to="/volunteerUs" tag="a" class="btn">
                Become a Volunteer
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
<style scoped>
body {
  font-family: "Times New Roman", Georgia, Serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}
@import "https://www.w3schools.com/w3css/4/w3.css";
.section.green {
  color: white;
  background-color: #15a255;
}
.section {
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 5%;
}
.btn {
  border-color: white;
  color: white;
  font-size: 20px;
}
</style>
