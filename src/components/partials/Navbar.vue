<template>
  <div >
   
    <b-navbar v-if="!this.isAuthenticated"  toggleable="lg" type="dark" class="pdhead"  >
      <b-container>
      <b-navbar-brand :href="'https://kovered.io'"
        ><img src="/static/img/logo 150.png" style="height:80px !important;width:80px !important;"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :href="`/${$i18n.locale}/about`"
            ><a :href="`/${$i18n.locale}/about`" class="naveffect" style="font-size:16px;font-weight:500;text-decoration: none;"
              >{{ $t("nav.about") }}
            </a></b-nav-item
          >
          <b-nav-item :href="`/${$i18n.locale}/Howitwork`"
            ><a :href="`/${$i18n.locale}/Howitwork`"
              class="naveffect" style="font-size:16px;font-weight:500;text-decoration: none;"
              >{{ $t("nav.howitworks") }}</a>
            </b-nav-item>
          <b-nav-item href="#">
            <router-link
              :to="`/${$i18n.locale}/Whatit`"
              class="naveffect" style="font-size:16px;font-weight:500;text-decoration: none;"
              >{{ $t("nav.What") }}</router-link
            >
          </b-nav-item>
          <b-nav-item href="https://business.kovered.io/en">
            <a
              href="https://business.kovered.io/en"
              target="_blank"
              class="naveffect" style="font-size:16px;text-decoration: none;font-weight:500;">{{ $t("nav.List") }}</a>
          </b-nav-item>
          <b-nav-item :href="`/${$i18n.locale}/sponsors`" > <a
              :href="`/${$i18n.locale}/sponsors`"
              class="naveffect" style="font-size:16px;font-weight:500;text-decoration: none;"
            >{{ $t("nav.sponsors") }} </a>
          
          </b-nav-item>
          <b-nav-item href="#">
            <router-link
              :to="`/${$i18n.locale}/contact`"
             class="naveffect"  style="font-size:16px;font-weight:500;text-decoration: none;"
              >{{ $t("nav.contact") }}</router-link
            >
          </b-nav-item>
		   <b-nav-item href="#">
            <router-link
              :to="`/${$i18n.locale}/blogs`"
              class="naveffect" style="font-size:16px;font-weight:500;text-decoration: none;"
              >Blog</router-link
            >
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

         

          <b-nav-item-dropdown  text="Login" class="m-md-3" right >
            <!-- Using 'button-content' slot -->
            <!--template v-slot:button-content  >
              <p style="padding-left:20px;margin:0px;"  class="naveffect" ><b>Login</b></p>
            </template-->
            <b-dropdown-item href="#">
              <router-link :to="`/${$i18n.locale}/login`">
                <b-button style="background-color:#4ab0c3;outline:none !important;"
                  > <font-awesome-icon icon="user" /> &nbsp;
               {{ $t("nav.patient") }} &nbsp;&nbsp;<font-awesome-icon icon="arrow-right" />  
                </b-button> </router-link
            ></b-dropdown-item>
            <b-dropdown-item href="https://business.kovered.io/en" 
              ><a  href="https://business.kovered.io/en"
              target="_blank" >
                <b-button  style="background-color:grey;"
                  > <font-awesome-icon icon="medkit" /> &nbsp;
                   {{ $t("nav.provider") }}  &nbsp;&nbsp;<font-awesome-icon icon="arrow-right" />  
                 
                </b-button> </a
            ></b-dropdown-item>
          </b-nav-item-dropdown>


           <b-nav-item text="Lang" class="m-md-0" right>

 
            <div class="locale-changer" style="margin-left: -20px;"> 
            <b-dropdown  >  
  <template slot="button-content" >
    <img class="img-fluid p-2" :src="`/static/img/${$i18n.locale}.svg`" width=50 />
  </template>
   <b-dropdown-item  @click="setlocale('en')">
    <img class="img-fluid p-2" :src="`/static/img/en.svg`" width=50 />
  </b-dropdown-item>
  <b-dropdown-item  @click="setlocale('pt')">
    <img class="img-fluid p-2" :src="`/static/img/pt.svg`" width=50 />
  </b-dropdown-item>
  <b-dropdown-item  @click="setlocale('fr')">
  <img class="img-fluid p-2" :src="`/static/img/fr.svg`" width=50 /> </b-dropdown-item>
