<template>
  <b-container fluid style="margin-top:10px;">
    <b-alert show> {{ $t('notification.your-notifications')}}</b-alert>
    <b-card class="space" v-for="item in notifications" :key="item.id">


      <b-container v-if="item.is_read === '1'" style="color:#a09e9e;">

        <b-row>
          <b-col class="text">
           <strong style="font-size:18px;">{{ $t('notification.date')}} :</strong>
            <strong style="font-size:16px;"> {{item.updated_at}}</strong>
            <br/>
           <strong style="font-size:18px;">{{ $t('notification.title')}} :</strong>
           <strong style="font-size:16px;"> {{item.title}} </strong>
            <br />
           <strong style="font-size:18px;">{{ $t('notification.text')}} :</strong>
            <strong style="font-size:16px;">{{item.text}} </strong>
           
           
         <br/>
            <b-button
              variant="btn btn-outline-secondary btn-sm"
              @click="markedReadNotification(item.id)"
            >{{ $t('notification.mark-as-read')}}</b-button>
         
            <b-button pill variant="btn btn-outline-secondary btn-sm" @click="deleteNotification(item.id)">{{ $t('notification.delete')}}</b-button>
          </b-col>
        </b-row>
      </b-container>
      <b-container v-if="item.is_read === '0'">
        <b-row>
          <b-col class="text">
          <strong style="font-size:18px;">{{ $t('notification.date')}} :</strong>
            <strong style="font-size:16px;"> {{item.updated_at}} </strong>
            <br/>
           <strong style="font-size:18px;">{{ $t('notification.title')}} :</strong>
           <strong style="font-size:16px;">  {{item.title}} </strong>
            <br/>
           <strong style="font-size:18px;">{{ $t('notification.text')}} :</strong>
           <strong style="font-size:16px;">  {{item.text}} </strong>
            <br />
        
            <b-button
              variant="btn btn-outline-primary btn-sm"
              @click="markedReadNotification(item.id)"
            >{{ $t('notification.mark-as-read')}}</b-button>
         
            <b-button pill variant="btn btn-outline-primary btn-sm" @click="deleteNotification(item.id)">{{ $t('notification.delete')}}</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
    <b-card class="space" v-if="notifications.length =='0'">
      <b-container>
         <b-alert show variant="primary">{{ $t('notification.donot-have-notifications')}}</b-alert>
      </b-container>
    </b-card>
  </b-container>
</template>

<script>
import Card from "./partials/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";

export default {
  name: "Notifications",
  data() {
    return {
      isLoading: false,
      showThen: false,
      notifications: [],
      count: "",

    };
  },
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  methods: {
    getAll() {
      const self = this;
      this.isLoading = true;
      axios
        .get("/user/get-all-notifications")
        .then(function(response) {
          self.notifications = response.data.all_notifications;
          self.count = response.data.count;
          self.isLoading = false;
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    },
    markedReadNotification(id) {
      const self = this;
      this.isLoading = true;
      axios
        .post("/user/update_read_notification", { id: id })
        .then(function(response) {
          self.isLoading = false;
          self.getAll();
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    },
    deleteNotification(id) {
      const self = this;
      this.isLoading = true;
      axios
        .post("/user/delete_notification", { id: id })
        .then(function(response) {
          self.isLoading = false;
          self.getAll();
        })
        .catch(function(error) {
          console.log(error);
          self.isLoading = false;
        });
    }
  },
  components: { Loading },
  created() {
    const self = this;
    this.isLoading = true;
    axios
      .get("/user/get-all-notifications")
      .then(function(response) {
        self.notifications = response.data.all_notifications;
        self.count = response.data.count;
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
