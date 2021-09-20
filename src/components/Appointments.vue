<template>

 <b-container fluid style="max-width:100%;background-color:white;">
 <b-container fluid class="seccontainer" >
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :loader="loader" :color="clr"></loading>
     
    <b-alert
      v-model="showDismissibleAlert"
      variant="danger"
      dismissible
    >{{ $t('appointment.appointment-cancel-date-alert-text')}}</b-alert>
 <b-alert
      v-model="showAppointmentAlert"
      variant="danger"
      dismissible
    >{{ $t('appointment.appointment-alert-text')}}</b-alert>
  
      <br />
     
      <div style="background-color:#F4F4F4;color:black;">{{ $t('appointment.your-appointments')}}  <button @click="getAppointmnets()" class="btn btn-outline-info btn-sm chkbutton" style="margin:10px;border-radius:15px;border:1px solid #b8b4b4;"> Refresh </button> </div>
    <div style="background-color:#F4F4F4;color:black;"> <button type="button" class="btn btn-info btn-sm chkbutton" style="margin:10px;border-radius:15px;" @click="setActive('All')">All <div style="display:inline-flex;align:right;margin-left:10px;" v-if="active_item=='All'">
                <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"

                    />
                 </div> &nbsp; &nbsp;
                </div></button>
      <button type="button" class="btn btn-info btn-sm chkbutton" style="margin:10px;border-radius:15px;"  @click="setActive('Upcoming')">Upcoming <div style="display:inline-flex;align:right;margin-left:10px;" v-if="active_item=='Upcoming'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></button>
       <button type="button" class="btn btn-info btn-sm chkbutton" style="margin:10px;border-radius:15px;"  @click="setActive('Pending')">Pending <div style="display:inline-flex;align:right;margin-left:10px;" v-if="active_item=='Pending'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></button>
        <button type="button" class="btn btn-info btn-sm chkbutton" style="margin:10px;border-radius:15px;"  @click="setActive('Confirm')">Confirm <div style="display:inline-flex;align:right;margin-left:10px;" v-if="active_item=='Confirm'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></button>
         <!--button type="button" class="btn btn-info btn-sm chkbutton" style="margin:10px;border-radius:15px;"  @click="setActive('Cancelled')">Cancelled <div style="display:inline-flex;align:right;margin-left:10px;" v-if="active_item=='Cancelled'">
                  <div>
                    <img
                      :src="'/static/img/select.png'"
                      style="width:20px;height:20px;"
                    />
                  </div>&nbsp; &nbsp;
                </div></button--> </div>
              <div  align="left" style="background-color:#F4F4F4;color:black;text-align:left;">   <select  v-model="type" style="border: 2px solid #b4c8d6;
    
    height: 31px;
    border-radius: 3px;">
