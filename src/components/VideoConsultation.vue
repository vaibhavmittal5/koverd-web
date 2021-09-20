<template>
  <b-container fluid class="backg">
    <br />
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color='clr'></loading>
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
          <h3>{{ $t('search-doctors.title1')}}</h3>
          <hr />
          <h5>{{ $t('video.video_consultation')}}</h5>
          <!--b-row  v-if="showlocation==''" class="text-center" align="center">    
<b-col lg="12" sm="12" md="12">
<button @click="detectLocation"><img src="../assets/detect.png" height="20px" /></button>
</b-col>
</b-row-->
          <!--b-row class="text-center">
              <b-col v-if="locations!=''">
                <b-form-group :label="$t('search-home.location')">
                 
                 <model-select :options="locations" style="border:#47aed8 solid 1px;width:100%;min-width:112px;overflow:visible;display:table;height:100%;border-radius:0px;"
                       v-model="location"
                       placeholder="Search location" class="mb-3 select">
        </model-select>
                </b-form-group>
              </b-col>
              <b-col class="space" cols="11" v-else>
                <b-form-group :label="$t('search-home.location')">
                  <b-row>
                    <b-col>
                      <b-form-input
                        v-model="location"
                        :placeholder="$t('search-home.city')"
                        class="mb-3 select"
                      ></b-form-input>
                    </b-col>
                    <b-col>
                      <b-form-input
                        v-model="locationcountry"
                        :placeholder="$t('search-home.country')"
                        class="mb-3 select"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col-->

<b-row class="text-center" tyle="align:center;margin:0px;">
<b-col></b-col>
<b-col lg="6" sm="12" md="6" style="display:inline-flex;border:#47aed8 solid 1px;height: 43px !important;margin-top:1px;">
<div style="margin-top:3px;height: 39px !important;border-radius:0px;" ><img src="../assets/location.png" height="30px" /></div><div style="width:100%;border-left:none important;">
<b-form-group class="text-center">
<div v-if="address!=''"><vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            :placeholder="showlocation"
            v-on:placechanged="getAddressData"
            v-model="address"

            types=""
            style="border:none !important;width:auto;min-width:112px;overflow:visible;height: 39px !important">
        </vue-google-autocomplete></div>
       
     <div v-else>   <vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            :placeholder="showlocation"
            v-on:placechanged="getAddressData"
            v-model="address"

            types=""
            style="border:none !important;width:103%;min-width:112px;overflow:visible;height: 39px !important">
        </vue-google-autocomplete></div>
         <strong v-if="locationerror!=''" style="font-size:15px;color:red;font-weight:400;margin:5px;" >***{{locationerror}}</strong>
        </b-form-group>
        </div>
        </b-col>
            <b-col style="text-align:left;">
         
              <b-button class="select kov-lg" type="submit" style="height: 43px !important;margin-top:1px;">
                <img src="../assets/search.png" height="16px" />
              </b-button>
           
            </b-col>
          </b-row>
        </b-container>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import Vue from "vue";
import { ModelSelect } from "vue-search-select";
import VueGoogleAutocomplete from 'vue-google-autocomplete';
export default {
  name: "MainPage",
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
    clr:'#17a2b7',
    locationerror:'',
      place:'../assets/detect.png',
  showlocation:'',
  address: '',
      selecthide: false,
      msg: "Welcome to Your Vue.js App",
      verify_redirect: this.$route.query.verified,
      locations: [],
      categories: [],
      specialities: [],
      specialitiesFiltered: [],
      languages: [
        { text: "English", value: "english" },
        { text: "Portuguese", value: "portuguese" }
      ],
      insurances: [],
      cityName: "",
      countryName: "",

      location: null,
      locationcountry: null,
      form: {
        city: null,
        country: null,
        categoryId: null,
        specialityId: null,
        language: null,
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
    console.log(
    this.verify_redirect = false);
    next();
  },
  props: ["categoryId"],
  components: { Loading, Vue, ModelSelect, VueGoogleAutocomplete },
  created() {
    const self = this;
    if (self.categoryId) {
      self.form.categoryId = self.categoryId;
      self.updateSpeciality();
    }
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
                }
                if (self.cityName && self.countryName) break;
              }
              self.showlocation=self.cityName + "," +self.countryName;
              //self.location=self.cityName;
              //self.locationcountry=self.countryName;
              array = response.data.cities;
              console.log(array);
              let counter = 0;
              for (let y in array) {
                //  if (array[y].country === self.countryName) {
                let tmp = {
                  value: counter,
                  text: array[y].city + ", " + array[y].country,
                  city: array[y].city,
                  country: array[y].country
                };

                self.locations.push(tmp);
                if (
                  array[y].city === self.cityName &&
                  self.cityName &&
                  self.countryName
                ) {
                  self.location = self.locations[counter].value;
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
    onSubmit(evt) {
      evt.preventDefault();
      var self=this;
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

         this.$router.push({ name: "SearchVideoConsultation", query: this.form });

      } else if(self.cityName && self.countryName && self.latitude)
      {
      self.form.city = self.cityName;
      self.form.country = self.countryName;
      self.form.latitude=self.latitude;
       self.form.longitude=self.longitude;
         self.locationerror='';
          self.$router.push({ name: "SearchVideoConsultation", query: this.form });

      } else {
        
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
  padding: 0px;
}
.text {
  text-align: center;
}
h1,
h2 {
  font-weight: normal;
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
  padding-left: 8px;
}
@media (max-width: 600px) {
  .kov-search {
    padding-top: 31px;
    text-align: center;
    padding-left: 0px;
  }
  .col {
    padding: 0px;
    border-radius: 0px;
  }
}
@media (max-width: 812px) {
  .backg {
    height: 600px;
  }
  .kov-lg {
    text-align: center;
  }
  .kov-search {
    width: 100%;
    padding-left: 0%;
  }
}
h3 {
  font-size: 21px;
  font-weight: 600;
}
h5 {
  font-size: 16px;
  font-weight: 400;
}
</style>
