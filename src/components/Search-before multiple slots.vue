<template>
  <b-container fluid>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="false"
    ></loading>
    <b-modal
      ref="dialogCompare"
      hide-footer
      :title="$t('compare.title')"
      class="modal-content-1"
    >
      <div
        ref="docpdf"
        v-if="comparedata"
        style="font-size:13px;padding:10px;max-width:auto;font-weight:400;text-align:center !important;"
      >
        <b-row style="color:green;padding:5px;margin:5px;text-align:center;"
          ><b-col cols="4">{{ $t("compare.branch") }}</b-col
          ><b-col cols="8"
            ><b-row
              ><b-col>{{ $t("compare.service-name") }}</b-col
              ><b-col>{{ $t("compare.service-type") }}</b-col
              ><b-col>{{ $t("compare.price") }}</b-col></b-row
            ></b-col
          ></b-row
        >
        <div v-for="item in comparedata" v-bind:key="item.id">
          <b-row>
            <b-col cols="4">
              <router-link
                :to="`/${$i18n.locale}/service/${item.id}`"
                class="route"
                ><img
                  v-if="item.profile_pic == null"
                  class="img-avatar"
                  :src="imagePlaceholder"
                  rounded="circle"
                  :width="50"
                  :height="50"
                  alt="Image"
                />
                <img
                  v-else
                  :src="item.profile_pic"
                  :width="50"
                  :height="50"
                  class="img-avatar"
                  alt="Image"
                />
                <br />{{ item.name }}</router-link
              ></b-col
            >
            <b-col cols="8" v-if="item.services"
              ><div v-for="it in item.services" v-bind:key="it.id">
                <b-row
                  ><b-col>{{ it.services.data.name }}</b-col
                  ><b-col>{{ it.services.data.type }}</b-col
                  ><b-col v-if="it.services.data.price"
                    >{{ it.services.data.price }}
                    {{ it.services.data.currency_code }}</b-col
                  ><b-col v-else
                    ><strong style="color:red;">{{
                      $t("compare.not-updated")
                    }}</strong></b-col
                  ></b-row
                >
                <hr class="solid" />
              </div>
            </b-col>
            <b-col cols="8" v-else>
              <b-row
                ><b-col>---</b-col><b-col>---</b-col><b-col>---</b-col></b-row
              >
            </b-col>
          </b-row>
          <hr class="solid" />
        </div>
      </div>
      <!--b-button @click="createPDF"  style="border-color: white;background-color:grey;width:100px!important;height:30px !important;align-items:center !important;">Download as PDF</b-button-->
    </b-modal>

    <b-modal ref="mymodal" hide-footer title="User Ratings and Reviews">
      <div class="d-block text-center">
        <h3>{{ branch_name }}</h3>
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
                <h5>{{ item.user.data.first_name }}</h5>
              </b-row>
              <b-row style="color:#ffc800; font-size:18px;">
                <b>{{ item.branch_ratings }}&nbsp;&nbsp;&nbsp;</b>
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
                  {{ item2.rating_remarks }}
                  <br />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-modal>

    <b-row v-if="!isLoading">
      <b-col cols="12">
        <b-row>
          <b-col cols lg="8" sm="12" md="12">
            <!--b-alert show variant="success" style="color:black !important;background-color: rgba(0, 0, 0, 0.03) !important; border-color: rgba(0, 0, 0, 0.125)  !important; border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;"-->

            <h5
              class="text-left"
              style="margin-bottom: 1rem !important;font-size:14px !important;margin-top:10px; margin-left:10px !important;"
            >
              {{ $t("search.search") }} : {{ searchcategoryname }} in
              {{ searchcity }}, {{ searchcountry }}
            </h5>

            <div
              style="display:inline-flex;align-items:right;background-color:grey !important;"
            >
              <b-row>
                <b-col cols lg="12" sm="12" md="12">
                  <b-button
                    @click="datePre()"
                    variant="outline-primary"
                    style="border-color: grey; !important"
                  >
                    <img
                      src="../assets/left-arrow.png"
                      height="12"
                      width="10"
                    />
                  </b-button>

                  <h5
                    class="text-center"
                    style="padding-top:10px;display:inline-flex;font-size:12px;color:white !important;"
                  >
                    {{ current_date }}
                  </h5>

                  <b-button
                    @click="datePost()"
                    variant="outline-primary"
                    style="border-color: grey; !important"
                  >
                    <img
                      src="../assets/arrow-point-to-right.png"
                      height="12"
                      width="10"
                    /> </b-button
                ></b-col>
              </b-row>
            </div>
            <div
              v-if="this.checkBranches != ''"
              style="display:inline-flex;align-items:right;"
            >
              <b-button @click="compareData()" class="compare">
                {{ $t("compare.compare") }} ({{ this.checkBranches.length }})
              </b-button>
            </div>
            <div
              v-if="this.checkBranches != ''"
              style="display:inline-flex;align-items:right;"
            >
              <b-button @click="removecompareData()" class="compare">
                {{ $t("compare.remove") }} ({{ this.checkBranches.length }})
              </b-button>
            </div>

            <!--/b-alert-->

            <div
              class="hide1filter"
              style="background-color:#fcfaf5;text-align:left; margin:5px;"
            >
              <b-row>
                <b-col class="text-left">
                  <b-button 
                    id="toggle-btn"
                    variant="outline-primary"
                    @click="toggleModal"
                    >{{ $t("search.filters") }}</b-button
                  >
                  <p v-if="show_filters" style="margin:5px;">
                    <b-card>
                      <p class="text-left">
                        <b-form-radio-group
                          stacked
                          id="radio-group-2"
                          v-model="categoryId_filter"
                          name="radio-sub-component"
                        >
                          <b-form-radio value="1" @change="callack('1')">{{
                            $t("search.medical-care")
                          }}</b-form-radio>
                          <b-form-radio value="2" @change="callack('2')">{{
                            $t("search.pharmacy")
                          }}</b-form-radio>
                          <b-form-radio value="3" @change="callack('3')">{{
                            $t("search.fitness")
                          }}</b-form-radio>
                          <b-form-radio value="4" @change="callack('4')">{{
                            $t("search.health-wellbeing")
                          }}</b-form-radio>
                          <b-form-radio value="4" @change="callack('5')">{{
                            $t("search.senior-care")
                          }}</b-form-radio>
                          <b-form-radio value="4" @change="callack('6')">{{
                            $t("search.alternative-medicine")
                          }}</b-form-radio>
                          <!--b-form-radio value="4" @change="callack('')">{{ $t('search.near-by')}}</b-form-radio-->
                        </b-form-radio-group>
                        <b-form-group
                          id="input-group-1"
                          label="Choose Your Service"
                          label-for="input-1"
                        >
                          <select
                            required
                            v-model="speciality_filter"
                            @change="callack(categoryId_filter)"
                            class="form-control"
                            id="input-1"
                          >
                            <option value="0">Select type</option>
                            <option
                              v-for="item in specialities"
                              :value="item.id"
                              :key="item.name"
                              >{{ item.name }}</option
                            >
                          </select>
                        </b-form-group>
                      </p>
                    </b-card>
                  </p>
                </b-col>
              </b-row>
            </div>
         
            <b-list-group id="services">
              <div v-if="responses!=''">
                <div
                  id="my-table"
                  :per-page="perPage"
                  :current-page="currentPage"
                  v-for="item in responses"
                  v-bind:key="item.id"
                >
                  <b-card>
                    <b-row>
                      <b-col col lg="3" sm="6" xs="6" md="6">
                        <router-link
                          :to="`/${$i18n.locale}/service/${item.id}`"
                          class="route"
                        >
                          <img
                            v-if="item.profile_pic == null"
                            class="img-avatar"
                            :src="imagePlaceholder"
                            rounded="circle"
                            :width="100"
                            :height="100"
                            alt="Image"
                          />
                          <img
                            v-else
                            :src="item.profile_pic"
                            :width="100"
                            :height="100"
                            class="img-avatar"
                            alt="Image"
                          />
                        </router-link>
                        <br />
                        <input
                          type="checkbox"
                          @click="compare(item.id)"
                        /><strong
                          style="font-size:10px;color: grey;font-weight: 300;"
                          >Add to compare</strong
                        >
                      </b-col>
                      <b-col class="text-center" lg="4" sm="6" md="6" xs="6">
                        <b-row>
                          <b-col lg="6" sm="6">
                            <h6 style="text-align:center; !important">
                              {{ item.category_name }}
                            </h6>
                          </b-col>
                          <b-col lg="6" sm="6" class="distance"
                            >{{
                              item.distance.toString().slice(0, 4)
                            }}
                            KM</b-col
                          >
                        </b-row>
                        <router-link
                          :to="`/${$i18n.locale}/service/${item.id}`"
                          class="route"
                        >
                          <b-row class="container">
                            <h4>
                              <router-link
                                :to="`/${$i18n.locale}/service/${item.id}`"
                                class="route"
                                >{{ item.branch_name }}</router-link
                              >
                            </h4>
                          </b-row>

                          <b-row
                            >Timings: {{ item.opening_hours }}-{{
                              item.closing_hours
                            }}</b-row
                          >
                          <b-row>
                            <star-rating
                              v-model="item.rating / 20"
                              :show-rating="false"
                              :read-only="true"
                              active-color="#47aed8"
                              :star-size="14"
                            ></star-rating>
                          </b-row>
                        </router-link>
                      
                        <b-row>
                          <div>
                            <span v-if="item.rating_count != 0">
                              <!-- {{this.idService}} -->
                              Reviews :
                              {{ item.rating_count }}
                              <b-btn
                                size="sm"
                                variant="outline-primary"
                                style="width:112px !important;"
                                @click="read_review(item.id, item.branch_name)"
                                >Read Reviews</b-btn
                              >
                            </span>
                          </div>
                        </b-row>
                        <b-row style="text-align:left !important;">{{
                          item.address
                        }}</b-row>
                      </b-col>

                      <b-col
                        md="12"
                        lg="4"
                        sm="12"
                        xs="12"
                        v-if="item.category_name !== 'Pharmacy'"
                      >
                        <b-row v-if="item.slots" class="hidden-scrollbar">
                          <b-container class="bv-example-row">
                            <b-row>
                              <b-col cols="4">
                                <!--b-button @click="datePre(current_date1, item.id)" variant="outline-primary" style="border-color: #ffffff; !important">
                    <img src="../assets/left-arrow.png" height="12" width="10" />
                  </b-button-->
                              </b-col>
                              <b-col
                                cols="8"
                                class="text-center"
                                style="padding-top:10px;display:inline-flex;font-size:12px;color:black !important;"
                                >{{ current_date }}</b-col
                              >

                              <b-col cols="4" style="text-align:end;">
                                <!--b-button @click="datePost(current_date1, item)" variant="outline-primary" style="border-color: #ffffff; !important">
                    <img src="../assets/arrow-point-to-right.png" height="12" width="10" />
                  </b-button--> 
                              </b-col>
                            </b-row>
                          </b-container>

                          <div class="slots inner text-center display">
                            <router-link
                              :to="`/${$i18n.locale}/service/${item.id}`"
                              class="route"
                            >
                              <div v-if="item.slots != ''">
                                <div
                                  v-for="slot in item.slots"
                                  :key="slot.slot"
                                  class="display"
                                >
                                  <div
                                    v-if="slot.available == 1"
                                    class="display"
                                  >
                                   <div v-if="slot.start_time<currenttime"  class="display">
                                   <div class="display">
                                      <b-button
                                      disabled
                                        size="sm"
                                        style="color:white !important;background-color:#f70f07 !important;border:1px solid #47aed8;"
                                        >{{ slot.start_time }}</b-button
                                      >
                                      <!-- {{new_slots}} -->
                                    </div>
                                   </div>
                                   <div v-else class="display">
                                    <div class="display">
                                      <b-button
                                        size="sm"
                                        style="color:black !important;background-color:white !important;border:1px solid #47aed8;"
                                        >{{ slot.start_time }}</b-button
                                      >
                                      <!-- {{new_slots}} -->
                                    </div>
                                  </div>
                                  <div class="display" v-else>
                                    <div class="display">
                                      <b-button
                                        disabled
                                        size="sm"
                                        style="color:white !important;background-color:grey !important;"
                                        >{{ slot.start_time }}</b-button
                                      >
                                    </div>
                                  </div>
                                  </div>
                                </div>
								
                              </div>
                              <div v-else>
                                <div class="display">
                                  <h5
                                    style="color:grey;text-align:center;font-size:12px;"
                                  >
                                    Not Available!!
                                  </h5>
                                </div>
                              </div><br/>
							 <div v-if="item.video_consultation=='1'"><b-button 
                                        size="sm"
                                        style="color:black !important;background-color:white; margin: 3px !important;border:2px solid #47aed8;
  width: 120px !important;
  font-size: 12px !important !important;"
                                        >{{ $t("video.video_consultation") }}</b-button
                                      ></div> <div v-else><b-button  disabled
                                        size="sm"
                                        style="color:white !important;background-color:grey; margin: 3px !important;
  width: 120px !important;
  font-size: 12px !important !important;"
                                        >{{ $t("video.video_consultation") }}</b-button
                                      ></div>
                            </router-link>
                          </div>
                        </b-row>
                      </b-col>
                      <b-col cols="12" v-if="doctors.length > 0" class="margin">
                        <b-card>
                          <b-row
                            v-for="emp in doctors"
                            :key="emp.id"
                            style="border:1px solid grey;"
                          >
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
                                <b-row
                                  >Practitioner :
                                  {{ emp.employees.data.first_name }}</b-row
                                >
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

                      <!--b-row class="justify-content-center" style="margin-top: 12px" v-if="item.removeFavourites">
          <b-button variant="danger" @click="removeFavourite">Remove</b-button>
        </b-row>
        <b-row class="justify-content-center" style="margin-top: 12px" v-if="this.manage">
          <router-link :to="'/branch/' + this.idService + '/manage'">
            <b-button variant="primary" @click="manage">
              Manage
              <font-awesome-icon icon="user-shield" />
            </b-button>
          </router-link>
        </b-row-->
                    </b-row>
                  </b-card>
                </div>

                <div v-if="this.load_data_message != null">
                  <h3 style="color:grey;font-size:15px;">
                    {{ this.load_data_message }}
                  </h3>
                </div>
                <button class="load" style="" @click="addServices">
                  Load More...
                </button>
                <b-button
                  @click="datePre()"
                  variant="outline-primary"
                  style="border-color: #ffffff; !important"
                >
                  <img src="../assets/left-arrow.png" height="12" width="10" />
                </b-button>

                <h5
                  class="text-center"
                  style="padding-top:10px;display:inline-flex;font-size:12px;color:black !important;"
                >
                  {{ current_date }}
                </h5>

                <b-button
                  @click="datePost()"
                  variant="outline-primary"
                  style="border-color: #ffffff; !important"
                >
                  <img
                    src="../assets/arrow-point-to-right.png"
                    height="12"
                    width="10"
                  />
                </b-button>
              </div>

              <div v-else>
			
                <h5 style="color:grey;text-align:center;font-size:14px;margin-top:15px;">
                  {{ $t("search.not-found") }}
                </h5>
              </div>
            </b-list-group>
          </b-col>
          <b-col col lg="4" sm="12" md="12" class="pl-1">
            <b-card no-body>
              <b-tabs pills card>
                <b-tab :title="$t('search.map')" active>
                  <b-card>
                    <div
                      style="background-color:#fcfaf5;text-align:left;"
                    ></div>
                    <hr />
                    <MarksMap
                      :services="responses"
                      :latitude="mapLat"
                      :longitude="mapLong"
                      :zoom="3"
                    ></MarksMap>
                  </b-card>
                </b-tab>
                <b-tab class="hideFitler" :title="$t('search.filters')">
                  <p class="text-left">
                    <b-form-radio-group
                      stacked
                      id="radio-group-2"
                      @click="toggleModal"
                      v-model="categoryId_filter"
                      name="radio-sub-component"
                    >
                      <b-form-radio value="1" @change="callack('1')">{{
                        $t("search.medical-care")
                      }}</b-form-radio>
                      <b-form-radio value="2" @change="callack('2')">{{
                        $t("search.pharmacy")
                      }}</b-form-radio>
                      <b-form-radio value="3" @change="callack('3')">{{
                        $t("search.fitness")
                      }}</b-form-radio>
                      <b-form-radio value="4" @change="callack('4')">{{
                        $t("search.health-wellbeing")
                      }}</b-form-radio>
                      <b-form-radio value="4" @change="callack('5')">{{
                        $t("search.senior-care")
                      }}</b-form-radio>
                      <b-form-radio value="4" @change="callack('6')">{{
                        $t("search.alternative-medicine")
                      }}</b-form-radio>
                      <!--b-form-radio value="4" @change="callack('')">{{ $t('search.near-by')}}</b-form-radio-->
                    </b-form-radio-group>
                    <b-form-group
                      id="input-group-1"
                      :label="$t('search.choose-service')"
                      label-for="input-1"
                    >
                      <select
                        required
                        v-model="speciality_filter"
                        @change="callack(categoryId_filter)"
                        class="form-control"
                        id="input-1"
                      >
                        <option
                          v-for="item in specialities"
                          :value="item.id"
                          :key="item.name"
                          >{{ item.name }}</option
                        >
                      </select>
                    </b-form-group>
                  </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Card from "./partials/Card";
