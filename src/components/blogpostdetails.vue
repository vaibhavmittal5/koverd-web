
 

<template>
  
	
   <b-container  style="background-color:white;max-width: 900px;
    margin: 0 auto;" class="font-family"  >
	

   <div v-if="blogs">
    
             <b-row>
      <b-col>
			<div style="width:100%;margin-bottom:5px;background-color:white;">
			
                            <b-img
                  v-if="blogs.title_pic"
                  :src="blogs.title_pic"  fluid alt="Responsive image"
              style="width:auto;height:auto;"></b-img><br/>
			    <strong style="display: flex;font-size: 18px;font-weight:400;color: #d6be0b;padding: 15px 0px 10px 10px;" >{{blogs.category_name}} </strong><b-img
                           :src="blogs.category_pic"
                           rounded="circle"
                            style="width:100px; height:100px; border: 0px solid #f2f2e9;"
                          ></b-img>
				<strong style="font-weight:400;text-align:center;margin-top:10px;display:block;font-size: 24px;color:#4ab0c3;
    line-height:23px;" >{{blogs.title}} </strong><br/>
	
	<hr style="width:100%;text-align:left;margin-left:0"> <br/>
	<strong style="font-weight:300;text-align:left;margin-top:0px;display:block;font-size: 22px;
    line-height:1.7;color:#575759;margin:1em 0;letter-spacing: 0px;" >{{blogs.description}}</strong><br/>
	<strong style="font-weight:300;text-align:left;margin-top:0px;display:block;font-size: 22px;
    line-height:1.7;color:#575759;margin:1em 0;letter-spacing: 0px;" ><div v-html="blogs.data"></div></strong><br/>
	
	</div>
	
			</b-col></b-row>
			</div>
			
			<div v-else>NO Blogs for publish </div>
  
</b-container>
 
   
</template>
<script src="/dist/vue-social-sharing.js"></script>
<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import AppointmentsModal from "./partials/AppointmentsModal";
import StarRating from "vue-star-rating";
import VueMeta from 'vue-meta';
import Vue from 'vue';
import VueSocialSharing from 'vue-social-sharing'
 
Vue.use(VueSocialSharing);
Vue.use(VueMeta);


export default {
  name: "Blogs",
  data() {
    return {
      blogs:{},
	  blog_id:'',
	  title:this.$route.params.title,
	  description:this.$route.params.description,
	  title_pic:this.$route.params.title_pic,
    };
  },
  metaInfo() {
   
  
        return {
		
	
	
            meta: [
			  {  name: "viewport", content : "width=device-width,initial-scale=1" },
                {property: 'og:title', content: this.blogs.title },
          {property: 'og:site_name', content: 'kovered-Blog'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.blogs.title_pic },
          {property: 'og:description', content: this.blogs.description }
                
            ]
			
			
           
        }
    },
	 
  components: { AppointmentsModal, Card, Loading, StarRating },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created() {
  
   this.getBlogPostData();
  },
   
  methods: {
   getBlogPostData()
   {
  
   var self=this;
   self.blog_id=self.$route.params.pid;
   
    axios
        .post("kovered-blog-post-data", {id:self.blog_id})
        .then(function(response) {
		if(response.data.post)
		{
		 self.blogs=response.data.post.data;
		
		 
		}
		else
		{
		self.$router.push('/');
		}
        })
        .catch(function(error) {
          console.log(error);
         
        });
   
   },
  },
  
  
};
</script>

<style scoped>
@import '../assets/fonts/fonts.css';
.font-family{
  font-family: 'subset-GothamLight';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
@media only screen and (max-width: 600px) {
  .v-menu__content {
    left: 40px !important;
    top: 590px !important;
  }
}
@media only screen and (min-width: 601px) {
  .v-menu__content {
    left: 45% !important;
    top: 350px !important;
  }
}
@media only screen and (min-width: 1250px) {
  .v-menu__content {
    left: 400px !important;
    top: 300px !important;
  }
}
/* @media only screen and (min-width: 1100px)
{
  .v-menu__content {
    left: 500px !important;
  }
} */
.mrg {
  margin-top: 10px;
}
.v-dialog:not(.v-dialog--fullscreen) {
  border-radius: 9px;
}
.toolbar {
  background-image: linear-gradient(to right, #4aabdd, #49b4ac);
}
.container {
  /* padding: 0 !important;
  margin:0 !important; */
  color: black;
}
.v-img {
  background-color: rgb(228, 235, 235);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.ph {
  font-size: 8px;
  /* width: 50px; */
}
.form-control {
  display: block;
  width: 70%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 8px;
  font-weight: 100;
  line-height: 1;
  color: #495057;
  background-color: #d2efde;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.fav_icon {
  position: absolute;
  right: 30px;
  top: 10px;
}
.center {
  place-content: center;
  align-content: center;
  justify-content: center;
}
.book {
  font-size: 18px;
  color: black;
  border-top: #c8c7cc 2px solid;
  border-bottom: #c8c7cc 2px solid;
}
.slots_chip {
  background-color: #4aabdd;
}
.time-picker .clear-btn {
  display: none;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
	letter-spacing: 0px;
}
</style>
