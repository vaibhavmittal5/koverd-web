<template>
  <div class="bv-example-row">
    <div style="margin-top:8%;">
      <h3 class="pop-img">{{ $t("Whatit.get.title") }}</h3>
      <b-container>
        <b-row>
          <b-col class="text-left margin" style="margin-top:4%;">
            <p>{{ $t("Whatit.get.text") }}</p>
          </b-col>
          <b-col>
            <img src="/static/img/whatit-new.png" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <b-row style="padding:20px;padding-top:30px;">
        <b-col col md="4" sm="12" class="what1">
          <img :src="$t('Whatit.img1')"  class="whatimg" />
        </b-col>
        <b-col col md="4" sm="12" class=" what1">
          <img :src="$t('Whatit.img2')"  class="whatimg" />
        </b-col>
        <b-col col md="4" sm="12" class=" what1">
          <img :src="$t('Whatit.img3')"  class="whatimg" />
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
  }
};
</script>
<style scoped>
.bv-example-row {
  margin-top: 1%;
  width: 100%;
  height: auto;
}
.whatimg {
  width: 100%;
  padding: 0px;
  box-shadow: #333 2px 1px 3px 2px;
}
.what1 {
  padding: 25px;
}
.addimg {
  /* background-color: #66c6de; */
  width: 100%;
  height: auto;
  padding: 20px;
}
.addimg1 {
  background-image: url("../assets/background/what1.png");
  /* background-size: 100%; */
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
}
.img1 {
  /* width: 10px; */
  display: none;
}
h4 {
  font-weight: 300;
}
.container {
  background-size: 100% 100%;
}

.pop-img {
  background-image: url("../assets/frontend/pattern.png");
  background-size: 65% 70%;
  background-repeat: no-repeat;
  height: 110px;
  text-align: left;
  padding-left: 15%;
  padding-top: 20px;
  font-weight: 700;
  color: white;
  margin: 0%;
}

@media (max-width: 600px) {
  .col {
    padding: 10px;
  }
  .down {
    margin-top: 300px;
  }
  .img1 {
    width: 335px;
    display: block;
    text-align: center;
  }
  .addimg1 {
    display: none;
    padding: 0%;
  }
  .whatimg {
    width: 340px;
  }
}
@media (min-width: 980px) {
  .img1 {
    display: none;
  }
}
@media only screen and (max-width: 979px) and (min-width: 600px) {
  .addimg1 {
    display: none;
  }
}
@media (min-width: 1700px) {
  .row {
    margin-left: 20px;
    background-size: 200px 80px;
  }
}
</style>
