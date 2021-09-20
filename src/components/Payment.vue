<template>
<div style="height:auto;" >
<b-container fluid style="max-width:1100px;">
  <b-container fluid >
 <!--div id="app" v-cloak-->
 <b-alert v-if="home_link===false"
      variant="info"
      dismissible
      :show="message!=''"
      @dismissed="message=''"
    >{{ message}} <router-link  :to="`/${$i18n.locale}/providers/${this.branch_id}/${this.branch_name}`.replace(/\s/g, '-')" > Select another date & slots </router-link></b-alert>
     <b-alert v-else
      variant="info"
      dismissible
      :show="message!=''"
      @dismissed="message=''"
    >{{ message}} <router-link  :to="`/${$i18n.locale}/appointments`" > click Here </router-link></b-alert>
<b-alert v-if="card_message!=='Payment is Done.'"
      variant="danger"
      dismissible
      :show="card_message!=''"
      @dismissed="card_message=''"
    >{{ card_message}} <router-link  :to="`/${$i18n.locale}/appointments`" > Click here</router-link> to complete your transactioms.</b-alert>


    <div style="color:#17a2b7;font-size:16px;font-weight:500;background-color:white;margin-top:5px;margin-bottom:2px;" > Confirm & Payment </div>
<div class="row bv-example-row" style="background-color:#c5c9ce;color:black;border:1px solid #17a2b7;margin:5px;padding:3px;" >
 
<div class="col-md-6 col-sm-6"  >
<b-container fluid style="margin:12px;">
 
<b-row>
<b-col cols="12" v-if="profile_pic">
                <img
                  :src="profile_pic"
                  class="white--text text-center v-img"
                  style="max-height:100px;width:100px;"
                  @error="$event.target.src='https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"
                /><br/>
          <strong style="font-weight:500;text-align:center;font-size:15px;color:#17a2b7;" >{{branch_name}} </strong>
              </b-col>

              <b-col cols="12" v-else>
                <img
                  :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"
                  class="white--text text-center v-img"
                   style="max-height:100px;width:100px;"
                />
<br/>
          <strong style="font-weight:500;text-align:center;font-size:15px;color:blue;" >{{branch_name}} </strong>
              </b-col>
</b-row>
<b-row align="center">
<b-col cols lg="6" md="6" sm="12" align="left" >
 <hr>
<b-row align="center">

<b-col cols lg="12" md="12" sm="12" align="left" v-if="user_name">
<strong style="font-weight:500;text-align:left;font-size:15px;" >Your Name : {{user_name}}  </strong>
</b-col>
<b-col cols lg="12" md="12" sm="12" align="left" v-if="user_email">
<strong style="font-weight:500;text-align:left;font-size:15px;" >Email : {{user_email}}  </strong>
</b-col>
<b-col cols lg="12" md="12" sm="12" align="left" v-if="user_contact">
<strong style="font-weight:500;text-align:left;font-size:15px;" >Contact : {{user_contact}}  </strong>
</b-col>
<hr>
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:left;font-size:15px;" >Service : {{service.name}}  </strong>
</b-col>
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" v-if="consultation_type==='in_clinic'">Consultation : In Clinic </strong>
<strong style="font-weight:500;text-align:center;font-size:15px;" v-else-if="consultation_type==='is_home'">Consultation : Home Visit </strong>
<strong style="font-weight:500;text-align:center;font-size:15px;" v-else >Consultation : Video Consultation </strong>
</b-col>
<b-col cols lg="12" md="12" sm="12" align="left" v-if="home_visit_address">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Address : {{home_visit_address.address}},{{home_visit_address.city}}-{{home_visit_address.postal_code}},{{home_visit_address.country}} </strong>
</b-col>
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Date : {{slots.date}} </strong>
</b-col>
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Time : {{slots.start_time}} </strong>
</b-col>

<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Remarks : {{remarks}} </strong>
</b-col><div  class="tooltip" > vffv <span class="tooltiptext">Info</span></div>
<b-col cols lg="12" md="12" sm="12" align="left" v-if="display">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Attached Doc. </strong>
 <div   v-for="(itm,index) in display" ><span style="color:##6c757d;font-size:13px;margin-left:2px;" > [{{index+1}}]. {{itm}}</span>
                    <button class="btn" style="max-width:30px;background-color:#d7f1f5;color:red;"  ></button>
                    
                  </div>
                  </b-col>