<option  v-for="item in types"
                        :value="item.id" 
                          :key="item.id" >{{item.text}}
                      </option></select>  </div> 
                 <div class="calendar">
          
     <calendar-view
      :show-date="showDate" :items="events" :display-period-uom=type :display-period-count='1'
      class="theme-default " :enable-date-selection="true"
       @click-item="onClickEvent" style="height: 900px !important;"
         
       >

      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate" 
        />
    </calendar-view>
     </div><br/>
      <div v-if="responses!=''" >
      <div v-if="load_data_message != null">
                  <h3 style="color:grey;font-size:15px;">
                    {{ load_data_message }}
                  </h3>
                </div>
                <div  style="color:#00a4bd;display:inline-flex;" align="left">Showing result: 1 to {{responses.length}} 
                
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <b-btn
                                size="sm" v-if="loadmessage!='Load More'" class="load" style="background-color:green;" @click="getAppointmnets">
                  {{loadmessage}}
                </b-btn>
                <b-btn
                                size="sm" v-else class="load"   style="background-color:rgb(23, 162, 183);"  @click="getAppointmnets">
                  {{loadmessage}}
                </b-btn>
                </div>
              </div></div>
      <b-card class="space" v-for="item in responses" :key="item.id" v-bind:value="item.id">
        <b-container>
          <b-row>
            <b-col class="text" cols="8">
              <p>
                <img src="../assets/person.png" height="20" />
                <strong>{{ $t('appointment.name')}} :</strong>
                {{item.branches.name}}  
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong v-if="item.video_consultation===1"> <font-awesome-icon icon="video" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.video") }}</strong> </strong>
               <strong v-else-if="item.home_consultation===1"> <font-awesome-icon icon="medkit" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.home") }} </strong> </strong>
               <strong v-else > <font-awesome-icon icon="calendar" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.in-clinic") }}</strong> </strong>
              </p>
              <!-- <br /> -->
              <p style="font-size:12px;">
                <img src="../assets/time.png" height="26" />
                <strong>{{ $t('appointment.date')}} :</strong>
                {{item.date}}
                <strong>{{ $t('appointment.time')}} :</strong>
                {{item.start_time}} to {{item.end_time}}
              </p>
              <h6> 
                <strong>Appointment Status:</strong>
                <span v-if="item.status === 'Pending'" style="color:grey;">{{item.status}}</span>
                <span v-if="item.status === 'Cancelled'" style="color:red;">{{item.status}}</span>
                <span v-if="item.status === 'Confirm'" style="color:#47aed8;">{{item.status}}</span>
                <span v-if="item.status === 'Completed'" style="color:green;">{{item.status}}</span>
              </h6>
            
              <b-row>
                <b-col><strong>Rating :</strong>
                  <div style="align:left;display:inline-flex !important;"> <star-rating
                    v-model="item.rating"
                    :show-rating="false"
                    :read-only="true"
                    active-color="#47aed8"
                    :star-size="14"
                  ></star-rating></div>
                </b-col>
               </b-row>
			   <b-row>
                <b-col v-if="item.video_consultation == '1' && item.date == today && item.vc_id !=''  && item.vc_end_time==null ">
				
                 <div style="align:left;display:inline-flex; font-size:16px;font-weight:bold;color:green !important;">

				

                   <b-button style="color:white!important;background-color:#47aed8;font-size:12px;">
			
				 <router-link
                            style="color:white;"
                           
							 :to="`/${$i18n.locale}/confo/participant/Patient-${item.users.data.first_name }-${item.users.data.last_name}/5fght56hgjhuy7uhjyugnhjyu8uhjgnfntyj5jvjgjhjh/${item.id}`"
                            ><strong> *{{ $t('video.start_video_consultation')}}</strong>
                            </router-link>
                   </b-button>
                 </div>
                </b-col>
                </b-row>
                <b-row>
                <b-col v-if="item.status === 'Completed'">
                 <div style="align:left;display:inline-flex !important;">
                  <b-button variant="outline-dark" style="color:#47aed8;background-color:black !important;"  pill @click="ratingModal(item)">
                    <font-awesome-icon icon="edit" style="font-size:12px;" />
                  </b-button></div>
                </b-col>
                </b-row>
				<b-row > 
                <b-col v-if="item.video_consultation == '1' && item.date > today " >
                 <div style="align:left;display:inline-flex; font-size:12px !important;">
				 {{ $t('appointment.vc-message')}}
                 </div>
                </b-col>
                </b-row>

                



            </b-col>
            <b-col cols="2" style="display:inline !important;">

              <!-- <img src="../assets/person.png" height="26" /> -->
