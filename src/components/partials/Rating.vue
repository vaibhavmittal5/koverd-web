<template>
  <div>
    <b-col>
      <b-row>
        <b-col>
          <h6>Average user rating</h6>
          <h4 class="bold padding-bottom-7">
            {{ this.ratingCalc }} <small>/ 5</small>
            <small><font-awesome-icon icon="star" style="color:#E5E500;"/></small>
          </h4>
        </b-col>
        <b-col v-if="isAuthenticated && role === 'user'">
          <h6>Your rating:</h6>
          <h4>{{ this.userCalc }} <font-awesome-icon icon="star" style="color:#E5E500;"/></h4>
          <b-button size="sm" variant="primary" :disable="isLoading" id="ratingPopover" v-if="this.userRatingProp == null">
            <font-awesome-icon icon="star" style="color:white"/> Rate this branch
          </b-button>
          <b-popover
            placement="bottom"
            :show.sync="showRating"
            target="ratingPopover"
            v-if="this.userRatingProp == null"
            title="Rating">
            <div>
              <b-form-group label-for="pop"
                            class="mb-1 text-center"
                            description="Rate this branch"
                            invalid-feedback="This field is required">
                <b-form-select size="sm" id="pop" v-model="currentRate" :options="{ '1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5 }" />
              </b-form-group>
              <b-button size="sm" variant="success" :disable="isLoading" @click="saveRating">
                <font-awesome-icon icon="check" style="color:white"/> Save rating
              </b-button>
            </div>
          </b-popover>
          <b-button size="sm" variant="danger" :disable="isLoading" @click="removeRating" v-if="this.userRatingProp != null">
            <font-awesome-icon icon="times" style="color:white"/> Remove rating
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'

export default {
  name: 'Rating',
  data () {
    return {
      ratingProp: this.rating,
      branchIdProp: this.branchId,
      countProp: this.count,
      userRatingProp: this.userRating,
      currentRate: 0,
      isLoading: false,
      showRating: false
    }
  },
  props: [
    'rating',
    'branchId',
    'count',
    'userRating'
  ],
  computed: {
    ratingCalc: function () {
      let totalRating = 0
      // Can't divide by 0
      if (this.countProp > 0) {
        totalRating = (this.ratingProp / this.countProp)
      }
      return (totalRating / 20)
    },
    userCalc: function () {
      return this.userRatingProp / 20
    },
    ...mapGetters([
      'isAuthenticated',
      'role'
    ])
  },
  methods: {
    toggle: function () {
      this.showRating = !this.showRating
    },
    saveRating () {
      let self = this
      this.isLoading = true
      axios.post('/branch/' + this.branchId + '/rating/save', {'rating': this.currentRate * 20})
        .then(() => {
          self.ratingProp += self.currentRate * 20
          self.userRatingProp = self.currentRate * 20
          self.countProp += 1
          self.isLoading = false
          self.showRating = false
        })
        .catch(err => {
          console.log(err)
          self.isLoading = false
        })
    },
    removeRating () {
      let self = this
      this.isLoading = true
      axios.post('/branch/' + this.branchId + '/rating/delete')
        .then(() => {
          self.ratingProp -= self.userRatingProp
          self.userRatingProp = null
          self.countProp -= 1
          self.isLoading = false
        })
        .catch(err => {
          console.log(err)
          self.isLoading = false
        })
    }
  }
}
</script>

<style scoped>

</style>
