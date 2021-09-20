<template>
  <div class="bv-example-row">
    <b-container>
      <h3 style="align-items:center;">Our Sponsors </h3>
     <b-row>
        <b-col class="text-center" col lg="4" md="4" sm="6">
         <img src="../assets/sponsors/skinlife.png" style="align-items:left;width:200px;height:120px;padding:15px; !important;" />
        </b-col>
    
        <b-col class="text-center" col lg="4" md="4" sm="6">
         <img src="../assets/sponsors/bodyconcept.png" style="width:200px;height:120px;padding:15px; !important;" />
        </b-col>
    
        <b-col class="text-center" col lg="4" md="4" sm="6">
         <img src="../assets/sponsors/chiado-training-club.png" style="width:200px;height:120px;padding:15px; !important;" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
export default {
  name: "Sponsors",
  data() {
    return {
      isLoading: false
    };
  },
  mounted () {
  window.scrollTo(0, 0)
}
};
</script>
<style scoped>
.container {
  padding-top: 20px;
  padding-bottom: 120px;
  overflow-y:hidden !important;
}
.bv-example-row {
 /* background-image: url("../assets/background/Home-page-1.jpg"); */
  /* background-size: 100%; */
  height: 100%;
  background-color:#edf9fc;
}

h4 {
  font-weight: 300;
}
.col {
  padding: 30px;
}

@media (max-width: 600px) {
  .col {
    padding: 20px;
  }
  img {
    width: 300px;
  }
}
@media (max-width: 1200px) {
}
@media (max-width: 850px) {
}
@media (min-width: 1400px) {
  .row {
    margin-left: 20px;
    margin-right: 70px;
    background-size: 200px 80px;
  }
}
</style>
