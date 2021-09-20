<template>
  <b-container fluid style="max-width:100%;background-color:#edf9fc;">
    <b-container fluid style="max-width:1100px;">
       <loading :active.sync='isLoading' :is-full-page="true" :loader='loader' :color='clr' />
      <b-modal ref="my-modal" hide-footer :title="$t('service.book-appointment')">
        <div class="d-block text-center">
          <h3>{{ $t('service.login-first-text')}}</h3>
        </div>

        <b-button
          class="mt-3"
          variant="outline-primary"
          @click="loginRedirect"
        >{{ $t('service.login')}}</b-button>
        <router-link to="/register">
          <b-button class="mt-3" variant="outline-primary">{{ $t('service.sign')}}</b-button>
        </router-link><br/>

     <br/> OR <br/><br/>

     Kindly provide the following details <br/>
<b-form-group id="exampleInputGroup1" >
                          <b-form-input
                            id="exampleInput1"
                            type="text"
                            v-model="withoutlogin.name"
                           
                            placeholder="Name"
                          ></b-form-input>
                        </b-form-group><br/>
                        <b-form-group id="exampleInputGroup1" >
                          <b-form-input
                            id="exampleInput2"
                            type="email"
                            v-model="withoutlogin.email"
                           
                            placeholder="Email"
                          ></b-form-input>
                        </b-form-group><br/>
                        <b-form-group id="exampleInputGroup1" >
                          <b-form-input
                            id="exampleInput3"
                            type="number"
                            v-model="withoutlogin.contact"
                           
                            placeholder="Contact Number"
                          ></b-form-input>
                        </b-form-group><br/>

                     


                         <b-button
          
          variant="outline-primary" style="width:135px;"
          @click="withOutLoginBooking()"
        >Book Appointment</b-button> <br/>

        <strong v-if="errorEmail!=''" style="font-size:16px;color:red;margin-top:1px;">{{errorEmail}}</strong>

      </b-modal>
      <b-modal ref="my-modal3" hide-footer :title="$t('service.book-appointment')">
        <div class="d-block text-center">
          <b-alert show variant="warning">{{ $t('service.time-slot-message')}}</b-alert>

        </div>

      </b-modal>
       <b-modal ref="my-modal4" hide-footer :title="$t('service.book-appointment-home')">
        <div class="d-block text-center">
          <b-alert show variant="warning">Kindly select a address for home visit</b-alert>
          <div style="text-align:left;color:red;" > Provider Max. allowed distance for home visit : {{this.response.home_consultation_max_distance}} KM</div>
         <div style="align:left;"
          <b-button style="min-width:100px;align:left;" @click="openNewAddressPopUp()"
                      >
                       Add New
                      </b-button>
                      </div>
           <div v-for="(itm,index) in user_appointment_address" :key="itm.id">
             <b-card v-if="response.home_consultation_max_distance>itm.address_distance" style="margin:5px;background-color:#F4F4F4;padding: 1rem;">

             <b-card-body align="left" >
             <div  style="font-weight:500;text-align:left;">Address : {{index + 1}}</div>
            <div  style="font-weight:500;text-align:left;"> {{itm.address}},{{itm.postal_code}}, {{itm.city}}, {{itm.country}}</div>

            <div style="text-align:left !important;color:green;">Distance : {{itm.address_distance.toString().slice(0, 5)}} KM</div>
          <div>
          <button type="button" class="btn btn-success" style="background-color:#7ED957;" @click="bookAppointmentRevised(itm)"><i class="fa fa-check"></i></button>
<button class="btn" style="background-color:#727471;" @click="deleteAddress(itm.id)"><i class="fa fa-trash"></i></button>
         </div>
            </b-card-body>
             </b-card>

             <b-card v-else style="margin:5px;background-color:#F4F4F4;padding: 1.0rem;">
             <b-card-body align="left" >
                <div  style="font-weight:500;text-align:left;">Address : {{index + 1}}</div>
            <div style="font-weight:500;text-align:left;"> {{itm.address}},{{itm.postal_code}}, {{itm.city}}, {{itm.country}}</div> 

            <div style="text-align:left !important;color:red;">Distance : {{itm.address_distance.toString().slice(0, 4)}} KM</div>
         
          <div><button style="align:left;" type="button" disabled class="btn btn-secondary"><i class="fa fa-check"></i></button>
          <button class="btn" style="background-color:#727471;" @click="deleteAddress(itm.id)"><i class="fa fa-trash"></i></button></div>
            </b-card-body>
             </b-card>
           
          </div>
         
         
           
        </div>
      </b-modal>
      <b-modal ref="my-modal5" hide-footer title="Add Address">
       
           <button type="button" class="btn btn-info"  style="min-width:150px;" @click="locatorButtonPressed"
                      >
                       Get Current Location
                      </button>
                        <form>
            <div class="row" style="margin:10px;">
            <div class="col-md-6 col-sm-12">
             <div class="row">
              <div class="col">
             
               <div  class="form-group" >
                <label for="exampleFormControlInput1">Address</label>
                  <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                     placeholder="Enter your address"
                     v-model="address.address"
                       @change="editgeolocate()"
                     >
               </div>
                <div  class="form-group"  >
                  <label for="exampleFormControlInput1">City</label>
                  <input  type="text" class="form-control form-control-lg" id="exampleFormControlInput2"
                     placeholder="Enter your city"
                     v-model="address.city"
                       @change="editgeolocate()"
                     >
               </div>
                <div  class="form-group" >
                  <label for="exampleFormControlInput1">Country</label>
                  <input  
                     type="text" class="form-control form-control-lg" id="exampleFormControlInput3"
                     placeholder="Enter your country"
                     v-model="address.country"
                       @change="editgeolocate()"
                     >
               </div>
               <div  class="form-group"  >
                 <label for="exampleFormControlInput1">Postal Code</label>
                  <input  
                     type="text" class="form-control form-control-lg" id="exampleFormControlInput4"
                     placeholder="postal code"
                     v-model="address.postal_code"
                       @change="editgeolocate()"
                     >
               </div>
               <div class="form-group" >

                  <input readonly
                      type="text" class="form-control form-control-lg" id="exampleFormControlInput5"
                     placeholder="Latitude"
                     v-model="address.latitude"
                     
                     />
               </div>
               <div  class="form-group"  >
                  <input  readonly
                     type="text" class="form-control form-control-lg" id="exampleFormControlInput6"
                     placeholder="Longitude"
                     v-model="address.longitude"
                      
                     />
               </div></div></div>