</b-row>
</b-col>
<b-col cols lg="6" md="6" sm="12" align="left" >
 <hr>
<b-row align="center">

                 
         <b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Fees : {{service.price}} {{service.currency_code}} </strong>
</b-col> 
<!--b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Service Charge(5%) : {{service_charge}} {{service.currency_code}} </strong>
</b-col> 
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Total : {{total_charge}} {{service.currency_code}} </strong>
</b-col-->  
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Tax({{tax_per}}%) : {{tax}} {{service.currency_code}} </strong>
</b-col>  
<b-col cols lg="12" md="12" sm="12" align="left">
<strong style="font-weight:500;text-align:center;font-size:15px;" >Total : {{total_amount}} {{service.currency_code}} </strong>
</b-col> 
</b-row>
</b-col>           
</b-row>
 <hr>
</b-container fluid>

</div>
<div class="col-md-6 col-sm-6"  > 

<!-- class  uk-background-muted uk-box-shadow-large  -->
      <div class="uk-align-center uk-margin-top uk-width-large uk-background-muted uk-box-shadow-large">


        <form class="uk-padding" id="card" >
 
          <div class="uk-margin uk-text-center">
            <p class="stripeError" v-if="stripeError">
              {{stripeError}}
            </p>
          </div>

 <div class="uk-margin uk-text-left">
            <label class="uk-form-label" for="Name">
              Name on card
            </label>
            <div class="uk-form-controls">
              <input type="text" class="uk-input" v-on:input="cardNameErrorFunction()" v-model="cardName" style="max-width: 100%;
    width: 100%;
    border: 0 none;
    padding: 0 10px;
    background: #fff;
    color: #666;
    border: 1px solid #e5e5e5;
    transition: .2s ease-in-out;
    transition-property: color,background-color,border;line-height: 38px;vertical-align: middle;
    display: inline-block;" :class="{ 'uk-form-danger': cardNameError }" />
              <span class="help-block" v-if="cardNameError">
                                {{cardNameError}}
                            </span>
          </div>
          </div>

<div class="uk-margin uk-text-left">
            <label class="uk-form-label" for="Name">
              Email
            </label>
            <div class="uk-form-controls">
              <input type="text" class="uk-input" v-on:input="cardEmailErrorFunction()"  v-model="cardEmail"  style="max-width: 100%;
    width: 100%;
    border: 0 none;
    padding: 0 10px;
    background: #fff;
    color: #666;
    border: 1px solid #e5e5e5;
    transition: .2s ease-in-out;
    transition-property: color,background-color,border;line-height: 38px;vertical-align: middle;
    display: inline-block;"  :class="{ 'uk-form-danger': cardEmailError }" />
               <span class="help-block" v-if="cardEmailError">
                                {{cardEmailError}}
                            </span>
          </div>
          </div>
          <div class="uk-margin uk-text-left">
            <label class="uk-form-label" for="Card Number">
              Card Number  <img src="/static/img/visa.png" style="width:50px;height:35px;"/><img src="/static/img/master-card.svg" style="width:50px;height:28px;"/> <img src="/static/img/american_express.jpg" style="width:50px;height:35px;"/>
            </label>
            <div class="uk-form-controls">
              <div id="card-number" class="uk-input" :class="{ 'uk-form-danger': cardNumberError }"></div>
              <span class="help-block" v-if="cardNumberError">
                                {{cardNumberError}}
                            </span>
            </div>
          </div>
 
          <div class="uk-grid-small uk-text-left" uk-grid>
            <div class="uk-width-1-2@s">
           
              <label class="uk-form-label" for="Card CVC">
                Card CVC <font-awesome-icon icon="info-circle" id="tooltip-target-1" style="color:#17a2b7;" /> 
  <b-tooltip target="tooltip-target-1" triggers="hover" class="my-tooltip-class" variant="danger" >
   <img src="/static/img/cvv.jpeg" style="margin:-10px;min-width:250px !important;min-height:200px !important;" />
  </b-tooltip>
              </label>
              <div class="uk-form-controls">
                <div id="card-cvc" class="uk-input" :class="{ 'uk-form-danger': cardCvcError }"></div>
                <span class="help-block" v-if="cardCvcError">
                                    {{cardCvcError}}
                                </span>
              </div>
            </div>
            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="Expiry Month">
                Expiry
              </label>
              <div class="uk-form-controls">
                <div id="card-expiry" class="uk-input" :class="{ 'uk-form-danger': cardExpiryError }"></div>
                <span class="help-block" v-if="cardExpiryError">
                                    {{cardExpiryError}}
                                </span>
              </div>
            </div>
          </div>

          <div class="uk-margin uk-margin-remove-bottom uk-text-right" v-if="message===''">
            <button class="uk-button uk-button-small uk-button-default" style="color:white;background-color:grey;" @click.prevent="reset()">
              reset
            </button>

            <button class="uk-button uk-button-small uk-button-primary"    @click.prevent="submitFormToCreateToken()">
             Pay ({{total_amount}} {{service.currency_code}})
            </button>
            
          </div>
           <div class="uk-margin uk-margin-remove-bottom uk-text-right" v-else >
            <button class="uk-button uk-button-small uk-button-default" @click.prevent="reset()">
              reset
            </button>

            <button class="uk-button uk-button-small uk-button-primary"  disabled  @click.prevent="submitFormToCreateToken()">
             Pay ({{total_amount}} {{service.currency_code}})
            </button>
            
          </div>

        </form>
      </div>

