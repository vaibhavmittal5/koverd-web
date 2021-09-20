<template>
  <b-row>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-col cols="12" v-if="!isLoading">

        <b-row>
          <b-col offset="2" cols="8">
            <b-form @submit="onSubmit">
            <h4 class="text-left">Add New Service</h4>
            <hr>
        <b-form-group id="name"
                      label="Name">
          <b-form-input v-model="form.name"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="description"
                      label="Description">
          <b-form-input v-model="form.description"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="category"
                      label="Category"
                      label-for="categoriesSelect">
          <b-form-select id="categoriesSelect"
                         :options="categories"
                         required
                         v-model="form.category"
                         @change="updateSpeciality">
          </b-form-select>
        </b-form-group>
        <b-form-group id="speciality"
                      label="Specialities"
                      label-for="specialitiesSelect">
          <b-form-select id="specialitiesSelect" multiple v-model="form.specialities" :options="specialitiesFiltered" class="mb-3">
          </b-form-select>
        </b-form-group>
        <b-form-group id="type"
                      label="Type"
                      label-for="typeSelect">
          <b-form-select id="typeSelect"
                         :options="serviceType"
                         required
                         v-model="form.type">
          </b-form-select>
        </b-form-group>
        <b-form-group id="address"
                      label="Address">
          <b-form-input v-model="form.address"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="city"
                      label="City">
          <b-form-input v-model="form.city"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="postalCode"
                      label="Postal Code">
          <b-form-input v-model="form.postalCode"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="country"
                      label="Country"
                      label-for="countriesSelect">
          <b-form-select id="countriesSelect"
                         :options="countries"
                         required
                         v-model="form.country">
          </b-form-select>
        </b-form-group>
        <b-form-group id="latitude"
                      label="Latitude">
          <b-form-input v-model="form.latitude"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="longitude"
                      label="Logitude">
          <b-form-input v-model="form.longitude"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="phoneNumber"
                      label="Phone Number">
          <b-form-input v-model="form.phoneNumber"
                        type="number"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="email"
                      label="Email">
          <b-form-input v-model="form.email"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="website"
                      label="Website">
          <b-form-input v-model="form.website"
                        type="text"
                        placeholder="asd"></b-form-input>
        </b-form-group>
        <b-form-group id="insurances"
                      label="Insurances"
                      label-for="insurancesSelect">
          <b-form-select id="insurancesSelect" multiple v-model="form.insurances" :options="insurances" class="mb-3">
          </b-form-select>
        </b-form-group>
        <b-form-group id="profilePic"
                      label="Profile Picture">
          <b-img thumbnail fluid :src="display_profile_pic" alt="Image" />
          <b-form-file v-model="profile_pic"
                       accept="image/jpeg, image/png"
                       placeholder="Choose a file..."
                       ref="fileinput1"
                       @change="previewImage1"/>
        </b-form-group>
        <b-form-group id="coverPic"
                      label="Cover Picture">
          <b-img thumbnail fluid :src="display_cover_pic" alt="Image" />
          <b-form-file v-model="cover_pic"
                       accept="image/jpeg, image/png"
                       placeholder="Choose a file..."
                       ref="fileinput2"
                       @change="previewImage2"/>
        </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>

            </b-form>
          </b-col>
        </b-row>

    </b-col>
  </b-row>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import imagePlaceholder from '../assets/placeholder.png'

export default {
  name: 'ServiceNew',
  data () {
    return {
      form: {
        name: null,
        description: null,
        category: null,
        specialities: [],
        type: null,
        address: null,
        city: null,
        postalCode: null,
        country: null,
        latitude: null,
        longitude: null,
        phoneCountryCode: null,
        phoneNumber: null,
        email: null,
        website: null,
        insurances: []
      },
      categories: [],
      specialitiesBase: [],
      specialitiesFiltered: [],
      serviceType: [],
      countries: [],
      insurances: [],
      isLoading: false,
      display_profile_pic: imagePlaceholder,
      display_cover_pic: imagePlaceholder,
      profile_pic: null,
      cover_pic: null
    }
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
  components: {Loading},
  methods: {
    submitService () {
      const self = this
      self.isLoading = true

      self.setCountryCode()
      let dataToSend = {
        name: self.form.name,
        bio_txt: self.form.description,
        address: self.form.address,
        postal_code: self.form.postalCode,
        city: self.form.city,
        country: self.form.country,
        latitude: parseFloat(self.form.latitude),
        longitude: parseFloat(self.form.longitude),
        website: self.form.website,
        email: self.form.email,
        country_code: self.form.phoneCountryCode,
        contact_number: parseInt(self.form.phoneNumber),
        type: self.form.type,
        category_id: self.form.category,
        specialities: self.form.specialities,
        insurances: self.form.insurances
      }

      console.log(dataToSend)

      axios.post('/service/new', dataToSend)
        .then(function (response) {
          console.log(response)
          self.isLoading = false

          // parent request will return before the picture is uploaded, so the return serialized object won't have it.
          if (self.profile_pic) {
            self.display_profile_pic = URL.createObjectURL(self.profile_pic)
            let formData = new FormData()
            formData.append('branch_id', response.data.branch.data.id)
            console.log(response.data.branch.data.id)
            formData.append('profile_pic', self.profile_pic)
            axios.post('/branch/images', formData, {headers: {'content-type': 'multipart/form-data'}})
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
          }

          if (self.cover_pic) {
            let formData = new FormData()
            formData.append('branch_id', response.data.branch.data.id)
            formData.append('cover_pic', self.cover_pic)
            axios.post('/branch/images', formData, {headers: {'content-type': 'multipart/form-data'}})
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        })
        .catch(function (error) {
          console.log(error)
          self.isLoading = false
        })
    },
    clearFiles () {
      this.$refs.fileinput1.reset()
      this.$refs.fileinput2.reset()
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.submitService()
      this.clearFiles()
    },
    setCountryCode () {
      const self = this
      console.log(self.form.country)
      for (let index in self.countries) {
        console.log(self.countries[index].value)
        if (self.form.country === self.countries[index].value) {
          self.form.phoneCountryCode = self.countries[index].phoneCountryCode
          break
        }
      }
    },
    previewImage1: function (event) {
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
          this.display_profile_pic = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    },
    previewImage2: function (event) {
      var input = event.target
      console.log(event)
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.display_cover_pic = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    updateSpeciality () {
      const self = this
      this.$nextTick(() => {
        self.form.specialities = []
        self.specialitiesFiltered = []
        for (let index in self.specialitiesBase) {
          if (self.form.category === self.specialitiesBase[index].category_id) {
            console.log('igual')
            self.specialitiesFiltered.push(self.specialitiesBase[index])
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
