<template>
  <b-container fluid>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <loading :active.sync="isUpdating"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-modal id="modalID" title="Bootstrap-Vue" ref="infoModal">
      <p class="my-4">{{modal_message}}</p>
    </b-modal>
    <b-row v-if="this.service_provider && !isLoading" class="justify-content-center">
      <b-col cols="12">
        <h3>Manage</h3>
        <b-row class="justify-content-center">
          <b-col cols="6">
            <h6 v-if="response.employees.data.length > 0" >Employees</h6>
            <b-container v-for="employee in response.employees.data" :key="employee.id" fluid style="margin-bottom: 15px;">
              <b-row class="justify-content-center">
                <b-card class="text-center w-100">
                  <b-row>
                    <b-col>{{employee.email}}</b-col>
                    <b-col>
                      <ul style="text-transform: capitalize;">
                        Roles:
                        <li v-for="role in employee.roles.data" :key="role.name" style="list-style: none;">
                          <b>
                            {{role.name}}
                          </b>
                        </li>
                      </ul>
                    </b-col>
                    <b-col>
                      <b-button @click="removeEmployee(employee.email)" class="float-right" variant="danger">remove</b-button>
                    </b-col>
                  </b-row>
                </b-card>
              </b-row>
            </b-container>
            <b-form @submit="addEmployee">
              <b-form-group id="exampleInputGroup1"
                            label="Add an employee"
                            label-for="exampleInput1">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="addEmployeeFrom.email"
                              required
                              placeholder="Employee Email">
                </b-form-input>
              </b-form-group>
              <b-form-group label="Role">
                <b-form-select v-model="addEmployeeFrom.roles" :options="roles" multiple></b-form-select>
              </b-form-group>
              <b-button type="submit" variant="success">Add employee</b-button>
            </b-form>
            <hr/>
            <b-form @submit="editBranch">
              <b-form-group id="address"
                            label="Address"
                            label-for="addressInput">
                <b-form-input id="addressInput"
                              type="text"
                              v-model="response.address"
                              required
                              placeholder="Address">
                </b-form-input>
              </b-form-group>
              <b-form-group id="postalCode"
                            label="Postal Code"
                            label-for="postalCodeInput">
                <b-form-input id="postalCodeInput"
                              type="text"
                              v-model="response.postal"
                              required
                              placeholder="Postal Code">
                </b-form-input>
              </b-form-group>
              <b-form-group id="city"
                            label="City"
                            label-for="cityInput">
                <b-form-input id="cityInput"
                              type="text"
                              v-model="response.city"
                              required
                              placeholder="City">
                </b-form-input>
              </b-form-group>
              <b-form-group id="country"
                            label="Country"
                            label-for="countriesSelect">
                <b-form-select id="countriesSelect"
                               :options="countries"
                               required
                               v-model="response.country">
                </b-form-select>
              </b-form-group>
              <b-form-group id="latitude"
                            label="Latitude">
                <b-form-input v-model="response.latitude"
                              type="text"
                              placeholder="Latitude"></b-form-input>
              </b-form-group>
              <b-form-group id="longitude"
                            label="Logitude">
                <b-form-input v-model="response.longitude"
                              type="text"
                              placeholder="Longitude"></b-form-input>
              </b-form-group>
              <b-form-group id="email"
                            label="Email">
                <b-form-input v-model="response.email"
                              type="text"
                              placeholder="email"></b-form-input>
              </b-form-group>
              <b-form-group id="biotext"
                            label="Bio Text"
                            label-for="bioTextInput">
                <b-form-textarea id="bioTextInput"
                                 type="text"
                                 v-model="response.bio_text"
                                 required
                                 placeholder="Bio Text"
                                 :rows="3"
                                 :max-rows="6">
                </b-form-textarea>
              </b-form-group>
              <b-button type="submit" variant="success">Edit Branch details</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
  name: 'ManageBranch',
  data () {
    return {
      response: null,
      isLoading: false,
      isUpdating: false,
      addEmployeeFrom: {
        email: '',
        roles: []
      },
      removeEmployeeForm: {
        email: '',
        roles: []
      },
      roles: [],
      modal_message: '',
      countries: []
    }
  },
  computed: {
    ...mapGetters([
      'service_provider',
      'role'
    ])
  },
  methods: {
    addEmployee (evt) {
      evt.preventDefault()
      this.isUpdating = true
      const self = this
      axios.post('/employee/branch/' + this.$route.params.id + '/manage/employee/add', this.addEmployeeFrom)
        .then(function (response) {
          self.addEmployeeFrom.email = ''
          self.addEmployeeFrom.roles = []
          self.modal_message = response.data.success
          self.updateData(self)
          self.isUpdating = false
          self.$refs.infoModal.show()
        })
        .catch(function () {
          self.addEmployeeFrom.email = ''
          self.modal_message = 'Something went wrong'
          self.isUpdating = false
          self.$refs.infoModal.show()
        })
    },
    removeEmployee (email) {
      const self = this
      this.removeEmployeeForm.email = email
      this.removeEmployeeForm.roles[0] = 'doctor'
      this.isUpdating = true
      axios.post('/employee/branch/' + this.$route.params.id + '/manage/employee/remove', this.removeEmployeeForm)
        .then(function (response) {
          self.removeEmployeeForm.email = ''
          self.removeEmployeeForm.roles = []
          self.modal_message = response.data.success
          self.updateData(self)
          self.isUpdating = false
          self.$refs.infoModal.show()
        })
        .catch(function () {
          self.modal_message = 'Something went wrong'
          self.isUpdating = false
          self.$refs.infoModal.show()
        })
    },
    updateData (self) {
      axios.get('/employee/branch/' + self.$route.params.id + '/manage')
        .then(function (response) {
          self.response = response.data.branch.data
        })
        .catch(function (error) {
          self.modal_message = 'Something went wrong'
          console.log(error)
        })
    },
    editBranch (evt) {
      evt.preventDefault()
      let self = this
      let editForm = {
        email: this.response.email,
        address: this.response.address,
        postal_code: this.response.postal,
        city: this.response.city,
        country: this.response.country,
        latitude: this.response.latitude,
        longitude: this.response.longitude,
        bio_txt: this.response.bio_text
      }
      this.isUpdating = true
      axios.post('/employee/branch/' + self.$route.params.id + '/manage/edit', editForm)
        .then(function (response) {
          // self.updateData(self)
          self.modal_message = response.data.success
          self.isUpdating = false
          self.$refs.infoModal.show()
        })
        .catch(function () {
          self.modal_message = 'Something went wrong'
          self.isUpdating = false
          self.$refs.infoModal.show()
        })
    }
  },
  components: {Loading},
  created () {
    const self = this
    this.roles = [
      { value: null, text: 'Please select an option' },
      { value: 'doctor', text: 'doctor' }
    ]
    this.countries = [
      {text: 'Portugal', value: 'Portugal', countryCode: 'PT', phoneCountryCode: 351},
      {text: 'United States', value: 'United States', countryCode: 'US', phoneCountryCode: 1}
    ]
    this.isLoading = true
    axios.get('/employee/branch/' + self.$route.params.id + '/manage')
      .then(function (response) {
        self.response = response.data.branch.data
        console.log(self.response)
        console.log(self.response.employees)
        self.isLoading = false
      })
      .catch(function (error) {
        console.log(error)
        self.isLoading = false
      })
  }
}
</script>

<style scoped>

</style>
