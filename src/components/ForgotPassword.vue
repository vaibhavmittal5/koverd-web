<template>
  <b-container fluid>
    <br />
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color="clr"></loading>
    <b-modal id="modalID" title="Bootstrap-Vue" ref="modalID">
      <p class="my-4">{{$t('forgotpassword.not-found-msg')}}</p>
    </b-modal>
    <b-alert
      variant="success"
      dismissible
      :show="success"
      @dismissed="success=false"
    >{{$t('forgotpassword.success-msg')}}</b-alert>
    <b-container>
      <b-row>
        <b-col cols="2"></b-col>
        <b-col>
          <b-form @submit="onSubmit">
            <b-form-group
              id="exampleInputGroup1"
             :label="$t('forgotpassword.email-address')"
              label-for="exampleInput1"
               :description="$t('forgotpassword.registered-email')"
            >
              <b-form-input
                id="exampleInput1"
                type="email"
                v-model="form.email"
                required
                placeholder="Email"
                ref="emailRef"
              ></b-form-input>
            </b-form-group>
            <b-button size="sm" type="submit" variant="primary">{{$t('forgotpassword.recover-link')}}</b-button>
          </b-form>
          <br />
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";

export default {
  name: "ForgotPassword",
  components: {
    Loading
  },
  data() {
    return {
    clr:'#17a2b7',
      form: {
        email: ""
      },
      success: false,
      isLoading: false
    };
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  methods: {
    onSubmit(evt) {
      this.isLoading = true;
      evt.preventDefault();
      let self = this;
      let endpoint = "/user/forgetpassword";
      if (this.$route.params.type === "employee") {
        endpoint = "employee/password/email";
      }
      axios
        .post(endpoint, this.form)
        .then(resp => {
          self.isLoading = false;
          self.success = true;
          self.form.email = "";
        })
        .catch(() => {
          self.isLoading = false;
          self.$refs.modalID.show();
          self.form.email = "";
        });
    }
  }
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/background/Home-page-1.jpg");
}
</style>
