<template>
  <div class="donate">
    <div class="container1">
      <h1>Donation Form</h1>

      <h2>Enter Your Donation</h2>
      <input class="inp" type="number" value="One" min="1" />

      <br />
      <h2>Personal message</h2>

      <textarea
        class="character-counter textarea form-control"
        cols="40"
        data-counterformat="%1  characters remaining"
        data-maxlength="250"
        id="id_charity_message"
        maxlength="250"
        name="charity_message"
        rows="9"
        placeholder="Type your msg..."
      ></textarea>
      <button class="btn">Donate Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "donateForm",
};
</script>
<style scoped>
.container1 {
  background-color: #fdf8ec;
  padding: 16px;
  height: 30%;
  width: 315px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  float: right;
  margin-right: 15%;
  margin-top: 4%;
}

h1 {
  font-size: 30px;
  color: #000000;
  margin-top: 3%;
}
h2 {
  color: #4caf50;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
}
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 4%;
}
.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
.inp {
  width: 100%;
  margin-bottom: 5%;
}
</style>
