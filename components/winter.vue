<template>
  <div class="winter">
    <img src="..\assets\winter.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>Winter Clothes</h1>
      <hr />
      <p>
        At a time when some of them take pleasure in entering the winter season
        because they have much goodness and abundant money, so they secure
        various types of food and food, go out for picnics and set up camps, and
        secure in their homes quantities of firewood for entertainment, not
        heating. Because there are many poor people in us and in other countries
        who suffer from this season and what usually accompanies it in terms of
        severe cold, rain, storms and lightning strikes, no means of heating or
        protective clothing, and they may have suffered inside their homes from
        rain and the impossibility of resisting low temperatures with a lack of
        food and food, and a difference between the two teams. He waits for his
        entry to be happy and happy, and a team seeks refuge from him and warns
        him. The least role for us is to provide these poor with clothes and
        blankets to keep them warm, to be of help to them.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  name: "winter",
  components: {
    donateForm,
  },
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
input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
.inp {
  width: 100%;
  margin-bottom: 5%;
}
h3 {
  text-align: center;
  font-size: 30px;
}
</style>
