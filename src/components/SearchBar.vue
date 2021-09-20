/* eslint-disable */
<template>
<b-container fluid class="backg" style="background-color:white;">
<br />
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="false"
      :loader='loader'
      :color='clr'
    ></loading>
    <b-col cols="12" v-if="!isLoading">

        <b-container style="margin-top:5px;margin-bottom:2px;">
        
       
<!--b-row  v-if="showlocation==''">    
<b-col lg="12" sm="12" md="12">
<button @click="detectLocation"><img src="../assets/detect.png" height="20px" /></button>
</b-col>
</b-row-->
<b-row>
<b-col lg="6" sm="12" md="6" style="display:inline-flex;border:#47aed8 solid 1px;height: 45px !important;">
<div style="margin-top:3px;height: 39px !important;border-radius:0px;" ><img src="../assets/location.png" height="30px" /></div><div style="width:100%;border-left:none important;">
<b-form-group>
<div v-if="address!=''"><vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            :placeholder="showlocation"
            v-on:placechanged="getAddressData"
            v-model="address"

            types=""
            style="border:none !important;width:103%;min-width:112px;overflow:visible;height: 39px !important">
        </vue-google-autocomplete>
       </div>
     <div v-else>   <vue-google-autocomplete 
            ref="address"
            id="map"
            classname="form-control"
            :placeholder="showlocation"
            v-on:placechanged="getAddressData"
            v-model="address"
            types=""
            style="border:none !important;width:103%;min-width:112px;overflow:visible;height: 39px !important">
        </vue-google-autocomplete>
       </div>
       <strong v-if="locationerror!=''" style="font-size:15px;color:red;font-weight:400;margin:5px;" >***{{locationerror}}</strong>
        </b-form-group>
        </div>
        </b-col>
            
			<b-col> 
			<b-form-group >
			
                  <model-select
                    :options="searchitems" 
					
                    style="color:slategray;border:#47aed8 solid 1px;width:100%;min-width:112px;overflow:visible;display:table;height: 45px !important;border-radius:0px;margin-left:-15px;margin-top:-2px;color:#6c757d;"
                    v-model="searchitm"
                    placeholder="Search Symptoms, Doctors, Fitness Centre, Pharmacy, Hospital."
                    class="mb-3 select"
					
                  >   
                  </model-select>
                </b-form-group>
               
              </b-col>
			
            <div class="kov-search">
              <b-button class="kov-lg" type="submit" @click="searchData" style="height: 45px !important;background-color:#47aed8;margin-left:-20px;border-color:#fff;border-radius:0px;text-align: left;">
                <img src="../assets/search.png" height="18px"  />
              </b-button>
            </div>

            
			</b-row>
       <!--strong  v-if="['Kovered'].includes($route.name)" style="font-size: 16px;font-weight: 600;color: #0a0201;">Consult doctor for any health concern </strong>  
<br/><br/>
       <b-row  class="symptoms" v-if="['Kovered'].includes($route.name)">
  <b-col lg="2" sm="6" md="3" xs="6" >
  <img class="img-avatar"
                            :src="`/static/img/cough.png`"
                            rounded="circle"
                            :width="60"
                            :height="60"
                            alt="Image"
                            @click="searchDataSymptoms('4')"
                          /> <br/>
                          <strong style="color:#666161;font-size:12px;font-weight:500;" >Cough, Cold & Fever </strong>
       
</b-col>
 <b-col lg="2" sm="6" md="3" xs="6">
<img class="img-avatar"
                            :src="`/static/img/heart-problem.png`"
                            rounded="circle"
                           :width="60"
                            :height="60"
                            alt="Image"
                             @click="searchDataSymptoms('2')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Heart problem </strong>
                          </b-col>

                           <b-col lg="2" sm="6" md="3" xs="6" >
<img class="img-avatar"
                            :src="`/static/img/dental-care.png`"
                            rounded="circle"
                           :width="60"
                            :height="60"
                            alt="Image"
                             @click="searchDataSymptoms('3')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Dental Care </strong>
                          </b-col>

                           <b-col lg="2" sm="6" md="3" xs="6">
