<template>
  <div >
    <b-container >
      <b-row>
        <b-col col lg="12" sm="12" class="text-center addimg">
          <h3 class="pop-img">{{ $t("kovHow.howitworks") }}</h3>
          <p style="text-align:left;">
            {{ $t("kovHow.text") }}
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col col lg="12" sm="12" class="text-center addimg">
          <template id="my-template">
            <div class="container">
              <div class="timeline" v-if="anyArticle()">
                <div
                  v-for="(dateWithArticles, date) in searchedArticles"
                  :key="date">
                  <!-- <p v-if="dateWithArticles.length > 0" class="date">
                    {{ date }}
                  </p> -->
                  <div
                    v-for="article in dateWithArticles"
                    class="article"
                    :key="article"
                  >
                    <span class="dot">{{ article.id }}</span>
                    <!-- <p class="article-date">{{ article.published_at }}</p> -->
                    <!-- <h3>
                      <a>{{ article.title }}</a>
                    </h3> -->
                    <b-container fluid>
                    <b-row>
                      <b-col cols class="text-center addimg">
                        <h4>{{ article.title }}
                          <!-- {{ $t("kovHow.howitworks") }} -->

                        </h4>
                       
                      </b-col>
                      <b-col colsclass="text-center addimg">
                        <img :src="article.img" />
                      </b-col>
                    </b-row>
                    </b-container>
                  </div>
                </div>
              </div>
              <p v-else>No articles found.</p>
            </div>
          </template>
        </b-col>
        <!-- <b-col col lg="4" sm="12" class=" addimg1"> </b-col>
        <b-col col lg="4" sm="12" class=" addimg1"> </b-col> -->
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
      isLoading: false,
      searchQuery: "",
      datesArticles: {
        "September, 2016": [
          {
            title: "Download Kovered App ",
            id: "1",
            img: "/static/img/download app images 300.png"
          },
          {
            title: "Choose category",
            id: "2",
            img: "/static/img/category 300.png"
          }
        ],
        "April, 2016": [
          {
            title: "Choose nearby professional",
            id: "3",
            img: "/static/img/nearby 300.png"
          },
          {
            title: "Book an Appointment",
            id: "4",
            published_at: "02.04.2016.",
            img:"/static/img/appointment 300.png"
          }
        ],
        "December, 2015": [
          {
            title: "Consult a Specialist",
            id: "5",
            published_at: "25.12.2015.",
            img:"/static/img/consalt 300.png"
          },
          {
            title: "Rate US",
            id: "6",
            teaser: "one",
            published_at: "01.12.2015.",
            img:"/static/img//Rate us 300.png"
          }
        ]
      }
    };
  },
  computed: {
    searchedArticles() {
      var searchRegex = new RegExp(this.searchQuery, "i");
      var searchedObj = {};

      if (this.searchQuery == "") {
        return this.datesArticles;
      }

      for (var date in this.datesArticles) {
        searchedObj[date] = this.datesArticles[date].filter(article => {
          return (
            searchRegex.test(article.title) ||
            searchRegex.test(article.teaser) ||
            searchRegex.test(article.published_at) ||
            searchRegex.test(date)
          );
        });
      }
      return searchedObj;
    }
  },
  methods: {
    anyArticle() {
      return this.countAllArticles() ? true : false;
    },
    countAllArticles() {
      var count = 0;
      for (var date in this.searchedArticles) {
        count += this.searchedArticles[date].length;
      }
      return count;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
<style scoped>
.bv-example-row {
  background-image: url("../assets/background/Home-page-3.jpg");
  /* background-size: 100%; */
  background-size: 100% 100%;
  height: auto;
}
.addimg {
  /* background-image: url("../assets/background/bg-how.png"); */
  width: 100%;
  /* height: 500px; */
  margin: 20px;
}
img {
  width: 200px;
  height: 200px;
}
.pop-img {
  background-image: url('../assets/frontend/lab..4.png');
  background-size: 85% 80%;
  background-repeat: no-repeat;
  height: 135px;
  text-align: left;
  padding-left:20px;
  padding-top: 30px; 
  font-weight: 500;
  color: white;
}
h4 {
  font-weight: 300;
}
.col {
  /* padding: 20px; */
  padding-right: 0%;
  padding-left: 0%;
}
.container {
  /* background-image: url("../assets/background/howitworks.png"); */
  background-size: 100% 100%;
}
h4{
  padding-top: 60px;
}
@media only screen and (max-width: 1200px) and (min-width: 800px) {
  img {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 600px) {
  .col {
    padding: 10px;
  }
  h4{
  padding-top: 0px;
}
  /* .down {
    margin-top: 300px;
  } */
  .addimg1 {
    display: none;
  }
  img {
    width: auto;
    text-align: center;
    height: 200px;
  }
}
@media (max-width: 1200px) {
}
@media (max-width: 850px) {
  .pop-img{
    background-size: 100% 90%;
    font-size: 22px;
  }
}
@media (min-width: 1400px) {
  .row {
    margin-left: 20px;
    margin-right: 70px;
    background-size: 200px 80px;
  }
}
/* outline: none;
  box-sizing: border-box; */

.container {
  margin: 0 auto;
  width: 100%;
}
.search-box {
  padding: 10px;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 5px;
}

.timeline {
  position: relative;
  border-left: 3px solid #47d0ee;
}

.date {
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  left: 15px;
  margin: 15px 0;
}
.date::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -16px;
  border: 1px solid black;
  width: 14px;
}

.article {
  position: relative;
  left: 20px;
  box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  background-color: white;
}


a {
  color: green;
  text-decoration: none;
}

.article-date {
  font-weight: 300;
  font-size: 14px;
}
.dot {
  display: block;
  color: white;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #080808c4;
  border: 2px dotted #080808c4;
  left: -36.5px;
  top: calc(50% - 5px);
}
</style>
