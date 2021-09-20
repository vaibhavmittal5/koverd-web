<template>
  <b-container fluid>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-col cols="12" v-if="!isLoading">
      <b-row>
        <b-col cols = "6">
          <h4 class="text-left">Edit Insurance</h4>
          <hr>
          <b-alert variant="success"
                   dismissible
                   :show="updateSuccess"
                   @dismissed="updateSuccess=false">
            Insurance successfully updated!
          </b-alert>
          <b-form @submit="onSubmit">
            <b-form-group id="insurancesSelectGroup"
                          label="Insurances"
                          label-for="insurancesSelect">
              <b-form-select id="insurancesSelect"
                             :options="form.insurances"
                             required
                             v-model="form.insuranceValue">
              </b-form-select>
            </b-form-group>
            <b-form-group id="insuranceTypeGroup"
                          label="Plan Coverage">
              <b-form-checkbox-group v-model="form.insuranceType" id="insuranceType">
                <b-form-checkbox value="medical">Medical</b-form-checkbox>
                <b-form-checkbox value="dental">Dental</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group id="insuranceCardNumberGroup"
                          label="Card Number">
              <b-form-input v-model="form.insuranceCardNumber" id="insuranceCardNumber"
                            type="number"
                            placeholder="1234 4131 3212"></b-form-input>
            </b-form-group>
            <b-form-group id="insuranceCardFrontPic"
                          label="Insurance Card Front">
              <b-img thumbnail fluid :src="display_front_pic" alt="Image" />
              <b-form-file v-model="front_pic"
                           accept="image/jpeg, image/png"
                           placeholder="Choose a file..."
                           ref="fileinput1"
                           @change="previewImage1"/>
            </b-form-group>
            <b-form-group id="insuranceCardBackPic"
                          label="Insurance Card Back">
              <b-img thumbnail fluid :src="display_back_pic" alt="Image" />
              <b-form-file v-model="back_pic"
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
  </b-container>
</template>
<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import imagePlaceholder from '../assets/placeholder.png'

export default {
  name: 'Insurances',
  data () {
    return {
      form: {
        insurances: [],
        userInsuranceId: null,
        insuranceValue: null,
        insuranceType: 'medical',
        insuranceCardNumber: null
      },
      isLoading: false,
      userInsurances: [],
      updateSuccess: false,
      display_front_pic: imagePlaceholder,
      display_back_pic: imagePlaceholder,
      front_pic: null,
      back_pic: null
    }
  },
  components: {Loading},
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created () {
    const self = this
    this.isLoading = true
    axios.get('/care-package')
      .then(function (response) {
        console.log(response)
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
          self.form.insurances.push(tmp)
        }
        axios.get('/user/user-data')
          .then(function (response) {
            console.log(response)
            self.userInsurances = response.data.userProfile.data.userInsurances.data
            for (let index in self.userInsurances) {
              if (self.userInsurances[index].insurance_id === self.$route.params.id) {
                self.form.userInsuranceId = self.userInsurances[index].id
                self.form.insuranceCardNumber = self.userInsurances[index].insurance_number
                self.form.insuranceType = self.userInsurances[index].type
                console.log(self.userInsurances[index].front_pic)
                self.display_front_pic = self.userInsurances[index].front_pic || imagePlaceholder
                self.display_back_pic = self.userInsurances[index].back_pic || imagePlaceholder
                for (let index2 in self.form.insurances) {
                  if (self.userInsurances[index].insurance_id === self.form.insurances[index2].insuranceId) {
                    self.form.insuranceValue = self.form.insurances[index2].value
                    break
                  }
                }
                break
              }
            }
            self.isLoading = false
          })
          .catch(function (error) {
            console.log(error)
            self.isLoading = false
          })
      })
      .catch(function (error) {
        console.log(error)
        self.isLoading = false
      })
  },
  methods: {
    submitUserInsurance: function () {
      const self = this
      if (this.front_pic !== null) {
        // this.display_front_pic = URL.createObjectURL(this.front_pic)
        let formData = new FormData()
        console.log(this.front_pic)
        formData.append('front_pic', this.front_pic)
        formData.append('insurance_id', this.form.insuranceValue)
        axios.post('/user/user-insurance-card-image', formData, {headers: {'content-type': 'multipart/form-data'}})
          .then(function (response) {
            console.log('user-image', response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      if (this.back_pic !== null) {
        let formData2 = new FormData()
        // this.display_back_pic = URL.createObjectURL(this.back_pic)
        formData2.append('back_pic', this.back_pic)
        formData2.append('insurance_id', this.form.insuranceValue)
        axios.post('/user/user-insurance-card-image', formData2, {headers: {'content-type': 'multipart/form-data'}})
          .then(function (response) {
            console.log('user-image', response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      let dataToSend = {
        id: this.form.userInsuranceId,
        insurance_id: this.form.insuranceValue,
        insurance_number: this.form.insuranceCardNumber,
        type: this.form.insuranceType
      }
      console.log(dataToSend)
      axios.post('/user/save-user-insurance', dataToSend)
        .then(function (response) {
          self.updateSuccess = true
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearFiles () {
      this.$refs.fileinput1.reset()
      this.$refs.fileinput2.reset()
    },
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.form)
      this.submitUserInsurance()
      this.clearFiles()
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
          this.display_front_pic = e.target.result
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
          this.display_back_pic = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>
<style>

</style>