</div>

</div>



    <!--/div-->
    </b-container> </b-container>
  </div></div>
</template>

 <script src="https://js.stripe.com/v3/"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js"></script>
<script>
import { mapState, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
export default {
  name: "Payments",
  data() {
    return {
    cardName:'',
    cardEmail:'',
    message:'',
    home_link:false,
	card: {
      cvc: '',
      number: '',
      expiry: ''
    },

    //elements
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    stripe: null,

    // errors
    stripeError: '',
    cardCvcError: '',
    cardExpiryError: '',
    cardNumberError: '',
    cardNameError:'',
      cardEmailError:'',

    loading: false,
service_charge:'',
total_charge:'',
tax:'',
total_amount:'',
token:'',
payment:'',
card_message:'',
    };
  },
   props: ["slots", "date", "is_medical_history", "service", "consultation_type", "home_visit_address","branch_name","branch_id","profile_pic","type","attachment","display","remarks","user_name","user_email","user_contact","tax_per"],
  mounted()
  {
   this.setUpStripe();
  
                window.scrollTo(0,0);
           
           },
   created() {

   

   var self=this;
    axios
        .get("user/user-data")
        .then(function(response) {
        
            self.cardName=response.data.userProfile.data.first_name + ' ' + response.data.userProfile.data.last_name;
            self.cardEmail=response.data.userProfile.data.email;
        })
        .catch(function(error) {
          console.log(error);
          
        });


    if(self.service.id && self.slots.slot)
    { 
   // self.service_charge=self.service.price * (self.tax_per/100);
   
  // self.total_charge=parseFloat(self.service.price) + parseFloat(self.service_charge);
    
    
   self.tax=parseFloat(self.service.price * (self.tax_per/100)).toFixed(2);
   self.total_amount=parseFloat(self.service.price) + parseFloat(self.tax);
    
    }
else
{
 self.$router.push({ name: "Service", params: {id:self.branch_id,name:self.branch_name.replace(/\s/g, '-')} });
   
}
  },
  methods:{
   cardNameErrorFunction()
  {  
    if(this.cardName!='')
    this.cardNameError='';
  },
  cardEmailErrorFunction()
  {  
    if(this.cardEmail!='')
    this.cardEmailError='';
  },
setUpStripe() {
        if (window.Stripe === undefined) {
          alert('Stripe V3 library not loaded!');
        } else {
          const stripe = window.Stripe('pk_live_51I8lXvBDaVkzhjMPBshFeooPam97DTkxu18JNgHvnlQOJMTSqiHtZoZM0a3zG1Sh1m8ky64o4yQhwiQNuMvDyFRd000gSjJKk1');
          this.stripe = stripe;

          const elements = stripe.elements();
          this.cardCvc = elements.create('cardCvc');
          this.cardExpiry = elements.create('cardExpiry');
          this.cardNumber = elements.create('cardNumber');

          this.cardCvc.mount('#card-cvc');
          this.cardExpiry.mount('#card-expiry');
          this.cardNumber.mount('#card-number');

          this.listenForErrors();
        }
      },

      listenForErrors() {
        const vm = this;

        this.cardNumber.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardNumberError = ''
          vm.card.number = event.complete ? true : false
        });
        
        this.cardExpiry.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardExpiryError = ''
          vm.card.expiry = event.complete ? true : false
        });
        
        this.cardCvc.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardCvcError = ''
          vm.card.cvc = event.complete ? true : false
        });
      },

      toggleError (event) {
        if (event.error) {
          this.stripeError = event.error.message;
        } else {
          this.stripeError = '';
        }
      },

      submitFormToCreateToken() {
        this.clearCardErrors();
        let valid = true;
if (this.cardName=='') {
          valid = false;
          this.cardNameError = "Card name is Required";
        }
        if (this.cardEmail=='') {
          valid = false;
          this.cardEmailError = "Email is Required";
        }
        if (!this.card.number) {
          valid = false;
          this.cardNumberError = "Card Number is Required";
        }
        if (!this.card.cvc) {
          valid = false;
          this.cardCvcError = "CVC is Required";
        }
        if (!this.card.expiry) {
          valid = false;
          this.cardExpiryError = "Month is Required";
        }
        if (this.stripeError) {
          valid = false;
        }
        if (valid) {
        this.createToken()
        this.createPaymentMethod()
              
        }
      },

