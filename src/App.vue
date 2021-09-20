<template>
  <div>
    <div class="Page" v-if="authReady">
  <scroll-fixed-header :fixed.sync="fixed" :threshold="0">   
<Navbar  v-if="$route.name!='VideoRoom'"></Navbar>
<SearchBar v-if="['Kovered','blogs','BlogPostDetails','sponsors','Whatit','Doctors','SearchVideoConsultation',
'Favourites','Notifications','Feedback','MedicalHistory','Service','Search','NavSearch','SearchFacilities'].includes($route.name)"></SearchBar>
<!--SymptomsBar v-if="['Kovered'].includes($route.name)"></SymptomsBar-->
  </scroll-fixed-header>
      <div id="app" class="Content">
       <router-view />
<div id="map" ref="map"></div>
      </div>
      <Footer  v-if="$route.name!='VideoRoom'"></Footer>
    </div>
    <div v-if="!authReady">{{$t('app.load')}}</div>
  </div>
</template>

<script>
import Navbar from "./components/partials/Navbar";
import SearchBar from "./components/SearchBar";
import SymptomsBar from "./components/SymptomsBar";
import Footer from "./components/partials/Footer";
import { mapGetters } from "vuex";
import axios from "axios";
import Vue from 'vue';
import ScrollFixedHeader from 'vuejs-scroll-fixed-header';
Vue.use(ScrollFixedHeader);
export default {
metaInfo() {
     return {
       title: 'Kovered',
        meta: [
       { name: 'viewport', content:'width=device-width,initial-scale=1.0' },
                {property: 'og:title', content: 'Kovered' },
          {property: 'og:site_name', content: 'kovered'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: '' },
          {property: 'og:description', content:''}
                
            ],
             link: [
    {rel: 'canonical', href: 'https://kovered.io'}
  ]
     }
  },
 
  data() {
    return {
    fixed: false,
      authReady: false
    };
  },
  components: { Footer, Navbar, SearchBar, SymptomsBar },
  computed: {
    ...mapGetters(["isAuthenticated", "role"])
  },
  created() {
    let self = this;
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (
          err.config &&
          err.response.status === 401 &&
          !err.config.__isRetryRequest &&
          self.isAuthenticated
        ) {
          // Unauthenticated error. Force user local logout.
          self.$store.dispatch("FORCE_AUTH_LOGOUT").then(() => {
            self.$router.push("/en/login");
          });
        } else {
          if (err.response.status === 404) {
            self.$router.push({
              name: "NotFound",
              params: { message: "Not Found" }
            });
          } else if (err.response.status === 500) {
            self.$router.push({
              name: "NotFound",
              params: { message: "Server Error" }
            });
          }
        }
        throw err;
      });
    });

    this.fetchAuthData();
  },
  methods: {
    fetchAuthData() {
      let self = this;
      if (this.isAuthenticated) {
        let dispatch = "";
        if (this.$store.getters.role === "user") {
          dispatch = "FETCH_USER";
        } else if (this.$store.getters.role === "employee") {
          dispatch = "FETCH_EMPLOYEE";
        }
        this.$store
          .dispatch(dispatch)
          .then(function() {
            self.authReady = true;
          })
          .catch(function() {
            self.authReady = true;
          });
      } else {
        self.authReady = true;
      }
    }
  },
  watch: {
    isAuthenticated: function(val) {
      if (val) {
        if (this.$route.query.redirect) {
          console.log("working0", this.$route.query);
          let link = this.$route.query.redirect;
          console.log(link,"cghjbm")
          this.$router.replace( {
           path: link, 
           query:this.$route.query})
          
        } else {
          this.$router.push("/en");
        }
      }
      else {
        this.$router.push("/en/login");
      }
    }
  }
};
</script>
<style>
@import "assets/fonts/fonts.css";
</style>
<style scoped>
@import 'assets/fonts/fonts.css';
#app {
  font-family: 'Akkurat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
.body{
overflow:visible !important;
}
.vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }

</style>
