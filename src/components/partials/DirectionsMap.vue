<template>

 <div>
 
    <div
      class="google-map"
      ref="googleMap"
    ></div>
  <div class="travel_data" ></div>
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
import destinationMarker from '../../assets/marker.png';

export default {
  name: 'DirectionsMap',
  props: ['service1','service2','zoom','service'], // latitude and longitude from current location
  data () {
    return {
      markers: [],
      map: null,
      google:null,
      service3:null,
      service4:null,
      duration:null,
      distance:null,
      
    }
  },
  
  async mounted () {


  var self=this;
 
   self.getLocation();
  
    
  },

  methods: {

  getLocation()
  {


 var self=this;
navigator.geolocation.getCurrentPosition(function(position) {
         self.service3=parseFloat(position.coords.latitude);
         self.service4=parseFloat(position.coords.longitude);
        self.google = window.google;
    self.initializeMap();

  });
          
  },
    initializeMap() {
    var self=this;
 
    
    self.latLng = new google.maps.LatLng(self.service3, self.service4);
      const mapContainer = self.$refs.googleMap;

      self.map = new self.google.maps.Map(mapContainer,{
      center: self.latLng,
      zoom: self.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });



      self.directionsService = new google.maps.DirectionsService()
    self.directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true}) 
      self.clearMarkers()
    self.buildMarkers()
    self.directionsDisplay.setMap(self.map)

    let destination = new google.maps.LatLng(self.service1, self.service2)
   
 let origin = new google.maps.LatLng(self.service3, self.service4)

    this.directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING',
     
  
    }, (response, status) => {
      if (status === 'OK') {
        var point = response.routes[ 0 ].legs[ 0 ]
        self.directionsDisplay.setDirections(response)
        
      } else {
        // window.alert('Directions request failed due to ' + status)
      }
    })

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
        Origin marker.
      */
      this.markers = [];
    
      var marker2 = new google.maps.Marker({
        icon: destinationMarker,
        position: { lat: this.service3, lng: this.service4 },
        map: this.map,
        title:'your location'
      });
 var imgpro='https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg';

         var content = 
         '<img src="'+imgpro+'"  width="45" height="40">' +
       '<h5 id="firstHeading" class="firstHeading"> Your are here</h5>';

        var infowindow = new google.maps.InfoWindow()
  google.maps.event.addListener(marker2,'click', (function(marker2,content,infowindow){ 
    return function() {
        infowindow.setContent(content);
        infowindow.open(map,marker2);
    };
})(marker2,content,infowindow));  
      this.markers.push(marker2);

      /*
        Destination marker.
      */
     
      var marker = new google.maps.Marker({
        icon: destinationMarker,
        position: { lat: parseFloat(this.service1), lng: parseFloat(this.service2) },
        map: this.map,
         title: this.service.name,
      });

if(this.service.profile_pic) var imgpro=this.service.profile_pic;
          else  var imgpro='https://kovered-media.s3.us-east-2.amazonaws.com/images/demo.jpg';

 var content =
         '<img src="'+imgpro+'"  width="45" height="40">' +
       '<h4 id="firstHeading" class="firstHeading">' + this.service.name + '</h4>' +
    '<div id="bodyContent">' +
    '<p><b>Address : </b>' +  this.service.address  + '</p>' +

    
    "</div>" +
    "</div>";

        var infowindow = new google.maps.InfoWindow()
  google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
    return function() {
        infowindow.setContent(content);
        infowindow.open(map,marker);
    };
})(marker,content,infowindow)); 
      this.markers.push(marker);

    }
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