</b-dropdown>

              <!--select v-model="$i18n.locale" @change="setlocale()" >
                <option value="en">
                 <button primary>
                      <img :src="enpic" alt="flag"
                      class="w-8 h-8 rounded-full" />
                      </button></option>
                <option value="pt">
                  <button primary>
                    <img
                      src="enpic"
                      height="10px"
                      width="10px"
                      alt="flag"
                      class="w-8 h-8 rounded-full"
                    />
                    <span>PT </span>
                  </button>
                </option>
                 <option value="fr">
                  <button primary>
                    <img
                      src="../../assets/logo-blue.png"
                      height="10px"
                      width="10px"
                      alt="flag"
                      class="w-8 h-8 rounded-full"
                    />
                    <span>FR </span>
                  </button>
                </option>
              </select-->
              <!-- <button primary>
                <img src="../../assets/logo-blue.png" height="10px" width="10px" alt="flag" class="w-8 h-8 rounded-full" />
                <span>EN  </span>
              </button> -->
            </div>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
	
    <!-- <b-navbar type="light" toggleable="lg" v-if="!this.isAuthenticated">
      <router-link :to="`/${$i18n.locale}`">
        <transition
          name="router-anim"
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOutDown"
        >
          <b-navbar-brand href="/search-home" class="Kov_font">
            <img src="../../assets/logo-blue.png" height="85px" width="100px" />
            <br />
          </b-navbar-brand>
        </transition>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="first-nav">
          <b-navbar-brand style="font-size:14px;">
            <a
              :href="`/${$i18n.locale}/about`"
              style="font-size:14px;color:black;"
              >{{ $t("nav.about") }}
            </a>
          </b-navbar-brand>
          <b-navbar-brand
            class="mob"
            href="#"
            style="font-size:14px;color:blue;"
            >|</b-navbar-brand
          >
          <b-navbar-brand href="/" style="font-size:14px;">
            <router-link
              :to="`/${$i18n.locale}/Howitwork`"
              style="font-size:14px;color:black;"
              >{{ $t("nav.howitworks") }}</router-link
            >
          </b-navbar-brand>
          <b-navbar-brand
            class="mob"
            href="#"
            style="font-size:14px;color:blue;"
            >|</b-navbar-brand
          >
          <b-navbar-brand style="font-size:14px;">
            <router-link
              :to="`/${$i18n.locale}/Whatit`"
              style="font-size:14px;color:black;"
              >{{ $t("nav.What") }}</router-link
            >
          </b-navbar-brand>
          <b-navbar-brand
            class="mob"
            href="#"
            style="font-size:14px;color:blue;"
            >|</b-navbar-brand
          >
          <b-navbar-brand href="/" style="font-size:14px;">
            <a
              href="https://business.kovered.io/en"
              target="_blank"
              style="font-size:14px;color:black;"
              >{{ $t("nav.List") }}</a
            >
          </b-navbar-brand>
          <b-navbar-brand
            href="#"
            class="mob"
            style="font-size:14px;color:blue;"
          >
            <span>|</span>
          </b-navbar-brand>
          <b-navbar-brand href="/" style="font-size:14px;">
            <router-link
              :to="`/${$i18n.locale}/contact`"
              style="font-size:14px;color:black;"
              >{{ $t("nav.contact") }}</router-link
            >
          </b-navbar-brand>
		  <b-navbar-brand href="/" style="font-size:14px;">
            <router-link
              :to="`/${$i18n.locale}/blogs`"
              style="font-size:14px;color:black;"
              >BLOG</router-link
            >
			<span>|</span>
          </b-navbar-brand>
          <b-navbar-brand
            class="mob"
            href="#"
            style="font-size:14px;color:blue;"
            >|</b-navbar-brand
          >
          <b-navbar-brand style="font-size:14px;">
            <router-link
              :to="`/${$i18n.locale}/search-home`"
              style=" color:black;"
              >{{ $t("nav.search") }}</router-link
            >
          </b-navbar-brand>
          <b-navbar-brand
            class="mob"
            href="#"
            style="font-size:14px;color:blue;"
            >|</b-navbar-brand
          >
          <b-navbar-brand style="font-size:14px;">
		  
		  
		  
		  
		  
		  
		  
		  
             <div class="locale-changer" style="margin-left: -20px;"> 
            <b-dropdown  >  
  <template slot="button-content" >
    <img class="img-fluid p-2" :src="`/static/img/${$i18n.locale}.svg`" width=50 />
  </template>
   <b-dropdown-item  @click="setlocale('en')">
    <img class="img-fluid p-2" :src="`/static/img/en.svg`" width=50 />
  </b-dropdown-item>
  <b-dropdown-item  @click="setlocale('pt')">
    <img class="img-fluid p-2" :src="`/static/img/pt.svg`" width=50 />
  </b-dropdown-item>
  <b-dropdown-item  @click="setlocale('fr')">
  <img class="img-fluid p-2" :src="`/static/img/fr.svg`" width=50 /> </b-dropdown-item>
