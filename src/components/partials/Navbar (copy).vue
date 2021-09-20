<template>
  <b-navbar variant="info" type="light" style="z-index: 1000;">
    <router-link to="/">
      <b-navbar-brand>
       <img src="../../assets/marker1.png" />
      </b-navbar-brand>
    </router-link>
    <b-navbar-nav v-if="!this.isAuthenticated" >
      <b-nav-item class="first-nav">
 <b-navbar-brand href="#" style="font-size:12px;margin-top:50px;">ABOUT</b-navbar-brand><b-navbar-brand href="#" style="font-size:12px;margin-top:50px;color:blue;">|</b-navbar-brand>
 <b-navbar-brand href="#" style="font-size:12px;margin-top:50px;">HOW IT WORKS</b-navbar-brand> |
 <b-navbar-brand href="#" style="font-size:12px;margin-top:50px;">WHAT YOU WILL GET</b-navbar-brand> |
 <b-navbar-brand href="#" style="font-size:12px;margin-top:50px;">LIST YOUR PRACTICE</b-navbar-brand> |
 <b-navbar-brand href="#" style="font-size:12px;margin-top:50px;">NEWS</b-navbar-brand> |
 <b-navbar-brand href="#" style="font-size:12px;margin-top:50px;">CONTACT</b-navbar-brand>
 </b-nav-item>
 <b-nav-item right>

        <router-link to="/login">
          <b-button squared variant="primary">
            Login
          </b-button>
        </router-link>
        <router-link to="/register">
          <b-button squared variant="primary">
            Register
          </b-button>
        </router-link>
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav v-if="this.isAuthenticated && this.role === 'user'" >

      <b-nav-item class="first-nav" >
                <router-link to="/">
          <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;">
            <font-awesome-icon icon="home" />
          </b-button>
        </router-link>&nbsp;&nbsp;

        <router-link to="/user/profile">
          <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;">
            Profile <font-awesome-icon icon="user" />
          </b-button>
        </router-link>
        <router-link to="/insurances">
          <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;">
            Insurances <font-awesome-icon icon="clipboard" />
          </b-button>
        </router-link>
        <router-link to="/medical-history">
          <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;">
            Medical History <font-awesome-icon icon="medkit" />
          </b-button>
        </router-link>
        <router-link to="/appointments">
          <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;">
            Appointments <font-awesome-icon icon="user-clock" />
          </b-button>
        </router-link>
        <router-link to="/favourites">
            <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;">
            Favourites <font-awesome-icon icon="heart" />
            </b-button>
          </router-link>
 </b-nav-item>
 <b-nav-item right>

          <b-button style="background-color:#46afc2;font-size:14px;margin-top:50px;" @click="logout()" :disabled="isLoading">
            <b style="color:yellow;font-size:14px;"> Hello, {{ this.user.first_name }}</b>[ Logout ]
            <font-awesome-icon v-if="!isLoading" icon="sign-out-alt"/>
            <font-awesome-icon v-if="isLoading" icon="circle-notch" spin />
          </b-button>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-if="this.isAuthenticated && this.role === 'employee' && !this.service_provider" >
      <b-nav-item>
        Hello, <b>{{ this.user.first_name }}</b>
        <router-link to="/">
          <b-button>
            <font-awesome-icon icon="home" />
          </b-button>
        </router-link>&nbsp;&nbsp;
        <router-link to="/employee/profile">
          <b-button>
            Profile <font-awesome-icon icon="user" />
          </b-button>
        </router-link>&nbsp;&nbsp;
        <router-link to="/services">
          <b-button>
            <font-awesome-icon icon="list-ul" />
            My services
          </b-button>
        </router-link>&nbsp;&nbsp;
        <b-button @click="logout()" :disabled="isLoading">
          Logout
          <font-awesome-icon v-if="!isLoading" icon="sign-out-alt"/>
          <font-awesome-icon v-if="isLoading" icon="circle-notch" spin />
        </b-button>
        <b>SERVICE PROVIDER DASHBOARD</b>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-if="this.isAuthenticated && this.role === 'employee' && this.service_provider" >
      <b-nav-item>
        Hello, <b>{{ this.user.first_name }}</b>
        <router-link to="/">
          <b-button>
            <font-awesome-icon icon="home" />
          </b-button>
        </router-link>&nbsp;&nbsp;
        <router-link to="/employee/profile">
          <b-button>
            Profile <font-awesome-icon icon="user" />
          </b-button>
        </router-link>&nbsp;&nbsp;
        <router-link to="/partner/new">
          <b-button>
            <font-awesome-icon icon="plus" />
            New Partner
          </b-button>
        </router-link>&nbsp;&nbsp;
        <router-link to="/services">
          <b-button>
            <font-awesome-icon icon="list-ul" />
            My services
          </b-button>
        </router-link>&nbsp;&nbsp;
        <b-button @click="logout()" :disabled="isLoading">
          Logout
          <font-awesome-icon v-if="!isLoading" icon="sign-out-alt"/>
          <font-awesome-icon v-if="isLoading" icon="circle-notch" spin />
        </b-button>
        <b>SERVICE PROVIDER DASHBOARD</b>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'

export default {
  name: 'Navbar',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'role',
      'service_provider'
    ]),
    ...mapState([
      'user'
    ])
  },
  components: {
    Loading
  },
  methods: {
    logout () {
      const self = this
      this.isLoading = true
      self.$store.dispatch('AUTH_LOGOUT')
        .then(() => {
          self.isLoading = false
          self.$router.push('/')
        })
    }
  },
  created () {
    console.log(this.isAuthenticated)
    console.log(this.role)
  }
}
</script>
<style>
.bg-info {
    background-color: #f8f9fa !important;
}
.first-nav
{
align-items:center !important;
}
.second-nav
{
align-items:right !important;
}
</style>
