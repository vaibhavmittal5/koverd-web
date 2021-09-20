<template>
  <b-container fluid>

<br/>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-modal id="modalID" title="Bootstrap-Vue" ref="infoModal">
      <p class="my-4">{{modal_message}}</p>
      <b-button @click="resend" size="sm" variant="primary" v-if="unverified">
        Resend email verification
        <font-awesome-icon icon="envelope" />
      </b-button>
    </b-modal>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <b-alert variant="success"
                 dismissible
                 :show="verify_resend.success"
                 @dismissed="verify_resend.success=false">
          {{ verify_resend.resend_message }}
        </b-alert>
        <b-alert variant="danger"
                 dismissible
                 :show="verify_resend.error"
                 @dismissed="verify_resend.error=false">
          {{ verify_resend.resend_message }}
        </b-alert>
        <b-alert variant="success"
                 dismissible
                 :show="password_changed"
                 @dismissed="password_changed=false">
          Password changed successfully. You can now login.
        </b-alert>
        <h1>Employee Login</h1>
        <b-form @submit="onSubmit">
          <b-form-group id="exampleInputGroup1"
                        label="Email address:"
                        label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Email"
                          ref="emailRef">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        label="Your password:"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="password"
                          v-model="form.password"
                          required>
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="justify-content-center" style="margin-top: 12px">
      <router-link to="/password/employee/reset">Forgot your password?</router-link>
    </b-row>
  </b-container>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'

export default {
  name: 'LoginEmployee',
  data () {
    return {
      form: {
        email: '',
        password: '',
        type: 'employee'
      },
      verify_resend: {
        success: false,
        error: false,
        resend_message: 'Something wen\'t wrong, please try again later.'
      },
      password_changed: this.$route.query.passwordRedirect,
      modal_message: 'Something went wrong. Please contact our support.',
      unverified: false,
      isLoading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const self = this
      this.isLoading = true
      this.$store.dispatch('AUTH_REQUEST', this.form)
        .then(function (response) {
          self.isLoading = false
          if (self.$route.query.redirect) {
            self.$router.push(self.$route.query.redirect)
          } else {
            self.$router.push('/')
          }
        })
        .catch(err => {
          self.isLoading = false
          console.log(err)
          if (err.response.data.unverified) {
            self.modal_message = err.response.data.unverified
            self.unverified = true
          } else if (err.response.data.email) {
            self.modal_message = err.response.data.email
          } else if (err.response.data.blocked) {
            self.modal_message = err.response.data.blocked
          } else if (err.response.data.on_hold) {
            self.modal_message = err.response.data.on_hold
          }
          self.$refs.infoModal.show()
          self.form.password = ''
        })
    },
    resend () {
      let self = this
      axios.post('employee/verify/resend', {'email': this.form.email})
        .then(resp => {
          self.$refs.infoModal.hide()
          self.password_changed = false
          self.verify_resend.error = false
          self.verify_resend.success = true
          if (resp.data.message) {
            self.verify_resend.resend_message = resp.data.message
          }
        })
        .catch(err => {
          self.$refs.infoModal.hide()
          self.password_changed = false
          self.verify_resend.success = false
          self.verify_resend.error = true
          if (err.response.data.email) {
            self.verify_resend.resend_message = err.response.data.email
          }
        })
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/background/Home-page-1.jpg");

}
</style>
