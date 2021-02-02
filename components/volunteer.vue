<template>
  <div class="volunteer">
    <h1 class="sentence">Volunteer to Make a real Difference</h1>
    <hr />
    <br />
    <img src="../assets/111.jpeg" alt="" />
    <div class="container">
      <form action="index.html" method="post">
        <h1>Register</h1>
        <h2>Enter Your information</h2>
        <label class="fullname">Full Name:</label>
        <input class="inp" type="text" placeholder="Enter Your Name" required />

        <label class="address">Address:</label>
        <input
          class="ad"
          type="address"
          placeholder="Enter your Address"
          required
        />

        <label class="phone"> Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="12-3456-678910"
          pattern="[0-9]{2}-[0-9]{4}-[0-9]{6}"
          required
        />

        <label for="age">Age:</label>
        <select id="age" name="user_age">
          <optgroup>
            <option value="over18">Over 18</option>
            <option value="under18"> Under 18</option>
          </optgroup>
        </select>

        <label for="gender">Gender:</label>
        <select id="gender" name="user_gender">
          <optgroup>
            <option value="male">Male</option>
            <option value="female"> Female</option>
          </optgroup>
        </select>

        <label for="job">Job:</label>
        <select id="job" name="user_job">
          <optgroup>
            <option value="student">Student</option>
            <option value="Salarid_person">Salarid person</option>
            <option value="Self_Employed">Self Employed</option>
          </optgroup>
        </select>

        <button type="submit" class="btn">Submit Information</button>
      </form>
    </div>
    <div class="left">
      <h1>Volunteering</h1>
      <hr />
      <p>
        Volunteering is one of the most important things in our lives, where it
        helps to acquire a lot of skills, such as team growth, feeling and
        sharing, and a lot of skills that are indispensable in our daily lives,
        if you volunteer with us, you can participate in distributing money in
        the right place and come to follow up the donation operations and those
        in need of the poor, orphans, villages without water, and the building
        of hospitals. So, if you want to be a faster member of our family and
        have your data register, join us.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "volunteer",
};
</script>
<style scoped>
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

form {
  max-width: 100%;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 8px;
}
.container {
  background-color: #fdf8ec;
  padding: 16px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  float: right;
  max-width: 28%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 3%;
}
img {
  width: 50%;
  height: 50%;
  border-radius: 5px;
  margin-left: 4%;
  float: left;
  margin-bottom: 3%;
}

* {
  font-family: Monospace;
}

.sentence {
  color: rgb(17, 13, 10);
  font-family: Monospace;
  font-size: 30px;
  margin-top: 2%;
}
.volunteer hr {
  width: 25%;
  border-top: 5px solid #4caf50;
  border-bottom: none;
  margin-left: 37.5%;
}
h1 {
  font-size: 30px;
  color: #000000;
  margin: 0 0 30px 0;
  text-align: center;
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
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.left {
  width: 40%;
  padding: 5% 0;
  height: 30%;
  background-color: rgb(253, 252, 252);
  margin-left: 9%;
  border-radius: 8px;
  margin-bottom: 3%;
}
.left h1 {
  text-align: center;
  color: #4caf50;
  margin: 0 0 10px 0;
}

.left hr {
  width: 23%;
  border-top: 2px solid #000;
  border-bottom: none;
  margin-left: 38.5%;
}
.left p {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3rem;
  margin: 40px auto;
  width: 80%;
  font-family: "Nunito", sans-serif;
}
input[type="text"],
input[type="search"],
input[type="address"],
input[type="tel"],
select {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
input[type="radio"] {
  margin: 0 4px 8px 0;
  float: left;
}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}
label {
  display: block;
  margin-bottom: 8px;
  margin-left: 5px;
  float: left;
}

label.light {
  font-weight: 300;
  display: inline-block;
}
h3 {
  text-align: center;
  font-size: 30px;
}
</style>
