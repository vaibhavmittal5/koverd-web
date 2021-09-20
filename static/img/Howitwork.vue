<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col col lg="12" sm="12" class="text-center addimg">
          <h3>{{ $t("kovHow.howitworks") }}</h3>
          <p>
            {{ $t("kovHow.text") }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col col lg="12" sm="12" class="text-center addimg">
          <!-- <img src="../assets/frontend/step1.png" style="height:200px; width:200px;" /> -->
          <!-- <blog-articles :dates-articles="datesArticles"></blog-articles> -->
          <template id="my-template">
            <div class="container">
              <!-- <input
                v-model="searchQuery"
                class="search-box"
                placeholder="Search for articles..."
              /> -->
              <div class="timeline" v-if="anyArticle()">
                <div
                  v-for="(dateWithArticles, date) in searchedArticles"
                  :key="date"
                >
                  <!-- <p v-if="dateWithArticles.length > 0" class="date">
                    {{ date }}
                  </p> -->
                  <div
                    v-for="article in dateWithArticles"
                    class="article"
                    :key="article"
                  >
                    <span class="dot">{{article.id}}</span>
                    <p class="article-date">{{ article.published_at }}</p>
                    <h3>
                      <a :href="'#' + article.slug">{{ article.title }}</a>
                    </h3>
                    <p>
                      {{ article.teaser }} <img :src="article.img" height="200" />
                      {{ article.img }}
                    </p>
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
import "vue-loading-overlay/dist/vue-loading.min.css";
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      isLoading: false,
      searchQuery:"",
      datesArticles: {
      'September, 2016': [
        {
          title: 'Five',
          id:"1",
          slug: 'five',
          teaser: 'five',
          published_at: '30.09.2016.',
          img:'/static/img/step1.png'
        },
        {
          title: 'Four',
          id:"2",
          slug: 'four',
          teaser: 'four',
          published_at: '15.09.2016.',
          img:"../assets/frontend/step2.png"
        }
      ],
      'April, 2016': [
        {
          title: 'Three',
          id:"3",
          slug: 'three',
          teaser: 'three',
          published_at: '14.04.2016.',
          img:"../assets/frontend/step4.png"
        },
        {
          title: 'Two and a half',
          id:"4",
          slug: 'two-and-a-half',
          teaser: 'two and a half',
          published_at: '02.04.2016.'
        }
      ],
      'December, 2015': [
        {
          title: 'Two',
          id:"5",
          slug: 'two',
          teaser: 'two',
          published_at: '25.12.2015.'
        },
        {
          title: 'One',
          id:"6",
          slug: 'one',
          teaser: 'one',
          published_at: '01.12.2015.'
        }
      ]
    }
    };
  },
  computed: {
    searchedArticles() {
      var searchRegex = new RegExp(this.searchQuery, 'i');
      var searchedObj = {};

      if(this.searchQuery == '') {
         return this.datesArticles;
      }

      for(var date in this.datesArticles) {
        searchedObj[date] = this.datesArticles[date].filter((article) => {
          return searchRegex.test(article.title) ||
                 searchRegex.test(article.teaser) ||
                 searchRegex.test(article.published_at) ||
                 searchRegex.test(date);
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
      for(var date in this.searchedArticles) {
        count += this.searchedArticles[date].length;
      }
      return count;
    }
  },
  mounted () {
  window.scrollTo(0, 0)
}
};
</script>
<style scoped>
.bv-example-row {
  background-image: url("../assets/background/bg-how.png");
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
  width: 100%;
  height: 500px;
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
@media only screen and (max-width: 1200px) and (min-width: 800px){
  img{
    width: 100%;
    height: auto;
  }
}
@media (max-width: 600px) {
  .col {
    padding: 10px;
  }
  /* .down {
    margin-top: 300px;
  } */
  .addimg1 {
    display: none;
  }
  img {
    width: 340px;
    text-align: center;
  }
  /* .bv-example-row {
    height: 300px;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
  } */
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
/* outline: none;
  box-sizing: border-box; */

.container{
  margin: 10% auto;
  width: 100%;
}
  .search-box
   { padding: 10px;
    margin: 20px 0;
    border: 1px solid black;
    border-radius: 5px;}

  .timeline
   { position: relative;
    border-left: 3px solid #47d0ee;}

    .date
     { display: inline-block;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
      position: relative;
      left: 15px;
      margin: 15px 0;
}
      .date::before
       { content: '';
        position: absolute;
        top: 50%;
        left: -16px;
        border: 1px solid black;
        width: 14px;
        }

    .article
      {position: relative;
      left: 20px;
      box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
      border-radius: 5px;
      padding: 10px;
      margin: 10px 0;}

      .article:hover
        {box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);}

      a
       { color: green;
        text-decoration: none;}

      .article-date
        {font-weight: 300;
        font-size: 14px;
}
      .dot
        {display: block;
        color: white;
        font-size: 12px;
        font-weight: bold;
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: black;
        border: 2px dotted black;
        left: -36 .5px;
        top: calc(50% - 5px);}
</style>
