import Vue from "vue";
import VueRouter from "vue-router";
import ClaimDetails from "../views/PoliticalRiskClaim.vue";
import AssessmentSheet from "../views/AssessmentSheet";
import AddAssessmentSheet from "../views/AddAssessmentSheet";
import PoliticalRiskAssessmentSheet from "../views/PoliticalRiskAssessmentSheet";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ClaimDetails,
  },
  {
    path: "/assessment-tab",
    component: AssessmentSheet,
    // childern: [
    //   {
    //     path: "/add-assessment-sheet",
    //     component: AddAssessmentSheet,
    //   },
    // ],
  },
  {
    path: "/add-assessment-sheet",
    component: AddAssessmentSheet,
  },
  {
    path: "/political-risk-assessment-sheet",
    component: PoliticalRiskAssessmentSheet,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
