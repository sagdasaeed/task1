<template>
  <div class="header">
    <router-link to="/" class="logo" exact tag="a">
      Give Life
    </router-link>
    <div class="header-right">
      <router-link to="/" exact tag="a">
        Home
      </router-link>
      <a href="#projects">Projects</a>
      <router-link to="/volunteerUs" tag="a">
        Volunteer
      </router-link>
      <a href="#about">About Us</a>
      <router-link to="/contactUs" tag="a">
        Contact Us
      </router-link>
      <div class="dropdown">
        <button class="dropbtn">
          My Profile
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content" style="right:10px;">
          <router-link to="/projects" tag="a">
            Edit profile
          </router-link>
          <a href="#">Log out</a>
        </div>
      </div>
      <router-link
        to="/loginform"
        tag="button"
        class="btn"
        style="color:white;"
      >
        Log In
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #272727;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  font-family: inherit;
}

.header a.logo {
  font-size: 40px;
  font-weight: bold;
  background-image: url("../assets/Charitable-giving.jpg");
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  color: black;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
.btn {
  background-color: #15a255;
  border: none;
  color: White;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  border-radius: 5px;
}

.btn:hover {
  background-color: #3e8e41;
  color: black;
}
.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  padding: 12px;
  line-height: 25px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  border-radius: 4px;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #15a255;
  color: white;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
