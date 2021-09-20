<template>
  <b-container fluid>
    <!-- Modal Component -->
    <b-modal id="deactivate-account" centered title="Deactivate account" ok-only ok-title="Cancel">
      <p class="my-4">Are you sure you want to deactivate temporarily your account?</p>
      <b-button @click="deactivateAccount" variant="danger">
        Yes, deactivate my account.
      </b-button>
    </b-modal>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <loading :active.sync="isUpdating"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-alert variant="success"
             dismissible
             :show="showThen"
             @dismissed="showThen=false">
      Profile changed
    </b-alert>
    <b-alert variant="danger"
             dismissible
             :show="showCatch"
             @dismissed="showCatch=false">
      Something went wrong
    </b-alert>
    <b-row v-if="!isLoading">
      <b-col cols="12">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col cols="4" offset="2">
              <hr>
              <h4 class="text-left">Profile info</h4>
              <hr>
              <b-row>
                <b-col cols="4">
                  <b-img thumbnail fluid :src="this.display_pic" alt="Image" />
                </b-col>
                <b-col cols="8">
                  <b-form-file v-model="profile_pic"
                               accept="image/jpeg, image/png"
                               placeholder="Choose a file..."
                               ref="fileinput"
                               @change="previewImage"/>
                  <p></p>
                  <b-button variant="danger" @click="clearFiles">Remove photo</b-button>
                </b-col>
              </b-row>
              <b-form-group id="first name"
                            label="First Name"
                            label-for="firstNameInput">
                <b-form-input id="firstNameInput"
                              type="text"
                              v-model="form.first_name"
                              required
                              placeholder="First Name">
                </b-form-input>
              </b-form-group>
              <b-form-group id="last name"
                            label="Last Name"
                            label-for="lastNameInput">
                <b-form-input id="lastNameInput"
                              type="text"
                              v-model="form.last_name"
                              required
                              placeholder="Last Name">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup1"
                            label="Email address"
                            label-for="exampleInput1">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="email"
                              disabled
                              placeholder="Enter email">
                </b-form-input>
              </b-form-group>

              <b-form-group id="contact-label"
                            class = "form-inline">
                <label label-for="contact">Contact</label>
                <b-form-input id="contact"
                              type="number"
                              v-model="form.country_code"
                              required
                              placeholder="Code">
                </b-form-input>
                <b-form-input id="mobile"
                              type="number"
                              v-model="form.mobile_number"
                              required
                              placeholder="Mobile Number">
                </b-form-input>
              </b-form-group>
              <b-form-group id="gender"
                            label="Gender">
                <b-form-select v-model="form.gender" class="mb-3">
                  <option :value="null">Please select an option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </b-form-select>
              </b-form-group>
              <b-form-group id="ex1"
                            label="Date of birth"
                            label-for="birth_date">
                <b-form-input id="birth_date" v-model="form.dob" class="mb-3" type="date" required>
                </b-form-input>
              </b-form-group>
              <p></p>
            </b-col>
            <b-col cols = "4">
              <hr>
              <h4 class="text-left">Employee Specific</h4>
              <hr>
              <b-form-group id="countryGroup"
                            label="Country"
                            label-for="countryInput">
                <b-form-input id="countryInput"
                              type="text"
                              v-model="form.country"
                              required
                              placeholder="Country">
                </b-form-input>
              </b-form-group>
              <b-form-group id="cityGroup"
                            label="City"
                            label-for="cityInput">
                <b-form-input id="cityInput"
                              type="text"
                              v-model="form.city"
                              required
                              placeholder="City">
                </b-form-input>
              </b-form-group>
              <b-form-group id="postalCodeGroup"
                            label="Postal Code"
                            label-for="postalCodeInput">
                <b-form-input id="postalCodeInput"
                              type="text"
                              v-model="form.postal_code"
                              required
                              placeholder="Postal Code">
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="success">Save info</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
    <br>
    <b-row v-if="!isLoading">
      <b-col cols="8" offset="2">
        <hr>
        <h4 class="text-left">Account Settings</h4>
        <hr>
        <b-row>
          <b-col cols="10" offset="1">
            <h6 class="text-left">Change password</h6>
            <hr>
            <b-alert variant="success"
                     dismissible
                     :show="showPasswordSuccess"
                     @dismissed="showPasswordSuccess=false">
              Password changed successfully
            </b-alert>
            <b-alert variant="danger"
                     dismissible
                     :show="showPasswordError"
                     @dismissed="showPasswordError=false">
              {{ passwordError ? passwordError : 'We have experienced an internal error. Please try again later.'}}
            </b-alert>
            <b-form @submit="changePassword">
              <b-col cols="8" offset="2">
                <b-form-group id="old_password_label"
                              label="Old Password"
                              label-for="old_password">
                  <b-form-input id="old_password"
                                type="password"
                                v-model="password.old_password"
                                :state="passwordLengthOld"
                                aria-describedby="passwordCheckLength_old"
                                required>
                  </b-form-input>
                  <b-form-invalid-feedback id="passwordCheckLength_old">
                    Password must have at least 6 characters
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="password_label"
                              label="New Password"
                              label-for="password">
                  <b-form-input id="password"
                                type="password"
                                v-model="password.password"
                                :state="passwordLength"
                                aria-describedby="passwordCheckLength"
                                required>
                  </b-form-input>
                  <b-form-invalid-feedback id="passwordCheckLength">
                    Password must have at least 6 characters
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="password_confirm_label"
                              label="Confirm new password"
                              label-for="password_confirm">
                  <b-form-input id="password_confirm"
                                type="password"
                                v-model="password.password_confirmation"
                                :state="matchPasswords"
                                aria-describedby="passwordCheckMatch"
                                required>
                  </b-form-input>
                  <b-form-invalid-feedback id="passwordCheckMatch">
                    Passwords don't match
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary">Change password</b-button>
              </b-col>
            </b-form>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="10" offset="1">
            <h6 class="text-left">Danger zone</h6>
            <hr>
            <p class="text-left">The options under this particular sub-section is considered the, danger-zone. Be careful when applying these options.</p>
            <b-row>
              <b-col cols="12">
                <b-button v-b-modal.deactivate-account variant="danger">
                  Deactivate Account
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <hr>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import imagePlaceholder from '../assets/placeholder.png'
import axios from 'axios'

