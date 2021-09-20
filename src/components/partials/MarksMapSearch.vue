<template>
 <div>
    <div
      class="google-map"
      ref="googleMap"
    ></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import marker123 from '../../assets/marker.png';

export default {
  name: 'MarksMapSearch',
  props: ['latitude','longitude','zoom', 'services'],

  data () {
    return {
    map:null,
    google:null,
      markers: [],
      
    }
  },
   
  async mounted () {
   
   
   this.google = window.google;
    this.initializeMap();
     
  },

  methods: {
    initializeMap() {
    this.latLng = new google.maps.LatLng(this.latitude, this.longitude);
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer,{
      center: this.latLng,
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
       console.log(this.map);
       this.clearMarkers();
    this.buildMarkers();
    },

    /*
      Clears the markers from the map.
    */
    clearMarkers () {

      /*
        Iterate over all of the markers and set the map
        to null so they disappear.
      */
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null)
      }
    },

    /*
      Builds all of the markers for the cafes
    */
    buildMarkers () {
      /*
        Initialize the markers to an empty array.
      */
     var self=this;
      self.markers = [];
     
      for (var i = 0; i < self.services.length; i++) {
        
    
        var marker = new google.maps.Marker({
          
          position: { lat: parseFloat(self.services[i].latitude), lng: parseFloat(self.services[i].longitude) },
          map: self.map,
          title: self.services[i].branch_name,
          icon:marker123,
          
          
        })

          if(self.services[i].profile_pic) var imgpro=self.services[i].profile_pic;
          else  var imgpro='https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg';

         var content =
         '<img src="'+imgpro+'"  width="45" height="40">' +
       '<h4 id="firstHeading" class="firstHeading">' + self.services[i].branch_name + '</h4>' +
    '<div id="bodyContent">' +
    '<p><b>Address : </b>' +  self.services[i].address  + '</p>' +

    '<p><a href="https://kovered.io/en/providers/'+self.services[i].id+'/'+self.services[i].branch_name.replace(/\s/g, '-')+'" > Book Appointment</a></p>' +
    "</div>" +
    "</div>";

        var infowindow = new google.maps.InfoWindow()
  google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
    return function() {
        infowindow.setContent(content);
        infowindow.open(map,marker);
    };
})(marker,content,infowindow));  

        /*
          Push the new marker on to the array.
        */
        self.markers.push(marker);
        console.log(self.map);
      }
  
     
    
   },
  }
}
</script>

<style scoped>
  .google-map {
    width: 100%;
    height: 700px !important;
    margin: 0 auto;
    background: gray;
  }
  .maplabels {
     color: white;
     background-color: red;
     font-family: "Lucida Grande", "Arial", sans-serif;
     font-size: 10px;
     text-align: center;
     width: 10px;     
     white-space: nowrap;
   }
   .my-custom-class-for-label {
  width: 100px; 
  height: 100px;

  border: 1px solid #eb3a44;
  border-radius: 5px;
  background: #fee1d7;
  text-align: center;
  line-height: 20px;
  font-weight: bold;
  font-size: 14px;
  color: #eb3a44;
}
</style>
