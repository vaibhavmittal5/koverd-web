<template id="Location">
  <b-container fluid class="backg">
    <br />
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color='clr' ></loading>
    <b-col cols="12" v-if="!isLoading">
      <b-row>
        <b-col cols="8" offset="2" class="mb-5" v-if="verify_redirect">
          <b-alert
            variant="success"
            dismissible
            :show="verify_redirect"
            @dismissed="verify_redirect=false"
          >Your account has been activated.</b-alert>
        </b-col>
      </b-row>
      <b-form @submit="onSubmit">
        <b-container>
          <h3>{{ $t('search-location.title1')}}</h3>
          <hr />
          <h5>{{ $t('search-location.title2')}}</h5>
          <b-row class="kov_margin">
            <b-col>
              <b-form-group :label="$t('search-location.category')">
                <b-form-select
                  v-model="form.categoryId"
                  v-on:change="updateSpeciality"
                  class="mb-3 select"
                  required
				   style="height: 42px !important;"
                >
                  <option value="null">ALL</option>
                  <option
                    v-for="category in categories"
                    v-bind:value="category.id"
                    v-bind:key="category.id"
                  >{{ $t('kovhome.category' +"."+category.id) }}</option>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <!--b-form-group :label="$t('search-location.speciality')">
                <b-form-select v-model="form.specialityId" class="mb-3 select"  style="height: 42px !important;">
                  <option
                    v-for="speciality in specialities"
                    v-bind:value="speciality.id"
                    v-bind:key="speciality.id"
                  >{{ $t('specialities' +"."+speciality.id) }}</option>
                </b-form-select>
              </b-form-group-->

<b-form-group :label="$t('search-location.speciality')">
                <b-form-select
                  v-model="form.specialityId"
                 style="height: 42px !important;"
                  class="mb-3 select"
                  required
                >
                  <option value="null">ALL</option>
                  <option
                    v-for="speciality in specialities"
                    v-bind:value="speciality.id"
                    v-bind:key="speciality.id"
                  >{{ $t('specialities' +"."+speciality.id) }}</option>
                </b-form-select>
              </b-form-group>
            </b-col>
           
           <b-col>
<b-form-group :label="$t('search-home.location')">
<div v-if="address!=''"><vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            :placeholder="showlocation"
            v-on:placechanged="getAddressData"
            v-model="address"

            types=""
             class="mb-3 select"
            style="height: 42px !important;">
        </vue-google-autocomplete></div>
       
     <div v-else>   <vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            :placeholder="showlocation"
            v-on:placechanged="getAddressData"
            v-model="address"

            types=""
             class="mb-3 select"
            style="height: 42px !important;">
        </vue-google-autocomplete></div>
        <strong v-if="locationerror!=''" style="font-size:15px;color:red;font-weight:400;margin:5px;" >***{{locationerror}}</strong>
        </b-form-group>
        </div>
  </b-col>
  <!--b-col v-if="showlocation==''"><button @click="detectLocation"><img src="../assets/detect.png" height="20px" /></button></b-col-->
            <b-col>
              <b-form-group :label="$t('search-location.language')">
              
        <!--multiselect style="border: 1px solid rgb(71, 174, 216);max-height: 34px !important;font-size:14px;"  class="mb-3 select" v-model="languagepre" :options="languages"    :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Select Language(s)" label="name" track-by="id" :preselect-first="false">
    <template class="mb-3 select" slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length=='0'" >All</span><span class="multiselect__single"  v-else="languages.length &amp;&amp; !isOpen"><strong v-for="lng in values" >{{ lng.code }} / </strong>selected</span></template>
  </multiselect-->
   <div class="dropdown" @click="showDropdown">
     <div class="overSelect"></div>
      <div style="border: 1px solid rgb(71, 174, 216);min-height: 42px;
    min-width: 274px;font-size:14px;background-color:white;"   class="c-form-input">
<div style="margin-top: 8px;" >
<strong v-if="languagepre.length==0" style="font-size:16px;color:gray;font-weight:500;margin-bottom:20% !important;"  align="right" >All</strong>
     <strong v-else v-for="option in languagepre" style="font-size:15px;color:gray;font-weight:500;" align="right">  {{option.name}} </strong></div>
      </div><div align="right" style="margin-top: -30px;
    margin-right: 3px" ><font-awesome-icon icon="chevron-circle-down" style="align:right;" align="right" /></div>
    </div>
 <div style="position: relative;" >
      <ul style="border: 1px solid rgb(71, 174, 216);
   
    min-width: 272px !important;
    font-size: 14px;
    background-color: white;
    display: inline-grid;
    margin-top: 6px!important;
   
    text-align: left;"   v-if="show">

        <li  v-for="(option, index) in languages" :key="index" >
          <input type="checkbox" :id="index" :value="option" v-model="languagepre">
           <label :for="index">{{ option.name }}</label>
        </li>
      </ul>
   