export default {
  name: 'ProfileEmployee',
  data () {
    return {
      form: {
        first_name: '',
        last_name: '',
        gender: '',
        dob: '',
        country: '',
        city: '',
        postal_code: '',
        mobile_number: '',
        country_code: '',
        profile_pic: '',
        cover_pic: '',
        specialities: [],
        languages: []
      },
      password: {
        old_password: '',
        password: '',
        password_confirmation: ''
      },
      email: '',
      display_pic: imagePlaceholder,
      profile_pic: null,
      isLoading: false,
      isUpdating: false,
      showThen: false,
      showCatch: false,
      showPasswordSuccess: false,
      showPasswordError: false,
      passwordError: ''
    }
  },
  components: { Loading },
  created () {
    const self = this
    this.isLoading = true
    console.log('get')
    axios.get('/employee/employee-data')
      .then(function (response) {
        let userData = response.data.employee.data
        self.email = userData.email
        self.form.first_name = userData.first_name
        self.form.last_name = userData.last_name
        self.form.gender = userData.gender
        self.form.dob = userData.dob
        self.form.country = userData.country
        self.form.city = userData.city
        self.form.postal_code = userData.postal_code
        self.form.mobile_number = userData.mobile_number
        self.form.country_code = userData.country_code
        if (userData.profile_pic !== null) { self.display_pic = userData.profile_pic }
        self.form.cover_pic = userData.cover_pic
        self.form.specialities = userData.specialities.data
        self.form.languages = userData.languages.data
        self.isLoading = false
        self.$store.commit('EMPLOYEE_DATA', userData)
      })
      .catch(function () {
        self.isLoading = false
      })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const self = this
      this.isUpdating = true
      if (this.profile_pic !== null) {
        this.display_pic = URL.createObjectURL(this.profile_pic)
        let formData = new FormData()
        formData.append('profile_pic', this.profile_pic)
        // TODO employee image endpoint on backend
        axios.post('/employee/employee-image', formData, {headers: {'content-type': 'multipart/form-data'}})
          .then(function (response) {
            console.log('employee-image', response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      console.log(this.form)
      axios.post('/employee/employee-data', this.form)
        .then(function (response) {
          self.$store.commit('EMPLOYEE_DATA', response.data.employee.data)
          self.isUpdating = false
          self.showThen = true
        })
        .catch(function (response) {
          self.isUpdating = false
          self.showCatch = true
        })
    },
    clearFiles () {
      this.$refs.fileinput.reset()
      this.display_pic = imagePlaceholder
    },
    deactivateAccount () {
      let self = this
      axios.post('/employee/deactivate', {'active': 0})
        .then(resp => {
          self.$store.dispatch('FORCE_AUTH_LOGOUT')
            .then(() => {
              self.$router.push('/')
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    changePassword (evt) {
      evt.preventDefault()
      let self = this
      axios.post('/employee/password/change', this.password)
        .then(() => {
          self.password.old_password = ''
          self.password.password = ''
          self.password.password_confirmation = ''
          self.showPasswordSuccess = true
          self.showPasswordError = false
          self.showThen = false
          self.showCatch = false
        })
        .catch(err => {
          self.password.old_password = ''
          self.password.password = ''
          self.password.password_confirmation = ''
          self.showPasswordSuccess = false
          self.showPasswordError = true
          self.showThen = false
          self.showCatch = false
          if (err.response.data.error) {
            self.passwordError = err.response.data.error
          } else {
            self.passwordError = 'There was an error. Please try again later.'
          }
          console.log(err)
        })
    },
    previewImage: function (event) {
      // Reference to the DOM input element
      var input = event.target
      console.log(event)
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.display_pic = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    }
  },
  computed: {
    matchPasswords () {
      if (this.password.password_confirmation === '') { return null } else { return (this.password.password === this.password.password_confirmation) }
    },
    passwordLength () {
      if (this.password.password === '') { return null } else { return (this.password.password.length >= 6) }
    },
    passwordLengthOld () {
      if (this.password.old_password === '') { return null } else { return (this.password.old_password.length >= 6) }
    }
  }
}
</script>

<style scoped>

</style>
