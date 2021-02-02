<template>
  <!-- Footer -->
  <div
    class="page-footer font-small blue pt-4"
    style="background-color:#1a1a1a; color:#737373"
  >
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-4 mt-md-0 mt-3">
          <!-- Content -->
          <h5 class="text-uppercase" >Give Life</h5>
          <p style="color:#737373">
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3" />

        <!-- Grid column -->
        <div class="col-md-2 mb-md-0 mb-3">
          <!-- Links -->
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled">
            <router-link to="/" exact tag="li">
              <a>Home</a>
            </router-link>
            <li><a href="#projects">Projects</a></li>
            <router-link to="/volunteerUs" tag="li">
              <a>Volunteer</a>
            </router-link>
            <li><a href="#about">About Us</a></li>
            <router-link to="/contactUs" tag="li">
              <a>Contact Us</a>
            </router-link>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 mb-md-0 mb-3">
          <!-- Links -->
          <h5 class="text-uppercase">Projects</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#projects">Help Orphans</a>
            </li>
            <li>
              <a href="#projects">Homes renovations</a>
            </li>
            <li>
              <a href="#projects">Help refugees</a>
            </li>
            <li>
              <a href="#projects">Clean Water</a>
            </li>
            <li>
              <a href="#projects">Food-boxes</a>
            </li>
            <li>
              <a href="#projects">Winter clothes</a>
            </li>
            <li>
              <a href="#projects">Building hospitals</a>
            </li>
          </ul>
        </div>
        <!-- Grid column -->
        <div class="col-md-2 mb-md-0 mb-3">
          <!-- Links -->
          <h5 class="text-uppercase">Contact Us</h5>

          <ul class="list-unstyled">
            <li>
              Canada,26th Street.
            </li>
            <li>
              0235544451
            </li>
            <li>
              GiveLife21@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <!-- Grid row -->
    </div>

    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="#GiveLife" style="color:#4CAF50"> GiveLifeCharity.com</a>
    </div>
    <!-- Copyright -->
  </div>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
h5 {
  color: #fff;
}
a:hover {
  color: #4caf50;
  text-decoration: none;
}
a {
  color: #737373;
}
</style>
