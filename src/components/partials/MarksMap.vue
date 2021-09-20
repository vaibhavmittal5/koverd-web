<template>
  <div id="map">
  </div>
</template>

<script>

import marker123 from '../../assets/marker.png';
export default {
  name: 'MarksMap',
  props: ['latitude','longitude','zoom', 'services'],

  data () {
    return {
    map:null,
      markers: [],
     
    }
  },
   created () {

  },
  watch: {
    /*
      Watches the services. When they are updated, clear the markers
      and re build them.
    */
    services () {

      this.clearMarkers()
      this.buildMarkers()
    }
  },
 
  mounted () {
   
     if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();

    }

    const google = window.google;
    var self=this;
    /*
      We don't want the map to be reactive, so we initialize it locally,
      but don't store it in our data array.
    */
    self.latLng = new google.maps.LatLng(self.latitude, self.longitude);
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: self.latLng,
      zoom: self.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    console.log(self.latitude);
       console.log(self.map);
    /*
      Clear and re-build the markers
    */
    self.clearMarkers()
    self.buildMarkers()
  },

  methods: {
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
      const google = window.google;
  
      /*
        Iterate over all of the cafes
      */
      for (var i = 0; i < self.services.length; i++) {
        /*
          Create the marker for each of the cafes and set the
          latitude and longitude to the latitude and longitude
          of the cafe. Also set the map to be the local map.
        */
      
        var marker = new google.maps.Marker({
          icon: marker123,
          position: { lat: parseFloat(self.services[i].latitude), lng: parseFloat(self.services[i].longitude) },
          map: self.map
        })
        /*
          Push the new marker on to the array.
        */
        self.markers.push(marker);
      }
  
     
    
   },
   location()
   {
            var self=this;
             const google = window.google;
   
    self.latLng = new google.maps.LatLng(self.latitude, self.longitude);
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: self.latLng,
      zoom: self.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
       self.clearMarkers();

       self.markers = [];
    
  
      /*
        Iterate over all of the cafes
      */
      for (var i = 0; i < self.services.length; i++) {
        /*
          Create the marker for each of the cafes and set the
          latitude and longitude to the latitude and longitude
          of the cafe. Also set the map to be the local map.
        */
      
        var marker = new google.maps.Marker({
          icon: marker123,
          position: { lat: parseFloat(self.services[i].latitude), lng: parseFloat(self.services[i].longitude) },
          map: self.map
        })
        /*
          Push the new marker on to the array.
        */
        self.markers.push(marker);

   }
   }
  }
}
</script>

<style scoped>
  #map {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background: gray;
  }
</style>
