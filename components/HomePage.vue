<template>
  <div class="homepage">
    <!-- Project Section -->
    <div class="w3-container w3-padding-32" id="projects">
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
        Our Projects
      </h3>
    </div>
    <div class="picProject">
      <div class="w3-row-padding ">
        <div
          class="w3-col l3 m6 w3-margin-bottom"
          style="background-color:#f2f2f2"
        >
          <img
            src="../assets/image_1537889837824859434.jpg"
            alt="John"
            style="width:300px; height:200px;"
          />
          <h3>Help Orphans</h3>
          <p class="w3-opacity">80.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/helpOrphans"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>

        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="../assets/houserenovationneeded1.jpg"
            alt="Jane"
            style="width:300px; height:200px;"
          />
          <h3>House Repair</h3>
          <p class="w3-opacity">100.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/houses"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>

        <div
          class="w3-col l3 m6 w3-margin-bottom"
          style="background-color:#f2f2f2"
        >
          <img
            src="../assets/22.jpeg"
            alt="Mike"
            style="width:300px; height:200px;"
          />
          <h3>Help Refugees</h3>
          <p class="w3-opacity">15.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/helpRefugees"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="../assets/image_search_1595151805366.jpg"
            alt="Mike"
            style="width:300px; height:200px;"
          />
          <h3>Clean Water</h3>
          <p class="w3-opacity">9.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/watering"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom ">
          <img
            src="../assets/Food-boxes.jpg"
            alt="Mike"
            style="width:300px; height:200px;"
          />
          <h3>Food Boxes</h3>
          <p class="w3-opacity">11.500$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/foodBoxes"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>
        <div
          class="w3-col l3 m6 w3-margin-bottom"
          style="background-color:#f2f2f2"
        >
          <img
            src="../assets/bvQ1w4N5Bwv_ZOtRr3TtE-GUQy8pLUNcvNurjFfa0MI.jpg"
            alt="Mike"
            style="width:300px; height:200px;"
          />
          <h3>Winter Clothes</h3>
          <p class="w3-opacity">10.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/winterClothes"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="../assets/ph_18175_64287.jpg"
            alt="Mike"
            style="width:300px; height:200px;"
          />
          <h3>Building Hospitals</h3>
          <p class="w3-opacity">200.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/buildingHospitals"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>
        <div
          class="w3-col l3 m6 w3-margin-bottom"
          style="background-color:#f2f2f2"
        >
          <img
            src="../assets/set-items-cleaning-teeth-oral-care_172597-7.jpg"
            alt="Dan"
            style="width:300px; height:200px;"
          />
          <h3>Hygiene Tools</h3>
          <p class="w3-opacity">7.000$</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <router-link
              to="/hygieneTools"
              tag="button"
              class="w3-button  w3-block"
              style="background-color:#15a255; color:white"
            >
              Donate Now
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.picProject {
  margin-left: 8%;
  margin-right: 8%;
}
</style>
