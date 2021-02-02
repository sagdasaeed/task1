<template>
  <div class="food">
    <img src="..\assets\Q4WJOOSEABFMRDTNJTROF3OEZ4.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>Food Boxes</h1>
      <hr />
      <p>
        Poverty is one of the most complex problems of the contemporary world,
        but it is more complicated by its link to the problem of hunger. The two
        problems overlap and grow together in light of the global food crisis,
        as the ability of individuals and countries to meet food needs
        diminishes, in light of high prices, which in turn lead to the erosion
        of incomes.
      </p>

      <p>
        Poverty and hunger are intertwined in an infernal circle, with which the
        world is unable (or lax) with its individuals, institutions and states
        to effectively address it. The more it steps towards reducing the size
        of the problem, the crisis of high food prices advances, striking all
        efforts and pushing them back far distances that devour the progress
        achieved. Anyone whose income is less than two dollars a day is
        considered poor, and these are the destitute poor, who suffer all kinds
        of deprivations. Our turn is to provide them with food boxes to help
        them. Help us.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  components: { donateForm },
  name: "food",
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