<b-button  variant="outline-primary" style="color:white !important;background-color:#17a2b7;font-size:10px;margin:2px;width:73px !important;" @click="removeFromList(item.id)" v-b-tooltip.hover title="Remove from the list">{{ $t('appointment.remove')}} </b-button>
              <b-button variant="outline-primary" style="color:white !important;background-color:#17a2b7;font-size:10px;margin:2px;width:73px !important;" @click="showModal(item)" v-b-tooltip.hover title="Details">{{ $t('appointment.details')}}  </b-button>
            <br/><br/>
			
			</b-col>
			
			</b-row>
       <b-row style="text-align:left !important;">
                <b-col>
                 <strong>Payment Status:</strong>

                 <span v-if="item.userappointmentpayments.data!='' && item.userappointmentpayments.data[0].status!='succeeded'" style="color:grey;">{{item.userappointmentpayments.data[0].status}} <br/><button type="button" class="btn btn-link" style="color:red;margin-left:-10px;" @click="completePayment(item);">Click here to complete your payment</button></span>
                  <span v-else-if="item.userappointmentpayments.data!='' && item.userappointmentpayments.data[0].status=='succeeded'" style="color:grey;">{{item.userappointmentpayments.data[0].status}} <button type="button" class="btn btn-link" @click="getInvoice(item.userappointmentpayments.data[0].charge_id)">[ Receipt ]</button> </span>
                <span v-else style="color:grey;">{{item.payment_status}} <br/> <button type="button" class="btn btn-link btn-sm" style="color:red;margin-left:-10px;" @click="completePayment(item);">Click here to complete your payment</button></span>
                </b-col> </b-row>
                <b-row style="text-align:left !important;">
                <b-col v-if="item.userappointmentpayments.data!=''">
                <br/>
                   <strong style="font-weight:500;color:gray;" > Payment Details : </strong>
                   <div   v-for="(itm,index) in item.userappointmentpayments.data" >
                   <span style="color:##6c757d;font-size:13px;margin-left:2px;" >Service Charge : {{itm.service_charge}} {{itm.currency}}</span><br/>
                   <span style="color:##6c757d;font-size:13px;margin-left:2px;" >Tax : {{itm.tax}} {{itm.currency}}</span><br/>
                   <span style="color:##6c757d;font-size:13px;margin-left:2px;" >Total : {{itm.total_amount}} {{itm.currency}}</span><br/>
                   
                   
                  </div>
                </b-col>
                </b-row>

               
                  <b-row style="text-align:left !important;">
                <b-col v-if="item.userappointmentdocs.data!=''">
                <br/>
                   <strong style="font-weight:500;color:gray;margin-top:5px;" > Attached Documents : </strong>
                   <div   v-for="(itm,index) in item.userappointmentdocs.data" ><span style="color:##6c757d;font-size:13px;margin-left:2px;" > [{{index+1}}]. {{itm.doc_name}}</span>
                    <a  style="color:#17a2b7;"
                           
               :href="itm.doc_url" target="_blank" ><i class="fa fa-eye"></i></a>
                   
                  </div>
                </b-col>
                </b-row>
			 <b-row style="text-align:left !important;">
                <b-col v-if="item.editappointmentdata!=''">
               <div v-if="item.status=='Pending'">
               <strong style="align:left;display:inline-flex; font-size:16px !important;color:red;">***Appointment shcedule is changed now. Kindly check the details.</strong><br/>
               <b-button  variant="outline-primary" style="color:white !important;background-color:green;font-size:10px;margin:2px;width:73px !important;" @click="updateEditAppointment(item.id,'Confirm')" v-b-tooltip.hover title="Confirm">Confirm</b-button>
                <b-button  variant="outline-primary" style="color:white !important;background-color:red;font-size:10px;margin:2px;width:73px !important;" @click="updateEditAppointment(item.id,'Cancelled')" v-b-tooltip.hover title="Cancel">Cancel</b-button>
                </div>
                <div v-if="item.status=='Cancelled'">
                 <strong style="align:left;display:inline-flex; font-size:16px !important;color:red;" >***Appointment is now cancelled.</strong>
                </div><br/>
                <strong >-----Details-----</strong>
           <b-row v-for="itme in item.editappointmentdata"
                      :key="itme.id" v-bind:value="itme.id" >
           <b-col style="color:#807e7e;font-size:14px;">
            Previous Date : {{itme.old_date}}<br/>
            New Date : {{itme.date}}<br/>
            Previous Shcedule : {{itme.old_start_time}}-{{itme.old_end_time}}<br/>
            New Schedule : {{itme.start_time}}-{{itme.end_time}}<br/>
            Previous Status: {{itme.old_status}}<br/>
            New Status: {{itme.status}}<br/>
            <strong v-if="itme.edit_by=='User'">
             Your Remarks : {{itme.user_remarks}}<br/>
             --Update by you at {{itme.created_at}}..</strong>
              
            <strong v-else>
            Provider Remarks : {{itme.provider_remarks}}<br/>
            --updated by provider at {{itme.created_at}}</strong>
            </b-col>
            </b-row>
                </b-col>
              
                </b-row>
               
        </b-container>
      </b-card>
  <div v-if="responses!=''" ><div style="color:#00a4bd;margin-left:9px;" align="left">Showing result: 1 to {{responses.length}} </div>
                <div v-if="load_data_message != null">
                  <h3 style="color:grey;font-size:15px;">
                    {{ load_data_message }}
                  </h3>
                </div>

                <b-btn
                                size="sm" v-if="loadmessage!='Load More'" class="load" style="background-color:green;" @click="getAppointmnets">
                  {{loadmessage}}
                </b-btn>
                <b-btn
                                size="sm" v-else class="load"   style="background-color:rgb(23, 162, 183);"  @click="getAppointmnets">
                  {{loadmessage}}
                </b-btn>
               </div> 
              </div>

             
      <b-card class="space" v-if="responses.length == 0">
      <b-container>
         <b-alert show variant="primary">{{ $t('appointment.donot-have-appointment')}}</b-alert>
      </b-container>
    </b-card>

   

    <b-modal v-model="isExtraDataModalVisible"  title="Appointments">
        <b-card>
          

           <b-card-text style="margin:5px;">
           
       <table>
                      <tr style="text-align:center;color:#263c94;">
                      <th>Pic</th>  <th>Branch</th>  <th>Timings</th>  <th>Status</th> <th>Consultation</th> <th>Details</th></tr>
           
             
                  
                      <tr  v-for="item in extramodalData" :key="item.id" style="text-align:center;margin:2px;">
                        
                         <td v-if="item.branch_pic"><img :src="item.branch_pic"  style="width:50px;height:50px;margin-bottom:10px;border-radius: 50%" /></td>
                           <td v-else><img  :src="'https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg'"  style="width:50px;height:50px;margin-bottom:10px;border-radius: 50%" /></td>
                        <td >{{item.branch_name}}</td>
                       
                     
                        <td>{{item.start_time}} - {{item.end_time}}</td>
                       
                        <td>{{item.status}}</td>



                        <td v-if="item.video_consultation===1">  <font-awesome-icon icon="video" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.video") }}</strong></td>
                        <td v-else-if="item.home_consultation===1"><font-awesome-icon icon="medkit" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.home") }} </strong></td>
                        <td v-else > <font-awesome-icon icon="calendar" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.in-clinic") }}</strong> </td>
                        <td>  <button class="btn btn-primary btn-sm" @click="onClickExtraDataPopUp(item.id)"  >{{$t('appointment.details')}}</button></td>
                       
                      </tr>
           
          
       </table>
          </b-card-text>
          <!--b-card-actions>
            <b-spacer></b-spacer>
            <button text color="primary" @click="isExtraDataModalVisible = false">Okay</button>
          </b-card-actions-->


        </b-card>

        </b-modal>
      <b-modal v-model="isModalVisible" hide-footer style="padding:0px;height:auto;">
      
        <b-card class="mb-2 background">
          <b-row class="row-modal">
            <b-col>
            <strong v-if="modalData.video_consultation===1"> <font-awesome-icon icon="video" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.video") }}</strong> </strong>
               <strong v-else-if="modalData.home_consultation===1"> <font-awesome-icon icon="medkit" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.home") }} </strong> </strong>
               <strong v-else > <font-awesome-icon icon="calendar" style="color:#17a2b7;" />&nbsp;<strong style="font-size:13px;font-weight:500;" >{{ $t("search.in-clinic") }}</strong> </strong> &nbsp;{{ $t('appointment.appointment')}}
               </b-col>
            <b-col style="border:#42acbf solid 1px; border-radius:8px; color:#42acbf;">
              <h7>
                Status :
                <span
                  v-if="modalData.status === 'Pending'"
                  style="color:#42acbf;"
                >{{modalData.status}}</span>
                <span v-if="modalData.status === 'Cancel'" style="color:red;">{{modalData.status}}</span>
                <span
                  v-if="modalData.status === 'Completed'"
                  style="color:green;"
                >{{modalData.status}}</span>
                <span
                  v-if="modalData.status === 'Confirm'"
                  style="color:green;"
                >{{modalData.status}}</span>
              </h7>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-row class="row-modal">
                <b-col>
                  <div v-if="modalBranch.profile_pic">
                    <img :src="modalBranch.profile_pic"  alt_image="picnotfound" height="80" class="icon"  
                     />
                  </div>
                   <div v-else>
                    <img :src="picnotfound"  alt_image="picnotfound" height="80" class="icon"  
                     />
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-container style="text-align:start;">
            <b-row class="row-modal">
              <b-col>
                <img src="../assets/person.png" height="26" />
                {{ $t('appointment.name')}} : {{modalBranch.name}}
              </b-col>
            </b-row>
            <b-row class="row-modal" style="display:inline-flex;">
              <b-col>
                <img src="../assets/contact.png" height="26" /> 
                {{ $t('appointment.contact')}} : 
              </b-col>
              <b-col>
                <div  style="text-align:left;display:inline-flex;" v-for="itemc in branchcontact" :key="itemc.id">
                {{itemc.country_code}} - {{itemc.contact_number}} 
                </div>
              </b-col>
            </b-row>
            <b-row class="row-modal">
              <b-col>
                <img src="../assets/time.png" height="26" />
                &nbsp;{{ $t('appointment.time')}} : {{modalData.date}}
                <br />
                <p
                  style="text-align:end; width:58%;"
                >{{modalData.start_time}} - {{modalData.end_time}}</p>
              </b-col>
            </b-row>
            <b-row class="row-modal">
              <b-col>
                <img src="../assets/speciality.png" height="26" />   {{ $t('appointment.speciality')}}  : {{modalData.service_name}}
              </b-col>
            </b-row>
            <!--b-row class="row-modal">
              <b-col>
                <img src="../assets/category.png" height="26" />   {{ $t('appointment.category')}}  :
              </b-col>
            </b-row-->
            <b-row class="row-modal">
              <b-col>
                <img src="../assets/location.png" height="26" />
                  {{ $t('appointment.address')}}  : {{modalBranch.address}}
              </b-col>
            </b-row>
      
         <b-row class="row-modal" style="text-align:left !important;margin-left:3px;">
                <b-col>
                 <strong style="color:black;">Payment Status:</strong>
               
                 <span v-if="modalPayments!='' && modalPayments.status!='succeeded'" style="color:black;">{{modalPayments.status}} <br/><button type="button" class="btn btn-link" style="color:red;margin-left:-10px;" @click="completePayment(modalData);">Click here to complete your payment</button></span>
                  <span v-else-if="modalPayments!='' && modalPayments.status=='succeeded'" style="color:black;">{{modalPayments.status}}  <button type="button" class="btn btn-link" @click="getInvoice(modalPayments.charge_id)">[ Receipt ]</button></span>
                <span v-else style="color:grey;">{{modalData.payment_status}} <br/> <button type="button" class="btn btn-link btn-sm" style="color:red;margin-left:-10px;" @click="completePayment(modalData);">Click here to complete your payment</button></span>
                </b-col> </b-row>
    
            <b-row class="row-modal">
             <b-col v-if="modalData.video_consultation == '1' && modalData.date == today && modalData.vc_id !=''  && modalData.vc_end_time==null ">
        
                 <div style="align:left;display:inline-flex; font-size:16px;font-weight:bold;color:green !important;">

        

                   <b-button style="color:white!important;background-color:#47aed8;font-size:12px;">
      
         <router-link
                            style="color:white;"
                           
               :to="`/${$i18n.locale}/confo/participant/Patient-${modalData.users.data.first_name }-${modalData.users.data.last_name}/5fght56hgjhuy7uhjyugnhjyu8uhjgnfntyj5jvjgjhjh/${modalData.id}`"
                            ><strong> *{{ $t('video.start_video_consultation')}}</strong>
                            </router-link>
                   </b-button>
                 </div>
                </b-col>
            </b-row>
