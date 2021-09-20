<template>
  <b-container fluid style="margin-top:10px;">
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
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
    <b-list-group>
      <br />
      <b-alert show >{{ $t('appointment.your-appointments')}}</b-alert>
      <b-card class="space" v-for="item in responses" :key="item.id">
        <b-container>
          <b-row>
            <b-col class="text" cols="8">
              <p>
                <img src="../assets/person.png" height="20" />
                <strong>{{ $t('appointment.name')}} :</strong>
                {{item.branches.data.name}}
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
                <strong>Status :</strong>
                <span v-if="item.status === 'Pending'" style="color:grey;">{{item.status}}</span>
                <span v-if="item.status === 'Cancel'" style="color:red;">{{item.status}}</span>
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
                <b-col v-if="item.video_consultation == '1' && item.date == today && item.vc_id !='' && item.vc_start_time !='' && item.vc_end_time=='Null' ">
				
                 <div style="align:left;display:inline-flex; font-size:16px;font-weight:bold;color:green !important;">
				<!-- previos link  :to="`/${$i18n.locale}/video-conferencing/${item.id}`" -->
				 <router-link
                            style="color:white;"
                           
							 :to="`/${$i18n.locale}/confo/${item.vc_id}/participant/Patient-${item.users.first_name}`"
                            ><strong style="color:green;"> *{{ $t('video.start_video_consultation')}}</strong>
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
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
				<b-row>
                <b-col v-if="item.video_consultation == '1'">
                 <div style="align:left;display:inline-flex; font-size:12px !important;">
				 {{ $t('appointment.vc-message')}}
                 </div>
                </b-col>
                </b-row>
            </b-col>
            <b-col cols="2" style="display:inline !important;">

              <!-- <img src="../assets/person.png" height="26" /> -->
<b-button  variant="outline-primary" style="color:white !important;background-color:#47aed8;font-size:10px;margin:2px;width:73px !important;" @click="removeFromList(item.id)" v-b-tooltip.hover title="Remove from the list">{{ $t('appointment.remove')}} </b-button>
              <b-button variant="outline-primary" style="color:white !important;background-color:#47aed8;font-size:10px;margin:2px;width:73px !important;" @click="showModal(item)" v-b-tooltip.hover title="Details">{{ $t('appointment.details')}}  </b-button>
            <br/><br/>
			
			</b-col>
			
			</b-row>
			 
        </b-container>
      </b-card>
      <b-card class="space" v-if="responses.length == 0">
      <b-container>
         <b-alert show variant="primary">{{ $t('appointment.donot-have-appointment')}}</b-alert>
      </b-container>
    </b-card>
      <b-modal v-model="isModalVisible" hide-footer style="padding:0px;">
        <b-card class="mb-2 background">
          <b-row class="row-modal">
            <b-col>{{ $t('appointment.appointment')}}</b-col>
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
                  <div>
                    <img :src="modalBranch.profile_pic" height="80" class="icon" />
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
            <b-row class="row-modal">
              <b-col>
                <img src="../assets/contact.png" height="26" />
                {{ $t('appointment.contact')}} : <!-- {{modalBranch.contacts.data[0].country_code}}-{{modalBranch.contacts.data[0].country_code}} -->
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
    </b-list-group>
  </b-container>
</template>

<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.min.css";
import axios from "axios";
import AppointmentsModal from "./partials/AppointmentsModal";
import StarRating from "vue-star-rating";

export default {
  name: "Appointments",
  data() {
    return {
	today: new Date().toISOString().substr(0, 10),
	
      responses: [],
      isLoading: false,
      isModalVisible: false,
      isModalVisible2: false,
      modalData: [],
      modalBranch: [],
      showDismissibleAlert: false,
      showAppointmentAlert: false,
      branch_rate: null
    };
  },
  components: { AppointmentsModal, Card, Loading, StarRating },
  created() {
    const self = this;
    this.isLoading = true;
	 
	
    axios
      .get("user/get-appointment")
      .then(function(response) {
        console.log(response);
        self.responses = response.data.user_appointments.data;
        console.log(self.responses);
        self.responses.forEach(ele => {
          ele.rating = ele.rating / 20;
          console.log(ele.rating);
        });
      
        console.log(self.responses);
        self.isLoading = false;
      })
      .catch(function(error) {
        console.log(error);
        self.isLoading = false;
      });
  },
  methods: {
    submit_ratingModal(branch_rate, id, remarks, wait, behave, know, rate) {
      branch_rate = branch_rate * 20;
      wait = wait * 20;
      behave = behave * 20;
      know = know * 20;
      rate = rate * 20;
      console.log("value", remarks, wait, behave, know, rate, branch_rate);

      const self = this;
      if(id !== null) {	
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
      this.modalBranch = Object.assign(item.branches.data, {});
                      
      this.modalData.rating = this.modalData.rating;
      this.modalData.rating_behaviour = this.modalData.rating_behaviour / 20;
      this.modalData.rating_knowledge = this.modalData.rating_knowledge / 20;
      this.modalData.rating_wait_time = this.modalData.rating_wait_time / 20;
      console.log(this.modalData, "Branch", this.modalBranch, this.branch_rate);
      this.isModalVisible2 = true;
    },
    getAppointmnets() {
      const self = this;
      this.isLoading = true;
      axios
        .get("user/get-appointment")
        .then(function(response) {
          console.log(response);
          self.responses = response.data.user_appointments.data;
          console.log(self.responses);
          self.responses.forEach(ele => {
            ele.rating = ele.rating / 20;
            console.log(ele.rating);
          });
          self.isLoading = false;
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    },
    showModal(item) {
      this.modalData = [];
      this.modalBranch = [];
      this.modalData = Object.assign(item, {});
      this.modalBranch = Object.assign(item.branches.data, {});
      console.log(this.modalData, this.modalBranch);
     
      this.isModalVisible = true;
      console.log("show");
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
        .post("user/deactivate-appointment",  { id: id })
        .then(function(response) {
           if(response.data.error)
         {
              let cancel_error = "Appointment cannot be cancel on same date.";
             self.showAppointmentAlert = true;
            this.isLoading = false;
         }
else
{
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
  }
};
</script>

<style scoped>
.background {
  background-image: url("../assets/card.png");
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
  //margin-left: 42%;
}
</style>
