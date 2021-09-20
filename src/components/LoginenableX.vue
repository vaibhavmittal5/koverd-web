<template>
  <div>
    <div class="login-page d-flex justify-content-center align-items-center">
      <div class="container">
        <section id="content">
          <div class="loading">Loading....</div>
          <div class="login_join_div">
            <form action id="login_form" @submit.prevent="joinRoom">
              <h1>
                <img src="/static/img/marker.png" style="max-width:140px;" />
              </h1>
              <div class="form-group mb-0">
                <input
                  type="text"
                  class
                  placeholder="Enter Name"
                  v-model="username"
                  autocomplete="off"
                  id="nameText"
                  name="nameText"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class
                  placeholder="Enter Video Conferencing ID"
                  v-model="roomId"
                  autocomplete="off"
                  id="roomName"
                  name="roomName"
                />
              </div>
              <div class="row">
                <div class="col-md-12">
                  <input type="checkbox" name="agree" checked />
                  <label>
                    I agree to
                    <a
                      target="_blank"
                      href="https://www.enablex.io/legals/tou/"
                    >Terms of Use</a> and
                    <a
                      target="_blank"
                      href="https://www.enablex.io/legals/privacy-policy/"
                    >Privacy Policy</a>
                  </label>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <input
                    type="submit"
                    value="Join"
                    class="btn btn-primary btn-md login-button w-75"
                    id="joinRoom"
                    :disabled="!isActive"
                    :class="{disabled: !isActive }"
                    :ariaDisabled="isActive"
                  />
                </div>
              </div>
              <!--div class="row mb-2">
                <div id="create_room_div" class="col-md-12 mt-2">
                  <span class="get-room-id">
                    Don't have a Room ID?
                    <a
                      href="#"
                      id="create_room"
                      @click.prevent="createRoom"
                    >Create here</a>
                  </span>
                </div>
              </div-->
              <span
                id="message"
                class="text-success font-weight-light"
                v-if="prefillMsg"
                v-text="prefillMsg"
              ></span>
            </form>
          </div>
        </section>
      </div>
    </div>
    <div class="footer">&copy; vCloudx Pte. Ltd. All Rights Reserved.</div>
  </div>
</template>

<script>
import Api from "../Api";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      roomId: null,
      prefillMsg: null,
      btnDisabled: false
    };
  },
  methods: {
   
    joinRoom() {
      Api.get("/getRoom/" + this.roomId)
        .then(response => {
          console.log(response);
          if (response.data.result === 0) {
            this.$router.push({
              path: `/en/confo/${this.roomId}/participant/${this.username}`
            });
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
    }
  },
  computed: {
    isActive() {
      return this.username && this.roomId;
    }
  },
   created() {
  
    const self = this;
	self.appointmentid=self.$route.params.appointmentId;
	
	 axios
          .post("/user/appointmentdata", { appointment_id: self.appointmentid })
          .then(function(response) {
		 
           if(!response.data.error)
           self.username = response.data.appointment.data.users.data.first_name;
		   else
		  self.$router.push({
              path: `/en/appointments`
            });
          })
		   
          .catch(function(error) {
            console.log(error);
          });
	}
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");

.login_join_div {
  display: block;
  margin-bottom: 2rem;
}

.disabled {
  cursor: not-allowed;
}

input[type="checkbox"] {
  height: 15px;
  width: 15px;
}
</style>
