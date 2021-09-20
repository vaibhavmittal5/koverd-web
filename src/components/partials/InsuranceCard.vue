<template>
  <b-container>
    <b-card>
      <b-row>
        <b-col cols="2" >
          <img v-if="this.front_pic == null" :src="imagePlaceholder" alt="Image">
          <img v-else :src="this.front_pic" alt="Image">
        </b-col>
        <b-col class="text-left" cols="8">
          <b-row>
            <h4>
              {{company_name}}
            </h4>
          </b-row>
          <b-row>
            <h6 v-if="type">
              <b>{{type}}</b>
            </h6>
            <h6 v-else>
              <b>Generic</b>
            </h6>
          </b-row>
          <b-row v-if="insurance_number">
            Insurance Number: {{this.insurance_number}}
          </b-row>
          <b-row v-else>
            Insurance Number: Not Specified
          </b-row>
        </b-col>
        <b-col cols="2">
          <b-row class="justify-content-center">
            <router-link :to="'/user/insurance/' + this.insurance_id">
              <b-button variant="primary">Edit</b-button>
            </router-link>
          </b-row>
          <b-row class="justify-content-center" style="margin-top: 12px">
            <b-button variant="primary" v-on:click="removeUserInsurance()">Remove</b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import imagePlaceholder from '../../assets/placeholder.png'
import axios from 'axios'

export default {
  name: 'InsuranceCard',
  data: function () {
    return {
      imagePlaceholder: imagePlaceholder
    }
  },
  props: [
    'front_pic',
    'back_pic',
    'insurance_number',
    'plan',
    'type',
    'company_name',
    'insurance_id'
  ],
  methods: {
    removeUserInsurance: function () {
      const self = this
      axios.post('/user/remove-user-insurance', {insurance_id: this.insurance_id})
        .then(function (response) {
          console.log(response)
          self.$emit('remove', self.$props.insurance_id)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

</script>

<style scoped>

</style>