</div>
 <div class="col-md-6 col-sm-12">

                <iframe v-if="address.address!='' && address.city!='' && address.country!=''"
                    frameborder="0"
                    style="width: 100%; height: 350px; border:0"
                    v-bind:src="
                      'https://www.google.com/maps/embed/v1/place?key=AIzaSyCdb5ZMCxtBbxOQfQmIVB9JrPAmDbTLVrA&q=' +
                        address.address +
                        address.city +
                        address.country
                    "
                    allowfullscreen
                  ></iframe
                > </div>
            </div>
         </form>
<br/>

<strong v-if="dist<this.response.home_consultation_max_distance" style="color:green;">***Provider distance from your address :  {{dist.toString().slice(0, 4)}} KM </strong>
<strong v-else style="color:red;">***Provider maximum distance for home visit is  {{this.response.home_consultation_max_distance}} Km and you addressis {{dist.toString().slice(0, 4)}} KM far from provider.</strong>
          <br/> 
           <b-button @click="saveNewAddressPopUp()"
                      >
                       Save
                      </b-button>

                      <div v-if="address_message" style="color:red;text-align:left;" > {{address_message}} </div>
        </div>
      </b-modal>
      <b-modal ref="my-modal2" hide-footer :title="$t('service.book-appointment')">
        <div class="d-block text-center">
          <!-- <h3>Book Appointment!</h3> -->
        </div>
        <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button> -->
        <p
          v-if="message === 'You have already booked this slot.'"
          class="warn"
        >{{ $t('service.already-book-message')}}</p>
        <p v-else class="success">{{ $t('service.success-message')}}</p>
        <b-alert class="mt-1" variant="outline-warning">{{message}}</b-alert>
        <router-link :to="`/${$i18n.locale}/appointments`">
          <b-button style="width:120px;">
            <font-awesome-icon icon="user-clock" />

            {{ $t('service.appointments')}}
          </b-button>
        </router-link>
      </b-modal>
     
      <!-- <b-modal id="modalID" title="Bootstrap-Vue" ref="infoModal">
      <p class="my-4">{{modal_message}}</p>
      </b-modal>-->
      <b-row v-if="!isLoading">
        <b-col cols lg="8" sm="6" xs="12">
          <!-- <b-card-group deck> -->
          <b-card no-body border-variant="light">
            <b-row>
              <!--b-col cols="12">
              <img class="pic" v-if="this.response.profile_pic === null" :width="150" :height="150" :src="imagePlaceholder" @error="$event.target.src='http://example.com/default.jpg'" />
              <img class="pic" v-else :src="this.response.profile_pic" :width="150" :height="150" alt="Image" />
              </b-col><br/-->

              <b-col cols="12" v-if="this.response.cover_pic">
                <img
                  :src="this.response.cover_pic"
                  class="white--text text-center v-img"
                  style="max-height:300px;width:100%;"
                  @error="$event.target.src='https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg'"
                />
              </b-col>

              <b-col cols="12" v-else>
                <img
                  :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg'"
                  class="white--text text-center v-img"
                  style="max-height:200px;width:100%;"
                />
              </b-col>
              <b-col cols="12" style="margin-top:20px;" >
                <b-row>
                  <b-col lg="6" sm="12" md="6" class="mview" align="center">
                    <div v-if="this.response.profile_pic">
                     
                        <img
                          :src="this.response.profile_pic"
                          class="pic"
                          style="width:150px; height:150px; border: 2px solid #f2f2e9;border-radius: 60%;"
                           @error="$event.target.src='https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"
                        />
                     
                    </div>

                    <div  v-else>
                      
                        <img
                          :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"
                          class="pic"
                          style="width:150px; height:150px; border: 2px solid #f2f2e9;border-radius: 60%;"
                        />
                      
                    </div>
                  </b-col>
                  <b-col lg="6" sm="12" md="6" style="text-align:center;">
                    <strong
                      style="font-weight:600 !important;font-size:22px;margin-top:10px;padding:10px;"
                    >{{this.response.name}}</strong>
                    <br />
                    <div style="align:center;display:inline-flex; margin-left:-35px;">
                      <star-rating
                        v-model="this.response.rating.data.rating"
                        :show-rating="false"
                        :read-only="true"
                        active-color="#47aed8"
                        :star-size="20"
                      ></star-rating>
                    </div>
                    <h6
                      v-if="this.response.category_name=='Medical Care'"
                    >{{ $t('search.medical-care')}}</h6>
                    <h6 v-if="this.response.category_name==='Pharmacy'">{{ $t('search.pharmacy')}}</h6>
                    <h6
                      v-if="this.response.category_name==='Fitness Center'"
                    >{{ $t('search.fitness')}}</h6>
                    <h6
                      v-if="this.response.category_name==='Health and Well Being'"
                    >{{ $t('search.health-wellbeing')}}</h6>
                    <h6
                      v-if="this.response.category_name==='Assisted Living for Senior Care'"
                    >{{ $t('search.senior-care')}}</h6>
                    <h6
                      v-if="this.response.category_name==='Alternative Medicine'"
                    >{{ $t('search.alternarive-medicine')}}</h6>
                    <h6 v-if="this.response.category_name==='Others'">{{ $t('search.others')}}</h6>
                  </b-col>

                  <b-col>
                    <div style="float:right;">
                      <b-button
                        v-if="this.isFavourite!='1'"
                        pill
                        variant="outline-dark"
                        style="border:none;"
                        @click="setFavourite()"
                      >
                        <font-awesome-icon
                          icon="heart"
                          color="grey"
                          style="font-size:28px;align:right;"
                        />
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
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12" style="text-align:left;margin:10px;">
                <p class="subt">{{this.response.bio_txt}}</p>
              </b-col>
            </b-row>
          </b-card>
          <div>
            <br />
            <br />


            <b-card no-body  >
              <b-tabs  
                card
                active-nav-item-class="font-weight-bold text-uppercase text-danger"
                border-variant="light"
              >
                <b-tab  no-body active :title="$t('service.overview')">
                  <b-card class="text-left" border-variant="light">
                    <label
                      style="color:font-size:22px;#141414;text-align:left;"
                    >{{ $t('service.address')}}</label>
                    <p class="subt">
                      {{this.response.address}},
                      {{this.response.city}},
                      {{this.response.country}}
                    </p>

                    <label
                      style="color:font-size:22px;#141414;text-align:left;"
                    >{{ $t('service.contact')}}</label>
                    <div v-if="this.response.contacts.data">
                      <div v-for="it in this.response.contacts.data" :key="it.contact_number">
                        {{it.country_name}} : {{it.country_code}} - {{it.contact_number}}
                        <br />
                      </div>
                    </div>
                    <br />
                    <label
                      style="color:font-size:22px;#141414;text-align:left;"
                    >{{ $t('service.email')}}</label>
                    <p>{{this.response.email}}</p>
                    <!--label
                      style="color:font-size:22px;#141414;text-align:left;"
                    >{{ $t('service.working-hours')}}</label>
                    <p class="subt">
                      {{this.response.opening_hours.HH}}:{{this.response.opening_hours.mm}} to
                      {{this.response.closing_hours.HH}}:{{this.response.closing_hours.mm}}
                    </p-->
                    <!--label style="color:font-size:22px;#141414;text-align:left;"
                    >{{ $t('service.about')}}</label-->

                    <label
                      style="color:font-size:22px;#141414;text-align:left;"
                    >{{ $t('service.working-days')}}</label>

                    <div v-for="item in this.response.branchWeekDays.data" :key="item.Monday">
                      <b-row >
                        <b-col cols >
                          <strong v-if="item.active === '1'">
                            {{item.day}}
                            <img src="../assets/unnamed.png" height="30" />
                          </strong>
                          <strong v-else>{{item.day}}</strong>

                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <strong 
                            v-if="item.active === '1'"
                          >{{item.opening_hours.HH}}:{{item.opening_hours.mm}} - {{item.closing_hours.HH}}:{{item.closing_hours.mm}}</strong>
                          <strong v-else>Not Available</strong>
                        </b-col>
                      </b-row>
                    </div>
                    
                  </b-card>
                </b-tab>

                <b-tab :title="$t('service.specialities')" >
                  <b-card class="text-left">
                     <!-- <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    ></b-pagination>-->
                    <!-- <div > -->
                    <div v-if="this.response.specialities!=''">
                      <div
                        v-for="item in this.response.specialities.data"
                        :key="item.id"
                        style="display:inline-flex;"
                      >
                        <div
                          v-if="item.active == 1"
                          style="display:inline-flex;text-align:center;border-radius:25px;font-weight:600;padding:10px;margin:10px; background-color:#ebf4fc !important;"
                          @click="getBranchData(item.id)"
                        >{{item.name}}</div>
                      </div>

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
                      <b-card v-for="item in this.response.branchServices.data" :key="item.id">
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
                               @error="$event.target.src='https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg'"
                            />
                          </div>
                          <div v-else>
                            <img :src="imagePlaceholder" :width="100" :height="100" />
                          </div>
                          <strong
                            v-if="item.employees.data.first_name"
                          >Name : {{item.employees.data.first_name}} {{item.employees.data.last_name}}</strong>
                          <strong v-else>Name : ---</strong>
                          <div v-for="item2 in item.employees.data.roles.data" >
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

                <!--b-tab :title="$t('service.Image-Gallery')" style="color:red;">
		<div v-if="this.response.branch_images">	
 <br/>		
	 <b-row >
      <b-col style="display:inline-flex;" v-for="itm in this.response.branch_images"
                  :key="itm.id">
               
	             
			    
				   <b-img
                           :src="itm.image"
						   class="image"
                           alt="Responsive image"
						  @click="showGallery()"
                             style="padding:0px;width:100px;height:100px; border: 1px solid black;"
                         ></b-img>
		
			
	</b-col>
	  
	   
    </b-row></div>
	<div v-else> <b-card class="text-left">{{ $t('service.currently-not-available')}}</b-card></div>
                </b-tab-->

                <b-tab :title="$t('service.insurance')">
                  <b-card class="text-left">{{ $t('service.currently-not-available')}}</b-card>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>

          <!-- </b-card-group> -->
        </b-col>
        
        <b-col cols lg="4" sm="6" xs="12" v-if="response.category_name !== 'Pharmacy'" >
        
          <b-container class="container" style="padding:4px;">
            <b-row>
              <b-col>
        
