<template>
  <div class="bv-example-row">
    <b-container >
      <b-row>
        <b-col class="text-left">
          <div class="contact-item"><font-awesome-icon icon="phone" />
            <p>
               <!--strong>Phone : </strong> +1 (347) 472-2003 <br--> <strong>Phone :+351 - 927600118  </strong></p>
          </div>
        </b-col>
        <b-col class="text-left">
          <div class="contact-item"><font-awesome-icon icon="map" />
            <p><strong>Address : </strong> Travessa das Mercês 22B, <br>Lisbon 1200-109, Portugal</p>
          </div>
        </b-col>
        <b-col class="text-left"> 
          <div class="contact-item"><font-awesome-icon icon="envelope" />
            <p><a  href="mailto:info@kovered.io">info@kovered.io</a> <br><a href="mailto:christopher@kovered.io">christopher@kovered.io</a> </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.min.css";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      isLoading: false
    };
  },
 
};
</script>
<style scoped>
.bv-example-row {
  
  background-image: url("../assets/background/Home-page-1.jpg") ;
  /* background-size: 100% ; */
   background-repeat: no-repeat;
   background-size: 100% 100%;
  height: 370px;

}
link {
  color: blue;
}
h4 {
  font-weight: 300;
}
.row {
  margin-left: 130px;
  margin-right: 130px;
  width: 100%;
 
}
.col {
  /* padding: 20px; */
  padding-top: 50px;
}


@media (max-width: 600px) {
  .row {
    margin-left: 0px;
    margin-right: 0px;
    width: 280px;
  }
}
@media (max-width: 1200px) {
  .row {
    margin-left: 100px;
    margin-right: 70px;
    background-size: 200px 80px;
  }
}
@media (max-width: 850px) {
  .row {
    margin-left: 40px;
    margin-right: 70px;
  }
}
@media (max-width: 1400px) {
  .row {
    margin-left: 10px;
    margin-right: 70px;
    background-size: 200px 80px;
  }
}
</style>
