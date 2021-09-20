<template>

 <b-container fluid style="background-color:#e6f8fa;" class="font-family">
 <!--b-row>
     <b-col align="left" style="margin-left:3%;">
     <label for="exampleFormControlInput1" style="color:rgb(74 176 195);font-weight:600;">Select language</label>
   <select v-model="setlang" @change="setLocale()" style="color: #f5f8fa;
    background-color: rgb(74,176,195);" >
                <option value="en">
                <span>English </span>
                </option>
                <option value="pt">
                <span>Portugese </span>
                </option>
                <option value="fr">
                <span>French </span> 
                </option>
                 <option value="all">
                <span>All </span> 
                </option>
              </select>
</b-col>
</b-row-->
<div v-if="this.$i18n.locale==='en'" >
   <div v-if="blogsen!=''">
   
         <b-row class="row_content">
      <b-col cols lg="3" md="3" sm="4" xs="6" 
	  
          v-for="item in blogsen"
            :key="item.id"
              style="border-radius:20px;border:1px ;margin:15px 15px 15px 15px;background-color:white;padding-right:0px;padding-left:0px;"
              
             
            >
          
			 <!--  old function @click="getPost(item)" --->
			<a  style="color:white;" :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank"
                           >
                            <b-img
                  v-if="item.title_pic"
                  :src="item.title_pic"
                  fluid alt="Responsive image"
                
				   style="border-top-left-radius:20px !important;border-top-right-radius:20px !important;"
    
                >
                          
						  </b-img>
						  <strong style="display: flex;font-size: 16px;color: #d6be0b;padding: 9px 0px 10px 10px;" >{{item.category_name}} </strong><b-img
                           :src="item.category_pic"
                           rounded="circle"
                            style="margin-top:-35%;margin-right:-50%;width:100px; height:100px; border: 1px solid #f2f2e9;"
                          ></b-img></a><br/>
						  
			<a
                            style="color:white;"
                           
							 :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank">
                            <strong   style="font-weight:400;text-align:center;margin-top:10px;display:block;font-size: 16px;
    line-height:23px;color:#4ab0c3;padding:0px 0px 10px 10px;" >{{item.title}} </strong></a> <br/>
	
	<hr style="width:80%;padding:0px 0px 10px 10px;"> <br/>
	<strong style="font-weight:300;text-align:left;margin-top:0px;display:block;font-size: 16px;
    line-height:23px;color:#232323;padding:0px 0px 10px 15px !important;" >{{item.description}}<a
                            style="color:#c6f5f2;"
                           
							 :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank"
                            >...<img src="../assets/blog-right-icon.png"    style="width:25px;height:25px;"></img></a></strong>
	
	
			</b-col>
			</b-row>
			
			<button class="load" @click="loadMore()" >Load More</button>
			<b-alert
      v-model="errmsg"
      variant="success"
     
    >No more blogs to show. </b-alert>
			</div>
			<div v-else>Not Available</div>
  </div>
