<template>
  <v-app>
    <div class="mt-3">
      <div class="d-flex lighten-3 header">
        <p class="align-center font-weight-bold mt-3 mx-5 claim-no">
          Claim Number - 4340002739
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="font-weight-bold mt-3 mx-5 claim">NEW CLAIM</p>
        <v-spacer></v-spacer>
        <p class="text-caption mt-3 mr-5 view-details">
          <b> View Details</b>
        </p>
      </div>
    </div>
    <div class="mt-3">
      <v-btn class="pa-5 mr-1" id="tab-one" elevation="0">
        <b>Claim Details</b></v-btn
      >
      <router-link to="/assessment-tab"
        ><v-btn id="tab-two" class="pa-5" elevation="0"
          ><b>Assessment Sheet</b></v-btn
        ></router-link
      >
      <v-divider class="mr-16"></v-divider>
    </div>
    <!-- ----------------------POLITICAL RISK CLAIM --------------------------->
    <template>
      <v-title class="my-4">
        <h3 class="heading">Political Risk Claim</h3>
      </v-title>
      <!-- -------------------BASIC DETAILS-------------------------------- -->
      <div class="expansion-panel-container">
        <div class="expansion-panel-header">
          <div class="heading-item-one">
            <b>Basic Details</b>
          </div>
          <v-spacer></v-spacer>
          <div @click="toggle1 = !toggle1">
            <v-icon v-show="!toggle1" class="heading-item-two" color="#ffffff"
              >mdi-minus-box</v-icon
            >
            <v-icon v-show="toggle1" class="heading-item-two" color="#ffffff"
              >mdi-plus-box</v-icon
            >
          </div>
        </div>
        <div v-show="!toggle1">
          <v-form>
            <v-layout
              wrap
              class="pt-4 mx-1 form-group-container"
              style="width: 1130px"
            >
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Country Evacuated From</b>
                  <span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  id="new-width"
                  solo
                  dense
                  outlined
                  :counter="50"
                ></v-text-field>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Country Evacuated To</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                  :counter="50"
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Reason For Evacuation</b
                  ><span class="mandatory">*</span>
                </label>
                <v-select
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Is This An Accident Case?</b>
                </label>
                <v-select
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
          <v-form> </v-form>
        </div>
      </div>
    </template>
    <!-- -----------------------------ACCIDENT DETAILS---------------------------------------- -->
    <template>
      <div class="expansion-panel-container">
        <div class="expansion-panel-header">
          <div style="color: #ffffff; font-size: 14px">
            <b class="heading-item-one">Accident Details</b>
          </div>
          <v-spacer></v-spacer>
          <div @click="toggle2 = !toggle2">
            <v-icon v-show="!toggle2" class="white--text">mdi-minus-box</v-icon>
            <v-icon v-show="toggle2" class="white--text">mdi-plus-box</v-icon>
          </div>
        </div>

        <div v-show="!toggle2">
          <v-form>
            <v-layout wrap class="pt-4 mx-1 form-group-container">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Nature Of Accident</b
                  ><span class="mandatory">*</span>
                </label>
                <v-select
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Others</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label"
                  ><b class="textfield-main">FIR Registered</b
                  ><span class="mandatory">*</span></label
                >
                <v-card
                  class="radio-btn-card"
                  height="45%"
                  rounded="0"
                  outlined
                  elevation="2"
                >
                  <v-radio-group v-model="row" row class="radio-btn-grp">
                    <v-radio
                      class="radio-btn"
                      label="Yes"
                      value="yes"
                    ></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-card>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Reason For Not Intimating Police</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                  :counter="100"
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label"
                  ><b class="textfield-main">FIR/GD Number</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
            </v-layout>
            <!-- -----------------------------ROW -2 -------------------------- -->
            <v-layout wrap class="mx-1 form-group-container">
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">FIR Date</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                  prepend-inner-icon="mdi-calendar"
                >
                  <template v-slot:prepend-inner>
                    <v-icon class="iconstyle"> mdi-calendar </v-icon>
                  </template>
                </v-text-field>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Police Station Name</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Police Station Address Line 1</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Police Station Address Line 2</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label"
                  ><b class="textfield-main">Police Station Address Line 3</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- ------------------------------ROW-3-------------------------- -->
            <v-layout wrap class="mx-1 form-group-container">
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Pincode</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  type="Number"
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">City</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">District</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">State</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label"
                  ><b class="textfield-main">Phone</b>
                </label>

                <v-text-field
                  class="input"
                  label="Enter..."
                  type="Number"
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner>
                    <v-icon class="iconstyle"> mdi-phone </v-icon>
                  </template>
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- ----------------------------ROW -4----------------------------------- -->
            <v-layout wrap class="mx-1 form-group-container">
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Email ID</b>
                </label>
                <v-text-field
                  class="form-control input"
                  label="Enter..."
                  type="email"
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner>
                    <v-icon class="iconstyle">mdi-email-outline</v-icon>
                  </template>
                </v-text-field>
                <v-divder></v-divder>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">MLC</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">MLC Number</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group lg-input mx-2">
                <label class="form-label">
                  <b class="textfield-main">Accident Description</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                  :counter="100"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>

    <template>
      <!-- --------------------------BUTTONS SECTION---------------------------------- -->
      <v-card class="mt-4" flat>
        <v-layout>
          <v-btn class="red--text mr-4 btn" flat
            ><v-icon>mdi-backspace-outline</v-icon
            ><v-divider vertical class="red mx-2"></v-divider>Reset</v-btn
          >

          <v-btn class="red--text btn" flat
            ><v-icon>mdi-backspace-outline</v-icon
            ><v-divider vertical class="red mx-2"></v-divider>Cancel</v-btn
          >

          <v-spacer></v-spacer>

          <v-btn class="white--text submit-btn" color="#23b1a9"
            ><v-icon>mdi-arrow-right-circle-outline</v-icon
            ><v-divider vertical class="white mx-2 vr-divider"></v-divider>
            Submit</v-btn
          >
        </v-layout>
      </v-card>
    </template>
  </v-app>
</template>

<script>
import "../../src/Style.css";
export default {
  components: {},
  data() {
    return {
      toggle1: false,
      toggle2: false,
    };
  },
};
</script>

<style scoped>
/* -------------------------------------FORM CSS--------------------------------- */
.lg-input {
  width: 485px;
}
/* --------------------------------RADIO BTN CSS--------------------------- */
.radio-btn-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #b5c1c4;
}
.radio-btn {
  margin-left: 10px;
}

/* ---------------------ICONS-CSS---------------------------------- */
.iconstyle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #c1c8cc;
  background-color: #f7f7f7;
  height: 40px;
  width: 40px;
  margin-left: -12px;
}
.mdi-email::before {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 435px;
  border-right: 1px solid gray;
  height: 40px;
  background-color: gray;
  width: 34px;
}
</style>