<img class="img-avatar"
                             :src="`/static/img/mental-health-issue.png`"
                            rounded="circle"
                         :width="60"
                            :height="60"
                            alt="Image"
                             @click="searchDataSymptoms('5')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Mental Health </strong>
                          </b-col>
                            <b-col lg="2" sm="6" md="3" xs="6" >
<img class="img-avatar"
                               :src="`/static/img/physical-problem.png`"
                            rounded="circle"
                          :width="60"
                            :height="60"
                            alt="Image"
                             @click="searchDataSymptoms('14')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Physical Problem </strong>
                          </b-col>
                          <b-col lg="2" sm="6" md="3" xs="6" >
<img class="img-avatar"
                               :src="`/static/img/skin-problems.png`"
                            rounded="circle"
                          :width="60"
                            :height="60"
                            alt="Image"
                             @click="searchDataSymptoms('15')"
                          /> <br/> <strong style="color:#666161;font-size:12px;font-weight:500;" > Skin Problem </strong>
                          </b-col>


        </b-row-->
			</b-container>
			
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

  name: "Search",
  data() {
    return {
    loader:'spinner',
    clr:'#17a2b7',
    locationerror:'',
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
        searchtext:null,
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

   self.isLoading = true;
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

     let  arrayz = response.data.specialitiesdata;


                let clr = {
                  value: '000',
                  text: "clear",
                  id: '000',
          searchtype: "000",
                  
                };
        self.searchitems.push(clr);



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

        navigator.geolocation.getCurrentPosition ( function(position) {
 
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

  },
  methods: {
  getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
                
                console.log(addressData);
            },
   searchData(){
   var self=this;

	   if(self.searchitm || self.searchitm=='0')
      {
    self.form.searchid=self.searchitems[self.searchitm].id;
    self.form.searchtype=self.searchitems[self.searchitm].searchtype;
    //self.form.searchtext=self.searchitems[self.searchitm].text;
    
    // if(self.searchitems[self.searchitm].text.slice(-15).trim()==="[ Speciality ]")
     self.form.searchtext=null;
    }
    else
    {
    self.form.searchid=null;
    self.form.searchtype=null;
    self.form.searchtext=null;
    }
      if(self.address &&  self.address.locality) {

      self.form.city = self.address.locality;
      self.form.country = self.address.country;
       self.form.latitude=self.address.latitude;
        self.form.longitude=self.address.longitude;
      //self.form.city = self.cityName;
      //  self.form.country = self.countryName;
      //  self.form.latitude=self.latitude;
       // self.form.longitude=self.longitude;
       self.locationerror='';
      if(self.form.latitude=='' && self.form.longitude=='')
      {
           alert('System does not detect your location. Kindly click on Detect icon.');
      }

     
    //self.searchitm='';
      self.$router.replace({ name: `NavSearch`, query: self.form }); 

      } else if(self.cityName && self.countryName && self.latitude)
      {
     self.locationerror='';
           self.form.city = self.cityName;
       self.form.country = self.countryName;
       self.form.latitude=self.latitude;
       self.form.longitude=self.longitude;  
        //  self.searchitm='';
       self.$router.replace({ name: `NavSearch`, query: self.form });
      
      } else {
  
        self.locationerror='Kindly select the location';
    

      }
     
      
    
   },
   searchDataSymptoms(searchid){
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

@media only screen and (max-width: 600px) {
   .kov-lg {
    margin-top: 5px;
    
  }
  .symptoms {
     display:none;
  }
}
@media only screen and (min-width: 601px) {
  
}
@media only screen and (min-width: 1250px) {
  .mview {
   
   max-width:20%;
   
  } 
}
@media only screen and (min-width: 1100px)
{
  .mview {
   
   max-width:20%;
   
  } 
}
.ui.default.dropdown:not(.button)>.text, .ui.dropdown:not(.button)>.default.text {
    color:slategray;
}
</style>