</b-dropdown>

            
             
            </div>

          </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-navbar-brand style="font-size:14px;">
            <b-container fluid class="bv-example-row">
              <b-row>
                <b-col style="margin-right:10px; padding-left:0px;">
                  <b-button-group size="sm">
                    <b-nav-item
                      class="social"
                      target="_blank"
                      href="https://www.facebook.com/kovered.io/"
                    >
                      <b-button class="btn-bg">
                        <img src="../../assets/facebook.png" height="16px" />
                      </b-button>
                    </b-nav-item>
                    <b-nav-item
                      target="_blank"
                      href="https://twitter.com/IoKovered"
                    >
                      <b-button class="btn-bg">
                        <img src="../../assets/twitter.png" height="16px" />
                      </b-button>
                    </b-nav-item>
                    <b-nav-item
                      target="_blank"
                      href="https://www.instagram.com/kovered.io/?hl=en"
                    >
                      <b-button class="btn-bg">
                        <img src="../../assets/instagram.png" height="16px" />
                      </b-button>
                    </b-nav-item>
                  </b-button-group>
                </b-col>
              </b-row>
            </b-container>
            <div class="login">
              <router-link :to="`/${$i18n.locale}/login`">
                <b-button class="btn-color"
                  >{{ $t("nav.login") }}
                  <font-awesome-icon icon="user" />
                </b-button>
              </router-link>
              <b-navbar-brand
                class="mob"
                href="#"
                style="color:white;margin-right: 0rem;font-size:12px;"
                >|</b-navbar-brand
              >
              <router-link :to="`/${$i18n.locale}/register`">
                <b-button class="btn-color"
                  >{{ $t("nav.sign") }}
                  <font-awesome-icon icon="user-plus" />
                </b-button>
              </router-link>
            </div>
          </b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
    <!-- </b-container> -->
    <b-container fluid class="bg-info" type="dark">
	 
      <b-navbar
        class="container"
        toggleable="lg"
        type="dark"
        variant="info"
        v-if="this.isAuthenticated && this.role === 'user'"
      >
        <b-navbar-brand href="#" class="Kov_font">
          <router-link :to="`/${$i18n.locale}`">
            <img src="../../assets/logo-new.png" style="height:100px !important;"  />
            <br />
         
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link :to="`/${$i18n.locale}/user/profile`">
                <img src="../../assets/profile-pic.png" style="max-height:30px !important;" />
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/">
                <b-button variant="outline-dark">
                  <font-awesome-icon icon="home" />
                </b-button> </router-link
              >&nbsp;&nbsp;
			  
              <router-link :to="`/${$i18n.locale}/notifications`">
                <b-button variant="outline-dark">
                  <font-awesome-icon icon="bell" />
                  <b-badge v-if="this.count != 0">{{ this.count }}</b-badge>
                </b-button> </router-link
              >&nbsp;&nbsp;
            </b-nav-item>
            <router-link :to="`/${$i18n.locale}/appointments`" class="naveffect">
                 <strong  > <font-awesome-icon icon="user-clock" />
                    Appointments
                   </strong>
                 
                </router-link>
             
            <b-nav-item-dropdown text="Menu" right >
              
              <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/about`">
                  <b-button variant="outline-primary" class="menuhover">
                    About us
                    <!--font-awesome-icon icon="user-clock" /-->
                  </b-button>
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/favourites`">
                  <b-button variant="outline-primary" class="menuhover">
                    Favourites
                    <!--font-awesome-icon icon="heart" /-->
                  </b-button>
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/notifications`">
                  <b-button variant="outline-primary" class="menuhover">
                    Notifications
                    <!--font-awesome-icon icon="heart" /-->
                  </b-button>
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/search-home`">
                  <b-button variant="outline-primary" class="menuhover">
                    Search
                    <!--font-awesome-icon icon="search" /-->
                  </b-button>
                </router-link>
              </b-dropdown-item>
			  <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/blogs`">
                  <b-button variant="outline-primary" class="menuhover">
                    Blog
                    <!--font-awesome-icon icon="envelope" /-->
                  </b-button>
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>



                
  <b-navbar-brand style="font-size:15px;">
            
                  <div class="locale-changer lnbtn">
      
            <b-dropdown  >  
  <template slot="button-content" style="" >
    <img class="img-fluid p-2" :src="`/static/img/${$i18n.locale}.svg`" width=50  />
  </template>
   <b-dropdown-item  @click="setlocale('en')">
    <img class="img-fluid p-2" :src="`/static/img/en.svg`" width=50 />
  </b-dropdown-item>
  <b-dropdown-item  @click="setlocale('pt')">
    <img class="img-fluid p-2" :src="`/static/img/pt.svg`" width=50 />
  </b-dropdown-item>
  <b-dropdown-item  @click="setlocale('fr')">
  <img class="img-fluid p-2" :src="`/static/img/fr.svg`" width=50 /> </b-dropdown-item>
</b-dropdown>
             </div>
          
              </b-navbar-brand>
            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/user/profile`">
                  <b-button variant="outline-primary" class="menuhover">
                    Profile
                    <font-awesome-icon icon="user" />
                  </b-button>
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <b-button
                  @click="logout()"
                  :disabled="isLoading"
                  variant="outline-primary"
                  class="menuhover"
                >
                  <b style="font-size:12px;">
                    <!-- Hi, {{ this.user.first_name }} -->
                    LOGOUT
                  </b>
                  <font-awesome-icon v-if="!isLoading" icon="sign-out-alt" />
                  <font-awesome-icon
                    v-if="isLoading"
                    icon="circle-notch"
                    spin
                  />
                </b-button>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <router-link :to="`/${$i18n.locale}/medical-history`">
                  <b-button variant="outline-primary" class="menuhover">
                    Medical History
                    <font-awesome-icon icon="medkit" />
                  </b-button>
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
           
          </b-navbar-nav>
         
          
        </b-collapse>
      </b-navbar> 
    </b-container>
    <b-navbar-nav
      v-if="
        this.isAuthenticated &&
          this.role === 'employee' &&
          !this.service_provider
      "
    >
      <b-nav-item>
        Hello,
        <b>{{ this.user.first_name }}</b>
        <router-link to="/">
          <b-button>
            <font-awesome-icon icon="home" />
          </b-button> </router-link
        >&nbsp;&nbsp;
        <router-link to="/employee/profile">
          <b-button>
            Profile
            <font-awesome-icon icon="user" />
          </b-button> </router-link
        >&nbsp;&nbsp;
        <router-link to="/services">
          <b-button>
            <font-awesome-icon icon="list-ul" />My services
          </b-button> </router-link
        >&nbsp;&nbsp;
        <b-button @click="logout()" :disabled="isLoading">
          Logout
          <font-awesome-icon v-if="!isLoading" icon="sign-out-alt" />
          <font-awesome-icon v-if="isLoading" icon="circle-notch" spin />
        </b-button>
        <b>SERVICE PROVIDER DASHBOARD</b>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav
      v-if="
        this.isAuthenticated &&
          this.role === 'employee' &&
          this.service_provider
      "
    >
      <b-nav-item>
        Hello,
        <b>{{ this.user.first_name }}</b>
        <router-link to="/">
          <b-button>
            <font-awesome-icon icon="home" />
          </b-button> </router-link
        >&nbsp;&nbsp;
        <router-link to="/employee/profile">
          <b-button>
            Profile
            <font-awesome-icon icon="user" />
          </b-button> </router-link
        >&nbsp;&nbsp;
        <router-link to="/partner/new">
          <b-button>
            <font-awesome-icon icon="plus" />New Partner
          </b-button> </router-link
        >&nbsp;&nbsp;
        <router-link to="/services">
          <b-button>
            <font-awesome-icon icon="list-ul" />My services
          </b-button> </router-link
        >&nbsp;&nbsp;
        <b-button @click="logout()" :disabled="isLoading">
          Logout
          <font-awesome-icon v-if="!isLoading" icon="sign-out-alt" />
          <font-awesome-icon v-if="isLoading" icon="circle-notch" spin />
        </b-button>
        <b>SERVICE PROVIDER DASHBOARD</b>
      </b-nav-item>
    </b-navbar-nav>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import FixedHeader from 'vue-fixed-header';
