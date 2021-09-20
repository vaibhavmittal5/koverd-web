<template>
  <b-container fluid>
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color='clr'></loading>
    <b-modal id="modalID" title="There was an error." ref="modalID">
      <p class="my-4">{{$t('recoverpassword.something-went-wrong')}}</p>
    </b-modal>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <b-form @submit="onSubmit">
          <b-form-group
            id="email_label"
           :label="$t('recoverpassword.email-address')"
            label-for="email"
            :description="$t('recoverpassword.confirm-email')"
          >
            <b-form-input
              id="email"
              type="email"
              v-model="form.email"
              required
              placeholder="Email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="password_label"
           :label="$t('recoverpassword.password')"
            label-for="password"
            :description="$t('recoverpassword.new-password')"
          >
            <b-form-input
              id="password"
              type="password"
              v-model="form.password"
              required
              :placeholder="$t('recoverpassword.password')"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="password_confirmation_label"
            :label="$t('recoverpassword.password-confirmation')"
            label-for="password_confirmation"
            :description="$t('recoverpassword.confirm-password')"
          >
            <b-form-input
              id="password_confirmation"
              type="password"
              v-model="form.password_confirmation"
              required
               :placeholder="$t('recoverpassword.password')"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">{{$t('recoverpassword.change-password')}}</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import i18n from "../i18n";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";

export default {
  name: "RecoverPassword",
  components: {
    Loading
  },
  data() {
    return {
    clr:'#17a2b7',
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        token: this.$route.params.token
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
      let endpoint = "user/password/reset";
      if (this.$route.params.type === "employee") {
        endpoint = "employee/password/reset";
      }
      axios
        .post(endpoint, this.form)
        .then(resp => {
          self.isLoading = false;
          self.success = true;
          self.form.email = "";
          self.form.password = "";
          self.form.password_confirmation = "";
          if (self.$route.params.type === "employee") {
            self.$router.replace({
              path: "employee/login",
              query: { passwordRedirect: true }
            });
          }
          self.$router.replace({
            path: "/"+this.$i18n.locale+"/login",
            query: { passwordRedirect: true }
          });
        })
        .catch(() => {
          self.isLoading = false;
          self.$refs.modalID.show();
          self.form.email = "";
          self.form.password = "";
          self.form.password_confirmation = "";
        });
    }
  }
};
</script>

<style scoped>
</style>
