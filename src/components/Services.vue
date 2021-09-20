<template>
  <b-container fluid>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-col v-if="!isLoading" offset="1" cols="10">
      <template v-if="partners.length > 0">
        <h3>Partners</h3>
        <hr>
      </template>
      <div v-for="partner in partners" :key="partner.id" class="mb-5">
        <h4>
          {{ partner.name }}
        </h4>
        <Card v-for="branch in partner.branches.data" :key="branch.id"
              :idService="branch.id"
              :name="partner.name + ' ' + branch.city"
              :address="branch.address"
              :category="partner.category.data.name"
              :image="partner.profile_pic"
              :removeFavourites="false"
              :manage="true"
              style="margin-bottom: 15px;"></Card>
      </div>
      <template v-if="branches.length > 0">
        <h3>Branches</h3>
        <hr>
      </template>
      <div v-for="branch in branches" :key="branch.id" class="mb-5">
        <Card :idService="branch.id"
              :name="branch.partner.data.name + ' ' + branch.city"
              :address="branch.address"
              :category="branch.partner.data.category.data.name"
              :image="branch.partner.data.profile_pic"
              :removeFavourites="false"
              :manage="false"
              :roles="branch.roles"></Card>
      </div>
    </b-col>
  </b-container>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Card from './partials/Card'

export default {
  name: 'Services',
  data () {
    return {
      partners: [],
      branches: [],
      isLoading: false
    }
  },
  components: {
    Card,
    Loading
  },
  methods: {
    //
  },
  created () {
    const self = this
    self.isLoading = true
    axios.get('/employee/branches')
      .then(function (response) {
        self.partners = response.data.partners.data
        self.branches = response.data.branches.data
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
