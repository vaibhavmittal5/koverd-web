<template>
  <b-container fluid>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-modal id="modalID" title="Bootstrap-Vue" ref="infoModal">
      <p class="my-4">{{modal_message}}</p>
    </b-modal>
    <b-container v-if="!isLoading" fluid>
      <h1>New partner</h1>
      <b-row class="justify-content-center">
        <b-col cols="6" >
          <b-form @submit="onSubmit">
            <b-form-group id="partnerName"
                          label="Partner Name"
                          label-for="partnerNameInput">
              <b-form-input id="partnerNameInput"
                            type="text"
                            v-model="form.name"
                            placeholder="Partner Name">
              </b-form-input>
            </b-form-group>
            <b-form-group id="address"
                          label="Address"
                          label-for="addressInput">
              <b-form-input id="addressInput"
                            type="text"
                            v-model="form.address"
                            placeholder="Address">
              </b-form-input>
            </b-form-group>
            <b-form-group id="postalCode"
                          label="Postal Code"
                          label-for="postalCodeInput">
              <b-form-input id="postalCodeInput"
                            type="text"
                            v-model="form.postal_code"
                            placeholder="Postal Code">
              </b-form-input>
            </b-form-group>
            <b-form-group id="city"
                          label="City"
                          label-for="cityInput">
              <b-form-input id="cityInput"
                            type="text"
                            v-model="form.city"
                            placeholder="City">
              </b-form-input>
            </b-form-group>
            <b-form-group id="country"
                          label="Country"
                          label-for="countriesSelect">
              <b-form-select id="countriesSelect"
                             :options="countries"
                             v-model="form.country">
              </b-form-select>
            </b-form-group>
            <b-form-group id="latitude"
                          label="Latitude">
              <b-form-input v-model="form.latitude"
                            type="text"
                            placeholder="Latitude"></b-form-input>
            </b-form-group>
            <b-form-group id="longitude"
                          label="Logitude">
              <b-form-input v-model="form.longitude"
                            type="text"
                            placeholder="Longitude"></b-form-input>
            </b-form-group>
            <b-form-group id="website"
                          label="Website"
                          label-for="websiteInput">
              <b-form-input id="websiteInput"
                            type="text"
                            v-model="form.website"
                            placeholder="Website">
              </b-form-input>
            </b-form-group>
            <b-form-group id="email"
                          label="Email">
              <b-form-input v-model="form.email"
                            type="text"
                            placeholder="email"></b-form-input>
            </b-form-group>
            <b-form-group id="type"
                          label="Type"
                          label-for="typeSelect">
              <b-form-select id="typeSelect"
                             :options="serviceType"
                             v-model="form.type">
              </b-form-select>
            </b-form-group>
            <b-form-group id="category"
                          label="Category"
                          label-for="categoriesSelect">
              <b-form-select id="categoriesSelect"
                             :options="categories"
                             v-model="form.category_id"
                             @change="updateSpeciality">
              </b-form-select>
            </b-form-group>
            <b-form-group id="biotext"
                          label="Bio Text"
                          label-for="bioTextInput">
              <b-form-textarea id="bioTextInput"
                               type="text"
                               v-model="form.bio_txt"
                               placeholder="Bio Text"
                               :rows="3"
                               :max-rows="6">
              </b-form-textarea>
            </b-form-group>
            <b-form-group id="phoneNumber"
                          label="Phone Number">
              <b-form-input v-model="form.contact_number"
                            type="number"
                            placeholder="Contact Number">
              </b-form-input>
            </b-form-group>
            <b-form-group id="speciality"
                          label="Specialities"
                          label-for="specialitiesSelect">
              <b-form-select id="specialitiesSelect" multiple v-model="form.specialities" :options="specialitiesFiltered" class="mb-3">
              </b-form-select>
            </b-form-group>
            <b-form-group id="insurances"
                          label="Insurances"
                          label-for="insurancesSelect">
              <b-form-select id="insurancesSelect" multiple v-model="form.insurances" :options="insurances" class="mb-3">
              </b-form-select>
            </b-form-group>
            <p></p>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import Loading from 'vue-loading-overlay'