</div>
              </b-form-group>
            </b-col>

            <!--b-form-group label="Insurance" v-if="1">
          <b-form-select multiple v-model="form.insuranceId" :options="insurances" class="mb-3 select"  style="height: 42px !important;">
          </b-form-select>
            </b-form-group-->
            <div class="kov-search">
              <b-button class="select kov-lg" type="submit"  style="height: 41px !important;">
                <img src="../assets/search.png" height="16px" />
              </b-button>
            </div>
          </b-row>
        </b-container>
      </b-form>
    </b-col>
  </b-container>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import i18n from "../i18n";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import Vue from "vue";
import { ModelSelect } from 'vue-search-select';
import Multiselect from 'vue-multiselect';
import VueGoogleAutocomplete from 'vue-google-autocomplete';
 Vue.component('multiselect', Multiselect);
export default {
  name: "MainPage",
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
    show:false,
    clr:'#17a2b7',
    locationerror:'',
    place:'../assets/detect.png',
  showlocation:'',
  address:'',
      selecthide: false,
      msg: "Welcome to Your Vue.js App",
      verify_redirect: this.$route.query.verified,
      locations: [],
      categories: [],
      specialities: [],
      specialitiesFiltered: [],
      languages:[],
	  languagepre:[],
      insurances: [],
      cityName: "",
      countryName: "",
      location: null,
      form: {
        city: null,
        country: null,
        categoryId: null,
        specialityId: null,
        language:[],
        insuranceId: null,
        start: 0,
        inc: 20,
        latitude:null,
        longitude:null,
      },
      isLoading: false
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.verify_redirect = false;
    next();
  },
  props: ["locationid"],
  components: { Loading, Vue, ModelSelect, Multiselect, VueGoogleAutocomplete },

  created() {
    const self = this;
    this.getLocationid();
   self.getLanguages();
    this.isLoading = true;
    this.userInsurances = null;
    axios
      .get("/care-package")
      .then(function(response) {
        self.categories = response.data.categories.data;
        let array = response.data.insurances.data;
        for (var x in array) {
          let text = "";
          if (array[x].plan)
            text = array[x].company_name + " - " + array[x].plan;
          else text = array[x].company_name;
          let tmp = {
            value: array[x].insurance_id,
            text: text,
            insuranceId: array[x].insurance_id,
            insuranceCompanyName: array[x].company_name,
            insurancePlan: array[x].plan
          };
          self.insurances.push(tmp);
        }

       navigator.geolocation.getCurrentPosition(function(position) {
        self.latitude=position.coords.latitude;
          self.longitude=position.coords.longitude;
          let lat = position.coords.latitude;
          let long = position.coords.longitude;

          let url =
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyCdb5ZMCxtBbxOQfQmIVB9JrPAmDbTLVrA";
          let axiosTmp = axios.create({
            transformRequest: [
              (data, headers) => {
                delete headers.common.Authorization;
                return data;
              }
            ]
          });

          axiosTmp
            .get(url)
            .then(function(response2) {
              let locationComponents =
                response2.data.results[0].address_components;

              for (let comp of locationComponents) {
                for (let type of comp.types) {
  // Before this is afunction-->  if (!self.cityName && type === "administrative_area_level_2")
                  if (
                    !self.cityName && type === "administrative_area_level_2"
                  ) {
                    self.cityName = comp.long_name;
                    console.log(comp.long_name);
                    break;
                  }
                  if (!self.countryName && type === "country") {
                    self.countryName = comp.long_name;
                    console.log(comp.long_name);
                    break;
                  }
                }
                if (self.cityName && self.countryName) break;
              }
               self.showlocation=self.cityName + "," +self.countryName;
            // self.location=self.cityName;
                // self.locationcountry=self.countryName;
              array = response.data.cities;
              console.log(array);
              let counter = 0;
              for (let y in array) {
               // if (array[y].country === self.countryName) {
                  let tmp = {
                    value: counter,
                    text: array[y].city + ", " + array[y].country,
                    city: array[y].city,
                    country: array[y].country
                  };

                  self.locations.push(tmp);
if (array[y].city === self.cityName && self.cityName && self.countryName)
                   {
                       
                             self.location=self.locations[counter].value;
                
                   }  
                  counter += 1;
               // }
              }
             
            })
            .catch(function(error) {
              console.log(error);
            });
        });
         self.isLoading = false;
      })
      .catch(function(error) {
        console.log(error);
        self.isLoading = false;
      });

    self.specialities = [];

    self.specialitiesFiltered = self.specialities;
  },
  methods: {
  getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
                
                console.log(addressData);
            },
    getLocationid() {
      const self = this;
      if (self.locationid) {
        self.locations = [];

        self.cityName = self.locationid;
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
      var self=this;

      self.languagepre.forEach(ele => {
          
         
          self.form.language.push(ele.id)
          
        });
    

    if (self.address &&  self.address.locality) {
    self.form.city = self.address.locality;
        self.form.country = self.address.country;
        self.form.latitude=self.address.latitude;
        self.form.longitude=self.address.longitude;
 self.locationerror='';
    
       
      if(self.form.latitude=='' && self.form.longitude=='')
      {
           alert('System does not detect your location. Kindly click on Detect icon.');
      }

         self.$router.push({ name: "Search", query: this.form });

      } else if(self.cityName && self.countryName && self.latitude)
      {
        self.form.city = self.cityName;
        self.form.country = self.countryName;
        self.form.latitude=self.latitude;
        self.form.longitude=self.longitude;
       self.locationerror='';
        self.$router.push({ name: "Search", query: this.form });
      }
      else {

       self.locationerror='Kindly select the location';
 
      }
    
    },
    updateSpeciality() {
      var self = this;
     setTimeout(function() {
        console.log("sss", self.form.categoryId);
        if (self.form.categoryId != null) {
        axios
          .get("specialities/" + self.form.categoryId)
          .then(function(response) {
            self.specialities = response.data.specialities.data;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      }, 600);
console.log("sss", this.form.categoryId);
    },
	 getLanguages() {
      var self = this;
      axios
        .get("languages")
        .then(function(response) {
          self.languages = response.data.languages.data;
		 
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    detectLocation()
   {
   var self=this;
   navigator.geolocation.getCurrentPosition(function(position) {

          self.latitude=position.coords.latitude;
          self.longitude=position.coords.longitude;

          let lat = position.coords.latitude;
          let long = position.coords.longitude;

          let url =
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyCdb5ZMCxtBbxOQfQmIVB9JrPAmDbTLVrA";
          let axiosTmp = axios.create({
            transformRequest: [
              (data, headers) => {
                delete headers.common.Authorization;
                return data;
              }
            ]
          });

          axiosTmp
            .get(url)
            .then(function(responsel) {
              let locationComponents =
                responsel.data.results[0].address_components;
              console.log(locationComponents);
              for (let comp of locationComponents) {
                for (let type of comp.types) {
                  // Before this is a function-->  if (!self.cityName && type === "administrative_area_level_2")
                  if (
                    !self.cityName &&
                    type === "administrative_area_level_2"
                  ) {
                    self.cityName = comp.long_name;
                    console.log(comp.long_name);
                    break;
                  }
                  if (!self.countryName && type === "country") {
                    self.countryName = comp.long_name;
                    console.log(comp.long_name);
                    break;
                  }
                  if (!self.localarea && type === "political") {
                    self.localarea = comp.long_name;
                    console.log(comp.long_name);
                    break;
                  }
                }
                if (self.cityName && self.countryName && self.localarea) break;
               
                
              }
              self.showlocation=self.cityName + "," +self.countryName;
              
            });
            });

            },
            showDropdown() {
      this.show = !this.show
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h3 {
  font-size: 21px;
font-weight: 600;
}
h5 {
  font-size: 16px;
font-weight: 400;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.backg {
  background-image: url("../assets/background/Home-page-1.jpg");
  background-size: 100% 100%;
  height: 500px;
}
.col {
  padding: 0px;
  border-radius: 0px;
}
.select {
  border-radius: 0px;
  border: #47aed8 solid 1px;
}
.kov-lg {
  height: 38px;
  color: #47aed8;
  background-color: #47aed8;
}
.kov-search {
  padding-top: 31px;
  text-align: left;
}
@media (max-width: 600px) {
  /* .select {
    width: 150px;
  } */
  .kov-search {
    padding-top: 36px;
    text-align: center;
    width: 100%;
  }
}
@media (max-width: 812px) {
  .backg {
    height: 600px;
  }
}
@media only screen and (max-width: 1500px) and (min-width: 786px) {
  .kov-margin {
    margin-left: 50px;
    
  }
}
.multiselect__tags {
    min-height: 0px;
    max-height: 35px;
    display: block;
    padding: 8px 40px 0 8px;
    border-radius: 5px;
    /* border: 1px solid #e8e8e8; */
    background: #fff;
    font-size: 14px;
}
.overselect {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.dropdown {
  position: relative;
  cursor: pointer;
}
</style>
