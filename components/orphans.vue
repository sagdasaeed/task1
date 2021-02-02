<template>
  <div class="orphans">
    <img src="..\assets\Boy-on-tracks.jpg" alt="" />
    <donate-form />
    <div class="left">
      <h1>Help Orphans</h1>
      <hr />
      <p>
        An orphan child needs more care than the average child needs, as he is
        in dire need of attention and psychological and material support in
        order to be able to complete his life naturally and to have a great
        ability to erase the effects and bitterness of the orphan when he grows
        up. There are many forms and methods of benevolence to the orphan, such
        as treating him well, preserving it, taking care of his money and
        preserving his rights, in addition to that, Islam is a religion of
        forgiveness, tolerance and equality. Humiliate him. We contribute to
        caring for orphans, taking care of them, and providing their simplest
        needs. Therefore, if you want to contribute to helping orphaned
        children, donate what makes them happy.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  name: "orphans",
  components: {
    donateForm,
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 550px;
  opacity: 0.9;
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