<div v-if="this.$i18n.locale==='pt'" >
   <div v-if="blogspt!=''">
   
         <b-row class="row_content">
      <b-col cols lg="3" md="3" sm="4" xs="6" 
	  
          v-for="item in blogspt"
            :key="item.id"
              style="border-radius:20px;border:1px ;margin:15px 15px 15px 15px;background-color:white;padding-right:0px;padding-left:0px;"
              
             
            >
          
			 <!--  old function @click="getPost(item)" --->
			<a  style="color:white;" :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank"
                           >
                            <b-img
                  v-if="item.title_pic"
                  :src="item.title_pic"
                  fluid alt="Responsive image"
                
				   style="border-top-left-radius:20px !important;border-top-right-radius:20px !important;"
    
                >
                          
						  </b-img>
						  <strong style="display: flex;font-size: 16px;color: #d6be0b;padding: 9px 0px 10px 10px;" >{{item.category_name}} </strong><b-img
                           :src="item.category_pic"
                           rounded="circle"
                            style="margin-top:-35%;margin-right:-50%;width:100px; height:100px; border: 1px solid #f2f2e9;"
                          ></b-img></a><br/>
						  
			<a
                            style="color:white;"
                           
							 :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank">
                            <strong   style="font-weight:400;text-align:center;margin-top:10px;display:block;font-size: 16px;
    line-height:23px;color:#4ab0c3;padding:0px 0px 10px 10px;" >{{item.title}} </strong></a> <br/>
	
	<hr style="width:80%;padding:0px 0px 10px 10px;"> <br/>
	<strong style="font-weight:300;text-align:left;margin-top:0px;display:block;font-size: 16px;
    line-height:23px;color:#232323;padding:0px 0px 10px 15px !important;" >{{item.description}}<a
                            style="color:#c6f5f2;"
                           
							 :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank"
                            >...<img src="../assets/blog-right-icon.png"    style="width:25px;height:25px;"></img></a></strong>
	
	
			</b-col>
			</b-row>
			
			<button class="load" @click="loadMore()" >Load More</button>
			<b-alert
      v-model="errmsg"
      variant="success"
     
    >No more blogs to show. </b-alert>
			</div>
			<div v-else>Not Available</div>
  </div>
  <div v-if="this.$i18n.locale==='fr'" >
   <div v-if="blogsfr!=''">
   
         <b-row class="row_content">
      <b-col cols lg="3" md="3" sm="4" xs="6" 
	  
          v-for="item in blogsfr"
            :key="item.id"
              style="border-radius:20px;border:1px ;margin:15px 15px 15px 15px;background-color:white;padding-right:0px;padding-left:0px;"
              
             
            >
          
			 <!--  old function @click="getPost(item)" --->
			<a  style="color:white;" :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank"
                           >
                            <b-img
                  v-if="item.title_pic"
                  :src="item.title_pic"
                  fluid alt="Responsive image"
                
				   style="border-top-left-radius:20px !important;border-top-right-radius:20px !important;"
    
                >
                          
						  </b-img>
						  <strong style="display: flex;font-size: 16px;color: #d6be0b;padding: 9px 0px 10px 10px;" >{{item.category_name}} </strong><b-img
                           :src="item.category_pic"
                           rounded="circle"
                            style="margin-top:-35%;margin-right:-50%;width:100px; height:100px; border: 1px solid #f2f2e9;"
                          ></b-img></a><br/>
						  
			<a
                            style="color:white;"
                           
							 :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank">
                            <strong   style="font-weight:400;text-align:center;margin-top:10px;display:block;font-size: 16px;
    line-height:23px;color:#4ab0c3;padding:0px 0px 10px 10px;" >{{item.title}} </strong></a> <br/>
	
	<hr style="width:80%;padding:0px 0px 10px 10px;"> <br/>
	<strong style="font-weight:300;text-align:left;margin-top:0px;display:block;font-size: 16px;
    line-height:23px;color:#232323;padding:0px 0px 10px 15px !important;" >{{item.description}}<a
                            style="color:#c6f5f2;"
                           
							 :href="`https://services.kovered.io/blog/${item.id}/${item.title}`.replace(/\s/g, '-')" target="_blank"
                            >...<img src="../assets/blog-right-icon.png"    style="width:25px;height:25px;"></img></a></strong>
	
	
			</b-col>
			</b-row>
			
			<button class="load" @click="loadMore()" >Load More</button>
			<b-alert
      v-model="errmsg"
      variant="success"
     
    >No more blogs to show. </b-alert>
			</div>
			<div v-else>Not Available</div>
  </div>
  </b-container>
   
</template>

<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import AppointmentsModal from "./partials/AppointmentsModal";
import StarRating from "vue-star-rating";


