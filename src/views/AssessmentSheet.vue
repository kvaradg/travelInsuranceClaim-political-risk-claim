<template>
  <div>
    <div class="mt-3">
      <div class="d-flex header">
        <p class="align-center font-weight-bold mt-3 mx-5 claim-no">
          Claim Number - 4340002739
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="font-weight-bold mt-3 mx-5 claim">FEATURE CLAIM</p>
        <v-spacer></v-spacer>
        <p class="text-caption mt-3 mr-5 view-details"><b>View Details</b></p>
      </div>
      <div class="mt-3">
        <router-link to="/">
          <v-btn  id="tab-two" class="pa-5" elevation="0">
            <b>Claim Details</b></v-btn
          ></router-link
        >
        <v-btn class="pa-5 ml-1" id="tab-one"><b>Assessment Sheet</b></v-btn>
        <v-divider class="mr-16"></v-divider>
      </div>
    </div>
    <div class="mt-16">
      <v-img
        src="../assets/Screenshot 2022-05-30 184620.jpg"
        height="200"
        width="300"
        class="mx-auto"
      />

      <router-link to="add-assessment-sheet">
        <v-btn id="img" class="white--text add-assessment-btn" color="#1ebbd9">
          <v-icon>mdi-plus-box-outline</v-icon>
          <v-divider vertical class="mx-3 grey lighten-5"></v-divider>
          Add Assessment</v-btn
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import "../../src/Style.css";
export default {};
</script>

<style scoped>
#img {
  margin: 0 620px;
}
</style>