<b-row>
                <b-col v-if="modalData.video_consultation == '1' && modalData.date > today">
                 <div style="align:left;display:inline-flex; font-size:12px !important;">
         {{ $t('appointment.vc-message')}}
                 </div>
                </b-col>
                </b-row>

                 


 <b-row style="text-align:left !important;">
                <b-col v-if="modalDocs!=''">
                <br/>
                   <strong style="font-weight:500;color:gray;margin-top:5px;" > Attached Documents : </strong>
                   <div   v-for="(itm,index) in modalDocs" ><span style="color:##6c757d;font-size:13px;margin-left:2px;" > [{{index+1}}]. {{itm.doc_name}}</span>

                    <a style="color:#17a2b7;"
                           
               :href="itm.doc_url" target="_blank" ><i class="fa fa-eye"></i></a>
                    
                  </div>
                </b-col>
                </b-row>
          </b-container>
		
          <b-button
            class="text-left"
            @click="cancelApp(modalData.id, modalData.status)"
            variant="outline-danger"
          >{{ $t('appointment.cancel')}}</b-button>
		   <b-button
            class="text-left"
            @click="closeModal"
            variant="outline-danger"
          >{{ $t('appointment.close')}}</b-button>
        </b-card>
      </b-modal>
      <b-modal v-model="isModalVisible2" hide-footer style="padding:0px;height:auto !important;">
        <b-card>
          <b-row class="row-modal">
            <b-col style="border:#42acbf solid 1px; border-radius:8px; background-color:#42acbf; color:white !important;">  {{ $t('appointment.feedback')}} </b-col>
          </b-row>
          <b-row class="row-modal">
            <b-col>
             
              {{ $t('appointment.your-appointment-was-on')}}  with {{modalBranch.name}} at  {{modalData.date}}
            </b-col>
          </b-row>
          <b-row>
            <b-col style="border:#42acbf solid 1px; border-radius:8px; color:#42acbf; text-align:left !important;">
               {{ $t('appointment.rate')}} - {{modalBranch.name}}
              <br />
              <star-rating
                class="rate"
                v-model="branch_rate"
                :show-rating="false"
                :read-only="false"
                active-color="#47aed8"
                :star-size="20"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              style="border:#42acbf solid 1px; border-radius:8px; color:#42acbf;margin-top:20px;text-align:left !important;"
            >
              {{ $t('appointment.rate-your-appointment')}} {{modalBranch.name}}
              <br />
              <star-rating
                v-model="modalData.rating"
                :show-rating="false"
                :read-only="false"
                active-color="#47aed8"
                :star-size="20"
              ></star-rating>
            </b-col>
          </b-row>
{{ $t('appointment.add-your-experience')}}
          <b-row>
            
            <b-col style="border:grey solid 1px; border-radius:8px; color:#42acbf;margin-top:20px;text-align:left !important;">
            {{ $t('appointment.behaviour')}} :
              <star-rating
                v-model="modalData.rating_behaviour"
                :show-rating="false"
                :read-only="false"
                active-color="#47aed8"
                :star-size="20"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row>
            <b-col style="border:grey solid 1px; border-radius:8px; color:#42acbf;margin-top:20px;text-align:left !important;">
              {{ $t('appointment.knowledge')}} :
              <star-rating
                v-model="modalData.rating_knowledge"
                :show-rating="false"
                :read-only="false"
                active-color="#47aed8"
                :star-size="20"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row>
            <b-col style="border:grey solid 1px; border-radius:8px; color:#42acbf;margin-top:20px;text-align:left !important;">
             {{ $t('appointment.waiting-time')}} :
              <star-rating
                v-model="modalData.rating_wait_time"
                :show-rating="false"
                :read-only="false"
                active-color="#47aed8"
                :star-size="14"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
            
              <strong>{{ $t('appointment.additional-details')}} :</strong>
              <b-form-input v-model="modalBranch.rating_remarks" placeholder="Enter Details"></b-form-input>
            </b-col>
          </b-row>
         <br/>
          <b-button
            class="text-left"
            @click="submit_ratingModal(branch_rate ,modalData.id, modalBranch.rating_remarks, modalData.rating_wait_time,modalData.rating_behaviour ,modalData.rating_knowledge,  modalData.rating,)"
            variant="outline-danger"
          >{{ $t('appointment.submit')}}</b-button>
 
          
        </b-card>
      </b-modal>
   
  </b-container> </b-container>
