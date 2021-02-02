<template>
  <div class="hygiene">
    <img src="..\assets\hygieneTools.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>Hygiene Tools</h1>
      <hr />
      <p>
        Personal hygiene is known to be a set of habits that a person adheres
        to, and he is keen to follow them in order to maintain his activity,
        vitality, health, and personal appearance, and to increase the respect
        of others for him, so Islam called us to maintain cleanliness
      </p>

      <p>
        These days, we have found difficult conditions for us, which is the
        emergence of the Corona virus, which requires a lot of awareness and
        hygiene in order to avoid it. Therefore, we wanted to provide personal
        hygiene tools for those who cannot provide them in their home, so help
        us spread safety and cleanliness.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  components: { donateForm },
  name: "hygiene",
};
</script>
<style scoped>
img {
  width: 100%;
  height: 600px;
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
