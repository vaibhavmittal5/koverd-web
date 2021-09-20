<template>
  <b-container>
    <b-card>
      <!-- <router-link :to="'/service/' + this.idService + this.token" class="route"> -->
{{checkBranches}}
      <b-row>
        <b-col col lg="3" sm="6" xs="6" md="6">
          <!--input type='checkbox'  @click='compare(idService)'-->
 <!--input type="checkbox" 
                    :id="idService"
                    class="form-check-input"
                    :value="idService"
                    v-model="checkBranches"--> 
<b-button @click="compare(idService)" >Compare</b-button>
          <router-link :to="`/${$i18n.locale}/service/${this.idService}`" class="route">
            <img
              v-if="this.image == null"
              class="img-avatar"
              :src="imagePlaceholder"
              rounded="circle"
              :width="100"
              :height="100"
              alt="Image"
            />
            <img v-else :src="this.image" :width="100" :height="100" class="img-avatar" alt="Image" />
          </router-link>
        </b-col>
        <b-col class="text-center" lg="4" sm="6" md="6" xs="6">
          <b-row>
            <b-col lg="6" sm="6">
              <h6 style="text-align:center; !important">{{this.category}}</h6>
            </b-col>
            <b-col lg="6" sm="6" class="distance">{{Distance.toString().slice(0,4) }} KM</b-col>
          </b-row>
          <router-link :to="`/${$i18n.locale}/service/${this.idService}`" class="route">
            <b-row class="container">
              <h4>
                <router-link :to="`/${$i18n.locale}/service/${this.idService}`" class="route">{{this.name}}</router-link>
              </h4>
            </b-row>

            <b-row>Timings: {{this.opening_hours}}-{{this.closing_hours}}</b-row>
            <b-row>
              <star-rating
                v-model="rating_real"
                :show-rating="false"
                :read-only="true"
                active-color="#47aed8"
                :star-size="14"
              ></star-rating>
            </b-row>
          </router-link>
          <b-row>
            <div>
              <span v-if="this.rate_count != 0">
                <!-- {{this.idService}} -->
                Reviews :
                {{this.rate_count}}
                <b-btn
                  size="sm"
                  variant="outline-primary"
                   style="width:112px !important;"
                  @click="read_review(idService, name)"
                >Read Reviews</b-btn>
              </span>
            </div>
          </b-row>
          <b-row style="text-align:left !important;">{{this.address}}</b-row>
        </b-col>

        <b-col md="12" lg="4" sm="12" xs="12" v-if="this.category !== 'Pharmacy'">
          <b-row v-if="new_slots" class="hidden-scrollbar">
            <b-container class="bv-example-row">
              <b-row>
                <b-col cols="4">
                  <b-button @click="datePre(current_date1)" variant="outline-primary" style="border-color: #ffffff; !important">
                    <img src="../../assets/left-arrow.png" height="12" width="10" />
                  </b-button>
                </b-col>
                <b-col
                  cols="4"
                  class="text-center"
                  style="padding-top:10px;display:inline-flex;font-size:12px;color:black !important;"
                >{{current_date}}</b-col>

                <b-col cols="4" style="text-align:end;">
                  <b-button @click="datePost(current_date1)" variant="outline-primary" style="border-color: #ffffff; !important">
                    <img src="../../assets/arrow-point-to-right.png" height="12" width="10" />
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
           
              <div class="slots inner text-center display">
                 <router-link :to="`/${$i18n.locale}/service/${this.idService}`" class="route">
                <div v-if="slots!=''">
                  <div v-for="slot in new_slots" :key="slot.slot" class="display">
                    <div v-if="slot.available==1" class="display">
                      <div class="display">
                        <b-button size="sm" style="color:white !important;background-color:#47aed8 !important;">{{slot.start_time}}</b-button>
                        <!-- {{new_slots}} -->
                      </div>
                    </div>
                    <div class="display" v-else>
                      <div class="display">
                        <b-button disabled size="sm" style="color:white !important;background-color:grey !important;">{{slot.start_time}}</b-button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="display">
                    <h5 style="color:grey;text-align:center;font-size:12px;">Not Available!!</h5>
                  </div>
                </div>
                </router-link>
              </div>
            
          </b-row>
        </b-col>
        <b-col cols="12" v-if="doctors.length > 0" class="margin">
          <b-card>
            <b-row v-for="emp in doctors" :key="emp.id" style="border:1px solid grey;">
              <!-- {{emp.employees}} -->
              <b-col col lg="3" sm="6" xs="6" md="4">
                <img
                  v-if="emp.employees.data.profile_pic == null"
                  class="img-avatar"
                  :src="imagePlaceholder"
                  rounded="circle"
                  :width="50"
                  :height="50"
                  alt="Image"
                />
                <img
                  v-else
                  :src="emp.employees.data.profile_pic"
                  :width="50"
                  :height="50"
                  class="img-avatar"
                  alt="Image"
                />
              </b-col>
              <b-col col lg="9" sm="6" xs="6" md="8">
                <b-container>
                  <b-row>Practitioner : {{emp.employees.data.first_name}}</b-row>
                  <b-row>
                    <star-rating
                      v-model="emp.avg_overall_rating"
                      :show-rating="false"
                      :read-only="true"
                      active-color="#47aed8"
                      :star-size="14"
                    ></star-rating>
                  </b-row>
                </b-container>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-row class="justify-content-center" style="margin-top: 12px" v-if="this.removeFavourites">
          <b-button variant="danger" @click="removeFavourite">Remove</b-button>
        </b-row>
        <b-row class="justify-content-center" style="margin-top: 12px" v-if="this.manage">
          <router-link :to="'/branch/' + this.idService + '/manage'">
            <b-button variant="primary" @click="manage">
              Manage
              <font-awesome-icon icon="user-shield" />
            </b-button>
          </router-link>
        </b-row>
      </b-row>
    </b-card>
    <b-modal ref="my-modal" hide-footer title="User Ratings and Reviews">
      <div class="d-block text-center">
        <h3>{{branch_name}}</h3>
        <!-- <strong>User Ratings and Reviews</strong> -->
        <b-card v-for="item in branchReview" :key="item.id">
          <b-row>
            <b-col cols="2">
              <img
                v-if="item.user.data.profile.data.profile_pic == null"
                class="img-avatar"
                :src="imagePlaceholder"
                rounded="circle"
                :width="50"
                :height="50"
                alt="Image"
              />
              <img
                v-else
                :src="item.user.data.profile.data.profile_pic"
                :width="50"
                :height="50"
                class="img-avatar"
                alt="Image"
              />
            </b-col>
            <b-col cols="10">
              <b-row>
                <h5>{{item.user.data.first_name}}</h5>
              </b-row>
              <b-row style="color:#ffc800; font-size:18px;">
                <b>{{item.branch_ratings}}&nbsp;&nbsp;&nbsp;</b>
                <star-rating
                  v-model="item.branch_ratings"
                  :show-rating="false"
                  :read-only="true"
                  active-color="#ffc800"
                  :star-size="14"
                ></star-rating>
              </b-row>
              <b-row v-for="item2 in item.ratings" :key="item2.overall_rating">
                <b-col class="text-left" v-if="item2.rating_remarks != null">
                  {{item2.rating_remarks}}
                  <br />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