export default {
  name: "Navbar",
  data() {
    return {
   
        enpic: "/static/img/minus.png",
      langs: [
        {
          img: "/static/img/minus.png",
          id: "en"
        },
        {
          img: "../../assets/logo-blue.png",
          id: "pt"
        },
        {
          img: "../../assets/logo-blue.png",
          id: "fr"
        }
      ],
      isLoading: false,
      notifications: [],
      count: ""
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "role", "service_provider"]),
    ...mapState(["user"])
  },
  components: {
    Loading
  },
  created() {
    let result;
    console.log("Browser Language = " + navigator.language);

    console.log();
    var self = this;
    console.log(self.isAuthenticated);
    console.log(self.role);
    if (self.isAuthenticated && self.role === "user") {
      this.interval = setInterval(() => this.getUnreadNotifications(), 9000);
    }
  },
  methods: {
    setlocale(slang) {
	  this.$i18n.locale=slang;
      console.log("called");
      if (navigator.language === "pt") {
        this.$i18n.locale = navigator.language;
        lang=this.$i18n.locale;
        console.log(this.$i18n.locale);
      }
      console.log(this.$i18n.locale);
 if(this.$route.name!='navsearch' && this.$route.name!='search' )
   this.$router.replace({
     params: { lang: this.$i18n.locale }
   });
    },
   
    logout() {
      const self = this;
      this.isLoading = true;
      self.$store.dispatch("AUTH_LOGOUT").then(() => {
        self.isLoading = false;
        self.$router.push("/");
      });
    },
    getUnreadNotifications() {
      const self = this;
      this.isLoading = true;
      axios
        .get("/user/getnotifications")
        .then(function(response) {
          self.notifications = response.data.unread_notifications;
          self.count = response.data.count;

          self.isLoading = false;
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    }
  }
};
</script>

<style>
/* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */
.nav-link {
  padding: 0px;
}


@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    /* opacity: 1; */
  }
}
.social {
  padding: 0px;
}
.pdhead {
  background-color: #17a2b7;
}
.ml-5 {
  margin-left: 8rem !important;
}
.ml-4 {
  margin-left: 5rem !important;
}
select {
  border: rgb(74, 176, 195) 2px solid;
  /* padding-top: 5px; */
  color: rgb(7, 7, 7);
}
.navbar-nav {
  padding-left: 0%;
}
.bg-info {
  background-color: #17a2b7 !important;
}
.first-nav {
  font-size: 16px;
  margin-top: 50px;
  text-transform: uppercase;
}
.first-nav-item {
  width: 160px;
  line-break: strict;
  align-items: center !important;
  text-align: center !important;
  padding-top: 2px;
  text-transform: uppercase;
}
.second-nav {
  align-items: right !important;
}
.Kov_font {
  align-items: center;
  font-size: 12px;
}
.sec-nav {
  margin-top: 10px;
}
.btn-color {
  background-color: #4ab0c3 !important;
  border: none;
  height: 34px;
  font-size: 14px;
  width: auto;
  border-radius: 0px;
}
.login {
  background-color: #47aed8 !important;
}
.btn-bg {
  background-color: white !important;
  border: none !important;
  padding-left: 0px;
}
.link {
  color: black;
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    padding-left: 0% !important;
  }
  #nav-collapse {
    margin-left: 10px;
  }
  .lnbtn
  {
  margin-top:-25px;
  
  }
}
@media (max-width: 500px) {
  .mob_view {
    display: none !important;
  }
  .first-nav {
    margin: 2px;
  }
  .lnbtn
  { 
  margin-left:-20px;
  }
}
@media (max-width: 960px) {
  .mob {
    display: none !important;
  }
}
@media (max-width: 1200px) {
  .first-nav {
    margin: 2px;
  }
  
}
.btn-secondary {
    color: white;
    background-color: #17a2b7;
    border-color: #17a2b7;
}

.dropdown-menu
{
  min-width:0px;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
   color: white;
    background-color: #17a2b7;
    border-color: #17a2b7;
}
.loginbtn:hover{
    background-color: unset !important;
    color: unset !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: white;
}
.naveffect {
	color:white;
	text-decoration:none;
}
.naveffect:hover{
	color:#003044;
	text-decoration:none;
}
.menuhover {
  border: 0px solid #17a2b7;
  color :rgb(38 139 158);

}
.menuhover:hover {
  background-color:#17a2b7;
  border: 1px solid #17a2b7;

}

</style>
