import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import contactUs from "../views/contactUs.vue";
import Projects from "../views/Projects.vue";
import volunteerUs from "../views/volunteerUs.vue";
import loginform from "../views/loginform.vue";
import signupform from "../views/signupform.vue";
import helpRefugees from "../views/helpRefugees.vue";
import houses from "../views/houses.vue";
import helpOrphans from "../views/helpOrphans.vue";
import watering from "../views/watering.vue";
import foodBoxes from "../views/foodBoxes.vue";
import winterClothes from "../views/winterClothes.vue";
import buildingHospitals from "../views/buildingHospitals.vue";
import hygieneTools from "../views/hygieneTools.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home

  }
  ,
  {
    path: "/contactUs",
    name: "contactUs",
    component: contactUs

  }
  ,
  {
    path: "/loginform",
    name: "loginform",
    component: loginform

  }
  ,
  {
    path: "/volunteerUs",
    name: "volunteerUs",
    component: volunteerUs

  }
  ,
  {
    path: "/signupform",
    name: "signupform",
    component: signupform

  }
  ,
  {
    path: "/Projects",
    name: "Projects",
    component: Projects

  },
  {
    path: "/helpRefugees",
    name: "helpRefugees",
    component: helpRefugees
},
{
    path: "/houses",

    name: "houses",
    component: houses
},
{
    path: "/helpOrphans",

    name: "helpOrphans",
    component: helpOrphans
},
{
    path: "/watering",

    name: "watering",
    component: watering
},
{
    path: "/foodBoxes",

    name: "foodBoxes",
    component: foodBoxes
},
{
    path: "/winterClothes",

    name: "winterClothes",
    component: winterClothes
},
{
    path: "/buildingHospitals",

    name: "buildingHospitals",
    component: buildingHospitals
}
,
{
    path: "/hygieneTools",

    name: "hygieneTools",
    component: hygieneTools
}

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
