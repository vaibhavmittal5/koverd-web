<template>
  <b-container fluid>
<br/>
    <b-modal id="modalID" title="Bootstrap-Vue" ref="modalID">
      <p class="my-4">{{modalMessage}}</p>
    </b-modal>
    <b-row class="justify-content-center">
      <loading :active.sync="isLoading"
               :can-cancel="false"
               :is-full-page="true"></loading>
      <b-col cols="4" >
        <b-alert variant="success"
                 dismissible
                 :show="registred"
                 @dismissed="registred=false">
          Successfully registered, please activate your account before login.
        </b-alert>
        <h1>Employee Register</h1>
        <b-form @submit="onSubmit">
          <b-form-group id="first name"
                        label="First Name"
                        label-for="firstNameInput">
            <b-form-input id="firstNameInput"
                          type="text"
                          v-model="form.first_name"
                          :state="requiredFirstName"
                          placeholder="First Name"
                          required >
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.first_name}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="last name"
                        label="Last Name"
                        label-for="lastNameInput">
            <b-form-input id="lastNameInput"
                          type="text"
                          v-model="form.last_name"
                          placeholder="Last Name"
                          :state="requiredLastName"
                          required>
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.last_name}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="exampleInputGroup1"
                        label="Email address"
                        label-for="exampleInput1">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          :state="requiredEmail"
                          aria-describedby="requiredField"
                          placeholder="Enter email" required>
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.email}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        label="Password"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="password"
                          v-model="form.password"
                          :state="passwordLength"
                          aria-describedby="passwordCheckLength"
                          required>
            </b-form-input>
            <b-form-invalid-feedback id="passwordCheckLength">
              Password must have at least 6 characters
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="Confirm password"
                        label-for="exampleInput3">
            <b-form-input id="exampleInput3"
                          type="password"
                          v-model="form.password_confirmation"
                          :state="matchPasswords"
                          aria-describedby="passwordCheckMatch"
                          required>
            </b-form-input>
            <b-form-invalid-feedback id="passwordCheckMatch">
              Passwords don't match
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="genderGroup"
                        label="Gender">
            <b-form-select v-model="form.gender"
                           class="mb-3"
                           :state="requiredGender"
                           aria-describedby="requiredField" required>
              <option :value="null">Please select an option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </b-form-select>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.gender}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="ex1"
                        label="Date of birth"
                        label-for="birth_date">
            <b-form-input id="birth_date"
                          v-model="form.birth_date"
                           class="mb-3"
                          type="date"
                          :state="requiredDoB"
                          aria-describedby="requiredField" required>
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.birth_date}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="ex1"
                        label="Country"
                        label-for="exampleInput1">
            <b-form-select v-model="form.country"
                           :options="countries"
                           class="mb-3"
                           @change="updateCountryCode"
                           :state="requiredCountry"
                           aria-describedby="requiredField" required>
            </b-form-select>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.country_code}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="postal code"
                        label="Postal Code"
                        label-for="postalcodeInput">
            <b-form-input id="PostalCodeInput"
                          type="text"
                          v-model="form.postal_code"
                          placeholder="Postal Code"
                          :state="requiredPostalCode"
                          aria-describedby="requiredField" required>
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.postal_code}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="ex1"
                        label="Country Code"
                        label-for="exampleInput1">
            <b-form-input id="countryCode"
                          type="number"
                          v-model="form.country_code"
                          placeholder="+123"
                          :state="requiredCountryCode"
                          aria-describedby="requiredField" required>
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.country_code}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="ex1"
                        label="Contact Number"
                        label-for="exampleInput1">
            <b-form-input id="contactNumber"
                          type="number"
                          v-model="form.mobile_number"
                          placeholder="Enter contact number"
                          :state="requiredMobileNumber"
                          aria-describedby="requiredField" required>
            </b-form-input>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.mobile_number}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="gr1">
            <b-form-checkbox id="service_provider"
                             v-model="form.service_provider"
                             value=1
                             unchecked-value=0>
              Service Provider
            </b-form-checkbox>
          </b-form-group>
          <b-form-group id="gr2">
            <b-form-checkbox id="terms"
                             v-model="form.tos"
                             value=1
                             unchecked-value=0
                             :state="requiredTos"
                             aria-describedby="requiredField" required>
              I accept the <router-link to="/employee/terms" target="_blank">Terms of Service</router-link>
            </b-form-checkbox>
            <b-form-invalid-feedback id="requiredField">
              {{errorsMsg.tos}}
            </b-form-invalid-feedback>
          </b-form-group>
          <p></p>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'RegisterEmployee',
  computed: {
    matchPasswords () {
      if (this.form.password_confirmation === '') { return null } else { return (this.form.password === this.form.password_confirmation) }
    },
    passwordLength () {
      if (this.form.password === '') { return null } else { return (this.form.password.length >= 6) }
    },
    requiredEmail () {
      if (!this.errors.email) { return null } else return (this.form.email !== this.errorsOld.email)
    },
    requiredFirstName () {
      if (!this.errors.first_name) { return null } else return (this.form.first_name !== this.errorsOld.first_name)
    },
    requiredLastName () {
      if (!this.errors.last_name) { return null } else return (this.form.last_name !== this.errorsOld.last_name)
    },
    requiredGender () {
      if (!this.errors.gender) { return null } else return (this.form.gender !== null)
    },
    requiredDoB () {
      if (!this.errors.birth_date) { return null } else return (this.form.birth_date !== this.errorsOld.birth_date)
    },
    requiredCountry () {
      if (!this.errors.country) { return null } else return (this.form.country != null)
    },
    requiredPostalCode () {
      if (!this.errors.postal_code) { return null } else return (this.form.postal_code !== this.errorsOld.postal_code)
    },
    requiredCountryCode () {
      if (!this.errors.country_code) { return null } else return (this.form.country_code != null)
    },
    requiredMobileNumber () {
      if (!this.errors.mobile_number) { return null } else return (this.form.mobile_number != null)
    },
    requiredTos () {
      if (!this.errors.tos) { return null } else return (this.form.tos !== 0)
    }
  },
  data () {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        gender: null,
        birth_date: '',
        postal_code: '',
        country_code: null,
        mobile_number: null,
        country: null,
        service_provider: 0,
        tos: 0
      },
      errors: {
        first_name: false,
        last_name: false,
        email: false,
        gender: false,
        birth_date: false,
        postal_code: false,
        country_code: false,
        mobile_number: false,
        country: false,
        service_provider: false,
        tos: false
      },
      errorsMsg: {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        birth_date: '',
        postal_code: '',
        country_code: '',
        mobile_number: '',
        country: '',
        service_provider: '',
        tos: ''
      },
      errorsOld: { // old faulty inputs
        first_name: '',
        last_name: '',
        email: '',
        gender: null,
        birth_date: '',
        postal_code: '',
        country_code: null,
        mobile_number: null,
        country: null,
        service_provider: 0,
        tos: 0
      },
      countries: [],
      modalMessage: '',
      registred: false,
      isLoading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    onSubmit (evt) {
      if ((this.form.password === this.form.password_confirmation) && (this.form.password.length >= 6)) {
        evt.preventDefault()
        const self = this
        this.isLoading = true
        console.log(self.form)
        axios.post('/employee/register', this.form)
          .then(() => {
            self.isLoading = false
            self.registred = true
            for (let key in self.form) {
              if (self.form.hasOwnProperty(key)) {
                if (key === 'service_provider' || key === 'tos') { self.form[key] = 0 } else self.form[key] = ''
              }
            }
          })
          .catch(err => {
            Object.keys(self.errors).forEach(v => { self.errors[v] = false })
            if (err.response.data.errors.email) {
              self.errors.email = true
              self.errorsMsg.email = err.response.data.errors.email[0]
              self.errorsOld.email = self.form.email
            } if (err.response.data.errors.first_name) {
              self.errors.first_name = true
              self.errorsMsg.first_name = err.response.data.errors.first_name[0]
              self.errorsOld.first_name = self.form.first_name
            } if (err.response.data.errors.last_name) {
              self.errors.last_name = true
              self.errorsMsg.last_name = err.response.data.errors.last_name[0]
              self.errorsOld.last_name = self.form.last_name
            } if (err.response.data.errors.postal_code) {
              self.errors.postal_code = true
              self.errorsMsg.postal_code = err.response.data.errors.postal_code[0]
              self.errorsOld.postal_code = self.form.postal_code
            } if (err.response.data.errors.country_code) {
              self.errors.country_code = true
              self.errorsMsg.country_code = err.response.data.errors.country_code[0]
              self.errorsOld.country_code = self.form.country_code
            } if (err.response.data.errors.birth_date) {
              self.errors.birth_date = true
              self.errorsMsg.birth_date = err.response.data.errors.birth_date[0]
              self.errorsOld.birth_date = self.form.birth_date
            } if (err.response.data.errors.country) {
              self.errors.country = true
              self.errorsMsg.country = err.response.data.errors.country[0]
              self.errorsOld.country = self.form.country
            } if (err.response.data.errors.mobile_number) {
              self.errors.mobile_number = true
              self.errorsMsg.mobile_number = err.response.data.errors.mobile_number[0]
              self.errorsOld.mobile_number = self.form.mobile_number
            } if (err.response.data.errors.gender) {
              self.errors.gender = true
              self.errorsMsg.gender = err.response.data.errors.gender[0]
              self.errorsOld.gender = self.form.gender
            } if (err.response.data.errors.tos) {
              self.errors.tos = true
              self.errorsMsg.tos = err.response.data.errors.tos[0]
              self.errorsOld.tos = self.form.tos
            } else if (err.response.data.errors) {
              self.modalMessage = err.response.data.errors
            }
            self.modalMessage = err.response.data.message
            self.isLoading = false
            self.$refs.modalID.show()
            self.form.password = ''
            self.form.password_confirmation = ''
          })
      }
    },
    updateCountryCode () {
      const self = this

      this.$nextTick(() => {
        for (let index in self.countries) {
          if (self.countries[index].value === self.form.country) {
            self.form.country_code = self.countries[index].phoneCountryCode
            break
          }
        }
      })
    }
  },
  created () {
    this.countries = [
      {text: 'Portugal', value: 'Portugal', countryCode: 'PT', phoneCountryCode: 351},
      {text: 'United States', value: 'United States', countryCode: 'US', phoneCountryCode: 1}
    ]
  }
}
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/background/Home-page-1.jpg");

}
</style>
