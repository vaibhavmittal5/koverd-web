<template>
  <b-container fluid>
    <br />
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color="clr"></loading>
    <b-modal id="modalID" title="Login Page" ref="infoModal">
      <p class="my-4">{{modal_message}}</p>
      <b-button @click="resend" size="sm" variant="primary" v-if="unverified">
        {{$t('kovLogin.resend')}}
        <font-awesome-icon icon="envelope" />
      </b-button>
    </b-modal>
    <b-row class="justify-content-center">
      <b-col>
        <b-alert
          variant="success"
          dismissible
          :show="verify_resend.success"
          @dismissed="verify_resend.success=false"
        >{{ verify_resend.resend_message }}</b-alert>
        <b-alert
          variant="danger"
          dismissible
          :show="verify_resend.error"
          @dismissed="verify_resend.error=false"
        >{{ verify_resend.resend_message }}</b-alert>
        <b-alert
          variant="success"
          dismissible
          :show="password_changed"
          @dismissed="password_changed=false"
        > {{$t('kovLogin.change')}}</b-alert>
        <b-form @submit="onSubmit">
          <b-container>
            <b-row>
              <b-col>
                <b-form-group
                  id="exampleInputGroup1"
                  label-for="exampleInput1"
                  :description=" `${$t('kovLogin.desc')}`"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="email"
                    v-model="form.email"
                    required
                    :placeholder=" `${$t('kovLogin.email')}`"
                    ref="emailRef"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="exampleInputGroup2" label-for="exampleInput2">
                  <b-form-input
                    id="exampleInput2"
                    type="password"
                    v-model="form.password"
                    :placeholder="`${$t('kovLogin.pass')}`"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <b-button type="submit" variant="primary">{{$t('kovLogin.submit')}}</b-button><br/><br/>
<b-button type="submit" variant="primary" style="display:inline-flex;" class="btn btn-primary" @click="AuthProvider('google')"><div class="left">
            <img width="18px" style="margin-right:8px;" alt="Google sign-in" 
                src="../assets/google.png" />
        </div>
        Login with Google</b-button> 

 
        </b-form>
      </b-col>
    </b-row>

 <b-row class="justify-content-center" style="margin-top: 12px">
<router-link :to="`/${$i18n.locale}/register`">
<b-button variant="primary" class="btn btn-primary" ><font-awesome-icon icon="user-plus" />&nbsp;&nbsp; {{ $t("nav.sign") }}</b-button></router-link>
</b-row>


    <b-row class="justify-content-center" style="margin-top: 12px">
      <router-link :to="`/${$i18n.locale}/password/user/reset`">{{$t('kovLogin.forget')}} </router-link>
    </b-row>
    <b-row class="justify-content-center" style="margin-top: 12px;">
      <a href="https://business.kovered.io/#/">{{$t('kovLogin.register')}}</a>
    </b-row>
    <!-- <b-row class="justify-content-center" style="margin-top: 12px">
      <router-link to="/employee/login">Login as an Employee</router-link>
    </b-row>-->
  </b-container>
</template>

<script>
import Vue from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import VueAxios from 'vue-axios';
import VueSocialauth from 'vue-social-auth';
import VueAuthenticate from 'vue-authenticate';
Vue.use(VueAxios, axios);

Vue.use(VueSocialauth, {
 
  providers: {
    google: {
     clientId: '271583056386-pt3hnuoh5mc2ii79c0kuepn32j1cc80h.apps.googleusercontent.com',
      redirectUri: 'https://kovered.io/en/login',
      client_secret : 'HAnz-d8uqzSrd1lSGzh4HwZc',
    }
  }
});
export default {
  name: "Login",
  props: ["slots", "remark", "service", "checked", "slot_name", "date"],
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
    clr:'#17a2b7',
      form: {
        email: "",
        password: "",
        type: "user"
      },
      desc: "",
      verify_resend: {
        success: false,
        error: false,
        resend_message: "Something wen't wrong, please try again later."
      },
      password_changed: this.$route.query.passwordRedirect,
      modal_message: "Something went wrong. Please contact our support.",
      unverified: false,
      isLoading: false
    };
  },
  components: {
    Loading
  },
 
  methods: {
    onSubmit(evt) {
      console.log(
        this.$route.query.form,
        "params",
        this.$route.params.id,
        "form"
      );
      let data = this.$route.query.form;
      let id = this.$route.params.id;
      evt.preventDefault();
      const self = this;
        self.form.email=self.form.email.trim();
 self.form.password=self.form.password.trim();
     
      this.$store
        .dispatch("AUTH_REQUEST", this.form)
        .then(function(response) {
          
         
          console.log(this.$route.query.form);
          console.log(this.$route);
          if (this.$route.query.form) {
            console.log(this.$route.query.form, "workh");
          } else {
            this.$router.push("/");
          }
        })
        .catch(err => {
          self.isLoading = false;
          if (err.response.data.unverified) {
            self.modal_message = err.response.data.unverified;
            self.unverified = true;
          } else if (err.response.data.email) {
            self.modal_message = err.response.data.email;
          } else if (err.response.data.blocked) {
            self.modal_message = err.response.data.blocked;
          } else if (err.response.data.email) {
            self.modal_message = err.response.data.email;
          }
          self.$refs.infoModal.show();
          self.form.password = "";
        });
    },
AuthProvider(provider) {
 
              var self = this
                 
              this.$auth.authenticate(provider).then(response =>{
              
                self.SocialLogin(provider,response)
 
                }).catch(err => {
                    console.log(err)
                })
 
            },
 
            SocialLogin(provider,response){

                this.$http.post('user/callback/'+provider,response).then(response => {
                    this.userData=response.data;
                  console.log(this.userData.user.data);
 console.log(this.userData.token);
 this.$store
        .dispatch("AUTH_REQUEST_SOCIAL", this.userData)
        .then(function(response) {
          self.isLoading = false;
          console.log(this.$route.query.form);
          console.log(this.$route);
          
        });

 
                }).catch(err => {
                    console.log(err)
                })
            },
 
   
    resend() {
      let self = this;
      axios
        .post("/verify/resend", { email: this.form.email })
        .then(resp => {
          self.$refs.infoModal.hide();
          self.password_changed = false;
          self.verify_resend.error = false;
          self.verify_resend.success = true;
          if (resp.data.message) {
            self.verify_resend.resend_message = resp.data.message;
          }
        })
        .catch(err => {
          self.$refs.infoModal.hide();
          self.password_changed = false;
          self.verify_resend.success = false;
          self.verify_resend.error = true;
          if (err.response.data.email) {
            self.verify_resend.resend_message = err.response.data.email;
          }
        });
    },
 loginGoogle() {
      axios.post('user/redirect/').then(response => {
 
                    console.log(response.data)
 
                }).catch(err => {
                    console.log(err.error)
                })
    }
  }
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/background/Home-page-1.jpg");
  background-size: 100% 100%;
  height: 500px;
}
.my-4 {
  color: red;
  font-size: 18px;
}
</style>