<b-button  class="hbttn"
                                        
                                        style="margin: 2px !important;border:1px solid #47aed8;
  width: 110px !important;
  font-size: 16px !important !important;border-radius:15px;min-height: 32px;"  @click="consultation_event('in_clinic')" v-b-tooltip.hover title="In Clinic Consultation"
                                        ><font-awesome-icon icon="calendar"  />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.in-clinic") }}</strong><div style="display:inline-flex;align:left;margin-left:10px;" v-if="consultation_type==='in_clinic'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></b-button>


                                      <strong v-if="this.response.video_consultation=='1'" >
                    <b-button class="hbttn"
                                        size="sm"
                                         style="margin: 1px !important;border:1px solid #47aed8;
  width: 110px !important;
  font-size: 16px !important !important;border-radius:15px;min-height: 32px;"   @click="consultation_event('is_video')" v-b-tooltip.hover title="Video Consultation"
                                        ><font-awesome-icon icon="video"   />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.video") }}</strong><div style="display:inline-flex;align:left;margin-left:10px;" v-if="consultation_type==='is_video'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></b-button
                                      ></strong>
                                      <strong v-else><b-button class="hbttn"
                                        size="sm"
                                          style="margin: 1px !important;border:1px solid #47aed8;
  width: 80px !important;
  font-size: 16px !important !important;border-radius:15px;min-height: 32px;"    v-b-tooltip.hover title="Video Consultation"
                                        ><font-awesome-icon icon="video"  />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.video") }}</strong></b-button
                                      ></strong>
 <strong v-if="this.response.home_consultation=='1'" >
                                    
                                      <b-button class="hbttn"
                                        size="sm"
                                         style="margin: 1px !important;border:1px solid #47aed8;
  width: 90px !important;
  font-size: 16px !important !important;border-radius:15px;min-height: 32px;"    @click="consultation_event('is_home')" v-b-tooltip.hover title="Home Visit"
                                        ><font-awesome-icon icon="medkit"  />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.home") }} </strong><div style="display:inline-flex;align:left;margin-left:5px;" v-if="consultation_type==='is_home'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></b-button
                                      >
                                      </strong>
                                       <strong v-else>
                                      <b-button class="hbttn"
                                        size="sm"
                                      disabled
                                            style="margin: 1px !important;border:1px solid #47aed8;
  width: 80px !important;
  font-size: 16px !important !important;border-radius:15px;min-height: 32px;"    v-b-tooltip.hover title="Home Visit"
                                        ><font-awesome-icon icon="medkit"  />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.home") }} </strong></b-button
                                      ></strong>


  </b-col>
            </b-row>
               <b-row>
              <b-col>
                <h3 v-if="consultation_type=='is_video'">{{ $t('service.book-appointment-video')}}</h3>
                 <h3 v-if="consultation_type=='in_clinic'">{{ $t('service.book-appointment-inclinic')}}</h3>
                 <h3 v-if="consultation_type=='is_home'">{{ $t('service.book-appointment-home')}}</h3>
                  <!--h3 v-if="is_video==0 && in_clinic==0 && is_home==0" >{{ $t('service.book-appointment')}}</h3-->
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form"  >
                  <div class="hidden-scrollbar">
                    <b-container class="bv-example-row">
                      <b-row>
                        <b-col cols="4" style="text-align:left;">
                          <b-button
                            @click="datePre(current_date1)"
                            variant="outline-primary"
                            style="border-color: #ffffff; !important"
                          >
                            <img src="../assets/left-arrow.png" height="15" width="12" />
                          </b-button>
                        </b-col>
                        <b-col
                          cols="4"
                          class="text-center"
                          style="font-size:12px;padding-top:10px;display:inline-flex;"
                        >{{current_date}}</b-col>

                        <b-col cols="4" style="text-align:end;">
                          <b-button
                            @click="datePost(current_date1)"
                            variant="outline-primary"
                            style="border-color: #ffffff; !important"
                          >
                            <img src="../assets/arrow-point-to-right.png" height="15" width="12" />
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-container>
                    <div class="slots inner text-center display">
                      <b-card v-if="new_slots!=''" style="overflow-y: auto;">
                        <div v-for="slot in new_slots" :key="slot.slot" class="display">
                          <div v-if="slot.available==1" class="display">

                          <div v-if="slot.date>=currentDate"  class="display">
                            <div v-if="slot.start_time<=currenttime && slot.date===currentDate"  class="display">
                         
                              <b-button
                              disabled
                                size="sm"
                              style="color:white !important;background-color:grey !important;"
                              >{{slot.start_time}}</b-button>
                              <!-- {{new_slots}} -->
                            </div>