import MarksMap from "./partials/MarksMap";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import imagePlaceholder from "../assets/placeholder.png";
import StarRating from "vue-star-rating";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

export default {
  name: "Search",

  data() {
    return {
     currenttime:'',
      responses: [],
      mapLat: 0,
      mapLong: 0,
      isLoading: true,
      showThen: false,
      searchcity: "",
      searchcountry: "",
      searchcategory: "",
      searchcategoryname: "All",
      perPage: 3,
      currentPage: 1,
      items: [],
      bottom: false,
      dataToSendReal: {},
      categoryId_filter: 0,
      speciality_filter: 0,
      specialities: [],
      start_real: 0,
      show_filters: false,
      load_data_message: "",
      checkBranches: [],
      dialogCompare: false,
      mymodal: false,

      token: [],
      imagePlaceholder: imagePlaceholder,
      current_date: new Date().toString().slice(0, 10),
      current_date1: new Date(),
      ActiveDate: new Date("Y-m-d"),
      Distance: this.distance,
      branch_name: null,
      branchReview: [],
      rating_real: 0,
      doctors: [],
      checkBranch: "",
      comparedata: [],
      comparedata1: [],
      l: "",
      my_table_compare: [
        {
          text: "Branch",
          align: "center",
          sortable: false,
          value: "branch"
        },
        {
          text: "Service (type)",
          align: "center",
          sortable: false,
          value: "service"
        },
        {
          text: "Price",
          align: "center",
          sortable: false,
          value: "price"
        }
      ]
    };
  },
  props: [
    "city",
    "country",
    "categoryId",
    "specialityId",
    "language",
    "insuranceId",
    "start",
    "inc",
    "ratingcountorder",
    "lat",
  "long"
  ],
  components: { Loading, Card, MarksMap, StarRating },
  methods: {
    bottomVisible() {
      //this.checkBranches=[];
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      // this.checkBranches=[];
      this.show_filters = !this.show_filters;
    },
    callack(id) {
      this.checkBranches = [];
      this.load_data_message = "";
      this.isLoading = true;
      this.specialities = [];
      const self = this;
      this.categoryId_filter = id;
      this.categoryId = id;
      axios
        .post("/category-name", { category_id: id })
        .then(function(response) {
          self.searchcategoryname = response.data.category_name;
        })
        .catch(function(error) {
          //console.log(error);
        });
      if (this.categoryId_filter != "") {
        axios
          .get("specialities/" + this.categoryId_filter)
          .then(function(response) {
            self.specialities = response.data.specialities.data;
            //console.log("specility", self.specialities);
          })
          .catch(function(error) {
            //console.log(error);
          });
      }

      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let dataToSend = {
          catId: self.categoryId_filter || null,
          subCatId: self.speciality_filter || null,
          insuranceId: self.insuranceId || null,
          languageId: self.language || null,
          city: self.city,
          country: self.country,
          lat: self.lat,
          long: self.long,
          order: 0,
          start: 0,
          end: 20,
          distanceType: "km",
          distance: 2,
          ratingcount: self.ratingcountorder || 0,
          date: self.ActiveDate
        };
        self.speciality_filter = 0;
        // //console.log(dataToSend, "bhumi");
        self.searchcity = dataToSend.city;
        self.searchcountry = dataToSend.country;
        self.searchcategory = dataToSend.catId;

        axios
          .post("/services-revised-date", dataToSend)
          .then(function(response) {
            //console.log("services-revised-date", response);
            if (response.data.branches != "") {
              self.setBranches(response.data.branches);
              let array = response.data.branches;
              self.mapLat = parseFloat(array[0].latitude);
              self.mapLong = parseFloat(array[0].longitude);
            } else {
              self.responses = "";
            }

            // self.rows2()
            self.isLoading = false;
          });
      });
    },
    getServices() {
      const self = this;
      //self.checkBranches=[];
      self.load_data_message = "";
      self.isLoading = true;

      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let dataToSend = {
          catId: self.categoryId || null,
          subCatId: self.specialityId || null,
          insuranceId: self.insuranceId || null,
          languageId: self.language || null,
          city: self.city,
          country: self.country,
          lat: self.lat,
          long: self.long,
          order: 0,
          start: parseInt(self.start_real) || 0,
          end: self.start_real + 10,
          distanceType: "km",
          distance: 2,
          ratingcount: self.ratingcountorder || 0,
          date: self.ActiveDate
        };
        self.searchcity = dataToSend.city;
        self.searchcountry = dataToSend.country;
        self.searchcategory = dataToSend.catId;
     if(self.categoryId!=null)
	 {
        axios
          .post("/category-name", { category_id: dataToSend.catId })
          .then(function(response) {
            self.searchcategoryname = response.data.category_name;
          })
          .catch(function(error) {
            //console.log(error);
          });
   }
   else if(self.specialityId!=null )
   {
   
    axios
          .post("specialitiesArray", {id: self.specialityId } )
          .then(function(responsespeciality) {
            self.searchcategoryname = responsespeciality.data.specialityname;
            //console.log("specility", self.specialities);
          })
          .catch(function(error) {
            //console.log(error);
          });
   }
   else
   self.searchcategoryname = "All";
        self.dataToSendReal = dataToSend;

        axios
          .post("/services-revised-date", dataToSend)
          .then(function(response) {
            //console.log("services-revised-date", response);
            self.setBranches(response.data.branches);
            let array = response.data.branches;
            self.mapLat = parseFloat(array[0].latitude);
            self.mapLong = parseFloat(array[0].longitude);
            // self.rows2()
            self.isLoading = false;

            for (let x in array) {
              let tmp = {
                idService: array[x].id,

                name: array[x].branch_name,
                address: array[x].address,
                category: array[x].category_name,
                image: array[x].profile_pic,
                latitude: array[x].latitude,
                longitude: array[x].longitude,
                distance: array[x].distance,
                opening_hours: array[x].opening_hours,
                closing_hours: array[x].closing_hours,
                slots: array[x].slots,
                rating: array[x].rating,
                rating_real: array[x].rating
              };
              // self.responses.push(tmp)
              //console.log(self.responses, "work");
            }
            //console.log(self.responses);
            // if (self.bottomVisible()) {
            // self.getServices();
          })
          .catch(function(error) {
            //console.log(error);
            self.isLoading = false;
          });
      });
    },
    getServicesDate() {
      const self = this;
      self.checkBranches = [];
      self.load_data_message = "";
      self.isLoading = true;

      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let dataToSend = {
          catId: self.categoryId || null,
          subCatId: self.specialityId || null,
          insuranceId: self.insuranceId || null,
          languageId: self.language || null,
          city: self.city,
          country: self.country,
          lat: self.lat,
          long: self.long,
          order: 0,
          start: 0,
          end: self.start_real,
          distanceType: "km",
          distance: 2,
          ratingcount: self.ratingcountorder || 0,
          date: self.ActiveDate
        };
        self.searchcity = dataToSend.city;
        self.searchcountry = dataToSend.country;
        self.searchcategory = dataToSend.catId;
      if(self.categoryId!=null)
	  {
        axios
          .post("/category-name", { category_id: dataToSend.catId })
          .then(function(response) {
            self.searchcategoryname = response.data.category_name;
          })
          .catch(function(error) {
            //console.log(error);
          });
		  }
         else if(self.specialityId!=null)
   {
    axios
          .post("specialitiesArray", {id: self.specialityId } )
          .then(function(responsespeciality) {
            self.searchcategoryname = responsespeciality.data.specialityname;
            //console.log("specility", self.specialities);
          })
          .catch(function(error) {
            //console.log(error);
          });
   }
   else
   self.searchcategoryname = "All";
        //console.log(dataToSend, self.categoryId);
        self.dataToSendReal = dataToSend;

        axios
          .post("/services-revised-date", dataToSend)
          .then(function(response) {
            //console.log("services-revised-date", response);
            // self.setBranches(response.data.branches);
            self.responses = response.data.branches;
            let array = response.data.branches;
            self.mapLat = parseFloat(array[0].latitude);
            self.mapLong = parseFloat(array[0].longitude);
            // self.rows2()
            self.isLoading = false;

            for (let x in array) {
              let tmp = {
                idService: array[x].id,

                name: array[x].branch_name,
                address: array[x].address,
                category: array[x].category_name,
                image: array[x].profile_pic,
                latitude: array[x].latitude,
                longitude: array[x].longitude,
                distance: array[x].distance,
                opening_hours: array[x].opening_hours,
                closing_hours: array[x].closing_hours,
                slots: array[x].slots,
                rating: array[x].rating,
                rating_real: array[x].rating
              };
              // self.responses.push(tmp)
              //console.log(self.responses, "work");
            }
            //console.log(self.responses);
            // if (self.bottomVisible()) {
            // self.getServices();
          })
          .catch(function(error) {
            //console.log(error);
            self.isLoading = false;
          });
      });
    },
    read_review(id, name) {
      this.branchReview = [];
      this.branch_name = name;
      const self = this;

      axios
        .post("/branchreviews", {
          branch_id: id
        })
        .then(function(response) {
          self.branchReview = response.data.reviewdata;

          self.branchReview.forEach(ele => {
            ele.branch_ratings = ele.branch_ratings / 20;
          });

          self.$refs["mymodal"].show();
        })
        .catch(function(error) {
          //console.log(error);
        });
    },
    datePre() {
      // let ActiveDate;
      const self = this;
      //  self.checkBranches=[];
      self.current_date1.setDate(self.current_date1.getDate() - 1);

      if (self.current_date1.getMonth() + 1 <= 9) {
        self.ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      } else {
        self.ActiveDate =
          self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      }
      self.current_date = self.current_date1.toString().slice(0, 10);

      self.getServicesDate();
      // axios
      //   .post("branch/slots", {
      //     branch_id: id,
      //     date: self.ActiveDate
      //  })
      // .then(function(response) {
      //self.new_slots = response.data.available_slots;

      //  })
      //  .catch(function(error) {
      //console.log(error);
      //  });
    },
    datePost() {
      const self = this;
      // self.checkBranches=[];
      self.current_date1.setDate(self.current_date1.getDate() + 1);
      if (self.current_date1.getMonth() + 1 <= 9) {
        self.ActiveDate =
          self.current_date1.getFullYear() +
          "-0" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      } else {
        self.current_date1.getFullYear() +
          "-" +
          (self.current_date1.getMonth() + 1) +
          "-" +
          self.current_date1.getDate();
      }
      self.current_date = self.current_date1.toString().slice(0, 10);

      self.getServicesDate();
      //axios
      // .post("branch/slots", {
      //   branch_id: item.id,
      //   date: self.ActiveDate
      // })
      // .then(function(response) {
      //self.new_slots = response.data.available_slots;

      //  })
      //  .catch(function(error) {
      // TODO handle error
      //console.log(error);
      // });
    },
    setBranches(response) {
      this.responses = response;
      //console.log("branches data:", this.responses);

      this.start_real = this.responses.length;
      // this.checkBranches=[];
    },
    showModal() {
      var self = this;
      self.$refs["mymodal"].show();
    },
    hideModal() {
      this.$refs["mymodal"].hide();
    },
    //toggleModal() {
    // We pass the ID of the button that we want to return focus to
    // when the modal has hidden
    // this.$refs["mymodal"].toggle("#toggle-btn");
    //  },
    addServices() {
      const self = this;
      NProgress.start();
      //self.checkBranches=[];
      if (self.categoryId_filter != "0") {
        self.categoryId = self.categoryId_filter;
      }

      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let dataToSend = {
          catId: self.categoryId || null,
          subCatId: self.specialityId || null,
          insuranceId: self.insuranceId || null,
          languageId: self.language || null,
          city: self.city,
          country: self.country,
          lat: self.lat,
          long: self.long,
          order: 0,
          start: self.start_real,
          end: self.start_real + 10,
          distanceType: "km",
          distance: 2,
          ratingcount: self.ratingcountorder || 0,
          date: self.ActiveDate
        };
        self.searchcity = dataToSend.city;
        self.searchcountry = dataToSend.country;
        self.searchcategory = dataToSend.catId;
		
      if(self.categoryId!=null)
	  {
        axios
          .post("/category-name", { category_id: dataToSend.catId })
          .then(function(response) {
            self.searchcategoryname = response.data.category_name;
          })
          .catch(function(error) {
            console.log(error);
          });
		  }
      else if(self.specialityId!=null)
   {
    axios
          .post("specialitiesArray", {id: self.specialityId } )
          .then(function(responsespeciality) {
            self.searchcategoryname = responsespeciality.data.specialityname;
            //console.log("specility", self.specialities);
          })
          .catch(function(error) {
            //console.log(error);
          });
   }
   else
   self.searchcategoryname = "All";
        //console.log(dataToSend);
        self.dataToSendReal = dataToSend;

        axios
          .post("/services-revised-date", dataToSend)
          .then(function(response) {
            //console.log("services-revised-date", response);

            if (response.data.branches != "") {
              self.start_real = response.data.branches.length;
              self.setBranches(self.responses.concat(response.data.branches));

              let array = response.data.branches;

              // self.responses = response.data.branches;
              self.mapLat = parseFloat(array[0].latitude);
              self.mapLong = parseFloat(array[0].longitude);
              // self.rows2()
              // self.isLoading = false;
              NProgress.done();
              for (let x in array) {
                let tmp = {
                  idService: array[x].id,

                  name: array[x].branch_name,
                  address: array[x].address,
                  category: array[x].category_name,
                  image: array[x].profile_pic,
                  latitude: array[x].latitude,
                  longitude: array[x].longitude,
                  distance: array[x].distance,
                  opening_hours: array[x].opening_hours,
                  closing_hours: array[x].closing_hours,
                  slots: array[x].slots,
                  rating: array[x].rating,
                  rating_real: array[x].rating
                };
                // self.responses.push(tmp);
                //console.log(self.responses, "work");
              }
              //console.log(self.responses);
              //if (self.bottomVisible()) {
              // }
            } else {
              NProgress.done();
              //self.isLoading = false;
              self.load_data_message = "No more result for current search !!";
            }
          })
          .catch(function(error) {
            //console.log(error);
            self.isLoading = false;
          });
      });
    },
    compare(id) {
      var self = this;
      self.checkBranch = "";
      self.checkBranch = id;
      let lcheck = false;

      if (self.checkBranches.length >= 1) {
        for (var i = 0; i < self.checkBranches.length; i++) {
          if (self.checkBranches[i] == self.checkBranch) {
            self.checkBranches.splice(i, 1);
            lcheck = true;
          }
        }
        if (lcheck == false) {
          self.checkBranches.push(self.checkBranch);
        }
      } else self.checkBranches.push(self.checkBranch);
    },
    createPDF() {
      domtoimage
        .toPng(this.$refs.docpdf)
        .then(function(dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          const doc = new jsPDF({
            orientation: "portrait",
            // unit: "pt",
            format: [600, 900]
          });
          doc.addImage(img, "JPEG", 20, 20);
          const date = new Date();
          const filename = "compare-result.pdf";

          doc.save(filename);
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
    },
    removecompareData() {
      this.checkBranches = "";
      this.getServicesDate();
    },
    compareData() {
      var self = this;
      if (self.checkBranches.length < 2)
        alert("Kindly add branch for compare!");
      else {
        axios
          .post("/compare-branches", { branches_id: self.checkBranches })
          .then(function(response) {
            self.comparedata = response.data.compare;

            //ref.dialogCompare = true;
            self.$refs["dialogCompare"].show();
          })
          .catch(function(error) {});
      }
    }
  },
  watch: {
    dialogComapre(val) {
      val || this.close();
    },
    mymodal(val) {
      val || this.close();
    }
  },
  created() {
  var currentDate = new Date();
            this.currenttime = new Date().toJSON().slice(11,16).replace(/-/g,'/');
    this.start_real = this.start;
    this.categoryId_filter = this.categoryId;
    this.speciality_filter = this.specialityId;
    this.getServices();
    if (this.employees != undefined) {
      this.doctors = this.employees;
      this.doctors.forEach(ele => {
        if (ele.avg_overall_rating === undefined) {
          ele.avg_overall_rating = 0;
        } else {
          ele.avg_overall_rating = ele.avg_overall_rating / 20;
        }
      });
    }
    // window.addEventListener("scroll", () => {
    //   this.bottom = this.bottomVisible();
    // });
  }
};
</script>

