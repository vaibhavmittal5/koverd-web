<template>
  <b-container fluid>
    <b-modal ref="my-modal" hide-footer :title="$t('service.book-appointment')">
      <div class="d-block text-center">
        <h3>{{ $t('service.login-first-text')}}</h3>
      </div>

      <b-button class="mt-3" variant="outline-primary" @click="loginRedirect">{{ $t('service.login')}}</b-button>
      <router-link to="/register">
        <b-button class="mt-3" variant="outline-primary" >{{ $t('service.sign')}}</b-button>
      </router-link>
    </b-modal>
    <b-modal ref="my-modal3" hide-footer :title="$t('service.book-appointment')">
      <div class="d-block text-center">
        <b-alert show variant="warning">{{ $t('service.time-slot-message')}}</b-alert>
      </div>
    </b-modal>
    <b-modal ref="my-modal2" hide-footer :title="$t('service.book-appointment')">
      <div class="d-block text-center">
        <!-- <h3>Book Appointment!</h3> -->
      </div>
      <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button> -->
      <p v-if="message === 'You have already booked this slot.'" class="warn">{{ $t('service.already-book-message')}}</p>
      <p v-else class="success">{{ $t('service.success-message')}}</p>
      <b-alert class="mt-1" variant="outline-warning" >{{message}}</b-alert>
      <router-link :to="`/${$i18n.locale}/appointments`">
        <b-button style="width:120px;">
           <font-awesome-icon icon="user-clock" />
          {{ $t('service.appointments')}}
         
        </b-button>
      </router-link>
    </b-modal>
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
    <!-- <b-modal id="modalID" title="Bootstrap-Vue" ref="infoModal">
      <p class="my-4">{{modal_message}}</p>
    </b-modal>-->
    <b-row v-if="!isLoading">
      <b-col cols lg="8" sm="6" xs="12">
        <!-- <b-card-group deck> -->
        <b-card no-body border-variant="light">
          <b-row>
            <!--b-col cols="12">
              <img class="pic" v-if="this.response.profile_pic === null" :width="150" :height="150" :src="imagePlaceholder" alt="Image" />
              <img class="pic" v-else :src="this.response.profile_pic" :width="150" :height="150" alt="Image" />
            </b-col><br/-->
			
			<b-col cols="12" v-if="this.response.cover_pic">
                <img
                  
                  :src="this.response.cover_pic"
                  class="white--text text-center v-img"
                  style="max-height:500px;width:100%;"
                
                >
                 
                </img>
				 
				<div v-if="this.response.profile_pic"> 
                      <v-avatar size="100"><img 
                           :src="this.response.profile_pic"
                           class="pic"
                            style="display:grid;margin-top:-85px;width:150px; height:150px; border: 2px solid #f2f2e9;"
                          ></img></v-avatar></div>
						  
						 <div class="col lg6 sm12 md6 xs12" v-else> <v-avatar size="100"><img
                           :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"
                          class="pic"
                            style="display:grid;margin-top:-85px;width:150px; height:150px; border: 2px solid #f2f2e9;"
                          ></img></v-avatar></div>
						  
                    </b-col>
						  
                <b-col cols="12" v-else>
                <img
                  
                  :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg'"
                  class="white--text text-center v-img"
                  height="mx-auto"
                  width="100%"
                >
                 
                </img>
				 
				<div v-if="this.response.profile_pic"> 
                      <v-avatar size="100"><img 
                           :src="this.response.profile_pic"
                           class="pic"
                            style="display:grid;margin-top:-85px;width:150px; height:150px; border: 2px solid #f2f2e9;"
                          ></img></v-avatar></div>
						  
						 <div class="col lg6 sm12 md6 xs12" v-else> <v-avatar size="100"><img
                           :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"
                          class="pic"
                            style="display:grid;margin-top:-85px;width:150px; height:150px; border: 2px solid #f2f2e9;"
                          ></img></v-avatar></div>
						  
                    </b-col>
						  
             
			
			
            <b-col cols="12" >
              <h4 style="font-weight:600 !important;font-size:18px;margin-top:5px;" >{{this.response.name}}</h4>
            
             
             
                <!--b>{{this.response.category_name}}</b-->
                 <h6 v-if="this.response.category_name==='Medical Care'">{{ $t('search.medical-care')}}</h6>
              <h6 v-if="this.response.category_name==='Pharmacy'">{{ $t('search.pharmacy')}}</h6>
              <h6 v-if="this.response.category_name==='Fitness Center'">{{ $t('search.fitness')}}</h6>
              <h6 v-if="this.response.category_name==='Health and Well Being'">{{ $t('search.health-wellbeing')}}</h6>
              <h6 v-if="this.response.category_name==='Assisted Living for Senior Care'">{{ $t('search.senior-care')}}</h6>
              <h6 v-if="this.response.category_name==='Alternative Medicine'">{{ $t('search.alternarive-medicine')}}</h6>
               <h6 v-if="this.response.category_name==='Others'">{{ $t('search.others')}}</h6>
               <div style="align:center;display:inline-flex !important;">
                <star-rating
                 
                  v-model="this.response.rating.data.rating"
                  :show-rating="false"
                  :read-only="true"
                  active-color="#47aed8"
                  :star-size="20"
                ></star-rating>
              </div>

          
              <!--Address: {{this.response.address}} -->
              <!-- <div v-if="this.response.bio_text !== 'None'">
                  <b>Description:</b>
                  {{this.response.bio_text}}
              </div>-->
              <div style="float:right;">
                <b-button
                  v-if="this.isFavourite!='1'"
                  pill
                  variant="outline-dark"
                  style="border:none;"
                  @click="setFavourite()"
                >
                  <font-awesome-icon icon="heart" color="grey" style="font-size:28px;" />
                </b-button>
                <b-button
                  v-else
                  pill
                  variant="outline-dark"
                  style="border:none;"
                  @click="removeFavourite()"
                >
                  <font-awesome-icon icon="heart" color="red" style="font-size:28px;" />
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-card>
        <div>
          <div>
            <b-tabs
              active-nav-item-class="font-weight-bold text-uppercase text-danger"
              border-variant="light" 
            >
              <b-tab active :title="$t('service.overview')" >
                <b-card class="text-left" border-variant="light">
                  <h4>{{ $t('service.address')}}</h4>

                  <p class="subt">
                    {{this.response.address}},
                    {{this.response.city}},
                    {{this.response.country}}
                  </p>

                  <h4>{{ $t('service.contact')}}</h4>
				   <div v-if="this.response.contacts.data">
				  <v-flex   v-for="it in this.response.contacts.data"
                  :key="it.contact_number">
				  
			{{it.country_name}} : {{it.country_code}} - {{it.contact_number}} <br/>
			
                 </v-flex>
                  
                  </div>
 <br/>
                  <h4>{{ $t('service.email')}}: </h4> <p>{{this.response.email}}</p>
                  <h4>{{ $t('service.working-hours')}}</h4>
                  <p class="subt">
                    {{this.response.opening_hours.HH}}:{{this.response.opening_hours.mm}} to
                    {{this.response.closing_hours.HH}}:{{this.response.closing_hours.mm}}
                  </p>
                  <h4>{{ $t('service.about')}}</h4>
                  <p class="subt">{{this.response.bio_txt}}</p>
                  <h4>{{ $t('service.working-days')}}</h4>
                  <p class="subt">
                    <b-list-group
                      v-for="item in this.response.branchWeekDays.data"
                      :key="item.Monday"
                    >
                      <b-container>
                        <b-row>
                          <b-col cols lg="4" md="6" sm="4">
                            <b-list-group-item>
                              <strong v-if="item.active === '1'">
                                {{item.day}}
                                <img src="../assets/unnamed.png" height="30" />
                              </strong>
                              <strong v-else>{{item.day}}</strong>
                            </b-list-group-item>
                          </b-col>
                          <b-col cols lg="4" md="6" sm="4">
                            <b-list-group-item>
                              <strong v-if="item.active === '1'">
                               {{item.opening_hours.HH}}:{{item.opening_hours.mm}} -  {{item.closing_hours.HH}}:{{item.closing_hours.mm}}
                              </strong>
                              <strong v-else>Not Available</strong>
                            </b-list-group-item>
                          </b-col>
                          
                        </b-row>
                       
                      </b-container>
                    </b-list-group>
                  </p>
                  <h4>{{ $t('service.specialities')}}</h4>
                  <!-- <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                  ></b-pagination>-->
                  <!-- <div > -->
                  <div v-if="this.response.specialities!=''">
                    <b-list-group>
                      <b-list-group-item
                        v-for="item in this.response.specialities.data"
                        :key="item.id"
                      >
                        <b-col>
                          <strong>{{ item.name }}</strong>
                        </b-col>
                        <b-col>
                          <p style="text-align:end;margin:0px;" v-if="item.active == 1">
                            Active :
                            <img src="../assets/unnamed.png" height="30" />
                          </p>
                        </b-col>
                      </b-list-group-item>
                    </b-list-group>
                    <!-- <b-table
                        id="my-table"
                        :items="response.specialities.data"
                        :per-page="perPage"
                        :current-page="currentPage"
                        small
                    ></b-table>-->
                  </div>
				 
				  
				  
                  <!-- </div> -->
                  <h4 v-else>NO {{ $t('service.specialities')}}</h4>
				  
				  
				   
				  
           
			  
	  
	   
	  
                </b-card>
              </b-tab>

              <b-tab :title="$t('service.services')">
                <b-card class="text-left">
                  <div v-if="this.response.branchServices.data!=''">
                    <b-card v-for="item in this.response.branchServices.data" :key="item.type">
                      <b-container>
                        <b-row>
                          <b-col>
                            <strong>{{ $t('service.name')}} :</strong>
                            {{ item.name }}
                          </b-col>
                          <b-col>
                            <b>{{ $t('service.type')}} :</b>
                            {{ item.type }}
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            <b>{{ $t('service.price')}} :</b>
                            {{ item.price }} {{ item.currency_code }}
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            <b>{{ $t('service.description')}} :</b>
                            {{ item.description }}
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-card>
                  </div>
                  <div v-else>No {{ $t('service.services')}}</div>
                </b-card>
              </b-tab>

              <b-tab :title="$t('service.reviews')">
                <b-card class="text-left">
                  <div v-if="this.reviews!=''">
                    <div>
                      <b-card
                        v-for="item in this.reviews"
                        :key="item.id"
                        tag="article"
                        style="max-width: 25rem;"
                        class="mb-2"
                      >
                        <div v-if="item.employees.data.profile_pic">
                          <img
                            :src="item.employees.data.profile_pic"
                            :width="100"
                            :height="100"
                            style="align:center;"
                          />
                        </div>
                        <div v-else>
                          <img :src="imagePlaceholder" :width="100" :height="100" />
                        </div>
                        <strong
                          v-if="item.employees.data.first_name"
                        >Name : {{item.employees.data.first_name}} {{item.employees.data.last_name}}</strong>
                        <strong v-else>Name : ---</strong>
                        <div v-for="item2 in item.employees.data.roles.data" :key="item2">
                          <strong>Role : {{item2.name}}</strong>
                        </div>

                        <b-container>
                          <b-row>
                            <b-col col lg="4" sm="6">
                              <strong>{{ $t('service.overall-rating')}}</strong>
                              <star-rating
                                style="margin:0px;"
                                v-model="item.avg_overall_rating"
                                :show-rating="false"
                                :read-only="true"
                                active-color="#47aed8"
                                :star-size="16"
                              ></star-rating>
                            </b-col>
                            <b-col col lg="4" sm="6">
                              <strong>{{ $t('service.waiting-time')}}</strong>
                              <star-rating
                                style="margin:0px;"
                                v-model="item.avg_wait_time_rating"
                                :show-rating="false"
                                :read-only="true"
                                active-color="#47aed8"
                                :star-size="14"
                              ></star-rating>
                            </b-col>
                            <b-col col lg="4" sm="6">
                              <strong>{{ $t('service.behaviour')}}</strong>
                              <star-rating
                                style="margin:0px;"
                                v-model="item.avg_behaviour_rating"
                                :show-rating="false"
                                :read-only="true"
                                active-color="#47aed8"
                                :star-size="14"
                              ></star-rating>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col col lg="4" sm="6">
                              <strong>{{ $t('service.knowledge')}}</strong>
                              <star-rating
                                style="margin:0px;"
                                v-model="item.avg_knowledge_rating"
                                :show-rating="false"
                                :read-only="true"
                                active-color="#47aed8"
                                :star-size="14"
                              ></star-rating>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card>
                    </div>
                  </div>
                  <div v-else>No {{ $t('service.reviews')}}</div>
                </b-card>
              </b-tab>

			  
			  <b-tab :title="$t('service.Image-Gallery')" style="color:red;">
		<div v-if="this.response.branch_images">	   
	 <b-row >
      <b-col lg3 md4 sm6 xs12 v-for="itm in this.response.branch_images"
                  :key="itm.id">
               
	             
			    
				   <b-img
                           :src="itm.image"
						   class="image"
                           alt="Responsive image"
						  @click="showGallery()"
                             style="padding:0px;max-width:350px; max-height:300px; border: 2px solid black;"
                         ></b-img>
		
			
	</b-col>
	  <gallery :images="images1" :index="index" @close="index = null"></gallery>
	   
    </b-row></div>
	<div v-else> <b-card class="text-left">{{ $t('service.currently-not-available')}}</b-card></div>
	</b-tab>
	

              <b-tab :title="$t('service.insurance')">
                <b-card class="text-left">{{ $t('service.currently-not-available')}}</b-card>
              </b-tab>
            </b-tabs>
          </div>
        </div>

        <!-- </b-card-group> -->
      </b-col>
      <b-col cols lg="4" sm="6" xs="12" v-if="response.category_name !== 'Pharmacy'">
        <b-container class="container" style="padding:4px;">
          <b-row>
            <b-col>
              <h3>{{ $t('service.book-appointment')}}</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
                <b-form-group id="input-group-3" :label="$t('service.choose-your-date')"  label-for="input-3">
                  <div class="hidden-scrollbar">
                    <b-container class="bv-example-row">
                      <b-row>
                        <b-col cols="4" style="text-align:left;">
                          <b-button @click="datePre(current_date1)" variant="outline-primary" style="border-color: #ffffff; !important">
                            <img src="../assets/left-arrow.png" height="12" width="10" />
                          </b-button>
                        </b-col>
                        <b-col
                          cols="4"
                          class="text-center"
                          style="padding-top:10px;display:inline-flex;"
                        >{{current_date}}</b-col>

                        <b-col cols="4" style="text-align:end;">
                          <b-button @click="datePost(current_date1)" variant="outline-primary" style="border-color: #ffffff; !important">
                            <img src="../assets/arrow-point-to-right.png" height="12" width="10" />
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-container>
                    <div class="slots inner text-center display">
                      <b-card v-if="new_slots!=''">
                        <div v-for="slot in new_slots" :key="slot.slot" class="display">
                          <div v-if="slot.available==1" class="display">
                            <div class="display">
                              <b-button
                                size="sm"
                                style="color:white !important;background-color:#47aed8 !important;"
                                @click="select_slots(slot.id, slot)"
                               
                              >{{slot.start_time}}</b-button>
                              <!-- {{new_slots}} -->
                            </div>
                          </div>
                          <div class="display" v-else>
                            <div class="display">
                              <b-button
                                disabled
                                size="sm"
                                style="color:white !important;background-color:grey !important;"
                               
                              >{{slot.start_time}}</b-button>
                            </div>
                          </div>
                        </div>
                      </b-card>
                      <b-card v-else>
                        <div class="display">
                          <h5 style="color:grey;text-align:center;font-size:12px;">{{ $t('service.not-available')}}</h5>
                        </div>
                      </b-card>
                    </div>
                  </div>
                  <b-form-input
                    id="input-2"
                    v-model="form.slot_name"
                    required
                    :placeholder="$t('service.selected-time')"
                    readonly
                  ></b-form-input>
                </b-form-group>
				 <div v-if="video_consultation=='1'"><b-form-group id="input-group-4">
                  <b-form-checkbox-group v-model="form.video_consultation" id="checkboxes-4">
                    <b-form-checkbox value="1">{{ $t('video.vc_agree_text')}}</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group></div>
				
                <b-form-group id="input-group-1" :label="$t('service.choose-your-service')" label-for="input-1">
                  <select required v-model="form.service" class="form-control" id="input-1">
                    <option value="0">Select type</option>
                    <option
                      v-for="item in branch_services"
                      :value="item.id"
                      :key="item.name"
                    >{{ item.name }}</option>
                  </select>
                </b-form-group>

                <b-form-group id="input-group-3" :label="$t('service.add-details')"  label-for="input-3">
                  <b-form-input
                    id="input-2"
                    v-model="form.remark"
                    :placeholder="$t('service.share-medical-details')"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4">
                  <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="1">{{ $t('service.share-medical-history')}}</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <div class="submit">
                  <b-button type="submit" style="background-color:black;">Book</b-button>
                  <!-- <b-button @click="Session2()" style="background-color:black;">xxxBook</b-button> -->
                </div>
              </b-form>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
	
	 
	
    <b-row v-if="!isLoading">
      <b-col cols="12">
        <h4 class="text-left">Directions Map</h4>
        <hr />
        <DirectionsMap :service="response" :latitude="mapLat" :longitude="mapLong" :zoom="8"></DirectionsMap>
      </b-col>
    </b-row>
  </b-container>
