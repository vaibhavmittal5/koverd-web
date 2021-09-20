/* eslint-disable */
<template>
<b-container fluid class="backg" style="background-color:#edf9fc;">
<br />
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="false"
    ></loading>
    <b-col cols="12" v-if="!isLoading">

        <b-container style="margin-top:5px;margin-bottom:2px;">
        
       
<b-row v-if="showlocation==''">    
<b-col lg="12" sm="12" md="12">
<button @click="detectLocation"><img src="../assets/detect.png" height="20px" /></button>
</b-col>
</b-row>

<b-row>
<b-col lg="6" sm="12" md="6" style="display:inline-flex;border:#47aed8 solid 1px;height: 43px !important;margin-top:1px;">
<div style="margin-top:3px;height: 39px !important;border-radius:0px;" ><img src="../../assets/location.png" height="30px" /></div><div style="width:100%;border-left:none important;">
<b-form-group>
<div v-if="address!=''"><vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            placeholder=""
            v-on:placechanged="getAddressData"
            v-model="address"

            types=""
            style="border:none !important;width:103%;min-width:112px;overflow:visible;height: 39px !important">
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
        </b-form-group>
        </div>
        </b-col>
            
			<b-col > 
			<b-form-group >
			
                  <model-select
                    :options="searchitems" 
					
                    style="border:#47aed8 solid 1px;width:100%;min-width:112px;overflow:visible;display:table;height: 43px !important;border-radius:0px;"
                    v-model="searchitm"
                    placeholder="Dentist, Fitness Centre, Pharmacy, Hospital, Clinic etc "
                    class="mb-3 select"
					
                  >  
                  </model-select>
                </b-form-group>
              </b-col>
			<div >
              <b-button   style="height: 38px !important;background: white;
    background-color: #edf9fc;
    border-color: #edf9fc;" @click="searchData">
                <img src="../assets/search2.png" height="25px" background-color="#edf9fc" />
              </b-button>
            </div>
			</b-row>
			</b-container>
			
</b-col>
</b-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MarksMap from "MarksMap";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import Vue from "vue";
import FixedHeader from 'vue-fixed-header';
import { ModelSelect } from "vue-search-select";
 import VueGoogleAutocomplete from 'vue-google-autocomplete';
export default {
mounted() {
   // this.$refs.address.focus();
   // this.$refs.address.change();
  },
  name: "Search",
  data() {
    return {
    place:'../assets/detect.png',
  showlocation:'',
	address: '',
	isLoading: false,
	insurances: [],
  searchitm:'',
	 cityName: "",
      countryName: "",
      location: null,
	  searchitems:[],
      locationcountry: null,
      locations: [],
	     form: {
        localarea:'',
        city: null,
        country: null,
        searchtype:'',
		    searchid:'',
        language:[],
        insuranceId: null,
        start: 0,
        inc: 20,
        latitude:null,
        longitude:null,
      },    
    };
  },
   beforeRouteUpdate(to, from, next) {
    this.verify_redirect = false;
    next();
  },
  computed: {
    ...mapGetters(["isAuthenticated", "role", "service_provider"]),
    ...mapState(["user"])
  },
  components: {
    Loading , Vue, ModelSelect, VueGoogleAutocomplete
  },
  created() {
   var self=this;
   this.isLoading = true;
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
              array = response.data.cities;

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
               let  arrayz = response.data.specialitiesdata;
			   
			  
      axios
        .get("search-branches")
        .then(function(responsebranch) {
          
		 let arraybranch = responsebranch.data.searchbranches;
		 let counterz = 0;
				  for (let z in arrayz) {
               
                let tmpz = {
                  value: counterz,
                  text: arrayz[z].name + "   [ Speciality ] ",
                  id: arrayz[z].id,
				  searchtype: "speciality",
                  
                };
				self.searchitems.push(tmpz);
				counterz += 1;
				}
				for (let b in arraybranch) {
               
                let tmpb = {
                  value: counterz,
				  src: arraybranch[b].branch_profile_pic,
                  text:  arraybranch[b].branch_name + "   [  "  +  arraybranch[b].type + " ] ",
				  
                  id: arraybranch[b].branch_id,
				  searchtype: "branch",
                  
                };
				self.searchitems.push(tmpb);
				counterz += 1;
				}
        })
        .catch(function(error) {
          console.log(error);
        });
    
			   
				
              self.isLoading = false;
            })
            .catch(function(error) {
              console.log(error);
            });
        });
      })
      .catch(function(error) {
        console.log(error);
        self.isLoading = false;
      });

  },
  methods: {
  getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
                
                console.log(addressData);
            },
   searchData(){
   var self=this;
	   
      if (self.address=='' || self.address==null) {
      self.form.city = self.cityName;
        self.form.country = self.countryName;
        self.form.latitude=self.latitude;
        self.form.longitude=self.longitude;
       
      if(self.form.latitude=='' && self.form.longitude=='')
      {
           alert('System does not detect your location. Kindly click on Detect icon.');
      }

       

      } else {
        
 self.form.city = self.address.locality;
        self.form.country = self.address.country;
        self.form.latitude=self.address.latitude;
        self.form.longitude=self.address.longitude;
      }
     
      if(self.searchitm)
      {
	  self.form.searchid=self.searchitems[self.searchitm].id;
	  self.form.searchtype=self.searchitems[self.searchitm].searchtype;
	  }
    else
    {
    self.form.searchid=null;
    self.form.searchtype=null;
    }
      self.$router.replace({ name: `NavSearch`, query: self.form });
    
   },

   detectLocation()
   {
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
                self.showlocation=self.cityName + "," +self.countryName;
              }
            });
            });
            },
   
   },
   
};
</script>
<style>
.form-group {
     margin-bottom: 0.1rem; 
	 margin-top: 0.1rem;
}
.search-location {
  display: block;
  width: 60vw;
  margin: 0 auto;
  margin-top: 5vw;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
}
</style>