export default {
  name: 'NewPartner',
  data () {
    return {
      form: {
        name: '',
        address: '',
        postal_code: '',
        city: '',
        country: '',
        website: '',
        type: '',
        category_id: '',
        bio_txt: '',
        latitude: '',
        longitude: '',
        email: '',
        contact_number: '',
        country_code: '',
        specialities: '',
        insurances: ''
      },
      errors: {
        name: '',
        address: '',
        postal_code: '',
        city: '',
        country: '',
        website: '',
        type: '',
        category_id: '',
        bio_txt: '',
        latitude: '',
        longitude: '',
        email: '',
        contact_number: '',
        country_code: '',
        specialities: '',
        insurances: ''
      },
      categories: [],
      specialitiesBase: [],
      specialitiesFiltered: [],
      serviceType: [],
      countries: [],
      insurances: [],
      isLoading: false,
      modal_message: ''
    }
  },
  components: {
    Loading
  },
  created () {
    const self = this
    self.isLoading = true

    self.countries = [
      {text: 'Portugal', value: 'Portugal', countryCode: 'PT', phoneCountryCode: 351},
      {text: 'United States', value: 'United States', countryCode: 'US', phoneCountryCode: 1}
    ]

    self.categories = [
      {text: 'Medical Care', value: 1},
      {text: 'Pharmacy', value: 2},
      {text: 'Fitness Center', value: 3},
      {text: 'Health and Well Being', value: 4},
      {text: 'Assisted Living for Senior Care', value: 5},
      {text: 'Alternative Medicine', value: 6}
    ]

    self.specialitiesBase = [
      {text: 'Allergists', value: 1, category_id: 1},
      {text: 'Cardiologists', value: 2, category_id: 1},
      {text: 'Dentists', value: 3, category_id: 1},
      {text: 'Family Physicians', value: 4, category_id: 1},
      {text: 'Neurologists', value: 5, category_id: 1},
      {text: 'Plastic Surgeons', value: 6, category_id: 1},
      {text: 'Psychiatrists', value: 7, category_id: 1},
      {text: 'Radiologists', value: 8, category_id: 1},
      {text: 'Surgeons', value: 9, category_id: 1},
      {text: 'Therapists', value: 10, category_id: 1},
      {text: 'Travel Medicine', value: 11, category_id: 1},
      {text: 'Urgent Care', value: 12, category_id: 1},
      {text: 'Ophthalmology', value: 13, category_id: 1},
      {text: 'Physiotherapist', value: 14, category_id: 1},
      {text: 'Dermatologist', value: 15, category_id: 1},
      {text: 'General Practisioner', value: 16, category_id: 1},
      {text: 'Paediatrician', value: 17, category_id: 1},
      {text: 'Yoga', value: 18, category_id: 3},
      {text: 'Dance', value: 19, category_id: 3},
      {text: 'Pilates', value: 20, category_id: 3},
      {text: 'Gyms', value: 21, category_id: 3},
      {text: 'Athletic Clubs', value: 22, category_id: 3},
      {text: 'Country Clubs', value: 23, category_id: 3},
      {text: 'Others', value: 24, category_id: 3},
      {text: 'Esthetic', value: 25, category_id: 3},
      {text: 'Spa', value: 26, category_id: 4},
      {text: 'Massage Therapy', value: 27, category_id: 4},
      {text: 'Dietitian', value: 28, category_id: 4},
      {text: 'Thermal Baths', value: 29, category_id: 4},
      {text: 'Health Clubs', value: 30, category_id: 4},
      {text: 'Nutrition', value: 31, category_id: 4},
      {text: 'Beauty Shop', value: 32, category_id: 4},
      {text: 'Nursing Care', value: 33, category_id: 5},
      {text: 'Health Care', value: 34, category_id: 5},
      {text: 'Acupuncture', value: 39, category_id: 6},
      {text: 'Psycotherapy', value: 40, category_id: 6},
      {text: 'Homeopathic', value: 41, category_id: 6},
      {text: 'Chinese Medicine', value: 42, category_id: 6},
      {text: 'Osteopathic', value: 43, category_id: 6},
      {text: 'Cannabinoid CBD', value: 44, category_id: 6},
      {text: 'Osteopathy', value: 45, category_id: 6},
      {text: 'Chiropractor', value: 46, category_id: 6},
      {text: 'Esthetic', value: 48, category_id: 4}
    ]

    self.specialitiesFiltered = self.specialitiesBase

    self.serviceType = [
      'Clinic',
      'Hospital',
      'Pharmacy',
      'Wellness Center'
    ]

    // TODO imports for specialities
    axios.get('/care-package')
      .then(function (response) {
        let array = response.data.insurances.data
        for (var x in array) {
          let text = ''
          if (array[x].plan) text = array[x].company_name + ' - ' + array[x].plan
          else text = array[x].company_name
          let tmp = {
            value: array[x].insurance_id,
            text: text,
            insuranceId: array[x].insurance_id,
            insuranceCompanyName: array[x].company_name,
            insurancePlan: array[x].plan
          }
          self.insurances.push(tmp)
        }
        self.isLoading = false
      })
      .catch(function (error) {
        console.log(error)
        self.isLoading = false
      })
  },
  methods: {
    updateSpeciality () {
      const self = this
      this.$nextTick(() => {
        self.form.specialities = []
        self.specialitiesFiltered = []
        for (let index in self.specialitiesBase) {
          if (self.form.category_id === self.specialitiesBase[index].category_id) {
            console.log('igual')
            self.specialitiesFiltered.push(self.specialitiesBase[index])
          }
        }
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.setCountryCode()
      const self = this
      self.isLoading = true
      console.log(self.form)
      axios.post('/employee/partner/new', this.form)
        .then(function () {
          self.modal_message = 'Partner created successfully'
          self.isLoading = false
          self.$refs.infoModal.show()
        })
        .catch(function () {
          self.modal_message = 'Something went wrong'
          self.isLoading = false
          self.$refs.infoModal.show()
        })
    },
    setCountryCode () {
      const self = this
      console.log(self.form.country)
      for (let index in self.countries) {
        console.log(self.countries[index].value)
        if (self.form.country === self.countries[index].value) {
          self.form.country_code = self.countries[index].phoneCountryCode
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