<style scoped>
#services {
  overflow-y: hidden;
}
@media (max-width: 981px) {
  .hideFitler {
    display: none;
  }
}
@media (min-width: 980px) {
  .hide1filter {
    display: none;
  }
}
.card-header {
  padding: 0.35rem 1rem !important;
}
.tabc {
  color: red !important;
}
button {
  width: 72px;
  font-size: 10px;
  padding: 0px;
}
.img-avatar {
  border-radius: 60%;
}
.route {
  color: black !important;
  text-decoration: none !important;
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
  /* //border: 1px #e2dbdb solid; */
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
  width: 56px !important;
   height: 27px !important;
  font-size: 10px !important;
}
.display {
  display: inline !important ;
  text-align: center !important;
}
.margin {
  margin-top: 15px;
}
.load {
  color: white;
  background-color: #007bff !important;
  width: 112px !important;
  height: 30px !important;
  margin-bottom: 5px !important;
  align-items: center !important;
  border-radius: 15px !important;
}
.compare {
  color: white;
  background-color: grey;
  width: 112px !important;
  height: 34px !important;
  margin-bottom: -2px !important;
  align-items: center !important;
  font-size: 12px !important;
  /* border-radius: 15px !important; */
  /* boreder-color:black */
}
.modal-content-1 {
  position: relative !important;
  display: table !important;
  flex-direction: column !important;
  width: 90% !important;
  pointer-events: auto !important;
  background-color: #d1e0f1 !important;
  background-clip: padding-box !important;
  border: 1px solid #383d41 !important;
  border-radius: 0.3rem yellow !important;
  outline: 0;
  font-size: 10px !important;
  background: rgba(0, 0, 0, 0.075) !important;
}
.col {
  padding-right: -12px;
  padding-left: 0px;
}
video {
  margin: 3px !important;
  width: 100px !important;
  font-size: 10px !important;
}
</style>
