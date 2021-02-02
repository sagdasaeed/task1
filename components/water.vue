<template>
  <div class="water">
    <img src="..\assets\12104CB-E053-water-projects.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>Clean Water</h1>
      <hr />
      <p>
        Water is the secret of life, so there is no life without water. How can
        we imagine that there are people who do not have safe drinking water or
        human use? Let us know that drinking water is one of the best alms
        flowing to a person after his death. It was reported that Saeed bin
        Ubadah, may God be pleased with him, came to the Messenger of God, may
        God bless him and grant him peace, and said, O Messenger of God: Which
        charity is better, he said: Watering water. So, help us deliver drinking
        water to countries that do not have water and give them life.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  components: { donateForm },
  name: "water",
};
</script>
<style scoped>
img {
  width: 100%;
  height: 550px;
  opacity: 0.8;
}
.left {
  width: 40%;
  padding: 5% 0;
  margin-bottom: 3%;
  height: auto;
  background-color: rgb(253, 252, 252);
  margin-left: 10%;
}
.left h1 {
  text-align: center;
  color: #4caf50;
  margin: 0 0 10px 0;
}
.left hr {
  width: 25%;
  border-top: 2px solid #000;
  border-bottom: none;
  margin-left: 37.5%;
}
.left p {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3rem;
  margin: 40px auto;
  width: 80%;
}
</style>
