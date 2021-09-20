/* eslint-disable */
<template>
<b-container fluid class="backg" style="background-color:white;">
<br />
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="false"
    ></loading>

        <b-container style="margin-top:-10px;margin-bottom:2px;">
        <b-row>
  <b-col cols="col-lg-2 col-md-3 col-sm-3" >
  <!--router-link
                :to="`/${$i18n.locale}/navsearch?localarea=&city=${this.city}&country=${this.country}&searchtype=speciality&searchid=4&insuranceId&start=0&inc=20&latitude=${this.latitude}&longitude=${this.longitude}`"
                class="route"
                --> <img class="img-avatar"
                            :src="`/static/img/cough.png`"
                            rounded="circle"
                            :width="40"
                            :height="40"
                            alt="Image"
                            @click="searchData('4')"
                          /> <br/>
                          <strong style="color:#666161;font-size:12px;font-weight:500;" >Cough, Cold & Fever </strong>
         <!--/router-link--> 
</b-col>
 <b-col cols="col-lg-2 col-md-3 col-sm-3" >
<img class="img-avatar"
                            :src="`/static/img/heart-problem.png`"
                            rounded="circle"
                           width="40"
                            :height="40"
                            alt="Image"
                             @click="searchData('2')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Heart problem </strong>
                          </b-col>

                           <b-col cols="col-lg-2 col-md-3 col-sm-3" >
<img class="img-avatar"
                            :src="`/static/img/dental-care.png`"
                            rounded="circle"
                           width="40"
                            :height="40"
                            alt="Image"
                             @click="searchData('3')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Dental Care </strong>
                          </b-col>

                           <b-col cols="col-lg-2 col-md-3 col-sm-3" >
<img class="img-avatar"
                             :src="`/static/img/mental-health-issue.png`"
                            rounded="circle"
                           width="40"
                            :height="40"
                            alt="Image"
                             @click="searchData('5')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Mental Health </strong>
                          </b-col>
                            <b-col cols="col-lg-2 col-md-3 col-sm-3" >
<img class="img-avatar"
                               :src="`/static/img/physical-problem.png`"
                            rounded="circle"
                           width="40"
                            :height="40"
                            alt="Image"
                             @click="searchData('14')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Physical Problem </strong>
                          </b-col>
                          <b-col cols="col-lg-2 col-md-3 col-sm-3" >
<img class="img-avatar"
                               :src="`/static/img/skin-problems.png`"
                            rounded="circle"
                          width="40"
                            :height="40"
                            alt="Image"
                             @click="searchData('15')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Skin Problem </strong>
                          </b-col>

                           <b-col cols="col-lg-2 col-md-3 col-sm-3" >
<img class="img-avatar"
                              :src="`/static/img/child-care.jpeg`"
                            rounded="circle"
                           width="40"
                            :height="40"
                            alt="Image"
                             @click="searchData('17')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Pediatrics </strong>
                          </b-col>

        </b-row>
       
</b-container>
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

  name: "Search",
  data() {
    return {
    tags:'',
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
  
  components: {
    Loading , Vue, ModelSelect, VueGoogleAutocomplete
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
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
                    self.countryName  = comp.long_name;
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
		 let counterz =0;
				  for (let z in arrayz) {
              
                let tmpz = {
                  value: counterz,
                  text: arrayz[z].name + "   [ Speciality ] ",
                  id: arrayz[z].id,
				  searchtype: "speciality",
                  
                };
				self.searchitems.push(tmpz);
 
				counterz += 1;
         if(arrayz[z].tags!=null)
               {
             // self.tags=self.tags + arrayz[z].tags;
             let arrayt = arrayz[z].tags.split(",");
           
              for(let t in arrayt)
        {
           let tgz = {
            value:counterz,
            text:arrayt[t],
            id:arrayz[z].id,
             searchtype: "speciality",
           };
          
           self.searchitems.push(tgz);
              counterz += 1;
           }
              }
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
   searchData(searchid){
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
     
      
    self.form.searchid=searchid;
    self.form.searchtype='speciality';
    
      self.$router.replace({ name: `NavSearch`, query: self.form });
    
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
@media (max-width: 600px) {
  
  .kov-lg {
    margin-top: 5px;
    
  }
}

</style>

