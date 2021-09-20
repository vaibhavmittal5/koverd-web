<template>
  <b-container fluid style="margin-top:10px;">
    
   <div v-if="type==='pdf'">
   <pdf :src="doc"></pdf>
   </div>
   <div v-else>
   <img :src="doc"></pdf>
   </div>

  </b-container>
</template>

<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";

export default {
  name: "UserAppointmentDocs",
  data() {
    return {
      isLoading: false,
      doc:'',
      type:'',
    };
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
 
  components: { Loading },
  created() {
    var self = this;
    alert(self.$route.params.value);
     self.doc=self.$route.params.value;
      self.type=self.doc.slice(-3).trim();
  }
};
</script>

<style scoped>
.card-margin {
  margin-bottom: 5px;
}
.text {
  text-align: start;
}
.space {
  margin-bottom: 8px;
}
.card-body {
  padding: 5px;
}
.text2 {
  padding-top: 12px;
}
</style>
