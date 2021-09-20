<template>
  <b-container fluid>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false" :color="clr"></loading>
    <b-row class="justify-content-center">
      <b-col cols="8" >
        <b-alert :variant="modal_color"
                 dismissible
                 :show="verify_error"
                 @dismissed="verify_error=false">
          {{ modal_message }} - <router-link to="/"> Go back </router-link>
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'

export default {
  name: 'EmailVerification',
  components: {
    Loading
  },
  data () {
    return {
    clr:'#17a2b7',
      token: this.$route.params.token,
      verify_error: false,
      modal_color: 'danger',
      modal_message: 'Something wen\'t wrong, please try again later',
      isLoading: false
    }
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created () {
    this.isLoading = true
    let self = this

    axios.post('verify/' + this.token)
      .then(resp => {
        self.isLoading = false
        if (resp.data.success === 'Your account has been activated') {
          // account verified but user is still blocked
          self.modal_message = resp.data.success
          self.verify_error = true
          self.modal_color = 'success'
        } else {
          resp.data.type = 'user'
          self.$store.dispatch('FORCE_AUTH', resp.data)
            .then(() => {
              self.$router.replace({path: '/', query: {verified: true}})
            })
            .catch(() => {
              self.verify_error = true
            })
        }
      })
      .catch(err => {
        if (err.response.data.error) {
          self.modal_message = err.response.data.error
        }
        self.verify_error = true
        self.isLoading = false
        self.$refs.modalID.show()
      })
  }
}
</script>

<style scoped>

</style>
