<template>
  <b-container fluid>
    <!-- Modal Component -->
    <b-modal id="delete-account" centered  :title="$t('profile.delete-account')" ok-only ok-title="Cancel">
      <p class="my-4">{{ $t('profile.delete-popup-text')}}</p>
      <b-button @click="deleteAccount" variant="danger">{{ $t('profile.delete-confirmation')}}</b-button>
    </b-modal>
    <b-modal id="deactivate-account" centered :title="$t('profile.deactivate-account')" ok-only ok-title="Cancel">
      <p class="my-4">{{ $t('profile.deactive-popup-text')}}</p>
      <b-button @click="deactivateAccount" variant="danger">{{ $t('profile.deactive-confirmation')}}</b-button>
    </b-modal>
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false" :color='clr'></loading>
    <loading :active.sync="isUpdating" :can-cancel="false" :is-full-page="false" :color='clr'></loading>
    <b-alert
      variant="success"
      dismissible
      :show="showThen"
      @dismissed="showThen=false"
    >{{ $t('profile.profile-changed')}}</b-alert>
    <b-alert
      variant="danger"
      dismissible
      :show="showCatch"
      @dismissed="showCatch=false"
    >{{ $t('profile.something-went-wrong')}}</b-alert>
    <b-container class="padding">
      <b-row v-if="!isLoading">
        <b-col>
          <b-form @submit="onSubmit">
            <b-row>
              <b-col col lg="12" sm="12" md="6">
                <b-alert show>{{ $t('profile.profile-info')}}</b-alert>
                <b-card>
                  <b-container fluid>
                    <b-row><b-col>
                       <div
                      size="60"
                      @click="$refs.addinputUpload.click()"
                     
                    >
                      <img
                        :src="this.display_pic"
                        class="img-circle img-circle"
                        style="width:80px;height:80px;"
                      />
                    </div>
                    <input
                      v-show="false"
                      ref="addinputUpload"
                      type="file"
                      @change="addonImageChange"
                    />
                        <div class="padding2">
                          <b-button variant="danger" @click="clearFiles">{{ $t('profile.remove-photo')}}</b-button> 
                        </div>
                      </b-col>
                    </b-row>
                    <b-row class="padding">
                      <b-col cols lg="6" sm="12" xs="12" >
                        <b-form-group
                          id="first name"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          :label="$t('profile.first-name')"
                          label-for="firstNameInput"
                        >
                          <b-form-input
                            id="firstNameInput"
                            type="text"
                            v-model="form.first_name"
                            required
                            :placeholder="$t('profile.first-name')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group
                          id="last name"
                          class="mb-2 mr-sm-2 mb-sm-0"
                            :label="$t('profile.last-name')"
                          label-for="lastNameInput"
                        >
                          <b-form-input
                            id="lastNameInput"
                            type="text"
                            v-model="form.last_name"
                            required
                            :placeholder="$t('profile.last-name')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <!-- </b-container> -->
                    <b-row>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group
                          id="exampleInputGroup1"
                          :label="$t('profile.email')"
                          label-for="exampleInput1"
                        >
                          <b-form-input
                            id="exampleInput1"
                            type="email"
                            v-model="email"
                            disabled
                            placeholder="$t('profile.enter-email')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group
                          id="first name"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          :label="$t('profile.address-1')"
                          label-for="city"
                        >
                          <b-form-input
                            id="firstNameInput"
                            type="text"
                            v-model="form.address_1"
                            required
                            :placeholder="$t('profile.address-1')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                       <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group
                          id="first name"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          :label="$t('profile.address-2')"
                          label-for="city"
                        >
                          <b-form-input
                            id="firstNameInput"
                            type="text"
                            v-model="form.address_2"
                            required
                            :placeholder="$t('profile.address-2')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                        <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group
                          id="first name"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          :label="$t('search-home.city')"
                          label-for="city"
                        >
                          <b-form-input
                            id="firstNameInput"
                            type="text"
                            v-model="form.city"
                            required
                            :placeholder="$t('search-home.city')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group
                          id="first name"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          :label="$t('profile.postal-code')"
                          label-for="city"
                        >
                          <b-form-input
                            id="firstNameInput"
                            type="text"
                            v-model="form.postal_code"
                            required
                            :placeholder="$t('profile.postal-code')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group id="countryGroup" :label="$t('profile.country')" label-for="countryInput" >
                          <!--b-form-input
                            id="countryInput"
                            type="text"
                            v-model="form.country"
                            required
                            :placeholder="$t('profile.country')"
                          ></b-form-input-->

                          <b-select style="font-size:14px;height:40px;border-radius:2px;"   v-model="form.country"  required
                            :placeholder="$t('profile.country')"
                      >
                        
          <option value="0">selct</option>
                    <option
                     
                      v-for="country in countries"
                      v-bind:value="country.country_name"
                      >{{ country.country_name }}</option
                    >
          
                  </b-select>



                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group id="contact-label" class="form-inline">
                          <label label-for="contact">{{ $t('profile.contact')}}</label>
                          <b-form-input
                            id="contact"
                            type="number"
                            v-model="form.country_code"
                            required
                            :placeholder="$t('profile.dialing-code')"
                          ></b-form-input>
                          <b-form-input
                            id="mobile"
                            type="number"
                            v-model="form.mobile_number"
                            required
                            :placeholder="$t('profile.mobile-number')"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols lg="6" sm="12" xs="12">
                        <b-form-group id="gender" :label="$t('profile.gender')">
                          <b-form-select v-model="form.gender" class="mb-3">
                            <option :value="null">{{ $t('profile.select-option')}}</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <b-form-group id="ex1" :label="$t('profile.dob')" label-for="birth_date">
                          <b-form-input
                            id="birth_date"
                            v-model="form.dob"
                            class="mb-3"
                            type="date"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-container>
               
                <b-alert show>{{ $t('profile.emergency-contact')}}</b-alert>
                  <b-form-group id="ctype" :label="$t('profile.contact-type')">
                    <b-form-select v-model="form.em_relationship" class="mb-3" required>
                      <option :value="null">{{ $t('profile.select-option')}}</option>
                      <option value="family">{{ $t('profile.family')}}</option>
                      <option value="friend">{{ $t('profile.friend')}}</option>
                    </b-form-select>
                  </b-form-group>
                  <b-form-group class="form-inline" id="em_contact_label">
                    <label label-for="em_contact">{{ $t('profile.emergency-contact')}}:</label>
                    <b-form-input
                      id="em_contact"
                      type="number"
                      v-model="form.em_country_code"
                      required
                      :placeholder="$t('profile.dialing-code')"
                    ></b-form-input>
                    <b-form-input
                      id="em_contact_number"
                      type="number"
                      v-model="form.em_contact_number"
                      required
                      :placeholder="$t('profile.mobile-number')"
                    ></b-form-input>
                  </b-form-group>
                  <br/>
                  <b-button type="submit" variant="success">{{ $t('profile.save-info')}}</b-button>
                </b-card>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <b-container>
      <b-row v-if="!isLoading">
        <b-col cols="12">
          <b-row>
            <b-col col lg="8" sm="12" md="6">
              <b-alert show>{{ $t('profile.account-settings')}}</b-alert>
              <b-card>
                <h6 class="text-left">{{ $t('profile.change-password')}}</h6>
                <hr />
                <b-alert
                  variant="success"
                  dismissible
                  :show="showPasswordSuccess"
                  @dismissed="showPasswordSuccess=false"
                >{{ $t('profile.password-change-success')}}</b-alert>
                <b-alert
                  variant="danger"
                  dismissible
                  :show="showPasswordError"
                  @dismissed="showPasswordError=false"
                >{{ passwordError ? passwordError : 'We have experienced an internal error. Please try again later.'}}</b-alert>
                <b-form @submit="changePassword">
                  <b-col cols="8" offset="2">
                    <b-form-group
                      id="old_password_label"
                      :label="$t('profile.old-password')"
                      label-for="old_password"
                    >
                      <b-form-input
                        id="old_password"
                        type="password"
                        v-model="password.old_password"
                        :state="passwordLengthOld"
                        aria-describedby="passwordCheckLength_old"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="passwordCheckLength_old"
                      >{{ $t('profile.password-six-char')}}</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group id="password_label" :label="$t('profile.new-password')" label-for="password">
                      <b-form-input
                        id="password"
                        type="password"
                        v-model="password.password"
                        :state="passwordLength"
                        aria-describedby="passwordCheckLength"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="passwordCheckLength"
                      >{{ $t('profile.password-six-char')}}</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                      id="password_confirm_label"
                     :label="$t('profile.confirm-password')"
                      label-for="password_confirm"
                    >
                      <b-form-input
                        id="password_confirm"
                        type="password"
                        v-model="password.password_confirmation"
                        :state="matchPasswords"
                        aria-describedby="passwordCheckMatch"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback id="passwordCheckMatch">{{ $t('profile.password-dont-match')}}</b-form-invalid-feedback>
                    </b-form-group>
                    <b-button type="submit" variant="primary">{{ $t('profile.change-password')}}</b-button>
                  </b-col>
                </b-form>
              </b-card>
            </b-col>
            <b-col col lg="4" sm="12" md="6">
              <b-alert show>{{ $t('profile.danger-zone')}}</b-alert>
              <b-card>
                <p
                  class="text-left"
                >{{ $t('profile.danger-zone-text')}}</p>
                <b-row>
                  <b-col cols="6" class="padding2">
                    <b-button v-b-modal.deactivate-account variant="danger">{{ $t('profile.deactivate-account')}}</b-button>
                  </b-col>
                  <b-col cols="6" class="padding2">
                    <b-button v-b-modal.delete-account variant="danger">{{ $t('profile.delete-account')}}</b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <hr />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import imagePlaceholder from "../assets/placeholder.png";
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
    clr:'#17a2b7',
      form: {
        first_name: "",
        last_name: "",
        address_1:'',
        address_2:'',
        city:'',
        postal_code:'',
        gender: "",
        dob: "",
        country: "",
        mobile_number: "",
        country_code: "",
        em_country_code: "",
        em_contact_number: "",
        em_relationship: ""
      },
      countries:[],
 newimage: "",
 files:null,
      password: {
        old_password: "",
        password: "",
        password_confirmation: ""
      },
      email: "",
      display_pic: imagePlaceholder,
      profile_pic: null,
      isLoading: false,
      isUpdating: false,
      showThen: false,
      showCatch: false,
      showPasswordSuccess: false,
      showPasswordError: false,
      passwordError: ""
    };
  },
  components: { Loading },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created() {
    const self = this;

     
    this.isLoading = true;
    this.getCountries();
    axios
      .get("/user/user-data")
      .then(function(response) {
        let userData = response.data.userProfile.data;
        self.form.first_name = userData.first_name;
        self.form.last_name = userData.last_name;
        self.email = userData.email;
        if (userData.profile.data.profile_pic !== null) {
          self.display_pic = userData.profile.data.profile_pic;
        }
         self.form.address_1 = userData.profile.data.address_1;
          self.form.address_2 = userData.profile.data.address_2;
           self.form.city = userData.profile.data.city;
            self.form.postal_code = userData.profile.data.postal_code;
        self.form.country = userData.profile.data.country;
        self.form.country_code = userData.profile.data.country_code;
        self.form.mobile_number = userData.profile.data.mobile_number;
        self.form.gender = userData.profile.data.gender;
        self.form.dob = userData.profile.data.dob;
        self.form.em_country_code = userData.profile.data.em_country_code;
        self.form.em_contact_number = userData.profile.data.em_contact_number;
        self.form.em_relationship = userData.profile.data.em_relationship;
        self.isLoading = false;
        self.$store.commit("USER_DATA", userData);
      })
      .catch(function() {
        self.isLoading = false;
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const self = this;
      this.isUpdating = true;
 
      if (self.display_pic !== null) {
        
       // this.display_pic = URL.createObjectURL(this.profile_pic);
       // let formData = new FormData();
       // formData.append("profile_pic", this.profile_pic);
        axios
          .post("/user/user-image-new",  { image: self.display_pic })
          .then(function(response) {
            console.log("user-image", response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      axios
        .post("/user/user-data", this.form)
        .then(function(response) {
          self.$store.commit("USER_DATA", response.data.userProfile.data);
          self.isUpdating = false;
          self.showThen = true;
        })
        .catch(function(response) {
          self.isUpdating = false;
          self.showCatch = true;
        });
    },
    clearFiles() {
        const self = this;
      //this.$refs.addinputUpload.reset();
if(self.display_pic!==imagePlaceholder)
{
      self.display_pic = imagePlaceholder;
axios
          .post("/user/user-image-delete")
          .then(function(response) {
            self.$store.commit("USER_DATA", response.data.userProfile.data);
          self.isUpdating = false;
          self.showThen = true;
          })
          .catch(function(error) {
            console.log(error);
          });
}
    },
    getCountries()
    {
    var self=this;
    axios
          .get("countries")
          .then(function(response) {
          
          
           self.countries=response.data.countries; 
          })
          .catch(function(error) {
            console.log(error);
          });

          },
    deactivateAccount() {
      let self = this;
      axios
        .post("/user/deactivate", { active: 0 })
        .then(resp => {
          self.$store.dispatch("FORCE_AUTH_LOGOUT").then(() => {
            self.$router.push("/");
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteAccount() {
      let self = this;
      axios
        .post("/user/delete")
        .then(resp => {
          self.$store.dispatch("FORCE_AUTH_LOGOUT").then(() => {
            self.$router.push("/");
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePassword(evt) {
      evt.preventDefault();
      let self = this;
      axios
        .post("/user/password/change", this.password)
        .then(() => {
          self.password.old_password = "";
          self.password.password = "";
          self.password.password_confirmation = "";
          self.showPasswordSuccess = true;
          self.showPasswordError = false;
          self.showThen = false;
          self.showCatch = false;
        })
        .catch(err => {
          self.password.old_password = "";
          self.password.password = "";
          self.password.password_confirmation = "";
          self.showPasswordSuccess = false;
          self.showPasswordError = true;
          self.showThen = false;
          self.showCatch = false;
          if (err.response.data.error) {
            self.passwordError = err.response.data.error;
          } else {
            self.passwordError = "There was an error. Please try again later.";
          }
          console.log(err);
        });
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      console.log(event);
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.display_pic = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
 addonImageChange(e) {
      const file = this.$refs.addinputUpload.files[0];
      if (!file) {
        e.preventDefault();
        alert("No file chosen");
        return;
      } else if (/\.(jpe?g|png|gif)$/i.test(file.name) === false) {
        alert("not an image! Please Choose another");
      } else if (file.size > 1024 * 8192) {
        e.preventDefault();
        alert("File too big (> 8MB) \n Please choose another file");
        return;
      } else {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.addcreateImage(files[0]);
 
      }
    },
    addcreateImage(file) {
      let reader = new FileReader();
      let self = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        self.addnewimage = reader.result;
 self.display_pic = self.addnewimage;
        
      };
    },
  },
  computed: {
    matchPasswords() {
      if (this.password.password_confirmation === "") {
        return null;
      } else {
        return this.password.password === this.password.password_confirmation;
      }
    },
    passwordLength() {
      if (this.password.password === "") {
        return null;
      } else {
        return this.password.password.length >= 6;
      }
    },
    passwordLengthOld() {
      if (this.password.old_password === "") {
        return null;
      } else {
        return this.password.old_password.length >= 6;
      }
    }
  }
};
</script>

<style scoped>
.padding {
  padding-top: 20px;
}
.padding2 {
  padding: 10px;
}
img {
  border-radius: 10px;
}
</style>