createPaymentMethod()
{

 var self=this;
         self.stripe.createPaymentMethod({
  type: 'card',
 'card' :this.cardNumber,
}).then(function(result) {
  if (result.error) {
    // Display result.error.message in UI
  } else {
  console.log(result.paymentMethod.id);
 self.payment=result.paymentMethod.id;

 if(self.payment)
 {
   
 if(self.user_name && self.user_email)
            self.bookAppointmentWithoutLogin(self.token,self.payment);
            else
             self.bookAppointment(self.token,self.payment);
  }
 }
})

},
      createToken(payment) {
      var self=this;
        self.stripe.createToken(self.cardNumber).then((result) => {
            if (result.error) {
              self.stripeError = result.error.message;
            } else {
              self.token = result.token.id;



            
            }
          })



             

      },

      clearElementsInputs() {
        this.cardCvc.clear()
        this.cardExpiry.clear()
        this.cardNumber.clear()
      },

      clearCardErrors() {
        this.stripeError = ''
        this.cardCvcError = ''
        this.cardExpiryError = ''
        this.cardNumberError = ''
      },
      
      reset() {
        this.clearElementsInputs()
        this.clearCardErrors()
      },

      bookAppointment(token,payment)
      {
       var self=this;


      axios
           .post("user/bookappointment-revised", {
           token:token,
           payment:payment,
            slots: self.slots,
            date: self.date,
             is_medical_history: self.is_medical_history,
           service: self.service,
             remarks: self.remarks,
            consultation_type: self.consultation_type,
              home_visit_address:self.home_visit_address,
           
             type: 'web',
            tax_percentage:self.tax_per,
             tax:self.tax,
            total_amount:self.total_amount
          })
            .then(function(response) {
            
              if (
                response.data.error === "You have already booked this slot."
              ) {
            
               self.message = response.data.error;
                 

                self.reset();
               
            
              } else {
                self.reset();
                self.home_link=true;

              self.card_message=response.data.message;
         self.sendAppointmentMail(response.data.id);
       
        if(self.attachment.length!=='0')
         {
          self.saveAppointmentDocs(response.data.id);
          }
        
               self.message ="Your Appointment has been booked.";
               self.attachment=[];
               self.display=[];
                //self.showModal2();
             }
             
           })
            .catch(function() {
             self.modal_message = "Something went wrong";
           });
      },
      sendAppointmentMail(id)
  {
  var self=this;
  axios
            .post("user/sendbookappointmentmail", {id:id })
            .then(function(response) {
             
            })
            .catch(function() {
              
            });
  
  },
  saveAppointmentDocs(id)
{
  var self=this;
  if(self.attachment.length!=='0')
  {
   axios
           .post("user/saveUserAppointmentDocs", {
            
             id:id,
              attachment:self.attachment,
              display:self.display,
            })
            .then(function(response) {
            
             
            })
            .catch(function() {
             
            });
  }
},
bookAppointmentWithoutLogin(token,payment)
{
var self=this;
          axios
            .post("user/bookappointment/withoutlogin-revised", {

            token:token,
             payment:payment,
            slots: self.slots,
            date: self.date,
             is_medical_history: self.is_medical_history,
           service: self.service,
             remarks: self.remarks,
            consultation_type: self.consultation_type,
              home_visit_address:self.home_visit_address,
              home_visit_address_id:'',
        type: 'web',
        user_name:self.user_name,
        user_email:self.user_email,
        user_contact:self.user_contact,
         tax_percentage:self.tax_per,
             tax:self.tax,
            total_amount:self.total_amount
           })
            .then(function(response) {
             
              if(response.data.usererror)
              {
              alert(response.data.usererror);
              }
              else if (response.data.error) {
                self.message = response.data.error;
              
             //  self.showModal2();
             } else {
             self.card_message=response.data.message;
             if(self.attachment.length!==0)
         {
          self.saveAppointmentDocs(response.data.id);
          }
         self.sendAppointmentMailWithoutLogin(response.data.id);
         self.sendUserRegistrationMail(response.data.id);
                alert('Your Appointment has been booked. Kindly login for more details.');
              self.$router.push({ name: "Login" });
             }
            
           })
          .catch(function() {
            self.modal_message = "Something went wrong";
           });
},
  sendAppointmentMailWithoutLogin(id)
  {
  var self=this;
  axios
            .post("user/sendbookappointmentmailwithoutlogin", {id:id })
            .then(function(response) {
             
            })
            .catch(function() {
              
            });
  
  },
  sendUserRegistrationMail(id)
  {
  var self=this;
  axios
            .post("user/senduserregistrationmail", {id:id })
            .then(function(response) {
             
            })
            .catch(function() {
              
            });
  
  },
}
 
};
</script>
<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css';

