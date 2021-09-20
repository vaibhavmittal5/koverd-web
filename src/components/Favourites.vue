<template>
  <b-container fluid style="margin-top:10px;">

    <b-alert show>{{$t('kovFavour.title')}}</b-alert>
    <b-card class="space" v-for="item in favourites" :key="item.id">
      <b-container>
        <b-row>
          <b-col>
            <img v-if="item.profile_pic === null" :src="imagePlaceholder" alt="Image" />
            <img v-else :src="item.profile_pic" :width="100" :height="100" alt="Image" />
          </b-col>
          <b-col class="text">
            <p>
              <img src="../assets/person.png" height="20" />
              <strong>{{$t('kovFavour.name')}} :</strong>
              {{item.name}}
            </p>
            <p>
              <img src="../assets/time.png" height="20" />
              <strong>{{$t('kovFavour.Date')}} :</strong>
              {{item.category_name}}
              <br />
            </p>
            <p>
              <img src="../assets/location.png" height="20" />
              <strong>{{$t('kovFavour.address')}} :</strong>
              {{item.address}} {{item.city}}
              <star-rating
                  class="text-center"
                  v-model="item.rating.data.rating_sum"
                  :show-rating="false"
                  :read-only="true"
                  active-color="#47aed8"
                  :star-size="20"
                ></star-rating>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
    <b-card class="space" v-if="favourites.length == 0">
      <b-container>
        <b-row>
          <b-col>
           <b-alert show> {{$t('kovFavour.nofav')}}
           </b-alert>
           </b-col>
        </b-row>
      </b-container>
    </b-card>
  </b-container>
</template>

<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import imagePlaceholder from "../assets/placeholder.png";
import StarRating from "vue-star-rating";

export default {
  name: "Favourites",
  data() {
    return {
      responses: [],
      isLoading: false,
      showThen: false,
      favourites: [],
      imagePlaceholder: imagePlaceholder
    };
  },
  methods: {
    removeCard(id) {
      console.log("id = " + id);
      for (let item in items) {
        console.log(items[item]);
        if (items[item].idService === id) {
          items.splice(item, 1);
          this.showThen = true;
          break;
        }
      }
    }
  },
  components: { Card, Loading, StarRating },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created() {
    const self = this;
    this.isLoading = true;
    axios
      .get("/user-favourites")
      .then(function(response) {
        self.favourites = response.data.branches.data;
        let array = response.data.branches.data;
        for (let x in array) {
          let tmp = {
            idService: array[x].id,
            name: array[x].name,
            address: array[x].address,
            category: array[x].category_name,
            image: array[x].profile_pic
          };
          self.responses.push(tmp);
        }
        self.isLoading = false;
      })
      .catch(function(error) {
        console.log(error);
        self.isLoading = false;
      });
  }
};
</script>

<style scoped>
.card-margin {
  margin-bottom: 12px;
}
.text {
  text-align: start;
}
img{
  border-radius: 50%;
}
</style>
