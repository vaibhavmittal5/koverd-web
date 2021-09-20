<template>
<b-card>
  <b-container fluid="">
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="false"></loading>
    <b-tabs v-if="!isLoading">
      <b-alert variant="success"
               dismissible
               :show="updateSuccess"
               @dismissed="updateSuccess=false">
        {{ $t('medical-history.history-update-text')}}
      </b-alert>
      <b-alert variant="warning"
               dismissible
               :show="updateFail"
               @dismissed="updateFail=false">
        {{ $t('medical-history.history-update-error-text')}}
      </b-alert>
      <b-tab :title="$t('medical-history.personal')" active class="text-left">
        <b-card>
          <b-form inline>
        <b-form-group :label="$t('medical-history.blood-group')">
          <b-form-select v-model="form.personal.blood_group" class="mb-3">
            <option :value="null">{{ $t('medical-history.select-option')}}</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Anemia">
          <b-form-radio-group id="radios2" v-model="form.personal.anemia" name="personal-anemia">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.blood-clots')">
          <b-form-radio-group id="radios2" v-model="form.personal.blood_clots_in_legs_lungs_brain" name="personal-blood-clots-in-legs-lungs-brain">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.blood-transfusions')">
          <b-form-radio-group id="radios2" v-model="form.personal.blood_transfusions" name="personal-blood-transfusions">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.bone-disease')">
          <b-form-radio-group id="radios2" v-model="form.personal.bone_disease_or_weak_bone" name="personal-bone-disease-or-weak-bone">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.cancer')">
          <b-form-radio-group id="radios2" v-model="form.personal.cancer" name="personal-cancer">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.depression')">
          <b-form-radio-group id="radios2" v-model="form.personal.depression" name="personal-depression">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group label="Diabetes">
          <b-form-radio-group id="radios2" v-model="form.personal.diabetes" name="personal-diabetes">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.hearing-problem')">
          <b-form-radio-group id="radios2" v-model="form.personal.hearing_problem" name="personal-hearing-problem">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.heart-attack-strokes')">
          <b-form-radio-group id="radios2" v-model="form.personal.heart_attacks_or_strokes" name="personal-heart-attacks-or-strokes">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.hepatitis')">
          <b-form-radio-group id="radios2" v-model="form.personal.hepatitis" name="personal-hepatitis">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.hbp')">
          <b-form-radio-group id="radios2" v-model="form.personal.high_blood_pressure" name="personal-high-blood-pressure">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.kidney-bladder-problem')">
          <b-form-radio-group id="radios2" v-model="form.personal.kidney_bladder_problems" name="personal-kidney-bladder-problems">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.migrains')">
          <b-form-radio-group id="radios2" v-model="form.personal.migraines_or_bad_headaches" name="personal-migraines-or-bad-headaches">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.seizures')">
          <b-form-radio-group id="radios2" v-model="form.personal.seizures" name="personal-seizures">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group  :label="$t('medical-history.respiratory-problem')">
          <b-form-radio-group id="radios2" v-model="form.personal.respiratory_problem" name="personal-respiratory-problem">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.stomach')">
          <b-form-radio-group id="radios2" v-model="form.personal.stomach_or_intestine_problems" name="personal-stomach-or-intestine-problems">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.thyroid')">
          <b-form-radio-group id="radios2" v-model="form.personal.thyroid_problems" name="personal-thyroid-problems">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.vision')">
          <b-form-radio-group id="radios2" v-model="form.personal.vision_problems" name="personal-vision-problems">
            <b-form-radio value='current'>{{ $t('medical-history.current')}}</b-form-radio>
            <b-form-radio value='past'>{{ $t('medical-history.past')}}</b-form-radio>
            <b-form-radio value='never'>{{ $t('medical-history.never')}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.illness')">
          <b-form-radio-group id="radios2" v-model="form.personal.had_major_illness" name="personal-had-major-illness">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <label v-show="(this.form.personal.had_major_illness == 1)">{{ $t('medical-history.illness-name')}}</label>
        <b-form-input  v-show="(this.form.personal.had_major_illness == 1)" v-model="form.personal.had_major_illness_name"
                      type="text"
                      placeholder="Placeholder">
        </b-form-input>
        <b-form-group :label="$t('medical-history.regular-medicine-taker')">
          <b-form-radio-group id="radios2" v-model="form.personal.regular_medicine_taker" name="personal-regular-medicine-taker">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <label v-show="(this.form.personal.regular_medicine_taker == 1)">{{ $t('medical-history.medicine-name')}}</label>
        <b-form-input  v-show="(this.form.personal.regular_medicine_taker == 1)" v-model="form.personal.regular_medicine_name"
                      type="text"
                      placeholder="Placeholder">
        </b-form-input>
        <b-form-group :label="$t('medical-history.has-allergies')">
          <b-form-radio-group id="radios2"  @change="debug()" v-model="form.personal.has_allergy" name="personal-has-allergies">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <label v-show="(this.form.personal.has_allergy == 1)" >{{ $t('medical-history.has-allergies-to')}}</label>
        <b-form-input v-show="(this.form.personal.has_allergy == 1)" v-model="form.personal.has_allergy_to"
                      type="text"
                      placeholder="Placeholder">
        </b-form-input>
        <b-form-group :label="$t('medical-history.had-surgery')">
          <b-form-radio-group id="radios2" v-model="form.personal.had_surgery" name="personal-had-surgery">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.h-B')">
          <b-form-radio-group id="radios2" v-model="form.personal.hep_b_immunizations" name="personal-hep-b-immunizations">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.titanus')">
          <b-form-radio-group id="radios2" v-model="form.personal.tetanus_immunizations" name="personal-tetanus-immunizations">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
          </b-form>
        </b-card>
      </b-tab>
      <b-tab  :title="$t('medical-history.family')" class="text-left" >
        <b-card>
          <b-form inline >
        <b-form-group :label="$t('medical-history.adopted')">
          <b-form-radio-group id="radios2" v-model="form.family.adopted" name="adopted">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.blood-clots')">
          <b-form-radio-group id="radios2" v-model="form.family.had_blood_clots" name="blood-clots">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.cancer')">
          <b-form-radio-group id="radios2" v-model="form.family.had_cancer" name="cancer">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group label="Diabetes">
          <b-form-radio-group id="radios2" v-model="form.family.had_diabetes" name="diabetes">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.heart-attack')">
          <b-form-radio-group id="radios2" v-model="form.family.had_heart_attack" name="hearth-attack">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.hbp')">
          <b-form-radio-group id="radios2" v-model="form.family.had_high_blood_pressure" name="high-blood-pressure">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.hign-colesterol')">
          <b-form-radio-group id="radios2" v-model="form.family.had_high_cholesterol" name="high-cholesterol">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.stroke')">
          <b-form-radio-group id="radios2" v-model="form.family.had_stroke" name="stroke">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        </b-form>
        </b-card>
      </b-tab>
      <b-tab title="social">
        <b-card>
        <b-form inline>
        <b-form-group :label="$t('medical-history.alcohal')">
          <b-form-radio-group id="radios2" v-model="form.social.drink_alcohol" name="alcohol">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.smoking')">
          <b-form-radio-group id="radios2" v-model="form.social.smoke" name="smoking">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.drugs')">
          <b-form-radio-group id="radios2" v-model="form.social.drugs" name="drugs">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        </b-form>
        </b-card>
      </b-tab>
      <b-tab title="other">
        <b-card>
        <b-form inline >
        <b-form-group :label="$t('medical-history.neurologist')">
          <b-form-radio-group id="radios2" v-model="form.other.had_neurologist" name="neurologist">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.bone-fracture')">
          <b-form-radio-group id="radios2" v-model="form.other.bone_fracture" name="bone-fracture">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('medical-history.accident')">
          <b-form-radio-group id="radios2" v-model="form.other.had_accident" name="accident">
            <b-form-radio value=1>Yes</b-form-radio>
            <b-form-radio value=0>No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        </b-form>
        </b-card>
      </b-tab>
    </b-tabs>
    <b-button type="submit" variant="success" v-on:click="submitMedicalHistory()">{{ $t('medical-history.save-info')}}</b-button>
  </b-container>
</b-card>
</template>

<script>
import Card from './partials/Card'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'

export default {
  name: 'MedicalHistory',
  data () {
    return {
      form: {
        personal: {
          anemia: 'never',
          any_other: '',
          blood_clots_in_legs_lungs_brain: 'never',
          blood_group: null,
          blood_transfusions: 'never',
          bone_disease_or_weak_bone: 'never',
          cancer: 'never',
          depression: 'never',
          diabetes: 'never',
          had_major_illness: 0,
          had_major_illness_name: '',
          had_surgery: 0,
          has_allergy: 0,
          has_allergy_to: '',
          hearing_problem: 'never',
          heart_attacks_or_strokes: 'never',
          hep_b_immunizations: 0,
          hepatitis: 'never',
          high_blood_pressure: 'never',
          kidney_bladder_problems: 'never',
          migraines_or_bad_formheadaches: 'never',
          regular_medicine_name: '',
          regular_medicine_taker: 0,
          respiratory_problem: 'never',
          seizures: 'never',
          stomach_or_intestine_problems: 'never',
          tetanus_immunizations: 0,
          thyroid_problems: 'never',
          vision_problems: 'never'
        },
        family: {
          adopted: 0,
          had_blood_clots: 0,
          had_cancer: 0,
          had_diabetes: 0,
          had_heart_attack: null,
          had_high_blood_pressure: 0,
          had_high_cholesterol: 0,
          had_stroke: 0
        },
        social: {
          drink_alcohol: 0,
          smoke: 0,
          drugs: 0
        },
        other: {
          had_neurologist: 0,
          bone_fracture: 0,
          had_accident: 0
        }
      },
      isLoading: false,
      show: false,
      updateSuccess: false,
      updateFail: false
    }
  },
  components: {Card, Loading},
  created () {
    const self = this
    this.isLoading = true
    axios.get('/user/medical-history')
      .then(function (response) {
        console.log(response.data)
        self.form.personal.anemia = (response.data.medicalHistory.data[0].personalHistoryProfile.data.anemia || 'never')
        self.form.personal.any_other = (response.data.medicalHistory.data[0].personalHistoryProfile.data.any_other || '')
        self.form.personal.blood_clots_in_legs_lungs_brain = (response.data.medicalHistory.data[0].personalHistoryProfile.data.blood_clots_in_legs_lungs_brain || 'never')
        self.form.personal.blood_group = (response.data.medicalHistory.data[0].personalHistoryProfile.data.blood_group || 'A+')
        self.form.personal.blood_transfusions = (response.data.medicalHistory.data[0].personalHistoryProfile.data.blood_transfusions || 'never')
        self.form.personal.bone_disease_or_weak_bone = (response.data.medicalHistory.data[0].personalHistoryProfile.data.bone_disease_or_weak_bone || 'never')
        self.form.personal.cancer = (response.data.medicalHistory.data[0].personalHistoryProfile.data.cancer || 'never')
        self.form.personal.depression = (response.data.medicalHistory.data[0].personalHistoryProfile.data.depression || 'never')
        self.form.personal.diabetes = (response.data.medicalHistory.data[0].personalHistoryProfile.data.diabetes || 'never')
        self.form.personal.had_major_illness = (response.data.medicalHistory.data[0].personalHistoryProfile.data.had_major_illness || 0)
        self.form.personal.had_major_illness_name = (response.data.medicalHistory.data[0].personalHistoryProfile.data.had_major_illness_name || '')
        self.form.personal.had_surgery = (response.data.medicalHistory.data[0].personalHistoryProfile.data.had_surgery || 0)
        self.form.personal.has_allergy = (response.data.medicalHistory.data[0].personalHistoryProfile.data.has_allergy || 0)
        self.form.personal.has_allergy_to = (response.data.medicalHistory.data[0].personalHistoryProfile.data.has_allergy_to || '')
        self.form.personal.hearing_problem = (response.data.medicalHistory.data[0].personalHistoryProfile.data.hearing_problem || 'never')
        self.form.personal.heart_attacks_or_strokes = (response.data.medicalHistory.data[0].personalHistoryProfile.data.heart_attacks_or_strokes || 'never')
        self.form.personal.hep_b_immunizations = (response.data.medicalHistory.data[0].personalHistoryProfile.data.hep_b_immunizations || 0)
        self.form.personal.hepatitis = (response.data.medicalHistory.data[0].personalHistoryProfile.data.hepatitis || 'never')
        self.form.personal.high_blood_pressure = (response.data.medicalHistory.data[0].personalHistoryProfile.data.high_blood_pressure || 'never')
        self.form.personal.kidney_bladder_problems = (response.data.medicalHistory.data[0].personalHistoryProfile.data.kidney_bladder_problems || 'never')
        self.form.personal.migraines_or_bad_headaches = (response.data.medicalHistory.data[0].personalHistoryProfile.data.migraines_or_bad_headaches || 'never')
        self.form.personal.regular_medicine_name = (response.data.medicalHistory.data[0].personalHistoryProfile.data.regular_medicine_name || '')
        self.form.personal.regular_medicine_taker = (response.data.medicalHistory.data[0].personalHistoryProfile.data.regular_medicine_taker || 0)
        self.form.personal.respiratory_problem = (response.data.medicalHistory.data[0].personalHistoryProfile.data.respiratory_problem || 'never')
        self.form.personal.seizures = (response.data.medicalHistory.data[0].personalHistoryProfile.data.seizures || 'never')
        self.form.personal.stomach_or_intestine_problems = (response.data.medicalHistory.data[0].personalHistoryProfile.data.stomach_or_intestine_problems || 'never')
        self.form.personal.tetanus_immunizations = (response.data.medicalHistory.data[0].personalHistoryProfile.data.tetanus_immunizations || 0)
        self.form.personal.thyroid_problems = (response.data.medicalHistory.data[0].personalHistoryProfile.data.thyroid_problems || 'never')
        self.form.personal.vision_problems = (response.data.medicalHistory.data[0].personalHistoryProfile.data.vision_problems || 'never')
        self.form.family.adopted = (response.data.medicalHistory.data[0].familyHistoryProfile.data.adopted || 0)
        self.form.family.had_blood_clots = (response.data.medicalHistory.data[0].familyHistoryProfile.data.had_blood_clots || 0)
        self.form.family.had_cancer = (response.data.medicalHistory.data[0].familyHistoryProfile.data.had_cancer || 0)
        self.form.family.had_diabetes = (response.data.medicalHistory.data[0].familyHistoryProfile.data.had_diabetes || 0)
        self.form.family.had_heart_attack = (response.data.medicalHistory.data[0].familyHistoryProfile.data.had_heart_attack || 0)
        self.form.family.had_high_blood_pressure = (response.data.medicalHistory.data[0].familyHistoryProfile.data.had_high_cholesterol || 0)
        self.form.family.had_high_cholesterol = (response.data.medicalHistory.data[0].familyHistoryProfile.data.adopted || 0)
        self.form.family.had_stroke = (response.data.medicalHistory.data[0].familyHistoryProfile.data.had_stroke || 0)
        self.form.social.drink_alcohol = (response.data.medicalHistory.data[0].socialHistoryProfile.data.drink_alcohol || 0)
        self.form.social.smoke = response.data.medicalHistory.data[0].socialHistoryProfile.data.smoke || 0
        self.form.social.drugs = response.data.medicalHistory.data[0].socialHistoryProfile.data.drugs || 0
        self.form.other.had_neurologist = (response.data.medicalHistory.data[0].otherHistoryProfile.data.had_neurologist || 0)
        self.form.other.bone_fracture = response.data.medicalHistory.data[0].otherHistoryProfile.data.bone_fracture || 0
        self.form.other.had_accident = response.data.medicalHistory.data[0].otherHistoryProfile.data.had_accident || 0
        console.log(self.form.personal)
        self.isLoading = false
      })
      .catch(function (error) {
        console.log(error)
        self.isLoading = false
      })
  },
  methods: {
    submitMedicalHistory: function () {
      const self = this
      axios.post('/user/medical-history', this.form)
        .then(function (response) {
          console.log(response)
          self.updateSuccess = true
          console.log(self.updateSuccess)
        })
        .catch(function (error) {
          console.log(error)
          self.updateFail = true
        })
    }
  }
}
</script>

<style scoped>

.b-form-group {
  border: 1px solid rgb(112, 116, 112);
  margin: 8px;
  padding: 10px;
}
</style>
