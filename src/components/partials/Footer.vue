<template>
  <!-- Footer -->

  <footer class="font-small blue footer">
    <!-- Footer Links -->
    <div>
     <b-modal v-model="subscribe" hide-footer hide-header title="Kovered Subscription" style="background:red;">
    <b-container style="background-color:#f5eace;">
    <b-img align="center" src="https://kovered.io/static/img/marker.png" style="width:50px;height:50px;margin-right:20%;margin-left:42%;"></b-img> <br/><br/>
    <div  style="color:#515e6b;text-align:center;" >{{ $t("subscribe.header1") }} <b-img src="https://kovered.io/static/img/muscle.png" style="width:25px;height:25px;"></b-img>  <br/>
 {{ $t("subscribe.header2") }}</div></br>
    <b-row>
    <b-col lg4 sm12 md4>
           <b-form-group id="exampleInputGroup1" >
                          <b-form-input
                            id="exampleInput1"
                            type="name"
                            v-model="subscribedata.name"
                           
                         :placeholder="$t('subscribe.name')"
                          ></b-form-input>
                        </b-form-group><br/>

           <b-form-group id="exampleInputGroup1" >
                          <b-form-input
                            id="exampleInput1"
                            type="email"
                            v-model="subscribedata.email"
                           
                              :placeholder="$t('subscribe.email')"
                          ></b-form-input>
                        </b-form-group><br/>
                        <b-form-group id="exampleInputGroup1" >
                          <b-form-input
                            id="exampleInput1"
                            type="number"
                            v-model="subscribedata.contact"
                           
                              :placeholder="$t('subscribe.contact')"
                          ></b-form-input>
                        </b-form-group><br/>
                        <div align="center" > <button type="button" class="btn btn-success" @click="subscription()">{{ $t("subscribe.subscribe") }}</button> <button type="button" class="btn btn-danger" @click="subscriptionClose()">{{ $t("subscribe.later") }}</button> </div>

            <br/> <br/>           
    </b-col>
    </b-row>
    <b-row>
    <b-col><strong v-if="errorEmail!=''" style="font-size:16px;color:red;margin-top:1px;">{{errorEmail}}</strong> </b-col>
    </b-row>
    </b-container>
    
  </b-modal></div>
    <b-container fluid class="text-center text-md-left">
      <b-row >
      <b-col cols="12" md="6"  class="footer_row_left">
          
         <div style="display:inline-flex;"> <font-awesome-icon
                          icon="envelope"
                          color="white"
                          style="font-size:20px;align:right;"
                        />&nbsp;&nbsp;Get our newsletter &nbsp;&nbsp;
                     <button type="button" style="min-width: 225px;
    border: 1px solid #175761;color:#17a2b7;"  @click="focus">Subscribe here</button>   
           </div>
        </b-col>
        <b-col cols="12" md="6"  class="footer_row">
          <img class="foot_logo" src="../../assets/logo-new.png" />
           <!--router-link class="need_help" :to="`/${$i18n.locale}/contact`">{{$t('footer.contact')}}</router-link-->
           
        </b-col>
         <!--b-col cols="12" md="6" sm="12">
          <div style="background-color:red;text-align:center;min-width:60px;min-height:80px;"><button type="button" >Subscribe here</button></div>
        </b-col-->
      </b-row>
    </b-container>

    <!-- Grid row -->
    <b-container fluid class="wrapper text-center text-md-left footer-main">
      <b-row>
        <!-- Grid column -->
        <b-col md="1" class="mx-auto"></b-col>

        <hr class="clearfix w-100 d-md-none" />

        <b-col md="2" class="mx-auto">
          <!-- Links -->
          <router-link class="list" to="/">
            <h5 class="mt-2 mb-2">Kovered</h5>
          </router-link>

          <ul class="list-unstyled">
            <li class="list-items">
              <router-link class="route" :to="`/${$i18n.locale}/about`">{{$t('footer.about')}}</router-link>
            </li>
            <li class="list-items">
              <router-link class="list route" :to="`/${$i18n.locale}/Howitwork`">{{$t('footer.howitworks')}}</router-link>
            </li>
            <li class="list-items">
              <!-- <router-link class="route" to="/Whatit">What I will get</router-link> -->
              <router-link class="list route" :to="`/${$i18n.locale}/Whatit`">{{$t('footer.What')}}</router-link>
            </li>
            <li class="list-items">
              <a class="route" :href="`https://business.kovered.io/en`">{{$t('footer.listservices')}}</a>
            </li>
            <li class="list-items">
              <router-link class="list" :to="`/${$i18n.locale}/contact`">{{$t('footer.contact')}}</router-link>
            </li>
            <!--li class="list-items">
              <router-link class="list" :to="`/${$i18n.locale}/`">{{$t('footer.Help')}}</router-link>
            </li-->
            <!-- <li class="list-items">
              <router-link class="list" to="/">{{$t('footer.Blog')}}</router-link>
            </li>-->
            <li class="list-items">
              <router-link class="list" :to="`/${$i18n.locale}`">{{$t('footer.Healthtips')}}</router-link>
            </li>
          </ul>
        </b-col>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <b-col md="2" class="mx-auto">
          <!-- Links -->
          <h5 class="mt-2 mb-2" style="color:white;">{{$t('footer.popular-search')}}</h5>

          <ul class="list-unstyled">
            <li class="list-items">
              <!-- <a class="route" href="search-doctors">Doctor</a> -->
              <router-link class="list" :to="`/${$i18n.locale}/search-doctors`">{{$t('footer.Doctor')}}</router-link>
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-facilities?category=Hospital`">{{$t('footer.Hospital')}}</a>
              <!--router-link class="list" :to="`/${$i18n.locale}/search-facilities?category=Hospital`">{{$t('footer.Hospital')}}</router-link-->
            </li>
            <li class="list-items">
             <a class="route" :href="`/${$i18n.locale}/search-facilities?category=Clinic`">Clinic</a>
              <!--router-link class="list" :to="`/${$i18n.locale}/search-facilities?category=Clinic`">{{$t('footer.Clinic')}}</router-link-->
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-facilities?category=Pharmacy`">Pharmacy</a>
              <!--router-link class="list" :to="`/${$i18n.locale}/search-facilities?category=Pharmacy`">{{$t('footer.Pharmacy')}}</router-link-->
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/Speciality?specialityId=21`">{{$t('footer.Gym')}}</a>
               <!--router-link class="list"  :to="`/${$i18n.locale}/Speciality?specialityId=21`">{{$t('footer.Gym')}}</router-link-->
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/Speciality?specialityId=18`">{{$t('footer.Yoga')}}</a>
              <!--router-link class="list"  :to="`/${$i18n.locale}/Speciality?specialityId=18`">{{$t('footer.Yoga')}}</router-link-->
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-facilities?category=Nurshing`">{{$t('footer.Nursing')}}</a>
             <!--router-link class="list" :to="`/${$i18n.locale}/search-facilities?category=Nurshing`">{{$t('footer.Nursing')}}</router-link-->
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/Speciality?specialityId=26`">{{$t('footer.Spa')}}</a>
             <!--router-link  class="list" :to="`/${$i18n.locale}/Speciality?specialityId=26`">{{$t('footer.Spa')}}</router-link-->
            </li>
          </ul>
        </b-col>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->

        <b-col md="2" class="mx-auto">
          <!-- Links -->
          <h5 class=" mt-2 mb-2" style="color:white;">{{$t('footer.search-by')}}</h5>

          <ul class="list-unstyled">
            <li class="list-items">
              <!--a class="route" :href="`/${$i18n.locale}/Speciality`">{{$t('footer.Speciality')}}</a-->
              <router-link class="list" :to="`/${$i18n.locale}/Speciality`">{{$t('footer.Speciality')}}</router-link>
            </li>
            <!-- <li class="list-items">
            <a href="">  Language</a>
            </li>-->
            <li class="list-items">
              <!--a class="route" :href="`/${$i18n.locale}/search-location`">{{$t('footer.Location')}}</a-->
              <router-link class="list" :to="`/${$i18n.locale}/search-location`">{{$t('footer.Location')}}</router-link> 
            </li>
            <!-- <li class="list-items">
            <a href=""> Insurance </a>
            </li>-->
            <li class="list-items">
              <!--a class="route" :href="`/${$i18n.locale}/search-ratings`">{{$t('footer.Reviews')}}</a-->
             <router-link class="list" :to="`/${$i18n.locale}/search-ratings`">{{$t('footer.Reviews')}}</router-link>
            </li>
          </ul>
        </b-col>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <b-col md="2" class="mx-auto">
          <!-- Links -->
          <h5 class=" mt-2 mb-2" style="color:white;">{{$t('footer.cities')}}</h5>

          <ul class="list-unstyled">
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-location?locationid=Lisbon`">{{$t('footer.Lisbon')}}</a>
              <!-- <router-link to="/search-location?locationid=Lisbon">Lisbon</router-link> -->
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-location?locationid=Porto`">{{$t('footer.Porto')}}</a>
              <!-- <router-link to="/search-location?locationid=Porto">Porto</router-link> -->
            </li>

            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-location?locationid=Braga`">{{$t('footer.Braga')}}</a>
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-location?locationid=Sintra`">{{$t('footer.Sintra')}}</a>
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-location?locationid=Faro`">{{$t('footer.Faro')}}</a>
            </li>
            <li class="list-items">
              <a class="route" :href="`/${$i18n.locale}/search-location?locationid=Cascais`">{{$t('footer.Cascais')}}</a>
            </li>
          </ul>
        </b-col>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <b-col md="2" class="mx-auto">
          <!-- Links -->
          <br />
          <br />
          <br />
          <a
          class="route"
            href="https://apps.apple.com/pt/app/kovered-healthcare-finder/id1364469022"
            target="_blank"
          >
            <b-img :src="require('../../assets/appstore.png')" class="size" />
          </a>

          <br />
          <br />
          <a class="route"
            href="https://play.google.com/store/apps/details?id=kovered.kovered.io&hl=en"
            target="_blank"
          >
            <b-img :src="require('../../assets/googleplay.png')" class="size" />
          </a>
		  <br />
          <br />
		  <div style="display:inline-flex;">					
							
								<a href="https://www.instagram.com/kovered.io/?hl=en" target="_blank" > <img src="../../assets/instagram.png" height="20px" /></a>	
								&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/IoKovered" target="_blank"><img src="../../assets/twitter.png" height="20px" /></a>
								
                                &nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/kovered.io/" target="_blank"> <img src="../../assets/facebook.png" height="20px" /></a>
				           						
						</div> 
		  
<!-- 
          <br />
          <br />
          <br /> -->
          
        </b-col>
        <hr class="clearfix w-100 d-md-none" />

        <div class="col-md-1 mx-auto"></div>
        <!-- Grid column -->
      </b-row>
      <!-- </b-container> -->
      <!-- Grid row -->
      <!-- <b-container fluid class="pb-4"> -->
	 

	  <b-row class="pb-1">
        <b-col md="1"></b-col>
        <b-col md="2" class="copyright" style="color:white; font-weight:400;">© {{date}} Kovered, Inc.</b-col>
      </b-row>
	 
    </b-container>
    <!-- Footer Links -->
  </footer>
  <!-- Footer -->
</template>

<script>
import "../../assets/fonts/fonts.css";

import axios from "axios";
export default {
  name: "Footer",
  data() {
    return {
    subscribe:false,
     errorEmail:'',
     reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    subscribedata: {
        email:'',
        name:'',
        contact:'',
      },
      defaultsubscribedata: {
        email:'',
        name:'',
        contact:'',
      },
      date: new Date().getFullYear()
    };
  },
  methods:
  {
   focus: function() {
   
    this.subscribe=true;
  },
  subscription()
  {
if(this.subscribedata.name == null || this.subscribedata.name == '')
{
  this.errorEmail = "***Please Enter Your Name";
}
else if(this.subscribedata.email == null || this.subscribedata.email == '')
{
  this.errorEmail = "***Please Enter Email";
}
else if(!this.reg.test(this.subscribedata.email))
{
  this.errorEmail = "***Please Enter Correct Email";
}
else if(this.subscribedata.contact==null || this.subscribedata.contact=='' || this.subscribedata.contact.length>13 || this.subscribedata.contact.length<10)
{
  this.errorEmail = "***Please Enter Correct Contact No.";
}
else
{
var self=this;
self.subscribedata.email=self.subscribedata.email.trim();
  axios
          .post("getSubscription", self.subscribedata)
          .then(function(response) {
            if(response.data.success)
            {
           alert('Thank you! You\'ll be hearing from us really soon.');
           self.sendSubscriptionMail(response.data.success);
           }
           else
           {
             alert('You are already subscribed to kovered News letters.');
           }
           self.subscribe=false;
            self.subscribedata = self.defaultsubscribedata;
            
          })
          .catch(function(error) {
            console.log(error);
          });
}

  },
  sendSubscriptionMail(id)
  {
    axios
          .post("getSubscriptionMail", {id:id})
          .then(function(response) {
           
          })
          .catch(function(error) {
            console.log(error);
          });
  },
  unSubscribe()
  {
  var self=this;
  axios
          .post("Unsubscribed", {token:self.token,id:self.id})
          .then(function(response) {
             alert('You are now unsubscribed the kovered.');
             self.$router.push('/en');

          })
          .catch(function(error) {
            console.log(error);
          });
  },
  subscriptionClose()
  {
 this.subscribe=false;
  },
  }
};
</script>

<style>
.subscribe {
   background-color: red !important;
}
.wrapper {
  font-family: "Akkurat" !important;
}

.footer-main {
  background-color: #282828;
}
.list {
  color: white !important; 
  font-size: 13px;
}
.route:link {
  color: white ; 
  font-size: 13px;
}
.route:visited {
  color:  white ; 
}

li a:hover {
  color: rgb(51, 120, 224) ; 
}

/* a:active {
  color: rgb(51, 120, 224) ;; 
} */

.list-items {
  font-weight: 100;
  color: white;
  padding-bottom: 5px;
}

.copyright {
  font-weight: 100;
  font-size: 14px;
}
.footer {
  background-color: #333333;
  color: white;
}

.size {
  height: 30px;
  width: 100px;
}

.icon {
  height: 20px;
  width: 20px;
}
.foot_logo {
  height: 80px;
  width:90px;
}

.footer_row {
  text-align: right;
  background-color: #17a2b7 !important;;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right:18%;
  font-family: 'Akkurat' !important;
}
.footer_row_left {
  text-align: left;
  background-color: #17a2b7 !important;;
  padding-top: 40px;
  padding-bottom: 10px;
  padding-left:18%;
  font-family: 'Akkurat' !important;
}


.need_help {
  font-family: "Akkurat" !important;
 // padding-left: 9px;
  font-size: 13px;
  font-weight: 400;
  color: white;
  text-decoration: none;
}
.need_help:hover {
  font-family: "Akkurat" !important;
 // padding-left: 9px;
  font-size: 13px;
  font-weight: 400;
  color: yellow;
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  .footer_row {
    padding-left: 70px;
  }

  .need_help {
    padding-left: 15px;
  }
}
</style>