<div v-else  class="display">
                              <b-button
                                size="sm" class="slotsanimation"
                                
                                @click="select_slots(slot.id, slot)"
                              >{{slot.start_time}}</b-button>
                              <!-- {{new_slots}} -->
                            </div>
</div>
<div v-else  class="display"> <b-button
                              disabled
                                size="sm"
                              style="color:white !important;background-color:grey !important;"
                              >{{slot.start_time}}</b-button></div>



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
                          <h5
                            style="color:grey;text-align:center;font-size:12px;"
                          >{{ $t('service.not-available')}}</h5>
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


                  <b-form-group
                    id="input-group-1"
                    style="font-size:14px;"
                    :label="$t('service.choose-your-service')"
                    label-for="input-1"
                  >
                    <select required v-model="form.service" class="form-control" id="input-1">
                      <option value="0">Select type</option>
                      <option
                        v-for="item in branch_services"
                        :value="item"
                        :key="item.id"
                      >{{ item.name }} ( {{ item.price }} {{ item.currency_code }} )</option>
                    </select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-3"
                    :label="$t('service.add-details')"
                    style="font-size:14px;"
                    label-for="input-3"
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.remark"
                      :placeholder="$t('service.add-details')"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group
                      style="background-color:white;"
                    
                      id="checkboxes-4"
                    >
                       <input type="checkbox"  v-model="form.checked" >
                      {{ $t('service.share-medical-history')}}
                    </b-form-checkbox-group>
                  </b-form-group>

  <div style="background-color:#d7f1f5;display:block;min-height:60px;"  align="left">
  <b-button variant="outline-primary" align="left"  @click="$refs.addinputUpload.click()" >
                      <i class="fa fa-plus"></i> 
                    </b-button><span style="color:#007bff;font-size:12px;" >&nbsp;&nbsp;Add Files (Max.3 -pdf/jpeg/png) </span>
                    <div   v-for="(itm,index) in display" ><span style="color:##6c757d;font-size:13px;margin-left:2px;" > [{{index+1}}]. {{itm}}</span>
                    <button class="btn" style="max-width:30px;background-color:#d7f1f5;color:red;" @click="deleteImage(index)" ><i class="fa fa-trash"></i></button>
                    
                  </div>
                    <input
                      v-show="false"
                      ref="addinputUpload"
                      type="file"
                      @change="addonImageChange"
                      multiple
                    /></div>
                    <br/>
                  <div class="submit">
                    <b-button type="submit" >Book</b-button>
                   
                  </div>
                </b-form>
              </b-col>
              <div v-if="this.response.branch_images!=''">
                <br />
                <br />
                <br />
                <label
                  style="color:font-size:22px;#141414;text-align:left;"
                >{{ $t('service.Image-Gallery')}}</label>
                <b-row>
                  <b-col
                    style="display:inline-flex;"
                    v-for="itm in this.response.branch_images"
                    :key="itm.id"
                  >
                    <b-img
                      :src="itm.image"
                      class="image"
                      alt="Responsive image"
                      @click="showGallery()"
                      style="padding:0px;width:100px;height:100px; border: 1px solid black;"
                    ></b-img>
                  </b-col>
                  <gallery :images="images1" :index="index" @close="index = null"></gallery>
                </b-row>
              </div>
            </b-row>
          </b-container>
           
        </b-col>

      </b-row>

      <b-row >
        <b-col cols="12" v-if="shmap==true">
          <h4 class="text-left" >Directions Map</h4>
          <hr />
          <DirectionsMap :service1="response.latitude" :service2="response.longitude"  :service="response" :zoom="3"></DirectionsMap>
        </b-col>
      </b-row>
    </b-container>
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
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import DirectionsMap from "./partials/DirectionsMap";
import imagePlaceholder from "../assets/placeholder.png";
import Rating from "./partials/Rating";
import { mapGetters, mapState } from "vuex";
import StarRating from "vue-star-rating";
import VueGallery from "vue-gallery";
import moment from 'moment';
let data_form;
export default {
  metaInfo() {
     return {
       title: this.$route.params.name,
        meta: [
       { name: 'viewport', content:'width=device-width,initial-scale=1.0' },
                {property: 'og:title', content: this.$route.params.name },
          {property: 'og:site_name', content: 'kovered'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: 'https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg' },
           {property: 'og:image:alt', content: 'https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg' },
          {property: 'og:description', content: this.response.bio_txt }
                
            ],
             link: [
    {rel: 'canonical', href: 'https://kovered.io/en/providers/:this.$route.params.id/:this.$route.params.name'}
  ]
     }
  },
  
  props: ["slots", "remark", "service", "checked", "slot_name", "date","video_consultation"],
mounted() {
   
    window.scrollTo(0, 0);

  },
  data() {
    return {
    addnewimage:[],
    display:[],
    loader:'dots',
    clr:'#17a2b7',
    shmap:true,
    dist:'',
    address_message:'',
    address: {
      address:'',
      city:'',
      country:'',
      postal_code:'',
      latitude:'',
      longitude:'',
    },
    user_appointment_address:[],
    consultation_type:'in_clinic',
    is_video_consultation:'',
    is_home:'',
    in_clinic:'',
    is_video:'',
   currentDate:'',
   currenttime:'',
    Slatitude:'',
    Slongitude:'',
    errorEmail:'',
     reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    withoutlogin :{
      name:'',
      email:'',
      contact:''
    },
    withoutlogindefault :{
      name:'',
      email:'',
      contact:''
    },
      index: null,
      images1: [],
      alert: false,
      response: null,
      message: null,
      message2: null,
      current_date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
      current_date1: new Date(),
      new_slots: [],
      reviews: [],
      form: {
        slot: "",
        remark: "",
        service: null,
        checked: false,
        slot_name: "",
        date: null,
        video_consultation: 0,
      
        home_visit_address_id:'',
        attachment:[],
      },
      formdefault: {
        slot: "",
        remark: "",
        service: null,
        checked: false,
        slot_name: "",
        date: null,
        video_consultation: 0,
        
          home_visit_address_id:'',
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
      mapLat: null,
      mapLong: null,
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
      
    };
  },
  components: {
    Rating,
    Loading,
    DirectionsMap,
    StarRating,
    gallery: VueGallery
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
   created() {





    var currentDate = new Date();
                   
           // this.currenttime = new Date().toJSON().slice(11,16).replace(/-/g,'/');
         
             this.currentDate=currentDate.toJSON().slice(0,10).replace(/-/g,'-');
             
         currentDate.setHours( currentDate.getHours() + 2 );
         this.currenttime=currentDate.toJSON().slice(11,16).replace(/-/g,'/');
         
    
    if (this.$route.query.form) {
   
      let dataform = [];
    
      this.test_route(this.$route.query.form);
      var dataform = console.log(this.$route.query.form.slot);
     
    
    }

    var self=this;
    navigator.geolocation.watchPosition(function(position) {
   
  },
 function(error) {
    if (error.code == error.PERMISSION_DENIED)
 
      self.shmap=false;
 })
  if(self.$route.params.consultationtype=='videoconsultation')
  {
self.is_video=1;
  self.form.video_consultation=1;
  self.consultation_type='is_video';
  }
  
  if(self.$route.params.consultationtype=='inclinic')
  { 
  self.in_clinic=1;
   self.form.video_consultation=0;
 self.consultation_type='in_clinic';
  
  }
   if(self.$route.params.consultationtype=='homeconsultation')
  { 
  self.is_home=1;
   self.form.video_consultation=0;
 self.consultation_type='is_home';
  
  }
   self.getBranch();
   self.getService();
   
   
    self.roles = [
      { value: null, text: "Please select an option" },
      { value: "doctor", text: "doctor" }
    ];
   
  },
  methods: {
  consultation_event(c_type)
{
    var self=this;
    self.consultation_type=c_type;

    if(c_type=='in_clinic') self.in_clinic=1;
    if(c_type=='is_video') self.is_video=1;
    if(c_type=='is_home') self.is_home=1;

},
    showGallery() {
      this.index = 1;
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
     showModal4() {
      this.$refs["my-modal4"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$refs["my-modal2"].hide();
      this.$refs["my-modal3"].hide();
    },
    select_slots(id, slots) {
    
      this.form.slot = id;
      this.form.slot_name = slots.start_time;

      let self = this;
      if (self.current_date1.getMonth() + 1 <= 9) {
         if(self.current_date1.getDate()<=9)
         {

        this.form.date =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-0" +
          self.current_date1.getDate();
          }
          else
          {
          this.form.date =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
          }
      } else {
       if(self.current_date1.getDate()<=9)
         {
        this.form.date =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-0" +
          self.current_date1.getDate();
          }
          else
          {
          this.form.date =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
          }
      }
      this.selectedSlot = slots;
      // if (this.form.checked[0] === "1") {
      //   this.form.checked = 1;
      // }
     
    },
    test() {
     
      this.branch_services.forEach(ele => {
        this.service_name.push(ele.name);
      });
     
    },
    datecurrent() {
      let ActiveDate;
    
      const self = this;
      self.current_date1;
     
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
          date: self.current_date
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
         self.current_date = moment(self.current_date).format("D MMM ddd");
         // self.current_date = self.current_date1.toString().slice(0, 10);
        })
        .catch(function(error) {
         
        });
    },
    datePre() {
      let ActiveDate;
      const self = this;
      self.current_date1.setDate(self.current_date1.getDate() - 1);

      if (self.current_date1.getMonth() + 1 <= 9) {
        if(self.current_date1.getDate()<= 9)
        {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-0" +
          self.current_date1.getDate();
}
else
{
   ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate(); 
}

      } else {

       if(self.current_date1.getDate()<= 9)
       {
        ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-0" +
          self.current_date1.getDate();
          }
          else
          {
          ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
          }
      }
      axios
        .post("branch/slots", {
          branch_id: self.response.id,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = moment(self.current_date1).format("D MMM ddd"); 

        })
        .catch(function(error) {
         
        });
    },
    datePost() {
      const self = this;
      let ActiveDate;
      self.current_date1.setDate(self.current_date1.getDate() + 1);

      if (self.current_date1.getMonth() + 1 <= 9) {

      if(self.current_date1.getDate()<= 9)
{
        ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-0" +
          self.current_date1.getDate();
}
else
{
  ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
}


      } else {


      if(self.current_date1.getDate()<= 9)
{
        ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-0" +
          self.current_date1.getDate();
}
else
{
   ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
}

      }

      axios
        .post("branch/slots", {
          branch_id: self.response.id,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = moment(self.current_date1).format("D MMM ddd"); 
       
        })
        .catch(function(error) {
          // TODO handle error
         
        });
    },
    //book appointment
    onSubmit(evt) {
     
      evt.preventDefault();
     
      var self = this;
       
 var PODate = new Date(new Date().getTime()+(7*24*60*60*1000));
        PODate=PODate.toJSON().slice(0,10).replace(/-/g,'-');
        
       var TDate=new Date().toJSON().slice(0,10).replace(/-/g,'-');

       if(self.form.date>=TDate && self.form.date <=PODate)
       {
   //alert(self.form.checked);
      if (self.form.checked === true) {
        self.form.checked = 1;
      } else {
        self.form.checked = 0;
      }
      
      if (self.isAuthenticated) {
        if (self.form.slot_name === "" || self.form.slot == undefined) {
          self.showModal3();
        } else {
               if(self.consultation_type=='is_home')
               {
               self.getUserAddress();
             
               
                self.showModal4();

               }
       else
       {


        self.$router.push({ name: "Payment", query: {slots: self.selectedSlot,date: self.form.date,is_medical_history: self.form.checked,
            service: self.form.service,
             remarks: self.form.remark,
             consultation_type: self.consultation_type,
              home_visit_address_id:'',
              branch_name:self.response.name,
              branch_id:self.response.id,
              profile_pic:self.response.profile_pic,
              type: 'web',
              attachment:self.form.attachment,
              display:self.display,
              tax:self.response.user_tax
            

              } });

          // axios
          // .post("user/bookappointment-reviseddd", {
         //     slots: self.selectedSlot,
        //     date: self.form.date,
       //       is_medical_history: self.form.checked,
       //     service_id: self.form.service,
        //     remarks: self.form.remark,
        //     consultation_type: self.consultation_type,
         //     home_visit_address_id:'',
        //      branch_name:self.response.name,
        //      branch_id:self.response.id,
			    //    type: 'web',
          //  })
          //  .then(function(response) {
            
         //     if (
         //       response.data.error === "You have already booked this slot."
         //     ) {
         //      self.form=self.formdefault;

           //     self.message = response.data.error;
               
           //     self.showModal2();
           //   } else {
               
			 //  self.sendAppointmentMail(response.data.id);
       
       //  if(self.form.attachment.length!=='0')
      //   {
      //    self.saveAppointmentDocs(response.data.id);
       //   }
       //   self.form=self.formdefault;
       //         self.message =
       //           "Your Appointment has been booked. Please click here to checkout details.";
       //         self.form.attachment=[];
       //         self.display=[];
        //        self.showModal2();
       //       }
              // self.removeEmployeeForm.email = "";
              // self.removeEmployeeForm.roles = [];
              // self.modal_message = response.data.success;
              // self.$refs.infoModal.show();
        //    })
        //    .catch(function() {
        //      self.modal_message = "Something went wrong";
        //    });
            }
        }
      } else {
        

        self.showModal();
      }
      }
      else
      {
      alert('You are not allowed to book appointment of previous date or more than 7 days later date.');
      }
    },
saveAppointmentDocs(id)
{
  var self=this;
  if(self.form.attachment.length!=='0')
  {
   axios
           .post("user/saveUserAppointmentDocs", {
            
             id:id,
              attachment:self.form.attachment,
              display:self.display,
            })
            .then(function(response) {
            
             
            })
            .catch(function() {
             
            });
  }
},
  bookAppointmentRevised(itm)
  {
var self=this;

  self.$router.push({ name: "Payment", query: {slots: self.selectedSlot,date: self.form.date,is_medical_history: self.form.checked,
            service: self.form.service,
             remarks: self.form.remark,
             consultation_type: self.consultation_type,
              home_visit_address:itm,
              branch_name:self.response.name,
              branch_id:self.response.id,
              profile_pic:self.response.profile_pic,
              type: 'web',
              attachment:self.form.attachment,
              display:self.display,
              tax:self.response.user_tax
            

              } });

 //axios
         //   .post("user/bookappointment-revised", {
         //     slots: self.selectedSlot,
          //    date: self.form.date,
          //    is_medical_history: self.form.checked,
          //    service_id: self.form.service,
         //     remarks: self.form.remark,
          //    consultation_type: self.consultation_type,
          //    home_visit_address_id:itm.id,
              
       
        //type: 'web',
        //    })
        //    .then(function(response) {
             
         //     if (
         //       response.data.error === "You have already booked this slot."
         //     ) {
          //     self.form=self.formdefault;

         //       self.message = response.data.error;
                
         //       self.showModal2();
         //     } else {

              
            //   if(self.form.attachment.length!==0)
        // {
       //   self.saveAppointmentDocs(response.data.id);
       //   }
       //        self.form=self.formdefault;
        //  self.sendAppointmentMail(response.data.id);

         //       self.message =
         //         "Your Appointment has been booked. Please click here to checkout details.";
         //        self.form.attachment=[];
         //       self.display=[];
         //       self.showModal2();
         //     }
         //    
         //   })
          //  .catch(function() {
          //    self.modal_message = "Something went wrong";
         //   });
  },
    getUserAddress()
    {
    var self=this;
   
     // self.user_appointment_address=[];
           axios
            .post("user/appointmentaddress", {branch_id: self.$route.params.id })
            .then(function(response) {
             
                 self.user_appointment_address=response.data.appointment_address;
 
            })
            .catch(function() {
              
            });

            },
            checkIfExists(itemId) {
      this.exists = this.items.some((item) => {
        return item.id === itemId
      })
    },
    locatorButtonPressed() {
  
   navigator.geolocation.getCurrentPosition(

      position => {
         this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
      },
      error => {
       console.log(error.message);
      }
   );
    
},
async getStreetAddressFrom(lat, long) {
   try {
         
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
          var self=this;
          self.address.latitude=lat;
          self.address.longitude=long;
           axiosTmp
            .get(url)
            .then(function(response2) {
           

 let locationComponents =
                response2.data.results[0].address_components;
             
              for (let comp of locationComponents) {
 for (let type of comp.types) {
                  // Before this is a function-->  if (!self.cityName && type === "administrative_area_level_2")
                  if (
                    !self.address.city &&
                    type === "administrative_area_level_2"
                  ) {
                    self.address.city = comp.long_name;
                  
                    break;
                  }
                  if (!self.address.country && type === "country") {
                    self.address.country = comp.long_name;
                  
                    break;
                  }
                  if (!self.address.address && type === "sublocality_level_1") {
                    self.address.address = comp.long_name;
                   
                    break;
                  }
                }

              }


              })
        .catch(function(error) {
         
        });

     
   } catch (error) {
    
   }
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
	withOutLoginBooking()
	{

	var self=this;

  if(self.consultation_type==='is_home')
{
   self.errorEmail = "*** For Home Visit, you must need to login and select the address";
}
else
{
var PODate = new Date(new Date().getTime()+(7*24*60*60*1000));
        PODate=PODate.toJSON().slice(0,10).replace(/-/g,'-');
        
       var TDate=new Date().toJSON().slice(0,10).replace(/-/g,'-');
   
       if(self.form.date>=TDate && self.form.date <=PODate)
       {

      if (self.form.checked === true) {
        self.form.checked = 1;
      } else {
        self.form.checked = 0;
      }
     
   
        if(self.withoutlogin.email == null || self.withoutlogin.email == '')
{

  self.errorEmail = "***Please Enter Email";
  
}
else if(!self.reg.test(self.withoutlogin.email))
{
  self.errorEmail = "***Please Enter Correct Email";
 
} 
else if(self.withoutlogin.name == null || self.withoutlogin.name == '')
{
	 self.errorEmail = "***Please Enter your name";
}
else if(self.withoutlogin.contact.length > 13 || self.withoutlogin.contact === null || self.withoutlogin.contact === '')
{
	self.errorEmail = "***Please Enter your correct  contact number";
}
else {


        self.$router.push({ name: "Payment", query: {slots: self.selectedSlot,date: self.form.date,is_medical_history: self.form.checked,
            service: self.form.service,
             remarks: self.form.remark,
             consultation_type: self.consultation_type,
              home_visit_address_id:'',
              branch_name:self.response.name,
              branch_id:self.response.id,
              profile_pic:self.response.profile_pic,
              type: 'web',
              attachment:self.form.attachment,
              display:self.display,
              user_name:self.withoutlogin.name,
              user_email:self.withoutlogin.email,
              user_contact:self.withoutlogin.contact,
              tax:self.response.user_tax
            

              } });


        //  axios
           // .post("user/bookappointment/withoutlogin-revised", {
          //    slots: self.selectedSlot,
         //     date: self.form.date,
        //      is_medical_history: self.form.checked,
         //     service_id: self.form.service,
         //     remarks: self.form.remark,
         //     consultation_type: self.consultation_type,
         //      home_visit_address_id:'',
			//  type: 'web',
			//  user_name:self.withoutlogin.name,
		//	  user_email:self.withoutlogin.email,
		//	  user_contact:self.withoutlogin.contact,
     //       })
       //     .then(function(response) {
             
        //      if(response.data.usererror)
        //      {
        //       alert(response.data.usererror);
         //     }
         //     else if (response.data.error) {
         //       self.message = response.data.error;
              
         //       self.showModal2();
         //     } else {
         //     if(self.form.attachment.length!==0)
        // {
       //   self.saveAppointmentDocs(response.data.id);
      //    }
			//    self.sendAppointmentMailWithoutLogin(response.data.id);
			//    self.sendUserRegistrationMail(response.data.id);
      //          alert('Your Appointment has been booked. Kindly login for more details.');
      //           self.$refs["my-modal"].hide();
       //          self.withoutlogin=self.withoutlogindefault;
       //          self.form=self.formdefault;
       //       }
            
       //     })
      //      .catch(function() {
      //        self.modal_message = "Something went wrong";
       //     });
        }
     
      }
      else
      {
      alert('You are not allowed to book appointment of previous date or more than 7 days later date.');
      }
      }
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
    loginRedirect() {

      this.branch_id = this.response.id;
       
      let form = this.form;

 if(this.consultation_type==='is_video')
 {
      this.$router.replace({
        name: "Login",
        query: { form: this.form, redirect: `providers/${this.branch_id}/videoconsultation/${this.response.name}`.replace(/\s/g, '-') },
        params: { id: this.branch_id }
      });
      }
      else if(this.consultation_type==='is_home')
      {
 this.$router.replace({
        name: "Login",
        query: { form: this.form, redirect: `providers/${this.branch_id}/homeconsultation/${this.response.name}`.replace(/\s/g, '-') },
        params: { id: this.branch_id }
      });
      }
      else
      {
       this.$router.replace({
        name: "Login",
        query: { form: this.form, redirect: `providers/${this.branch_id}/inclinic/${this.response.name}`.replace(/\s/g, '-') },
        params: { id: this.branch_id }
      });
      }
      // this.$router.push({ name: "Doctors", query: this.form });
      
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
      this.form.checked = false;
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
           
            self.isLoading = false;
          });
      } else {
        this.showModal();
      }
    },
    addEmployee() {
      const self = this;
     
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
      editgeolocate() {
      var app = this;
      var loc =
        this.address.address +
        "," +
        this.address.city +
        "," +
        this.address.country +
        "," +
        this.address.postal_code;

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: loc }, (results, status) => {
        if (status === "OK") {
          this.address.latitude = results[0].geometry.location.lat();
          this.address.longitude = results[0].geometry.location.lng();
        }
      });

      var self=this;
      self.dist='';
     let lat2=self.response.latitude;
     let lon2=self.response.longitude;
     let lat1=self.address.latitude;
     let lon1=self.address.longitude;

  if ((lat1 == lat2) && (lon1 == lon2)) {
   self.dist=0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
   dist = dist * 1.609344 
    //if (unit=="N") { dist = dist * 0.8684 }
 self.dist=dist;
  }


    },
    test_route(val) {

   
      this.form.checked = val.checked;
      this.form.remark = val.remark;
      this.form.service = val.service;
   
     this.form.date = this.$route.query.form.date;
    this.current_date=this.$route.query.form.date;
   if(!this.current_date)
    this.current_date=new Date().toJSON().toString().slice(0, 10);
     this.form.slot_name=this.$route.query.form.slot_name;
    
       this.form.video_consultation=this.$route.query.form.video_consultation;

 this.form.slot = this.$route.query.form.slot;
 var self=this;
      axios
        .get("/getslotsdata/" + this.$route.query.form.slot)
        .then(function(response) {
        
          self.selectedSlot =response.data.slotdata;
             
        })
        .catch(function(error) {
        
          
        });
    },
    openNewAddressPopUp()
    {
     this.$refs["my-modal5"].show();

    },
    saveNewAddressPopUp()
    {
         var self=this;
         
         if(self.address.address=='')
         self.address_message="Kindly add your address";
        else if(self.address.city=='')
         self.address_message="Kindly add your city"; 
          else if(self.address.country=='')
         self.address_message="Kindly add your country"; 
          else if(self.address.postal_code=='')
         self.address_message="Kindly add your postal_code"; 
          else if (self.address.latitude=='')
         self.address_message="Your address is not proper, Kindly try again"; 
          else if(self.address.longitude=='')
         self.address_message="Your address is not proper, Kindly try again";  
        else
        {

  if(self.dist>self.response.home_consultation_max_distance)
  {
if (confirm("Provider doesn't provider service at this address. Do you want to save this address?")) {

  
             axios
        .post("/user/save-appointment-address", self.address)
        .then(function(response) {
         if(response.data.success)
          {
          self.$refs["my-modal5"].hide();

           self.getUserAddress();
 self.$refs["my-modal4"].show();
          }
          else
          {
           self.address_message="Error! Kindly try again.";
          }
             
        })
        .catch(function(error) {
        
          
        });  
        }
        }
        else
        {

             axios
        .post("/user/save-appointment-address", self.address)
        .then(function(response) {
         if(response.data.success)
          {
          self.$refs["my-modal5"].hide();

           self.getUserAddress();
 self.$refs["my-modal4"].show();
          }
          else
          {
           self.address_message="Error! Kindly try again.";
          }
             
        })
        .catch(function(error) {
         
          
        });  

        }

        }
    },
     checkAddress() {
var self=this;
     let lat2=self.response.latitude;
     let lon2=self.response.longitude;
     let lat1=self.address.latitude;
     let lon1=self.address.longitude;

  if ((lat1 == lat2) && (lon1 == lon2)) {
   self.dist=0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
   dist = dist * 1.609344 
    //if (unit=="N") { dist = dist * 0.8684 }
 self.dist=dist;
  }
},
deleteAddress(id)
{
  var self=this;

  if (confirm("Are you sure to delete this address?")) {
             axios
        .post("/user/delete-appointment-address", {id:id})
        .then(function(response) {
        //self.user_appointment_address=response.data.appointment_address;

         if(response.data.success)
          {
        
           self.getUserAddress();

          }
          else
          {
           self.address_message="Error! Kindly try again.";
          }
             
        })
        .catch(function(error) {
          
          
        });  
        }
},
getBranch() {
this.isLoading = true;
var self=this;
      axios
        .get("/branch/" + self.$route.params.id)
        .then(function(response) {
          self.response = response.data.branch.data;
          self.is_video_consultation =
            response.data.branch.data.video_consultation;
          self.response.branch_images.forEach(ele => {
            self.images1.push(ele.image);
          });
          self.isLoading = false;
        
        })
        .catch(function(error) {
       
          self.isLoading = false;
        });
    },

getService() {
this.isLoading = true;
var self=this;
      axios
        .get("/service/" + self.$route.params.id)
        .then(function(response) {
         
          
          self.response = response.data.branch.data;
          self.is_video_consultation =
            response.data.branch.data.video_consultation;
        
          self.response.branch_images.forEach(ele => {
            self.images1.push(ele.image);
          });
          self.isFavourite = response.data.favourite || 0;
          self.branch_services = response.data.branch.data.branchServices.data;
          self.datecurrent();
         
          self.reviews = response.data.reviews;
          self.response.rating.data.rating =
            self.response.rating.data.rating / 20;
      
          self.test();
          self.isLoading = false;

        
        })
        .catch(function(error) {
          
          self.isLoading = false;
        });
       
    },
     addonImageChange(e) {
     var self=this;
  
     if(self.form.attachment.length>='3')
     {
alert('Max 3 files are allowed.');
     }
     else
     {
      const file = self.$refs.addinputUpload.files[0];
      if (!file) {
        e.preventDefault();
        alert("No file chosen");
        return;
      } else if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name) === false) {
        alert("not allowed ! Please Choose another");
      } else if (file.size > 1024 * 8192) {
        e.preventDefault();
        alert("File too big (> 8MB) \n Please choose another file");
        return;
      } else {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        self.addcreateImage(files[0]);
 
      }
      }
    },
    addcreateImage(file) {
      let reader = new FileReader();
      var self = this;
      console.log(file.name);
      self.display.push(file.name);
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        self.form.attachment.push(reader.result);
 
        
      };
    },
     deleteImage(index)
   {
    var self=this;
  
   self.display.splice(index,1);
  self.form.attachment.splice(index,1);
   self.$forceUpdate();
   
   },
  },
 
  
 
};
</script>

<style scoped>
.vue-star-rating[data-v-34cbeed1] {
  margin-left: 31%;
}
@media only screen and (max-width: 600px) {
   
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
.b-tabs {
  width: 100%;
}
h3 {
  background-color: #ebf4fc;
  color: black;
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
  background-color: white;
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
  padding: 2px;
  width: 100%;
  overflow-y: scroll;
}
button {
  margin: 3px;
  width: 65px;
  font-size: 12px;
  
}
.submit {
  text-align: center;

  color: black;
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
  font-size: 18px !important;
  font-weight: 300;
  color: #414146;
}
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
.form-control {
  background-color: white;
  font-size: 14px;
}
.slotsanimation {
 color:black !important;background-color:white !important;border:1px solid #47aed8;
}
.slotsanimation:hover {
  color:white !important;background-color:#006E83 !important;
}
.hbttn {
color:white;
  background-color:#4ab0c3;
}
.hbttn:hover {
  color:black;
  background-color:yellow;
}

.nav-tabs .nav-link {
    color: #4ab0c3 !important;
    padding: 5px !important;
    
}

</style>
