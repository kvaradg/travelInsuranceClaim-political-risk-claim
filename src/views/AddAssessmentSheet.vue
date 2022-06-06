<template>
  <v-app>
    <!-- ----------------------POLITICAL RISK CLAIM --------------------------->
    <template>
      <v-title class="my-4">
        <h3 class="heading">Add Details to assessment sheet</h3>
      </v-title>
      <!-- -------------------BASIC DETAILS-------------------------------- -->
      <div class="expansion-panel-container">
        <div class="expansion-panel-header">
          <div class="heading-item-one"><b>Basic Details</b></div>
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
            <!-- ------------------------------ROW -1-------------------------------------- -->
            <v-layout wrap class="pt-4 mx-1 form-group-container">
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Settlement Type</b
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
                  <b class="textfield-main">Claim Payment Type</b
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
                  <b class="textfield-main">Transaction Type</b
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
                  <b class="textfield-main">Country Name</b
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
                  <b class="textfield-main">Currency Name </b
                  ><span class="mandatory">*</span></label
                >
                <v-select
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- ----------------------------------ROW - 2------------------------------------ -->
            <v-layout
              wrap
              class="mx-1 form-group-container"
              row
              style="width: 850px"
            >
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Rate Of Exchange</b
                  ><span class="mandatory">*</span>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  disabled
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label"
                  ><b class="textfield-main">Rate Of Exchange Date</b
                  ><span class="mandatory">*</span>
                </label>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      placeholder="DD/MM/YYYY"
                      class="form-control rounded-0"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      solo
                      dense
                      outlined
                    >
                      <template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-calendar </v-icon>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">ROE Updated Manually</b
                  ><span class="mandatory">*</span>
                </label>
                <v-select
                  class="input"
                  label="Preselected List Item"
                  disabled
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>
    <!-- -----------------------------AMOUNT DETAILS------------------------------------------- -->
    <template>
      <div class="expansion-panel-container">
        <div class="expansion-panel-header">
          <div class="heading-item-one"><b>Amount Details</b></div>
          <v-spacer></v-spacer>
          <div @click="toggle2 = !toggle2">
            <v-icon v-show="!toggle2" class="heading-item-two" color="#ffffff"
              >mdi-minus-box</v-icon
            >
            <v-icon v-show="toggle2" class="heading-item-two" color="#ffffff"
              >mdi-plus-box</v-icon
            >
          </div>
        </div>

        <div v-show="!toggle2">
          <v-form>
            <v-layout wrap class="pt-4 mx-1 form-group-container">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Deductible Amount</b>
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
                  <b class="textfield-main">Copay%</b>
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
                  <b class="textfield-main">Claimed Amount</b>
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
                  <b class="textfield-main">Amount Payable</b>
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
                  ><b class="textfield-main">Net Payable</b>
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
          </v-form>
        </div>
      </div>
    </template>

    <!-- -----------------------------NON PAYABLE EXPENSES------------------------------------- -->
    <template>
      <div class="expansion-panel-container">
        <div class="expansion-panel-header">
          <div class="heading-item-one"><b>Non-Payable Expenses</b></div>
          <v-spacer></v-spacer>
          <div @click="toggle3 = !toggle3">
            <v-icon v-show="!toggle3" class="heading-item-two" color="#ffffff"
              >mdi-minus-box</v-icon
            >
            <v-icon v-show="toggle3" class="heading-item-two" color="#ffffff"
              >mdi-plus-box</v-icon
            >
          </div>
        </div>

        <div v-show="!toggle3">
          <v-form>
            <v-layout wrap class="mx-3 pt-4">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-card class="npe-checkbox rounded-0" outlined elevation="1">
                <v-checkbox label="Non Payable Expense"> </v-checkbox>
              </v-card>
            </v-layout>
          </v-form>
          <!-- -------------------------------NON PAYABLE EXPENSE TABLE--------------------- -->
          <v-card elevation="2" class="mx-3 mt-5" flat>
            <v-data-table
              disable-filtering
              disable-pagination
              disable-sort
              hide-default-footer
              :items="item"
              :headers="headers"
            >
              <template v-slot:[`item.invoice`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3 rounded-0"
                  disabled
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.invoicedate`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3 rounded-0"
                  disabled
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.invoicedetails`]="{ item }">
                <v-text-field
                  label="Enter..."
                  outlined
                  dense
                  class="mt-3 rounded-0"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.invoiceamount`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3 rounded-0"
                  disabled
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.action`]="{ item }">
                <v-icon class="red--text">mdi-delete-outline</v-icon
                >{{ item.text }}
              </template>
            </v-data-table>
          </v-card>

          <div class="add-row-icon">
            <span><v-icon id="plus-icon"> mdi-plus </v-icon></span>
            <span> Add Row </span>
          </div>

          <!-- -------------------------total non payable amount---------------------------- -->
          <v-form>
            <v-layout
              wrap
              class="pt-4 mx-1 form-group-container"
              style="width: 282px"
            >
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <b class="textfield-main">Total Non-Payable Amount</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter"
                  disabled
                  solo
                  dense
                  outlined
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>

      <!-- ----------------------BUTTONS SECTION-------------------------------- -->
      <v-card class="mt-4" flat>
        <v-layout>
          <v-btn class="red--text mr-4 btn" flat
            ><v-icon>mdi-backspace-outline</v-icon
            ><v-divider vertical class="red mx-2"></v-divider>Reset</v-btn
          >

          <v-spacer></v-spacer>

          <v-btn class="red--text mx-4 btn" flat
            ><v-icon>mdi-backspace-outline</v-icon
            ><v-divider vertical class="red mx-2"></v-divider>Cancel</v-btn
          >

          <router-link to="/political-risk-assessment-sheet">
            <v-btn class="white--text submit-btn" color="#23b1a9"
              ><v-icon>mdi-arrow-right-circle-outline</v-icon
              ><v-divider vertical class="white mx-2 vr-divider"></v-divider>
              Submit</v-btn
            >
          </router-link>
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
      toggle1: true,
      toggle2: true,
      toggle3: true,

      headers: [
        {
          text: "Serial Number",
          align: "center",
          value: "serialn",
          class: "white--text",
          width: 100,
        },
        {
          text: "Invoice Number",
          value: "invoice",
          class: "white--text",
          align: "center",
          width: 150,
        },
        {
          text: "Invoice Date",
          value: "invoicedate",
          class: "white--text",
          width: 250,
          align: "center",
        },
        {
          text: "Invoice Details",
          value: "invoicedetails",
          class: "white--text",
          width: 350,
          align: "center",
        },
        {
          text: "Invoice Amount",
          value: "invoiceamount",
          class: "white--text",
          width: 150,
          align: "center",
        },
        {
          text: "Action",
          value: "action",
          class: "white--text",
          width: 150,
          align: "center",
        },
      ],
      item: [
        {
          serialn: "002434234",
        },
      ],
    };
  },
};
</script>

<style>
.expense-input {
  border: 1px solid grey;
}

/* -----------------Add ROW icon -css-------------------------- */
.add-row-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  color: #23b1a9;
  font-size: 14px;
}
#plus-icon {
  color: #23b1a9;
  font-size: 14px;
}
#roe-input {
  width: 100px;
}
/* ----------------------------CHECKBOX-CSS-------------------------- */
.npe-checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  width: 266px;
  padding-left: 10px;
  border: 1px solid #c1c8cc;
}
/* ------------------------ICON STYLE------------------------ */
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
/* --------------------------TABLE_CSS------------------------ */
.v-data-table-header tr {
  background-color: #23b1a9;
}
.v-data-table-header tr th {
  border: 1px solid #c1c8cc;
}
.v-data-table__wrapper table tbody tr td {
  border-left: 1px solid #c1c8cc;
  height: 20px;
}
</style>