export default {
  name: "Blogs",
  data() {
    return {
      blogs:[],
       blogsen:[],
        blogspt:[],
         blogsfr:[],
	  showblogs:[],
	  start:0,
	   starten:0,
	    startpt:0,
	     startfr:0,
	  end:6,
	  limit:'4',
	  errmsg:false,
	  icon:'../assets/blog-right-icon.png',
	  link:'',
          setlang:'',
	 
    };
  },
   metaInfo() {
        return {
		
	
	
            meta: [
			  {  name: "viewport", content : "width=device-width,initial-scale=1" },
                {property: 'og:title', content: 'The Habit of Touch during Covid-19'},
          {property: 'og:site_name', content: 'kovered'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  'https://kovered-media.s3.us-east-2.amazonaws.com/blog_title_pic/rpkaackj9zmepg2jniz5mwzczbsv42ja.png' },
          {property: 'og:description', content: 'KOvered-blog'}
                
            ]
			
			
           
        }
    },
  components: { AppointmentsModal, Card, Loading, StarRating },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  created() {
   //this.setlang=this.$i18n.locale;
   this.getBlogs();
  },
  methods: {
  getPost(item)
  {
 
   this.$router.push({ name: "BlogPostDetails", params: { pid : item.id, user:item.title.replace(/\s/g, '-'), title:item.title, description : item.description, title_pic : item.title_pic} });
  },
   getBlogs()
   {
   var self=this;
   self.end=self.start + 6;
  
    axios
        .post("kovered-blogs-post-new", {start:self.start,end:self.end})
        .then(function(response) {
		 
		 self.blogsen=response.data.blogsen.data;
		 self.blogspt=response.data.blogspt.data;
		 self.blogsfr=response.data.blogsfr.data;

		 if(self.$i18n.locale=='en')
		 self.starten=response.data.blogsen.data.length;
		 else if(self.$i18n.locale=='pt')
        self.startpt=response.data.blogspt.data.length;
		 else(self.$i18n.locale=='fr')
		self.startfr=response.data.blogsfr.data.length;
		 
		
        })
        .catch(function(error) {
          console.log(error);
         
        });
   
   },
   loadMore()
   {
  
   var self=this;
     if(self.$i18n.locale=='en')
     self.start=self.starten;
      if(self.$i18n.locale=='pt')
     self.start=self.startpt;
      if(self.$i18n.locale=='fr')
     self.start=self.startfr;
    self.end=self.start + 6;
    axios
        .post("kovered-blogs-post-new", {start:self.start,end:self.end})
        .then(function(response) {
		 if(response!='')
		 {
		 //self.blogs=response.data.blogs.data;
		  if(self.$i18n.locale==='en')
		  { self.bindData(self.blogsen.concat(response.data.blogsen.data)); }
		   if(self.$i18n.locale==='pt')
		  { self.bindData(self.blogspt.concat(response.data.blogspt.data)); }
		   if(self.$i18n.locale==='fr')
		  {  self.bindData(self.blogsfr.concat(response.data.blogsfr.data)); }
		 }
		 else
		 {
		 self.errmsg=true;
		 }
		
        })
        .catch(function(error) {
          console.log(error);
         
        });
   
   },
   bindData(response)
   {
   var self=this;

   if(self.$i18n.locale=='en')
   { 

    self.blogsen=response;
	self.starten=self.blogsen.length;
	}
	else if(self.$i18n.locale=='pt')
	{
	self.blogspt=response;
	self.startpt=self.blogspt.length;
	}
	else
	{
	self.blogsfr=response;
	self.startfr=self.blogsfr.length;
	}
   },
setLocale()
{
 var self=this;
self.start=0;
 self.errmsg=false;
  self.getBlogs();
}
  }
};
</script>

<style scoped>
@import '../assets/fonts/fonts.css';
.font-family{
  font-family: 'subset-GothamLight';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
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
  .row_content {
  margin-left:15% !important;
  }
}
/* @media only screen and (min-width: 1100px)
{
  .v-menu__content {
    left: 500px !important;
  }
  .row_content {
  margin-left:10% !important;
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
  .load {
  color: white;
  background-color: #007bff !important;
  width: 112px !important;
  height: 30px !important;
  margin-bottom: 5px !important;
  align-items: center !important;
  border-radius: 15px !important;
}
.titlepic
{
border-top-left-radius-top:20px;border-top-right-radius-top:20px !important;
}
</style>