</template>
<script>

import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import AppointmentsModal from "./partials/AppointmentsModal";
import StarRating from "vue-star-rating";
import moment from 'moment';
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
require("vue-simple-calendar/static/css/default.css");
  require("vue-simple-calendar/static/css/holidays-us.css");
export default {
  name: "Appointments",
  data() {
    return {
    modalPayments:'',
    picnotfound:'https://kovered-media.s3.us-east-2.amazonaws.com/images/cover_pic_demo.jpg',
    load_data_message:"",
    start:0,
    loadmessage:'Load More',
    loader:'dots',
    clr:'#17a2b7',
    pcount:'1',
    appt_count_by_date:[],
    extramodalData:[],
    showextradata:[],
    pcounts:[
    {        id:'1',
            text:'1',
            value:'1'
             },
           
    { 
            id:'4',
            text:'4',
              value:'4'
    }
    ],
    type:'month',
    types:[
    {        id:'month',
            text:'month',
            value:'month'
             },
            { 
            id:'week',
            text:'week',
              value:'week'
    }
    ],
    active_item:'All',
    showDate: new Date(),
    selectionStart: null,
      selectionEnd: null,
      theme: "gcal",
   events: [],
      stylecss:'',
    showstatus:'',
    interval:'',
      today: new Date().toISOString().substr(0, 10),
     branchcontact:[],
      responses: [],
      isLoading: false,
      isModalVisible: false,
      isModalVisible2: false,
       isExtraDataModalVisible: false,
      modalData: [],
      modalDocs:[],
      modalBranch: [],
      showDismissibleAlert: false,
      showAppointmentAlert: false,
      branch_rate: null
    };
  },
  components: { AppointmentsModal, Card, Loading, StarRating, CalendarView,
      CalendarViewHeader, },
  computed: {
    themeOptions() {
      return this.theme == "gcal"
        ? {
            top: "2.6em",
            height: "2.1em",
            border: "0px",
            previousYearLabel: "\uE5CB\uE5CB",
            previousPeriodLabel: "\uE5CB",
            nextPeriodLabel: "\uE5CC",
            nextYearLabel: "\uE5CC\uE5CC",
           
          }
        : {
            top: "1.4em",
            height: "1.4em",
            border: "2px",
            previousYearLabel: "<<",
            previousPeriodLabel: "<",
            nextPeriodLabel: ">",
            nextYearLabel: ">>",
            currentPeriodLabel: "",
          }
         
    },
     
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created() {

    const self = this;
    self.getAppointmnets();
     

  },
  methods: {

  setActive(active_item)
  {
  var self=this;
  if(self.active_item!==active_item)
  {
  self.start=0;
  self.responses=[];
self.appt_count_by_date=[];
  }
  self.active_item=active_item;
  self.getAppointmnets();

  },
   onClickEvent(e) 
   { 
var self=this;
 self.showextradata=[];
if(e.title.substr(0,4)=='Appt')
{
    self.responses.forEach(ele => {

             if(ele.date==e.id)
             {
               self.showextradata.push({
              id:ele.id,
              branch_name:ele.branches.name,
              date:ele.date,
              start_time:ele.start_time,
              end_time:ele.end_time,
              status:ele.status,
              branch_pic:ele.branches.profile_pic,
              video_consultation:ele.video_consultation,
              home_consultation:ele.home_consultation,
               });
             }
    });

self.showModalExtraData(self.showextradata);
}
else
  { 
   axios
      .post("user/appointmentdata", {appointment_id:e.id})
      .then(function(response) {
      
      self.showModal(response.data.appointment.data);
      })
      .catch(function(error) {
        console.log(error);
       
      });
}
   },
   onClickDate()
   {
 
   },
   onClickExtraDataPopUp(id)
   {
   var self=this;
   axios
      .post("user/appointmentdata", {appointment_id:id})
      .then(function(response) {
    
      self.showModal(response.data.appointment.data);
      })
      .catch(function(error) {
        console.log(error);
       
      });
   },
 setShowDate(d) {
        this.showDate = d;
      },
    submit_ratingModal(branch_rate, id, remarks, wait, behave, know, rate) {
      branch_rate = branch_rate * 20;
      wait = wait * 20;
      behave = behave * 20;
      know = know * 20;
      rate = rate * 20;
      console.log("value", remarks, wait, behave, know, rate, branch_rate);

      const self = this;
      if (id !== null) {
        axios
          .post("user/feedback", {
            id: id,
            rating: rate,
            rating_remarks: remarks,
            branch_rating: branch_rate,
            rating_behaviour: behave,
            rating_knowledge: know,
            rating_wait_time: wait
          })
          .then(data => {
            self.getAppointmnets();
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {});
      }
      this.isModalVisible2 = false;
      this.modalData = [];
    },
    ratingModal(item) {
      this.modalData = [];
      this.modalBranch = [];
      this.branch_rate = this.modalBranch = Object.assign(
        item.user_branch_rating,
        {}
      );
      this.branch_rate = this.branch_rate / 20;
      this.modalData = Object.assign(item, {});
      this.modalBranch = Object.assign(item.branches, {});

      this.modalData.rating = this.modalData.rating;
      this.modalData.rating_behaviour = this.modalData.rating_behaviour / 20;
      this.modalData.rating_knowledge = this.modalData.rating_knowledge / 20;
      this.modalData.rating_wait_time = this.modalData.rating_wait_time / 20;
      console.log(this.modalData, "Branch", this.modalBranch, this.branch_rate);
      this.isModalVisible2 = true;
    },
    getAppointmnets() {
      const self = this;
      self.isLoading = true;
         self.loadmessage="Loading...";
         self.load_data_message='';
        
       self.end=self.start+5;
      axios
        .post("user/get-appointment" ,{filter:self.active_item, start:self.start, end:self.end})
        .then(function(response) {
        if(response)
        {   self.responses=self.responses.concat(response.data.user_appointments.data);
          //self.responses = response.data.user_appointments.data;
          self.start=self.responses.length;
         
            self.appt_count_by_date = self.appt_count_by_date.concat(response.data.dates_count);
      //  self.showstatus=response.data.user_apoointments.data.status;

let unique = [];

     if(self.appt_count_by_date)
     {
        
 self.appt_count_by_date.forEach(ele2 => {
    
       self.responses.forEach(ele => {
     
 if(ele.status=='Confirm')
 self.stylecss="background-color:#4ab0c3;color:white;font-size:14px;";
 if(ele.status=='Pending')
 self.stylecss="background-color:#FFFFC1;color:black;font-size:14px;";
 if(ele.status=='Cancelled')
 self.stylecss="background-color:orange;color:white;font-size:14px;";
 if(ele.status=='Completed')
 self.stylecss="background-color:blue;color:white;font-size:14px;";       
if(ele.date === ele2.date) {

              if(ele2.count=='1')
              {
  let title='';
            if(ele.video_consultation===1)
            title= ele.start_time + "-" + ele.branches.name  + "  Video";
           else  if(ele.home_consultation===1)
            title= ele.start_time + "-" + ele.branches.name  + "  Home";
          else
          title= ele.start_time + "-" + ele.branches.name  +  "  In-Clinic";

             unique.push({
           id:ele.id,
         title: title,
         startDate:ele.date,
         style:self.stylecss,
         hasUrl:null,
          classes:['clndr'],
         });
         }
         else{
             unique.push({
           id:ele.date,
           title: 'Appts.'+ '(' + ele2.count + ')',
         startDate:ele.date,
         style:"background-color:#B1D1D1;color:black;font-size:14px;",
          hasUrl:'multiple',
           classes:['clndr'],
         });
         }

}
      


       });
         });

}
         


      function removeDuplicates(unique, prop) {
            var newArray = [];
            var lookupObject = {};

            for (var i in unique) {
              lookupObject[unique[i][prop]] = unique[i];
            }

            for (i in lookupObject) {
              newArray.push(lookupObject[i]);
            }
            return newArray;
          }

          var uniqueArray = removeDuplicates(unique, "startDate");
          
          self.events = uniqueArray;

          self.responses.forEach(ele => {
            ele.rating = ele.rating / 20;
            
          });
          }
else
{
  self.load_data_message="No More result to show";
}
          console.log("vikas",self.events);
          self.isLoading = false;
             self.loadmessage="Load More";
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
          self.loadmessage="Load More";
        });
    },
    showModal(item) {
      this.modalData = [];
      this.modalBranch = [];
      this.modalDocs=[];
      this.modalData = Object.assign(item, {});
      this.modalDocs = Object.assign(item.userappointmentdocs.data, {});
          if(item.userappointmentpayments.data!='')
      this.modalPayments=Object.assign(item.userappointmentpayments.data[0], {});
      else
      this.modalPayments=[];
      this.modalBranch = Object.assign(item.branches, {});
      this.branchcontact=Object.assign(item.branch_contact, {});
      console.log(this.modalData, this.modalBranch);

      this.isModalVisible = true;
      
    },
     showModalExtraData(item) {
      this.extramodalData = [];
     
      this.extramodalData = Object.assign(item, {});
     
     
      

      this.isExtraDataModalVisible = true;
     
    },
    closeModal() {
      this.isModalVisible = false;
    },
    cancelApp(id, status) {
      let self = this;
      console.log(status);
      let cancel_error = "Appointment cannot be cancel on same date.";
      if (status === "Pending" || status === "Confirm") {
        console.log("working");
        axios
          .post("user/cancel-appointment", { id: id })
          .then(data => {
            this.getAppointmnets();
            console.log(data);
            let error = data.error;
            console.log(error);
            if (data.error === cancel_error) {
              self.showDismissibleAlert = true;
              console.log(self.showDismissibleAlert);
            }
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {});
      }
      this.isModalVisible = false;
    },
    removeFromList(id) {
      const self = this;
      this.isLoading = true;
      axios
        .post("user/deactivate-appointment", { id: id })
        .then(function(response) {
          if (response.data.error) {
            let cancel_error = "Appointment cannot be cancel on same date.";
            self.showAppointmentAlert = true;
            this.isLoading = false;
          } else {
            self.responses = response.data.user_appointments.data;
            console.log(self.responses);
            self.responses.forEach(ele => {
              ele.rating = ele.rating / 20;
              console.log(ele.rating);
            });
            self.isLoading = false;
          }
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    },
    updateEditAppointment(id,status)
    {
    var self=this;
    axios
          .post("/user/update_status_appointment_web", {
            id: id, status:status
            
          })
          .then(function(response) {
          if(response.data.Success)
          {
       alert('Appointment is updated now.');
        self.getAppointmnets();
              if(response.data.generateroom==='1')
			{
			    self.createRoom(response.data.Success);
			}
      self.sendMail(response.data.Success);
         }
         else
         {
         alert(response.data.error);
         }  
          })
          .catch(function(error) {
            console.log(error);
          });
    },
    sendMail(id)
{
var self=this;
  axios
            .post("/user/update_status_appointment_status_mail", {id:id })
            .then(function(response) {
             
            })
            .catch(function() {
              
            });
},
createRoom(id) {
	 const self = this;
      axios.post("/createRoom")
        .then(response => {
          console.log(response);
          if (response.data.result === 0) {
            this.roomId = response.data.room.room_id;
			
	           self.shareRoomID(this.roomId,id);		
           
          } else {
            this.$notify({
              group: "error",
              type: "error",
              text: response.data.error
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.$notify({
            group: "error",
            type: "error",
            text: err
          });
        });
    },
	shareRoomID(id,appointment_id) {
	 const self = this;
	
	 axios.post("/provider/sendVCIdToPatient" , {vcid:id, appointment_id:appointment_id })
        .then(response => {
		 
		   
        })
        .catch(err => {
          console.log(err);
          this.$notify({
            group: "error",
            type: "error",
            text: err
          });
        });
    },
    completePayment(itm)
    {
         
          let consultation_type='';
      if(itm.video_consultation==='1')
      consultation_type='is_video';
      else if(itm.home_consultation==='1')
      consultation_type='is_home';
      else 
      consultation_type='in_clinic';

           this.$router.push({ name: "PaymentAfterBooking", query: {appointment_id:itm.id,start_time:itm.start_time,date: itm.date,is_medical_history: itm.is_medical_history,
            service: itm.branchServices.data,
             remarks: itm.remarks,
             consultation_type: consultation_type,
              home_visit_address_id:'',
              branch_name:itm.branches.name,
              branch_id:itm.branch_id,
              profile_pic:itm.branches.profile_pic,
              type: 'web',
              attachment:itm.userappointmentdocs,
              tax:itm.user_tax,
             
            

              } });
    },
    getInvoice(id)
    {
 var self=this;
         
          axios
        .post("/user/transactions/charge",{charge_id:id} )
        .then(function(response) {
     if(response)
     
     {
       let url=response.data.data.receipt_url;
               // window.location.replace(url);
    window.open(url, '_blank');
     
     }
    
        })
        .catch(function(error) {
          console.log(error);
         
        });
    },
  }
};
</script>
@import '~fullcalendar/dist/fullcalendar.css';
<style scoped>
@media only screen and (max-width: 600px) {
   .seccontainer {
   
   background-color:white;
   
  } 
}
@media only screen and (min-width: 601px) {
  .seccontainer {
   max-width:95%;
   background-color:white;
   
  } 
}
@media only screen and (min-width: 1250px) {
  .seccontainer {
   max-width:70%;
   background-color:white;
   
  } 
}
@media only screen and (min-width: 1100px)
{
  .seccontainer {
   max-width:75%;
   background-color:white;
   
  } 
}
.background {
 
  background-size: 460px;
}
.icon {
  border: white solid 1px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
}
/* .row {
  padding: 10px;
} */
.space {
  margin: 5px;
}
.row-modal {
  padding: 8px;
}
.text {
  text-align: start;
}
.vue-star-rating {
  text-align: center;
  display: block !important;
  /* //margin-left: 42%; */
}
.calendar {
 
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    height: 67vh;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    
}
.clndr {
  
  background-color:yellow;
}
.currentPeriod {
  display:none;
}

.chkbutton {
 background-color:#F4F4F4;
 color:black;
 border :1px solid #b8b4b4;
}
.chkbutton:hover {
  background-color:#b8b4b4;
  color:black;
  border :1px solid #b8b4b4;
}

.load {
  color: white;
 //background-color: #007bff !important;
  width: 112px !important;
  height: 30px !important;
  margin-bottom: 5px !important;
  align-items: center !important;
  border-radius: 15px !important;
  border-color:none;
}
.load:hover {
  color: white;
background-color: green !important;
  width: 112px !important;
  height: 30px !important;
  margin-bottom: 5px !important;
  align-items: center !important;
  border-radius: 15px !important;
  border-color:none;
}

</style>
