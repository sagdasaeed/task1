<template>
  <div class="houseForm">
    <img src="..\assets\House1.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>House Repair</h1>
      <hr />
      <p>
        Many poor families live in dilapidated homes that are not suitable for
        living and do not provide the simplest requirements for dilapidated
        homes or that need support for finishing work for those with low
        incomes, and in compliance with his saying, may God bless him and grant
        him peace, “Like the believers in their affection, compassion and
        sympathy as the body, if a member complains about it, it collapses. He
        has the rest of the body by staying up late and feverish "and as we know
        that the house is an important and necessary thing in our life, it is
        our protector from the harshness of external life, and we all want a
        house to go to during the rain or the heat, a house in which we sleep in
        peace. If you have a safe house, help others repair their dilapidated
        homes in order to protect them." And their children from the cruelty of
        external life.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  name: "houseForm",
  components: { donateForm },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 560px;
  opacity: 0.95;
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
