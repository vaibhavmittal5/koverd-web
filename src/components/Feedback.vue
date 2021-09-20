<template>
  <b-container fluid style="margin-top:10px;">
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color="clr"></loading>
    <b-alert
      v-model="showalert"
      variant="success"
     
    >Thank You for your feedback.</b-alert>
 
	<div v-if="page_show==true" >
    <b-list-group>
     
     
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
              <b-form-input v-model="modalData.rating_remarks" placeholder="Enter Details"></b-form-input>
            </b-col>
          </b-row>
         <br/>
          <b-button
            class="text-left"
            @click="submit_ratingModal(branch_rate ,modalData.id, modalData.rating_remarks, modalData.rating_wait_time,modalData.rating_behaviour ,modalData.rating_knowledge,  modalData.rating,)"
            variant="outline-danger"
          >{{ $t('appointment.submit')}}</b-button>
 
          
        </b-card>
      
    </b-list-group>
	</div>
  </b-container>
</template>

<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import AppointmentsModal from "./partials/AppointmentsModal";
import StarRating from "vue-star-rating";

export default {
  name: "Appointments",
  data() {
    return {
    clr:'#17a2b7',
      today: new Date().toISOString().substr(0, 10),

      responses: [],
      isLoading: false,
      isModalVisible: false,
      isModalVisible2: false,
      modalData: [],
      modalBranch: [],
      showDismissibleAlert: false,
      showAppointmentAlert: false,
	  showalert:false,
      branch_rate: null,
	  userid:null,
	  page_show:true,
    };
  },
  components: { AppointmentsModal, Card, Loading, StarRating },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created() {
    const self = this;
    this.isLoading = true;
    self.vcid=self.$route.params.vcid;
	 self.id=self.$route.params.id;
	 //self.room_id="hhjkjljlj";
	 if(self.vcid==null || self.id==null)
	 {
	 this.$router.push('/');
	 }
    axios
      .post("/appointment-feedback-data", {id : self.id })
      .then(function(response) {
        console.log(response);
        self.responses = response.data.user_appointments.data;
        console.log(self.responses);
		 self.modalData = [];
      self.modalBranch = [];
      self.branch_rate = response.data.user_appointments.data.user_branch_rating;
        self.modalBranch.name=response.data.user_appointments.data.branches.data.name;
		self.userid=response.data.user_appointments.data.user_id;
		
      self.branch_rate = self.branch_rate / 20;
      self.modalData = response.data.user_appointments.data;
      self.modalData.rating = self.modalData.rating;
      self.modalData.rating_behaviour = self.modalData.rating_behaviour / 20;
      self.modalData.rating_knowledge = self.modalData.rating_knowledge / 20;
      self.modalData.rating_wait_time = self.modalData.rating_wait_time / 20;
     self.modalData.rating_remarks=self.modalData.remarks;

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
	  
      if (id !== null) {
        axios
          .post("user/feedback/mail", {
		     userid: self.userid,
            id: id,
            rating: rate,
            rating_remarks: remarks,
            branch_rating: branch_rate,
            rating_behaviour: behave,
            rating_knowledge: know,
            rating_wait_time: wait
          })
          .then(function(response) {
             if(response.data.success=="success")
			 { self.page_show=false;
			   self.showalert=true;
			   }
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {});
      }
    
      this.modalData = [];
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
  /* //margin-left: 42%; */
}
</style>
