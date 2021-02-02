<template>
  <div>
    <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
      <div
        class="w3-display-middle"
        style="white-space:nowrap; margin-left:2%;"
      >
        <h3
          class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity"
          style="color:white; font-size:20px "
        >
          Together we can make a difference
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharityPic",
};
</script>
<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
.bgimg-1 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/Charitable-giving.jpg");
  min-height: 100%;
}

.w3-wide {
  letter-spacing: 10px;
}
.w3-hover-opacity {
  cursor: pointer;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1600px) {
  .bgimg-1 {
    background-attachment: scroll;
    min-height: 500px;
  }
}
</style>
