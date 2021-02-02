<template>
  <div class="refugees">
    <img src="..\assets\dar-yasin-rohingya-refugees-5.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>Help Refugees</h1>
      <hr />
      <p>
        Refugees are people who are forced to leave their homes for fear of
        persecution, either individually or as part of a mass exodus for
        political, religious, military or other problems. The world is
        experiencing the highest levels of displacement ever. By the end of
        2018, 70.8 million people around the world were displaced from their
        homes by conflict and persecution. Among those displaced are nearly 30
        million refugees, more than half of whom are under the age of 18. There
        are also millions of those who are stateless, and they are intended for
        those who are deprived of obtaining citizenship and basic rights such as
        education, health care, work and freedom of movement. So if you can
        help, feel free to give the whole family another chance to have a decent
        life.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  name: "refugees",
  components: {
    donateForm,
  },
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
