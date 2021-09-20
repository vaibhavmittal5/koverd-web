<template>
  <b-container fluid>
    <br />
      <strong v-if="message" style="color:green;">*{{message}}</strong>
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
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
import VueTimepicker from "vuejs-timepicker";

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
    editmsg:'',
    landscape: true,
      reactive: true,
     picker_date: false,
      picker: new Date().toISOString().substr(0, 10),
       editAppointmentModel : false,
    editappointmentdate:'',
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
      isLoading: false,
      message:'',
         editappointment:{
              branch_id:'',
             start_time: {
          HH: "00",
          mm: "00"
        },
    end_time: {
          HH: "00",
          mm: "00"
        },
              id:'',
              date:'',
              provider_remarks:'',
              new_date:'',
              old_status:'',
      },
      editappointmentdefault:{
              branch_id:'',
             start_time: {
          HH: "00",
          mm: "00"
        },
    end_time: {
          HH: "00",
          mm: "00"
        },
              id:'',
              date:'',
              provider_remarks:'',
              new_date:'',
              old_status:'',
      },
 token: this.$route.params.token,
status: this.$route.params.status,
updated_id: this.$route.params.id,
    };
  },
  components: {
    Loading,  VueTimepicker
  },
 watch: {
    editAppointmentModel(val) {
      val || this.editappointmentclose();
    }
  },
  created () {
this.editappointmentdate = new Date(new Date().getTime()+(1*24*60*60*1000));

        this.editappointmentdate=this.editappointmentdate.toJSON().slice(0,10).replace(/-/g,'-');
this.getverification();
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
      this.isLoading = true;
      this.$store
        .dispatch("AUTH_REQUEST", this.form)
        .then(function(response) {
          self.isLoading = false;
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
    },
    getverification()
{
 
      const self = this;
     if(self.status!='Edit')
 {
     axios
          .post("/user/update_status_appointment_status", {
            token: self.token, status:self.status
            
          })
          .then(function(response) {
        self.message='Appointment is updated now.Kindly login for more details';
      
             
      self.sendMail(response.data.Success);
            
          })
          .catch(function(error) {
            console.log(error);
          });
          }
          else
          {
          axios
          .post("/provider/getAppointmentData", {
            token: self.token,
            updated_id:self.updated_id
            
          })
          .then(function(response) {
        self.editappointment.start_time.HH=response.data.appointment.start_time.slice(0,2);
              self.editappointment.start_time.mm=response.data.appointment.start_time.slice(3,5);

                self.editappointment.end_time.HH=response.data.appointment.end_time.slice(0,2);
              self.editappointment.end_time.mm=response.data.appointment.end_time.slice(3,5);
              self.editappointment.id=response.data.appointment.id;
                self.editappointment.date=response.data.appointment.date;
                  self.editappointment.branch_id=response.data.appointment.branch_id;
                   self.editappointment.old_status=response.data.appointment.status;
                 
                 if(self.editappointment.date<self.editappointmentdate)
                self.message='You can\'t edit appointment which has scheduled time remains less than 24 hours';
                else if(response.data.appointment.status=='Completed')
                 self.message='Appointment is already marked as completed.';
                else
                self.editAppointmentModel=true;
          })
          .catch(function(error) {
            console.log(error);
          });
                
          }
},
sendMail(id)
{
var self=this;
  axios
            .post("/user/update_status_appointment_status_mail", {id:id })
            .then(function(response) {
             
            })
            .catch(function() {
              
            });
},
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
