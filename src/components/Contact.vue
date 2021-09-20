<template>
  <div class="bv-example-row">
    <b-container >
      <b-row >
        <b-col class="text-center" cols="col-lg-6 col-sm-12 col-lg-6 col-xs-6" style="margin-top:55px;">
          <div class="contact-item"><font-awesome-icon icon="phone" />
            <p>
               <!--strong>Phone : </strong> +1 (347) 472-2003 <br--> <strong>Phone :+351 - 927600118  </strong></p>
          </div>
        
          <div class="contact-item"><font-awesome-icon icon="map" />
            <p><strong>Address : </strong> Travessa das Mercês 22B, <br>Lisbon 1200-109, Portugal</p>
          </div>
        
          <div class="contact-item"><font-awesome-icon icon="envelope" />
            <p><a  href="mailto:info@kovered.io">info@kovered.io</a> <br><a href="mailto:christopher@kovered.io">christopher@kovered.io</a> </p>
          </div>
        </b-col>
		<b-col class="text-center" cols="col-lg-6 col-sm-12 col-lg-6 col-xs-6" style="margin-top:10px;">
		<div style="border: 1px solid rgb(71, 174, 216);margin-bottom:20px;margin-top:10px;">
          
		   <div  style="color:white;font-size:20px;background-color:rgb(74, 176, 195);"><strong >{{ $t("contactus.contactus") }}</strong></div>
		   <p v-if="successmsg===true" style="background-color:#58f591;color:white;"> Thanks for contact us ! Our team will contact you soon </p>
		    <p v-if="errors.length" style="background-color:#f2aab0;color:white;">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
		  <b-form @submit="checkForm">
		   <b-form-group :label="$t('contactus.name')">
                  
                    <b-form-input
                      v-model="form.name"
                      :placeholder="$t('contactus.name')"
                      class="mb-3 select"
					  style="height: 38px !important;"
                    ></b-form-input>
                </b-form-group>
				<b-form-group :label="$t('contactus.email')">
                  
                    <b-form-input
                      v-model="form.email"
                      :placeholder="$t('contactus.email')"
                      class="mb-3 select"
					  style="height: 38px !important;"
                    ></b-form-input>
                </b-form-group>
				<b-form-group :label="$t('contactus.country')">
				<b-select style="font-size:16px;height:38px;" v-model="form.country" class="form-control" >
                         
                    <option :key="selected1.id" 
                      v-for="selected1 in countries"
                      v-bind:value="selected1.id"
                    >{{ selected1.country_name }}</option>
                  </b-select>If countries list doesn't show then kindly <button type="button"  @click="getCountries()" class="btn btn-link">
                    Click
                    </button> here.
				   </b-form-group>
				   <b-form-group :label="$t('contactus.contact-no')">
                  
                    <b-form-input
                      v-model="form.contact"
                      :placeholder="$t('contactus.contact-no')"
                      class="mb-3 select"
					  style="height: 38px !important;"
                    ></b-form-input>
                </b-form-group>
				 <b-form-group :label="$t('contactus.message')">
                  
                    <b-form-textarea
                      v-model="form.message"
                      :placeholder="$t('contactus.message-text')"
                      class="mb-3 select"
					  rows="3"
      max-rows="6"
					  
                    ></b-form-textarea>
                </b-form-group>
				<b-button variant="outline-primary"  @click="checkForm"  style="height: 35px !important;">
               Submit
              </b-button>
				</b-form></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
	successmsg:false,
	countries:[],
	errors: [],
      isLoading: false,
	 
	  form: {
	  name:null,
	  email:null,
	  country:null,
	  contact:null,
	  message:null
	  }
    };
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
   created() {
    this.getCountries();
  },
  methods:{
  getCountries()
{
var self = this
 axios.get('countries')
       
  .then(function (response) {
  
    self.countries=response.data.countries;
      
  })
  .catch(function (error) {
    console.log(error);
  });
},
checkForm(){

      this.errors = [];

      if (!this.form.name) {
        this.errors.push("Name required.");
      }
      if (!this.form.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Valid email required.');
      }
      if(!this.form.country)
	  {
	  this.errors.push('Country required.');
	  }
	  
	   if(!this.form.message)
	   {
	   this.errors.push('Kindly type your message');
	   
	   }
	    if(!this.form.contact)
	  {
	  this.errors.push('Contact required.');
	  }
	 
	   if(this.form.contact.length<10)
	   {
	   this.errors.push('Valid Contact required.');
	   }
      if (!this.errors.length) {
         var self=this;
	   axios.post("contactus", this.form)
            .then(function(response) {
			
              if(response.data.success)
			  {
			  self.successmsg=true;
			  self.form.name=null;
			  self.form.email=null;
			  self.form.contact=null;
			  self.form.country=null;
			  self.form.message=null;
			 
			  self.sendContactMail(response.data.contactus.id);
			  }
			 
            })
            .catch(function(error) {
              console.log(error);
            });
      }
	  

     
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
	sendContactMail(id)
	{
	axios.post("mail-contactus",{id:id})
            .then(function(response) {
			
			 
            })
            .catch(function(error) {
              console.log(error);
            });
	
	},
  }
 
};
</script>
<style scoped>
.bv-example-row {
  
  background-image: url("../assets/background/Home-page-1.jpg") ;
  /* background-size: 100% ; */
   background-repeat: no-repeat;
   background-size: 100% 100%;
  height: auto;

}
link {
  color: blue;
}
h4 {
  font-weight: 300;
}
.row {
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
 
}
.col {
  /* padding: 20px; */
  padding-top: 50px;
}



</style>
