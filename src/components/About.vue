<template>
  <div class="bv-example-row">
    <b-container>
      <b-row>
        <b-col class="text-left" col lg="6" md="12" sm="12">
          <h3> {{$t('about.title')}} </h3>
         
          <p>{{$t('about.text')}}<br><br> 
          {{$t('about.text2')}}</p>
        </b-col>
        <b-col col lg="6" md="12" sm="12" class="text-left">
          <img src="../assets/background/About.png" />
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
  name: "About",
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
  padding-bottom: 20px;
}
.bv-example-row {
  background-image: url("../assets/background/Home-page-1.jpg");
  /* background-size: 100%; */
  height: auto;
}
img {
  width: 500px;
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
