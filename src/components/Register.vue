<template>
  <b-container fluid>
    <br />
    <b-modal id="modalID" :title="$t('kovSign.modal2')" ref="modalID">
      <p class="my-4">{{modalMessage}}</p>
    </b-modal>
    <b-row class="justify-content-center">
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="true" :color='clr'></loading>
      <b-col>
        <b-alert
          variant="success"
          dismissible
          :show="registred"
          @dismissed="registred=false"
        >{{$t('kovSign.modal1')}}</b-alert>
        <b-form @submit="onSubmit">
          <b-container>
            <b-row>
              <b-col>
                <b-form-group
                  id="first name"
                  :label="$t('kovSign.firstnamel')"
                  label-for="firstNameInput"
                >
                  <b-form-input
                    id="firstNameInput"
                    name
                    v-model="form.first_name"
                    :state="requiredFirstName"
                    :placeholder="$t('kovSign.firstnamel')"
                    required
                  ></b-form-input>

                  <b-form-invalid-feedback id="requiredField">{{errorsMsg.first_name}}</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  id="last name"
                  :label="$t('kovSign.lastname')"
                  label-for="lastNameInput"
                >
                  <b-form-input
                    id="lastNameInput"
                    type="text"
                    v-model="form.last_name"
                    :state="requiredLastName"
                    :placeholder="$t('kovSign.lastname')"
                    required
                  ></b-form-input>

                  <b-form-invalid-feedback id="requiredField">{{errorsMsg.last_name}}</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group
                  id="exampleInputGroup1"
                  :label="$t('kovSign.email')"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="email"
                    v-model="form.email"
                    :state="requiredEmail"
                    :placeholder="$t('kovSign.emailp')"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="requiredField">{{errorsMsg.email}}</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="ex1" :label="$t('kovSign.contact')" label-for="exampleInput1">
                  <b-form-input
                    id="contactNumber"
                    type="number"
                    v-model="form.mobile_number"
                    :placeholder="$t('kovSign.contactp')"
                    :state="requiredMobileNumber"
                    aria-describedby="requiredField"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="requiredField">{{errorsMsg.mobile_number}}</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group
                  id="exampleInputGroup2"
                  :label="$t('kovSign.pass')"
                  label-for="exampleInput2"
                >
                  <b-form-input
                    id="exampleInput2"
                    type="password"
                    v-model="form.password"
                    :state="passwordLength"
                    aria-describedby="passwordCheckLength"
                    :placeholder="$t('kovSign.passp')"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="passwordCheckLength"
                  >Password must have at least 6 characters</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  id="exampleInputGroup3"
                  :label="$t('kovSign.conpass')"
                  label-for="exampleInput3"
                >
                  <b-form-input
                    id="exampleInput3"
                    type="password"
                    v-model="form.password_confirmation"
                    :state="matchPasswords"
                    aria-describedby="passwordCheckMatch"
                    :placeholder="$t('kovSign.conpassp')"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="passwordCheckMatch">Passwords don't match</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group>
              <b-form-checkbox
                id="terms"
                v-model="form.tos"
                value="1"
                unchecked-value="0"
                :state="requiredTos"
                aria-describedby="requiredField"
                required
              >
                {{$t('kovSign.accept')}}
                <router-link to="/terms" target="_blank">{{$t('kovSign.term')}}</router-link>
              </b-form-checkbox>
              <b-form-invalid-feedback id="requiredField">{{errorsMsg.tos}}</b-form-invalid-feedback>
            </b-form-group>
          </b-container>
          <p></p>
          <b-button type="submit" class="submit" variant="primary">{{$t('kovSign.submit')}}</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="justify-content-center link-margin" style="margin-top: 12px">
      <a href="http://business.kovered.io/" target="_blank">{{$t('kovSign.register')}}</a>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Register",
  data() {
    return {
    clr:'#17a2b7',
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: null,
        birth_date: "",
        country_code: null,
        mobile_number: null,
        country: null,
        tos: 0
      },
defaultform: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: null,
        birth_date: "",
        country_code: null,
        mobile_number: null,
        country: null,
        tos: 0
      },
      errors: {
        first_name: false,
        last_name: false,
        email: false,
        gender: false,
        birth_date: false,
        country_code: false,
        mobile_number: false,
        country: false,
        tos: false
      },
      errorsMsg: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        birth_date: "",
        country_code: "",
        mobile_number: "",
        country: "",
        tos: ""
      },
      errorsOld: {
        // old faulty inputs
        first_name: "",
        last_name: "",
        email: "",
        gender: null,
        birth_date: "",
        country_code: null,
        mobile_number: null,
        country: null,
        tos: 0
      },
      countries: [],
      modalMessage: "",
      registred: false,
      isLoading: false,
      spchk:false
    };
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  computed: {
    matchPasswords() {
      if (this.form.password_confirmation === "") {
        return null;
      } else {
        return this.form.password === this.form.password_confirmation;
      }
    },
    passwordLength() {
      if (this.form.password === "") {
        return null;
      } else {
        return this.form.password.length >= 6;
      }
    },
    requiredEmail() {
      if (!this.errors.email) {
        return null;
      } else return this.form.email !== this.errorsOld.email;
    },
    requiredFirstName() {

      var specialKey = "[`~!#$@%^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'"; 
 for (var i = 0; i < this.form.first_name.length; i++) {
    if (specialKey.indexOf(this.form.first_name.substr(i, 1)) != -1) { 
     this.spchk=true;
     }
     else
     {
      this.spchk=false;
     }
     }
      if (!this.errors.first_name){  
     return null;
   }
  else { 
// this.errorsMsg.first_name='Special characters are not allowed'; 
  return this.form.first_name !== this.errorsOld.first_name; }
      
    },
    requiredLastName() {
      if (!this.errors.last_name) {
        return null;
      } else return this.form.last_name !== this.errorsOld.last_name;
    },
    requiredGender() {
      if (!this.errors.gender) {
        return null;
      } else return this.form.gender !== null;
    },
    requiredDoB() {
      if (!this.errors.birth_date) {
        return null;
      } else return this.form.birth_date !== this.errorsOld.birth_date;
    },
    requiredCountry() {
      if (!this.errors.country) {
        return null;
      } else return this.form.country != null;
    },
    requiredCountryCode() {
      if (!this.errors.country_code) {
        return null;
      } else return this.form.country_code != null;
    },
    requiredMobileNumber() {
      if (!this.errors.mobile_number) {
        return null;
      } else return this.form.mobile_number != null;
    },
    requiredTos() {
      if (!this.errors.tos) {
        return null;
      } else return this.form.tos !== 0;
    }
  },
  components: {
    Loading
  },
  methods: {
  
    onSubmit(evt) {
      evt.preventDefault();
      const self = this;
      this.isLoading = true;
      console.log(self.form);
 self.form.email=self.form.email.trim();
 self.form.password=self.form.password.trim();
self.form.password_confirmation=self.form.password_confirmation.trim();
      axios
        .post("/register", this.form)
        .then(function(response) {
          self.isLoading = false;
          self.registred = true;
           self.form=self.defaultform;
           if(response.data.success)
           {
            self.sendRegisterMail(response.data.id);
          }
          for (let key in self.form) {
            if (self.form.hasOwnProperty(key)) {
              if (key === "tos") {
                self.form[key] = 0;
              } else self.form[key] = "";
            }
          }
         
        })
        .catch(err => {
          Object.keys(self.errors).forEach(v => {
            self.errors[v] = false;
          });
          if (err.response.data.errors.email) {
            self.errors.email = true;
            self.errorsMsg.email = err.response.data.errors.email[0];
            self.errorsOld.email = self.form.email;
          }
          if (err.response.data.errors.first_name) {
            self.errors.first_name = true;
            self.errorsMsg.first_name = err.response.data.errors.first_name[0];
            self.errorsOld.first_name = self.form.first_name;
          }
          if (err.response.data.errors.last_name) {
            self.errors.last_name = true;
            self.errorsMsg.last_name = err.response.data.errors.last_name[0];
            self.errorsOld.last_name = self.form.last_name;
          }
          if (err.response.data.errors.country_code) {
            self.errors.country_code = true;
            self.errorsMsg.country_code =
              err.response.data.errors.country_code[0];
            self.errorsOld.country_code = self.form.country_code;
          }
          if (err.response.data.errors.birth_date) {
            self.errors.birth_date = true;
            self.errorsMsg.birth_date = err.response.data.errors.birth_date[0];
            self.errorsOld.birth_date = self.form.birth_date;
          }
          if (err.response.data.errors.country) {
            self.errors.country = true;
            self.errorsMsg.country = err.response.data.errors.country[0];
            self.errorsOld.country = self.form.country;
          }
          if (err.response.data.errors.mobile_number) {
            self.errors.mobile_number = true;
            self.errorsMsg.mobile_number =
              err.response.data.errors.mobile_number[0];
            self.errorsOld.mobile_number = self.form.mobile_number;
          }
          if (err.response.data.errors.gender) {
            self.errors.gender = true;
            self.errorsMsg.gender = err.response.data.errors.gender[0];
            self.errorsOld.gender = self.form.gender;
          }
          if (err.response.data.errors.tos) {
            self.errors.tos = true;
            self.errorsMsg.tos = err.response.data.errors.tos[0];
            self.errorsOld.tos = self.form.tos;
          } else if (err.response.data.errors) {
            self.modalMessage = err.response.data.errors;
          }
          self.modalMessage = err.response.data.message;
          self.isLoading = false;
          self.$refs.modalID.show();
          self.form.password = "";
          self.form.password_confirmation = "";
        });
    },
         sendRegisterMail(id)
{
         axios
        .post("/sendregisterMail", {id:id})
        .then(function(response) {
         
        })
        .catch(err => {
         
          });
       
},
    updateCountryCode() {
      const self = this;

      this.$nextTick(() => {
        for (let index in self.countries) {
          if (self.countries[index].value === self.form.country) {
            self.form.country_code = self.countries[index].phoneCountryCode;
            break;
          }
        }
      });
    }
  },
  created() {
    this.countries = [
      {
        text: "Portugal",
        value: "Portugal",
        countryCode: "PT",
        phoneCountryCode: 351
      },
      {
        text: "United States",
        value: "United States",
        countryCode: "US",
        phoneCountryCode: 1
      }
    ];
  }
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/background/Home-page-1.jpg");
  background-size: 100% 100%;
  height: 500px;
}
</style>