// TODO placeholder image is allways loaded, check if profile_pic exists first
import imagePlaceholder from "../../assets/placeholder.png";
import axios from "axios";
import StarRating from "vue-star-rating";
import checkBranches from "../Search";
export default {
  name: "Card",
  data: function() {
    return {
      token: [],
      imagePlaceholder: imagePlaceholder,
      current_date: new Date().toString().slice(0, 10),
      current_date1: new Date(),
      new_slots: this.slots,
      Distance: this.distance,
      branch_name: null,
      branchReview: [],
      rating_real: 0,
      doctors: [],
      checkBranch:'',
      
    };
  },
  components: {
    StarRating
  },
  props: [
    "idService",
    "name",
    "address",
    "category",
    "image",
    "removeFavourites",
    "manage",
    "roles",
    "distance",
    "opening_hours",
    "closing_hours",
    "slots",
    "rating",
    "rate_count",
    "employees"
  ],
  created() {
   this.rating_real = this.rating / 20;
    // //console.log("ee", this.employees);
    if (this.employees != undefined) {
      this.doctors = this.employees;
      this.doctors.forEach(ele => {
        if (ele.avg_overall_rating === undefined) {
          ele.avg_overall_rating = 0;
        } else {
          ele.avg_overall_rating = ele.avg_overall_rating / 20;
        }
      });
      // //console.log("ee", this.doctors.avg_overall_rating, "s");
    }
  },
  methods: {
    read_review(id, name) {
      this.branchReview = [];
      this.branch_name = name;
      const self = this;
      axios
        .post("/branchreviews", {
          branch_id: id
        })
        .then(function(response) {
          //console.log("res0", response);
          self.branchReview = response.data.reviewdata;
          //console.log("review", self.branchReview);
          self.branchReview.forEach(ele => {
            ele.branch_ratings = ele.branch_ratings / 20;
            //console.log(ele.branch_ratings);
          });
        })
        .catch(function(error) {
          //console.log(error);
        });
      this.showModal();
      // this.branch_name = [];
    },

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    removeFavourite() {
      const self = this;
      const endpoint = "/user-favourites/" + this.$props.idService;
      axios
        .delete(endpoint)
        .then(function(response) {
          //console.log(response.data);
          self.$emit("remove", self.$props.idService);
        })
        .catch(function(error) {
          // TODO handle error
          //console.log(error);
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
          branch_id: self.$props.idService,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = self.current_date1.toString().slice(0, 10);
        })
        .catch(function(error) {
          //console.log(error);
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
          branch_id: self.$props.idService,
          date: ActiveDate
        })
        .then(function(response) {
          self.new_slots = response.data.available_slots;
          self.current_date = self.current_date1.toString().slice(0, 10);
          //console.log(self.new_slots);
        })
        .catch(function(error) {
          // TODO handle error
          //console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.img-avatar {
  border-radius: 60%;
}
.route {
  color: black;
  text-decoration: none;
}
h4 {
  font-weight: 300;
  text-align: left;
  margin-left: -16px;
}
h6 {
  color: grey;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
}
.distance {
  color: grey;
  font-weight: 300;
  font-size: 12px;
}
.slots {
  height: auto;
  margin-top: 20px;
  overflow-x: hidden;
  //border: 1px #e2dbdb solid;
  border-radius: 7px;
  padding: 3px;
  width: 100%;
}
::-webkit-scrollbar {
  display: none;
  width: 0px; /* Remove scrollbar space */
}
.hidden-scrollbar {
  overflow: hidden;
  text-align: justify;
  padding-left: 0px;
}
.hidden-scrollbar .inner {
  overflow: auto; /* Samakan dengan besar margin negatif */
}
button {
  margin: 3px !important;
  width: 46px !important;
 font-size:10px !important;
 
}
.display {
  display: inline !important ;
  text-align: center !important;
  
}
.margin {
  margin-top: 15px;
}
</style>