</template>

<script type="text/javascript" src="https://unpkg.com/vue@2.4.3/dist/vue.js"></script> 
  <script type="text/javascript" src="https://unpkg.com/blueimp-gallery@2.27.0/js/blueimp-helper.js"></script> 
  <script type="text/javascript" src="https://unpkg.com/blueimp-gallery@2.27.0/js/blueimp-gallery.js"></script> 
  <script type="text/javascript" src="https://unpkg.com/blueimp-gallery@2.27.0/js/blueimp-gallery-fullscreen.js"></script> 
  <script type="text/javascript" src="vue-gallery.js"></script> 
<script>

import i18n from "../i18n";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.min.css";
import axios from "axios";
import DirectionsMap from "./partials/DirectionsMap";
import imagePlaceholder from "../assets/placeholder.png";
import Rating from "./partials/Rating";
import { mapGetters, mapState } from "vuex";
import StarRating from "vue-star-rating";
import VueGallery from 'vue-gallery';
let data_form;
export default {
  name: "Service",
  props: ["slots", "remark", "service", "checked", "slot_name", "date"],
  mounted() {
    window.scrollTo(0, 0);
  },
  data: function() {
    return {
	 index:null,
	 images1:[],
      alert: false,
      response: null,
      message: null,
      message2: null,
      current_date: new Date().toString().slice(0, 10),
      current_date1: new Date(),
      new_slots: [],
      reviews: [],
      form: {
        slot: "",
        remark: "",
        service: null,
        checked: 0,
        slot_name: "",
        date: null,
        video_consultation: 0
      },
      overall_rate: null,
      behaviour_rate: null,
      knowledge_rate: null,
      wait_rate: null,
      perPage: 3,
      currentPage: 1,
      branch_services: [],
      service_name: [],
      show: true,
      demoRate: 4,
      isLoading: false,
      imagePlaceholder: imagePlaceholder,
      isFavourite: 0,
      mapLat: 0,
      mapLong: 0,
      addEmployeeFrom: {
        email: "",
        roles: []
      },
      removeEmployeeForm: {
        email: "",
        roles: []
      },
      roles: [],
      modal_message: "",
      selectedSlot: [],
      video_consultation: ""
    };
  },
  computed: {
    ...mapGetters(["service_provider", "role", "isAuthenticated"]),
    ...mapState(["user"]),
    rows() {
      return this.response.specialities.data.length;
    }
    // rating() {
    //  return this.overall_rate = this.reviews;
    // }
  },
  methods: {
   showGallery() {
  
      this.index=1;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModal2() {
      this.$refs["my-modal2"].show();
    },
    showModal3() {
      this.$refs["my-modal3"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$refs["my-modal2"].hide();
      this.$refs["my-modal3"].hide();
    },
    select_slots(id, slots) {
      console.log(slots, id);
      this.form.slot = id;
      this.form.slot_name = slots.start_time;
      let self = this;
      if (self.current_date1.getMonth() + 1 <= 9) {
        this.form.date =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      } else {
        this.form.date =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      }
      this.selectedSlot = slots;
      // if (this.form.checked[0] === "1") {
      //   this.form.checked = 1;
      // }
      console.log(this.form, this.current_date.toString().slice(0, 10));
    },
    test() {
      console.log("working", this.branch_services);
      this.branch_services.forEach(ele => {
        this.service_name.push(ele.name);
      });
      console.log(this.service_name);
    },
    datecurrent() {
      let ActiveDate;
      const self = this;
      self.current_date1;
      console.log(self.current_date1);
      if (self.current_date1.getMonth() + 1 <= 9) {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      } else {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      }
      axios
        .post("branch/slots", {
          branch_id: self.response.id,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = self.current_date1.toString().slice(0, 10);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    datePre() {
      let ActiveDate;
      const self = this;
      self.current_date1.setDate(self.current_date1.getDate() - 1);

      if (self.current_date1.getMonth() + 1 <= 9) {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      } else {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      }
      axios
        .post("branch/slots", {
          branch_id: self.response.id,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = self.current_date1.toString().slice(0, 10);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    datePost() {
      const self = this;
      let ActiveDate;
      self.current_date1.setDate(self.current_date1.getDate() + 1);
      if (self.current_date1.getMonth() + 1 <= 9) {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      } else {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      }

      axios
        .post("branch/slots", {
          branch_id: self.response.id,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = self.current_date1.toString().slice(0, 10);
          console.log(self.new_slots);
        })
        .catch(function(error) {
          // TODO handle error
          console.log(error);
        });
    },
    //book appointment
    onSubmit(evt) {
      // let self = this;
      evt.preventDefault();
      console.log(JSON.stringify(this.form.slot_name));
      const self = this;
      // console.log(this.removeEmployeeForm);
      // if(this.form.slot_name === "" || this.form.slot == undefined)
      // {
      //   this.alert = true;
      //   console.log("tkkdn")
      // }
      if (this.form.checked[0] === "1") {
        this.form.checked = 1;
      } else {
        this.form.checked = 0;
      }
      if (this.form.video_consultation[0] === "1") {
        this.form.video_consultation = 1;
      } else {
        this.form.video_consultation = 0;
      }
      if (this.isAuthenticated) {
        if (this.form.slot_name === "" || this.form.slot == undefined) {
          this.showModal3();
        } else {
          axios
            .post("user/bookappointment", {
              slots: self.selectedSlot,
              date: self.form.date,
              is_medical_history: self.form.checked,
              service_id: self.form.service,
              remarks: self.form.remark,
              video_consultation: self.form.video_consultation
            })
            .then(function(response) {
              console.log(response.data.error);
              if (
                response.data.error === "You have already booked this slot."
              ) {
                self.message = response.data.error;
                console.log("working", self.message);
                self.showModal2();
              } else {
                self.message =
                  "Your Appointment has been booked. Please click here to checkout details.";
                self.showModal2();
              }
              // self.removeEmployeeForm.email = "";
              // self.removeEmployeeForm.roles = [];
              // self.modal_message = response.data.success;
              // self.$refs.infoModal.show();
            })
            .catch(function() {
              self.modal_message = "Something went wrong";
            });
        }
      } else {
        console.log("not Logged iN");

        this.showModal();
      }
    },
    loginRedirect() {
      this.branch_id = this.response.id;
      let form = this.form;

      this.$router.replace({
        name: "Login",
        query: { form: this.form, redirect: `service/${this.branch_id}` },
        params: { id: this.branch_id }
      });
      // this.$router.push({ name: "Doctors", query: this.form });
      // console.log("bhumi login", this.$route.query.form)
      // this.form = form;
    },
    setFavourite() {
      const self = this;
      // this.isLoading = true;
      if (this.isAuthenticated) {
        let url = "/user-favourites";
        axios
          .post(url, { branch_id: this.$route.params.id })
          .then(function(response) {
            self.isFavourite = 1;
            self.isLoading = false;
          })
          .catch(function(error) {
            console.log(error);
            self.isLoading = false;
          });
      } else {
        this.showModal();
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    removeFavourite() {
      const self = this;
      // this.isLoading = true;
      if (this.isAuthenticated) {
        let url = "/user-favourites/" + this.$route.params.id;
        axios
          .delete(url)
          .then(function(response) {
            self.isFavourite = 0;
            self.isLoading = false;
          })
          .catch(function(error) {
            console.log(error);
            self.isLoading = false;
          });
      } else {
        this.showModal();
      }
    },
    addEmployee() {
      const self = this;
      console.log(this.addEmployeeFrom);
      axios
        .post(
          "/employee/branch/" + this.$route.params.id + "/manage/employee/add",
          this.addEmployeeFrom
        )
        .then(function(response) {
          self.addEmployeeFrom.email = "";
          self.addEmployeeFrom.roles = [];
          self.modal_message = response.data.success;
          self.$refs.infoModal.show();
        })
        .catch(function() {
          self.modal_message = "Something went wrong";
          self.$refs.infoModal.show();
        });
    },
    removeEmployee() {
      const self = this;
      console.log(this.removeEmployeeForm);
      axios
        .post(
          "/employee/branch/" +
            this.$route.params.id +
            "/manage/employee/remove",
          this.removeEmployeeForm
        )
        .then(function(response) {
          self.removeEmployeeForm.email = "";
          self.removeEmployeeForm.roles = [];
          self.modal_message = response.data.success;
          self.$refs.infoModal.show();
        })
        .catch(function() {
          self.modal_message = "Something went wrong";
          self.$refs.infoModal.show();
        });
    },
    test_route(val) {
      console.log(val);
      // this.form.slot = val.slot;
      this.form.checked = val.checked;
      this.form.remark = val.remark;
      this.form.service = val.service;
      // this.form.slot_name = val.slot_name;
      this.form.date = val.date;
      // this.select_slots(val.slot, )
      console.log(this.form, "bhcb");
    }
  },
  components: { Rating, Loading, DirectionsMap, StarRating ,'gallery': VueGallery},

  created() {
    console.log("bhumi work cjdjd", this.$route.query.form);
    // this.datecurrent();
    if (this.$route.query.form) {
      console.log(this.$route.query.form.slot);
      let dataform = [];
      // test_route(this.$route.query.form)
      this.test_route(this.$route.query.form);
      var dataform = console.log(this.$route.query.form.slot);
      console.log(dataform, "demo");
      // if(this.$route.query.form != null)
      // {
      //   this.form.slot = dataform.slot;
      //   this.form.checked = dataform.checked;
      //   this.form.remark = dataform.remark;
      // }
    }
    //   function test_route(val){
    //   console.log(val, "cncccn")
    //   const self = this;
    //   let a = val.slot
    //   self.form.slot
    //   console.log(a, "ddd", self.form.slot)

    // }
    const self = this;
    function getBranch() {
      axios
        .get("/branch/" + self.$route.params.id)
        .then(function(response) {
         
          self.response = response.data.branch.data;
          self.video_consultation = response.data.branch.data.video_consultation;
			self.response.branch_images.forEach(ele => {
          
     
           self.images1.push(ele.image)
          
        });
          // tmp situation. We should get the user's location 1 time per F5
          navigator.geolocation.getCurrentPosition(function(position) {
            self.mapLat = position.coords.latitude;
            self.mapLong = position.coords.longitude;
            self.isLoading = false;
          });
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    }

    function getService() {
      axios
        .get("/service/" + self.$route.params.id)
        .then(function(response) {
          console.log(response);
          self.response = response.data.branch.data;
          self.video_consultation =
            response.data.branch.data.video_consultation;
			self.video_consultation = response.data.branch.data.video_consultation;
			self.response.branch_images.forEach(ele => {
          
     
           self.images1.push(ele.image)
          
        });
          self.isFavourite = response.data.favourite || 0;
          self.branch_services = response.data.branch.data.branchServices.data;
          self.datecurrent();
          console.log("bhumi", self.new_slots);
          self.reviews = response.data.reviews;
          self.response.rating.data.rating =
            self.response.rating.data.rating / 20;
          console.log("wwww", self.response.rating.data.rating);
          self.test();
          console.log(self.branch_services);

          // tmp situation. We should get the user's location 1 time per F5
          navigator.geolocation.getCurrentPosition(function(position) {
            self.mapLat = position.coords.latitude;
            self.mapLong = position.coords.longitude;
            self.isLoading = false;
          });
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    }
    console.log("bhumi work", this.new_slots);

    this.roles = [
      { value: null, text: "Please select an option" },
      { value: "doctor", text: "doctor" }
    ];
    this.isLoading = true;
    if (this.role === "employee") {
      getBranch();
    } else {
      getService(); // returns favourites
    }
  }
};
</script>

<style scoped>
.vue-star-rating[data-v-34cbeed1] {
  margin-left: 31%;
}
.b-tabs {
  width: 100%;
}
h3 {
  background-color: black;
  color: white;
  text-align: left;
  padding: 20px;
  padding-left: 26px;
  font-size: 15px;
  font-weight: 500;
  margin: 0%;
}
h4 {
  font-size: 15px;
  font-weight: 700;
}
.pic {
  border-radius: 50%;
}
.form {
  background-color: #efefef;
  padding: 10px;
}
.display {
  display: inline !important ;
  text-align: left !important;
  height: auto;
  margin-top: 20px;
  overflow-x: hidden;
  /* //border: 1px #e2dbdb solid; */
  border-radius: 7px;
  padding: 3px;
  width: 100%;
}
button {
  margin: 3px;
  width: 65px;
  font-size: 12px;
  /* margin-left:0px; */
}
.submit {
  text-align: center;
  background-color: black;
  color: white;
  padding: 18x;
  font-size: 18px;
  font-weight: 500;
  margin: 0%;
}
/* .speciality {
  height: 200px;
  overflow-y: scroll;
  background-color: black;
} */
ul .speciality li {
  display: inline;
  list-style: none;
}
.warn {
  color: red;
  background-color: rgb(5, 5, 5);
}
.success {
  color: green;
}
.subt {
  font-size: 14px !important;
  font-weight: 400;
}
.image {
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  .nav-tabs .nav-item {
    margin-bottom: -1px;
    margin-right: 10px !important;
}
.nav-link {
    border: 3px solid transparent !important;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}
</style>
