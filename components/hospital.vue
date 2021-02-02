<template>
  <div class="food">
    <img src="..\assets\hospital.jpg" alt="" />
    <donate-form />
    <div class="left">
      <div>
        <h1>Building Hospitals</h1>
        <hr />
      </div>
      <p>
        Medical aid or contributing to the building and reconstruction of
        hospitals is one of the most important charitable acts with a great
        reward from God. Your small help may contribute to the revival of many
        people. God says: “And whoever revives them, it is as if they have
        revived all people".(Al-Ma'idah: 32) The charity provides medical aid to
        patients who cannot afford to pay the costs of treatment and surgeries,
        and to contribute to the installation of prosthetic limbs, and provides
        them with medicines and laboratory tests . The charity also provides
        free treatment services to the families who are sponsored by the
        association. The association contributes to helping emergency patients
        such as dialysis and kidney failure, and chronic diseases such as
        diabetes, pressure, arthritis and hearing problems, and some cases may
        be transferred to specialized hospitals if the patient’s condition so
        requires.
      </p>
    </div>
  </div>
</template>
<script>
import donateForm from "./donateForm.vue";
export default {
  components: { donateForm },
  name: "hospital",
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
  height: 25%;
  background-color: rgb(253, 252, 252);
  margin-left: 10%;
  margin-bottom: 3%;
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

h3 {
  text-align: center;
  font-size: 30px;
}
</style>