</style>
<style scoped>
.bv-example-row {
  
  /* background-image: url("../assets/background/Home-page-1.jpg") ; */
  /* background-size: 100% ; */
   background-repeat: no-repeat;
   background-size: 100% 100%;
  height: auto;
  


}

[v-cloak] {
  display: none;
}

.help-block {
  color: red;
  font-size: 13px;
}

form {
  /* border-width: 2px; */
 /*  border-style: solid; */
 /*  border-color: yellow; */
}

label.uk-form-label {
  color: #17a2b7;
}

button.uk-button-primary {
  color: yellow; 
  font-weight: bold;
  background-color: #1e87f0
}

#card-number,
#card-cvc,
#card-expiry {
  padding-top: 10px;
}

.stripeError {
  color: red;
  font-style: italic;
}

audio, canvas, img, video {
    /* max-width: 100%; */
    /* height: auto; */
    box-sizing: border-box;
}
form[data-v-3a0cf106] {
  /*  border-width: 2px; */
  /*  border-style: solid; */
 /*   border-color: #17a2b7; */
}
label.uk-form-label[data-v-3a0cf106] {
    color: #17a2b7;
}
.uk-box-shadow-large {
   /* box-shadow: 0 14px 25px rgba(0,0,0,.16); */
}
.uk-box-shadow-large {
    /* box-shadow: 0 14px 25px rgba(0,0,0,.16); */
}
.uk-background-muted {
    /* background-color: #f8f8f8; */
}
.help-block[data-v-c9d456fa] {
    color: #17a2b7;
    font-size: 13px;
}
.uk-form-danger, .uk-form-danger:focus {
    color: #17a2b7;
    border-color: #17a2b7;
}
</style>
