<template>
  <div>
    <div class="kov-backimg">
      <b-container style="padding-bottom:0px;">
      <b-alert
      variant="danger"
      dismissible
      :show="profilemsg"
      @dismissed="profilemsg=false"
    >{{ $t('profile.profilesms')}}</b-alert>
        <b-row>
          <b-col style="margin-top:30px;padding:8px;">
            <h1>{{ $t("kovhome.heading") }}</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h5>{{ $t("kovhome.subtext") }}</h5>
          </b-col>
        </b-row>
        <b-row class="kov_row-3">
          <b-col cols sm="6" lg="3" >
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit medical search2">
                  <strong style="color:white;">{{
                    $t("kovhome.category.1")
                  }}</strong>
                </div>
                <div class="flip-card-back medical2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=1`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.1")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols sm="6" lg="3">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit Pharmacy search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=2`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.2")
                    }}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back Pharmacy2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=2`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.2")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols sm="6" class="kov_col" lg="4" >
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit fitness search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=3`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.3")
                    }}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back fitness2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=3`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.3")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
        <!-- </b-row>
        <b-row class="kov_row-3"> -->
          <b-col cols sm="6" lg="3" class="" style="margin-top:10px;">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit health search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=4`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.4")
                    }}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back health2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=4`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.4")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols sm="6" lg="3" style="margin-top:10px;">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit senior search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=5`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.5")
                    }}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back senior2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=5`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.5")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols sm="6" lg="3" style="margin-top:10px;">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit alternative search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=6`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.6")
                    }}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back alternative2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home?categoryId=6`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.6")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
		
        <b-row class="kov_row-3" style="margin-top:10px;">
          <b-col class="Kov_fit hide" cols sm="3" md="3" lg="3">
            <a style="display:none;" :href="`/${$i18n.locale}/search-home`">
              <div class="search1">
                <strong style="color:white;">Near By</strong>
              </div>
            </a>
          </b-col>
          <b-col cols sm="6" md="6" lg="3" class="near-mar kov_col"  >
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit near search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-home`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.7")
                    }}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back near2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-home`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{
                      $t("kovhome.category.7")
                    }}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
		<!--b-row class="kov_row-3" >
          <b-col class="Kov_fit hide" cols sm="3" md="3" lg="3">
            <a style="display:none;" :href="`/${$i18n.locale}/search-video-consultation`">
              <div class="search1">
                <strong style="color:white;"> {{$t("video.video_consultation")}}</strong>
              </div>
            </a>
          </b-col>
          <b-col cols sm="6" md="6" lg="3" class="near-mar kov_col"  >
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front Kov_fit vc search2">
                  <router-link
                    :to="`/${$i18n.locale}/search-video-consultation`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{$t("video.video_consultation")}}</strong>
                  </router-link>
                </div>
                <div class="flip-card-back vc2 Kov_fit search1">
                  <router-link
                    :to="`/${$i18n.locale}/search-video-consultation`"
                    style="text-decoration:none; !important"
                  >
                    <strong style="color:white;">{{$t("video.video_consultation")}}</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
        </b-row-->
         </b-container>
          </div>
          <div>
		 <b-container style="max-width:1000px;text-align:center;" >
		 <b-row>
          <b-col style="margin-top:30px;padding:8px;color:grey;">
            <h3 style="font-size:20px;">{{ $t("tab2.text1") }}<img src="/static/img/mask.png" style="width:25px;height:25px;" /></h3>
             <h5 style="font-size:18px;">{{ $t("tab2.text2") }}</h5>
              <h8 style="font-size:14px;">{{ $t("tab2.text3") }}</h8>
          </b-col>
        </b-row>
		<b-row class="kov_row-3" style="margin-top:30px;margin-left:10px">
          <b-col  cols sm="3" md="3" lg="3">
            <router-link :to="`/${$i18n.locale}/search-video-consultation`">
              <b-img src="/static/img/vc.jpg" ></b-img>
            </router-link>
            </b-col>
              <b-col  cols sm="3" md="3" lg="3" >
              <strong style="margin-top: 25px;font-size: 20px;font-weight: 500;color: #0a0201;" >{{$t("video.video_consultation")}}</strong><br/><br/><strong style="display:table;font-size: 16px;font-weight: 400;color:#666161;" >{{$t("online.text2")}}</strong>
              
               <br/>
               <router-link  :to="`/${$i18n.locale}/search-video-consultation`"><button type="button" class="btn btn-primary" style="color: #fff;
    background-color: #00a4bd;
    border-color: #17a2b8;font-size:14px;border-radius:0px;">{{$t("service.book-appointment")}}</button></router-link>
          </b-col>
          
          <b-col  cols sm="3" md="3" lg="3">
            <router-link :to="`/${$i18n.locale}/search-video-consultation`">
              <b-img src="/static/img/online-doctor.jpg" ></b-img>
            </router-link>
            </b-col>
              <b-col  cols sm="3" md="3" lg="3" >
              <strong style="margin-top: 25px;font-size: 20px;font-weight: 500;color: #0a0201;" >{{$t("online.online-doctors")}}</strong><br/><br/><br/><strong style="display:table;font-size: 16px;font-weight: 400;color:#666161;" >{{$t("online.text1")}}</strong>
              
               <br/>
               <router-link :to="`/${$i18n.locale}/online-doctors`"><button type="button" class="btn btn-primary" style="color: #fff;
    background-color: #00a4bd;
    border-color: #17a2b8;font-size:14px;border-radius:0px;">{{$t("online.start-consulting")}}</button></router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div style="margin-top:2%; font-weight:500;">
      <h3 class="pop-img">{{ $t("kovhome.get.title") }}</h3>

      <b-container style="padding-top:70px;">
        <b-row>
          <b-col lg="6">
            <img
              src="../assets/frontend/mobile2.png"
              fluid
              class="mob-kov"
              alt="Responsive image"
            />
          </b-col>
          <b-col lg="6 margin">
            <p id="1" style="font-size:18px;font-weight:700;">
              {{ $t("kovhome.get.text") }}<br>   {{ $t("kovhome.get.text2") }}
            </p>
            <b-container fluid>
              <b-row>
                <b-col col lg="6" sm="5" class="text-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=kovered.kovered.io&hl=en"
                    target="_blank"
                  >
                    <img
                      class="appimg"
                      src="../assets/googleplay.jpg"
                      style="width:170px;height:52px;"
                    />
                  </a>
                </b-col>
                <b-col col lg="6" sm="5" class="text-center">
                  <a
                    href="https://apps.apple.com/pt/app/kovered-healthcare-finder/id1364469022"
                    target="_blank"
                  >
                    <img
                      class="appimg"
                      src="../assets/appstore.jpg"
                      style="width:170px;height:52px;"
                    />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="about" style="margin-top:8%;">
      <h3 class="pop-img extra">{{ $t("about.title") }}</h3>
      <b-container>
        <b-row> </b-row>
        <b-row>
          <b-col class="text-left margin" style="margin-top:4%;" col lg="6" md="12" sm="12">
            <p style="text-align:left;font-weight:400;font-size:16px;">
              {{ $t("about.text") }}<br /><br /> 
              {{ $t("about.text2") }}
            </p>
          </b-col>
          <b-col col lg="6" md="12" sm="12" class="text-left">
            <img src="../assets/frontend/About.svg" class="about-kov" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div style="margin-top:4%;">
      <h3 style="color:white;" class="pop-img">
        {{ $t("kovhome.popular.text") }}
      </h3>
      <b-container>
        <b-row>
          <b-col cols="12">
            <h4 class="text-uppercase" style="text-align:left;font-weight:700;margin-top:3%;margin-bottom:3%;">
              {{ $t("kovhome.popular.category.1") }}
            </h4>
            <b-row>
              <b-col lg="3" sm="6" class="margin-pop">
                <div>
                  <b-card
                    img-top
                    tag="article"
                    class="card-img"
                  >
                    <div href="#" class="card-div">
                      <router-link
                        style="color:white;"
                        :to="`/${$i18n.locale}/search-doctors`"
                        >{{ $t("kovhome.popular.special.1") }}
                        <font-awesome-icon icon="arrow-right"
                      /></router-link>
                    </div>
                  </b-card>
                </div>
              </b-col>
              <b-col lg="3" sm="6" class="margin-pop">
                <b-card
                  img-top
                  tag="article"
                  class="cardimghos"
                >
                  <div href="#" class="card-div">
                    <router-link
                      style="color:white;"
                      :to="
                        `/${$i18n.locale}/search-facilities?category=Hospital`
                      "
                      >{{ $t("kovhome.popular.special.2") }}
                      <font-awesome-icon icon="arrow-right"
                    /></router-link>
                  </div>
                </b-card>
              </b-col>
              <b-col lg="3" sm="6" class="margin-pop">
                <b-card
                  img-top
                  tag="article"
                  class="card-img2"
                  ><div href="#" class="card-div">
                    <router-link
                      style="color:white;"
                      :to="`/${$i18n.locale}/search-facilities?category=Clinic`"
                      >{{ $t("kovhome.popular.special.3") }}
                      <font-awesome-icon icon="arrow-right"
                    /></router-link>
                  </div>
                </b-card>
              </b-col>
              <b-col lg="3" sm="6" class="margin-pop">
                <div>
                  <b-card img-top tag="article" class="card-img3"
                    ><div href="#" class="card-div">
                      <router-link
                        style="color:white;"
                        :to="
                          `/${$i18n.locale}/search-facilities?category=Pharmacy`
                        "
                        >{{ $t("kovhome.popular.special.4") }}
                        <font-awesome-icon icon="arrow-right"
                      /></router-link>
                    </div>
                  </b-card>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-container >
                <h4 class="text-uppercase" style="text-align:left;font-weight:700;margin-top:3%;margin-bottom:4%;">
                  {{ $t("kovhome.popular.category.2") }}
                </h4>
                <b-row>
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        class="near-img"
                      >
                        <img src="../assets/frontend/gym.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/Speciality?specialityId=21`"
                            >{{ $t("kovhome.popular.nearby.1") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        class="near-img"
                      >
                        <img src="../assets/frontend/yoga.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/Speciality?specialityId=18`"
                            >{{ $t("kovhome.popular.nearby.2") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        class="near-img"
                      >
                        <img src="../assets/frontend/nursing.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="
                              `/${$i18n.locale}/search-facilities?category=Nurshing`
                            "
                            >{{ $t("kovhome.popular.nearby.3") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        class="near-img"
                      >
                        <img src="../assets/frontend/spa.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/Speciality?specialityId=26`"
                            >{{ $t("kovhome.popular.nearby.4") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
                <b-row style="margin-top:20px;">
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="near-img"
                      >
                        <img src="../assets/frontend/specialist.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/Speciality`"
                            >{{ $t("kovhome.popular.nearby.5") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="near-img"
                      >
                        <img src="../assets/frontend/Location.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/search-location`"
                            >{{ $t("kovhome.popular.nearby.6") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="near-img"
                      >
                        <img src="../assets/frontend/Reviews.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/search-ratings`"
                            >{{ $t("kovhome.popular.nearby.7") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
				          <b-col cols="6" lg="3">
                    <div>
                      <b-card
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="near-img"
                      >
                        <img src="../assets/frontend/vc.png" />
                        <div href="#" class="card-div">
                          <router-link
                            style="color:white;"
                            :to="`/${$i18n.locale}/search-video-consultation`"
                            >{{ $t("video.video_consultation") }}
                            <font-awesome-icon icon="arrow-right"
                          /></router-link>
                        </div>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
            <b-row>
              <b-col lg="4" sm="6">
                <h4 class="text-uppercase" style="text-align:left;font-weight:700;margin-top:4%;margin-bottom:10%;">
                  {{ $t("kovhome.popular.category.3") }}
                </h4>
                <h6 style="font-weight: 600;">{{$t("kovhome.popular.text2")}}</h6>
                <br />
                <div v-if="showmodal" class="showmodal">
                  <h4 class="pop-img">
                    {{ modaltitle }}
                  </h4>
                  <h6>{{$t("kovhome.popular.text3")}}</h6>
                  <b-list-group>
                   <b-list-group-item>
                      <router-link
                        style="color:black;font-weight:600;"
                        :to="yogalink"
                        >Yoga <font-awesome-icon icon="arrow-right"
                      /></router-link>
                    </b-list-group-item>
                    <b-list-group-item><router-link
                        style="color:black;font-weight:600;"
                        :to="nurselink"
                        >Nursing
                        <font-awesome-icon icon="arrow-right"/></router-link>
                    </b-list-group-item>
                                       
                    <b-list-group-item>
                      <router-link
                        style="color:black;font-weight:600;"
                        :to="diet"
                        >Dietician <font-awesome-icon icon="arrow-right"
                      /></router-link>
                    </b-list-group-item>
                   <b-list-group-item>
                      <router-link
                        style="color:black;font-weight:600;"
                        :to="parmacy"
                        >Pharmacy <font-awesome-icon icon="arrow-right"
                      /></router-link>
                    </b-list-group-item>
                  </b-list-group>
                </div>
              </b-col>
              <b-col lg="8" sm="6">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1200 1200"
                  style="enable-background:new 0 0 1200 1200;"
                  xml:space="preserve">
                  <g>
                    <g id="svg">
                       <text x="430" y="100" class="Rrrrr" style="font: 40px serif; fill: #4ab0c3;">Portugal:</text>
                      <!-- <a href="#" class="svg" v-b-tooltip.hover title="Tooltip directive content" > -->
                      <path 
                        class="st0"
                        fill="#36393a"
                        d="M569.9,203.3l-8.2,3.6l0.1,4.5l-7.5,7.6l3.2,5.9l3.7,0.5l1.1,11.2l-1.9,1.3c-0.2,0-0.4,0.3-0.6,0.3
                        c-0.2,0.1-0.4,0.3-0.6,0.4c-0.6,0.3-1.4,0.5-2.1,0.6c-0.4,0.1-0.8,0.3-1.1,0.4c-0.3,0.1-0.6,0.3-0.8,0.4c-0.3,0.2-0.6,0.3-0.9,0.5
                        c-0.3,0.2-0.6,0.4-0.9,0.6c-0.4,0.3-1,0.4-1.4,0.6c-0.4,0.1-0.7,0.3-1,0.5c-0.6,0.4-1.3,0.8-1.9,1.3c-0.5,0.4-0.9,1-1.4,1.4
                        c-0.4,0.3-0.8,0.6-1.2,0.8c-0.4,0.3-0.8,0.6-1.3,0.5c-0.2,0-0.4,0-0.6-0.1c-0.1,0-0.3-0.1-0.4-0.1c0,0-0.1,0-0.1,0
                        c-0.2-0.1-0.4-0.3-0.6-0.3H543c-0.4,0-0.7-0.2-1-0.3c-0.5-0.2-0.9-0.1-1.4-0.2c-0.3,0-0.7,0-1,0c-0.6,0-1.2-0.2-1.8-0.4
                        c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1.1,0-1.6,0.3c-0.6,0.2-1,0.6-1.5,1c-0.4,0.3-0.9,0.1-1.3,0.5c-0.4,0.4-0.8,0.7-1.3,1.1
                        c-0.5,0.4-1.2,0.5-1.8,0.8c-0.6,0.3-1.1,0.3-1.7,0.5c-0.3,0-0.6,0-0.8,0c-0.3,0-0.6,0.1-0.9,0.2c-0.9,0.2-1.8,0-2.7,0.1
                        c-0.8,0.1-1.5,0.5-2.2,0.9c-0.8,0.5-1.7,0.8-2.5,1.3c-0.7,0.4-1.1,1-1.3,1.8c-0.1,0.7,0,1.4,0.1,2.2c0,0.6-0.1,1.1-0.4,1.7
                        c-0.3,0.6-0.5,1.1-0.6,1.7c-0.1,0.5-0.2,0.9-0.4,1.3c-0.3,0.5-0.7,0.9-0.8,1.5c-0.1,0.5,0,1.1,0.3,1.6c0.2,0.5,0.5,1,0.6,1.6
                        c0.1,0.6-0.2,1-0.5,1.4c-0.4,0.4-0.9,0.7-1.4,1c-0.5,0.3-0.8,0.7-1.1,1.2c-0.3,0.5-0.6,0.9-1.3,0.9c-0.7,0-1.6-0.2-2.3-0.5
                        c-0.8-0.4-1.5-1-2.3-1.6c-0.8-0.6-1.7-1.1-2.7-1.5c-0.3-0.1-0.6-0.2-0.8-0.4c-0.2-0.2-0.4-0.3-0.7-0.5c-0.5-0.3-1.2-0.3-1.8-0.3
                        c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.6,0-0.9,0.1c-0.4,0.1-0.8,0.2-1.2,0.3c-0.3,0.1-0.7,0.2-1.1,0.3c-0.2,0-0.3,0-0.5,0.1
                        c-0.2,0.1-0.4,0.3-0.6,0.3c-0.3,0.1-0.6,0.2-0.9,0.2c-0.3,0.1-0.5,0.3-0.8,0.3c-0.3,0.1-0.6,0.3-0.8,0.5c-0.3,0.2-0.4,0.5-0.7,0.8
                        c-0.5,0.5-0.9,1.3-1.4,1.8c-0.3,0.3-0.4,0.5-0.8,0.7c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0-0.3,0-0.3,0c-0.3,0-0.8,0.2-1.1,0
                        c-0.1,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.1-0.2-0.2-0.3c-0.3-0.2-0.4-0.5-0.7-0.6c-0.2-0.2-0.5-0.3-0.7-0.4c-0.5-0.5-0.9,0-1,0.6
                        c0,0.3,0,0.6-0.2,0.9c0,0.1-0.2,0.3-0.3,0.3c-0.3,0.3-0.6,0.3-1,0.2c-0.4,0-0.8,0-1.3,0c-0.4,0-0.8-0.1-1.2-0.2
                        c-0.3,0-0.5-0.1-0.8-0.2c-0.1,0-0.3,0-0.3-0.1c-0.2-1.2-0.4-2.1-0.4-2.1c-0.1-0.8-0.3-1.6-0.2-2.4c0-0.3,0.1-0.6,0.2-0.8
                        c0.1-0.2,0.3-0.4,0.3-0.6c0.3-0.8-0.2-1.5-0.5-2.1c-0.1-0.3-0.3-0.7-0.5-1c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.5-0.5-0.5-0.8
                        c0-0.3,0.3-0.6,0.5-0.7c0.7-0.4,1.5-0.9,2.2-0.9c1,0,2,0.4,3,0.3c0.9,0,1.7-0.8,2.4-1.2c0.8-0.4,1.7-0.6,2.5-0.9
                        c0.5-0.2,0.9-0.6,1.4-0.8c-1.1,0-2.2,0-3.3,0.1c-1.4,0.1-2.8,0.3-4.2,0.8c-0.9,0.3-1.7,0.9-2.6,1.4c-0.6,0.3-1.1,0.4-1.6,0
                        c-0.5-0.4-1-1-1.5-1.5c-0.6-0.7-1.2-1.4-1.6-2.3c-0.3-0.9-0.5-1.8-0.6-2.8c-0.1-0.8-0.2-1.6-0.6-2.3c-0.5-1-1.2-1.7-1.6-2.7
                        c-0.3-0.6-0.1-1.2,0-1.8c0.2-0.6,0.6-1,0.9-1.4c0.2-0.3,0.3-0.6,0.4-1c0.1-0.5,0.4-1,0.3-1.5c0-0.5-0.4-0.9-0.6-1.3
                        c-0.2-0.4-0.3-0.8-0.4-1.3c-0.2-0.9-0.3-1.9-0.3-2.8c0-0.5,0-1,0.1-1.4c0.1-0.3,0.3-0.5,0.4-0.7c0.1-0.3,0.1-0.5,0.2-0.8
                        c0.2-0.6,0.7-0.9,1.3-1.1c0.6-0.3,1.1-0.5,1.7-0.8c1.1-0.6,2-1.3,2.4-2.6c0.3-1.2,1.1-2.6,2.3-3.2c0.4-0.2,1-0.2,1.5-0.3
                        c0.3-0.1,0.7-0.2,1.1-0.3c0.3,0,0.5,0,0.8-0.1c0.5-0.1,0.7-0.6,0.9-1.1c0.2-0.4,0.4-0.8,0.7-1.1c0.4-0.4,0.7-0.9,1.2-1.1
                        c0.6-0.4,1.3-0.5,1.8-0.9c0.2-0.2,0.3-0.4,0.5-0.5c0.3-0.2,0.6-0.4,0.8-0.7c0.3-0.3,0.5-0.6,0.6-0.9c0,0,0.9-1,1.2-3.1
                        c0.4-2.1,0.2-4.1,2.8-4.7c2.5-0.6,7.4-0.9,8-4c0.6-3.1,0.8-5.9,2.9-5.7c2.1,0.2,4.6,0.7,7.1-1.1c2.6-1.8,7.4-5.2,8.9-4.9
                        c1.5,0.3,5.1,2.6,8.5,1.7c3.4-0.8,6.9-1.6,8.4-1.9c1.4-0.3,2.8-0.4,3.6-1.4c0.8-1.1,0.8-2.5,3.1-3.9c2.3-1.4,12.9-7.7,12.9-5
                        c0,2.7-1.1,9.6,0,10.2c1.1,0.5,2.1,1.6,3.3,0.8c1.3-0.8,3-2.5,3.9-1.9c0.9,0.6,4.3,4.1,4.3,4.1V203.3z"
                      />

                      <a
                        href="javascript:void(0);"
                        class="braga"
                        v-b-tooltip.hover
                        title="Braga"
                      >
                        <path
                          @click="
                            modal(
                              'Braga',
                              '/en/search?city=Braga&country=Portugal&categoryId=3&specialityId=18&language&insuranceId&start=0&inc=20&latitude=41.54544860000001&longitude=-8.426506999999999',
                              '/en/search?city=Braga&country=portugal&categoryId=5&specialityId=33&language&insuranceId&start=0&inc=20&latitude=41.54544860000001&longitude=-8.426506999999999',
                              '/en/search?city=Braga&country=portugal&categoryId=4&specialityId=28&language&insuranceId&start=0&inc=20&latitude=41.54544860000001&longitude=-8.426506999999999',
                              '/en/search?city=Braga&country=porugal&categoryId=2&specialityId&language&insuranceId&start=0&inc=20&latitude=41.54544860000001&longitude=-8.426506999999999'
                            )
                          "
                          fill="#4ab0c3"
                          class="st1"
                          d="M609.6,280c0,0.6-0.3,1.2-0.7,1.7c-0.1,0.2-0.3,0.5-0.4,0.6c-0.2,0.2-0.4,0.3-0.6,0.6c-0.1,0-0.2,0.1-0.3,0.2
                        c0,0-0.1,0.2-0.2,0.2c-0.5,0.5-0.7,1.2-1.3,1.5c-0.3,0.2-0.6,0.3-0.9,0.5c-0.3,0.2-0.5,0.4-0.9,0.6c-0.3,0.1-0.6,0.3-0.9,0.5
                        c-0.5,0.2-0.8,0.6-1.2,0.8c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.1-0.3,0.2-0.4,0.3c-0.5,0.3-1,0.6-1.4,0.9c-0.4,0.3-0.8,0.6-1.3,0.9
                        c-0.2,0.2-0.3,0.3-0.5,0.4c-0.8,0.4-1.2,1.2-1.8,1.9c-0.3,0.3-0.6,0.8-0.9,1.2c-0.3,0.4-0.5,0.8-0.6,1.2c-0.1,0.4-0.2,0.8-0.3,1.2
                        c0,0.2-0.1,0.4-0.1,0.6c0,0.2-0.1,0.3-0.1,0.4c-0.1,0.4-0.2,0.7-0.3,1.1c0,0.1-0.2,0.3-0.3,0.5c-0.3,0.3-0.6,0.7-0.9,1.1
                        c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.2-0.3,0.6-0.5,0.8c-0.2,0.1-0.3,0.3-0.5,0.5c-0.1,0.2-0.3,0.4-0.4,0.6
                        c-0.3,0.4-0.5,0.8-0.8,1.3c-0.2,0.4-0.6,0.7-0.9,1c-0.4,0.3-0.7,0.5-1,0.9c-0.2,0.3-0.4,0.8-0.4,1.1v1.3c0,0.4,0,0.8,0,1.2
                        c0,1,0,2-0.3,3c-0.3-0.1-0.6,0-0.8,0.3c-0.7,1.2-1.7,2.1-2.8,3c-0.3,0.3-0.6,0.6-0.9,0.8c-0.3,0.2-0.6,0.4-0.8,0.6
                        c-0.6,0.6-1.2,1.3-1.8,2c-0.2,0.2-0.4,0.4-0.7,0.5c-0.3,0.1-0.6-0.2-0.8-0.4c-0.5-0.4-1-0.6-1.4-1c-1-0.7-1.8-1.6-2.7-2.4
                        c-0.8-0.6-1.4-1.7-2.5-1.9c-1.1-0.1-2.1,0-3.2-0.1c-0.6-0.1-0.9-0.2-1.3-0.5c-0.4-0.3-0.8-0.6-1.1-1c-0.2-0.2-0.3-0.5-0.5-0.7
                        c-0.2-0.2-0.5-0.4-0.7-0.6c-0.3-0.3-0.4-0.5-0.7-0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.5-0.5-0.8-1-1.4-1.4c-0.4-0.3-0.8-0.7-1.2-1
                        c-0.5-0.4-0.9-0.9-1.4-1.3c-0.5-0.3-1-0.7-1.5-1c-0.2-0.1-0.5,0-0.7,0c-0.3,0-0.6,0-0.8,0c-0.6,0-1.1,0.1-1.7,0.4
                        c-0.4,0.2-0.8,0.4-1.1,0.7c-0.5,0.3-0.8,0.8-1.2,1.3c-0.3,0.4-0.7,0.9-1.1,1.3c-0.5,0.4-0.9,0.9-1.3,1.4c-0.3,0.4-0.4,0.8-0.7,1.1
                        c-0.4,0.3-0.9,0.6-1.4,0.6c-0.7,0.1-1.4,0.5-2.1,0.4c-0.7-0.1-1.3,0.3-1.9,0.4c-0.5,0.1-0.9,0.1-1.3,0.1c-0.4,0-0.8,0.1-1.2,0.1
                        c-0.9,0-1.7-0.3-2.5-0.4c-0.6-0.1-1.2-0.2-1.7-0.4c-0.7-0.3-1.3-0.6-1.8-1.1c-0.3-0.3-0.7-0.5-1.1-0.7c-0.5-0.2-0.9-0.3-1.4-0.3
                        c-0.8,0-1.7,0-2.5,0.2c-0.4,0.1-0.9,0.2-1.2,0.3c-0.3,0.1-0.5,0.3-0.8,0.3c-0.2,0-0.4,0-0.6,0.1c-0.5,0.1-0.9,0.3-1.4,0.5
                        c-0.4,0.2-0.8,0.2-1.3,0.2h-1.4c-0.5,0-0.9,0.1-1.3,0.1c-0.8,0-1.5-0.3-2.3-0.3c-1,0-1.8,0.3-2.7,0.7c-0.3,0.1-0.5,0.3-0.7,0.4
                        c-0.2,0-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.3,0.1-0.7,0.1-1.1,0.2c-0.2,0.1-0.4,0.3-0.6,0.3c-0.6,0.3-1.4,0.1-2,0.2
                        c-0.6,0.1-1.3,0.4-1.9,0.2c-0.7-0.3-1.1-0.9-1.4-1.5c-0.4-0.6-0.9-1-1.2-1.6c-0.2-0.6-0.1-1.1,0.3-1.6c0.5-0.5,0.7-0.9,0.8-1.6
                        c0-0.6,0.1-1.3-0.1-1.9c-0.2-0.6-0.6-1.1-0.9-1.6c-0.3-0.5-0.7-0.9-1.2-1.2c-0.7-0.3-1.4-0.6-2.1-0.9c-0.7-0.3-1.4-0.5-2-0.8
                        c-0.7-0.4-1.3-0.8-1.9-1.2c-0.8-0.4-1.6-0.8-2.4-1.2c-0.8-0.4-1.6-0.7-2.4-1.2c-0.5-0.3-1-0.7-1.5-0.8c-0.3-0.3-0.8-0.3-1.1-0.5
                        c-0.4-0.2-0.8-0.4-1.1-0.6c-0.5-0.3-1-0.4-1.3-0.8c-0.6-0.7-1-1.4-1.6-1.9c-1.4-1.2-3.1-1.7-4.8-2.1c-0.3-0.6-0.4-1.1-0.6-1.5
                        c-0.8-1.8-2.7-4.7-1.6-5.6c1.1-0.9,1.9-1.2,2.1-0.3c0.2,1,0.1,2.2,0.7,2.2c0.5-0.1,0.9-2.1,0-2.9c-0.9-0.8-2.6-2.1-2.6-3
                        c0.1-0.9-0.3-2.7-0.5-4.2c-0.1-0.9-0.6-3.2-0.9-4.8c0,0.1,0.3,0.1,0.3,0.1c0.3,0.1,0.6,0.2,0.8,0.2c0.4,0.1,0.8,0.1,1.2,0.2
                        c0.4,0,0.8,0,1.3,0c0.3,0,0.7,0.1,1-0.2c0.1-0.1,0.3-0.3,0.3-0.3c0.2-0.3,0.2-0.6,0.2-0.9c0.1-0.5,0.5-1.1,1-0.6
                        c0.2,0.2,0.5,0.3,0.7,0.4c0.3,0.1,0.5,0.4,0.7,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.3,0.2,0.4,0.2c0.3,0.1,0.8,0,1.1,0
                        c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.4-0.2c0.3-0.2,0.5-0.4,0.8-0.7c0.5-0.6,0.9-1.3,1.4-1.8c0.3-0.3,0.4-0.5,0.7-0.8
                        c0.2-0.2,0.6-0.4,0.8-0.5c0.3-0.1,0.5-0.3,0.8-0.3c0.3,0,0.6-0.1,0.9-0.2c0.2,0,0.4-0.2,0.6-0.3c0.2-0.1,0.3-0.1,0.5-0.1
                        c0.4-0.1,0.7-0.2,1.1-0.3c0.4-0.2,0.8-0.3,1.2-0.3c0.3-0.1,0.6,0,0.9-0.1c0.3,0,0.6-0.1,0.9-0.1c0.6,0,1.2,0,1.8,0.3
                        c0.3,0.2,0.5,0.3,0.7,0.5c0.3,0.2,0.5,0.3,0.8,0.4c1,0.3,1.9,0.8,2.7,1.5c0.8,0.6,1.4,1.2,2.3,1.6c0.7,0.3,1.6,0.6,2.3,0.5
                        c0.7,0,1-0.4,1.3-0.9c0.3-0.5,0.6-0.9,1.1-1.2c0.5-0.3,1-0.6,1.4-1c0.4-0.3,0.6-0.8,0.5-1.4c-0.1-0.6-0.4-1.1-0.6-1.6
                        c-0.3-0.5-0.4-1-0.3-1.6c0.1-0.6,0.5-1.1,0.8-1.5c0.3-0.4,0.3-0.8,0.4-1.3c0.1-0.6,0.3-1.1,0.6-1.7c0.3-0.6,0.4-1.1,0.4-1.7
                        c0-0.7-0.2-1.4-0.1-2.2c0.1-0.8,0.6-1.4,1.3-1.8c0.8-0.5,1.7-0.8,2.5-1.3c0.7-0.4,1.4-0.8,2.2-0.9c0.9-0.1,1.8,0.1,2.7-0.1
                        c0.3,0,0.6-0.2,0.9-0.2c0.2,0,0.5,0,0.8,0c0.6-0.2,1.2-0.2,1.7-0.5c0.6-0.3,1.3-0.4,1.8-0.8c0.4-0.4,0.8-0.7,1.3-1.1
                        c0.4-0.4,0.9-0.2,1.3-0.5c0.5-0.3,1-0.8,1.5-1c0.5-0.3,1.1-0.3,1.6-0.3c0.5,0,0.9,0,1.4,0.2c0.6,0.2,1.2,0.3,1.8,0.4
                        c0.3,0,0.6,0,1,0c0.5,0,0.9,0,1.4,0.2c0.3,0.1,0.6,0.3,1,0.3h0.7c0.3,0,0.4,0.2,0.6,0.3c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4,0.1
                        c0.2,0,0.4,0,0.6,0.1c0.5,0,0.9-0.3,1.3-0.5c0.4-0.3,0.8-0.5,1.2-0.8c0.5-0.4,0.9-0.9,1.4-1.4c0.6-0.5,1.2-0.9,1.9-1.3
                        c0.3-0.2,0.6-0.4,1-0.5c0.4-0.2,1-0.3,1.4-0.6c0.3-0.2,0.5-0.4,0.9-0.6c0.3-0.2,0.6-0.3,0.9-0.5c0.3-0.2,0.5-0.3,0.8-0.4
                        c0.4-0.1,0.8-0.3,1.1-0.4c0.7-0.2,1.4-0.3,2.1-0.6c0.2-0.2,0.4-0.3,0.6-0.4c0.2-0.1,0.4-0.4,0.6-0.3l1.9-1.3l5,2.4l7.7-1.1
                        c0,0,0,0,0.2-0.1c0,0,0.8,0.8,2.4,1.7c1.5,0.9,0.8,3.6,0.8,3.6c0,0.6,0,1.2,0,1.7c0,0.3,0,0.6-0.2,0.8c-0.1,0.3-0.2,0.5-0.4,0.6
                        c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.2-0.5,0.4-0.6,0.6c-0.3,0.5-0.6,1-0.9,1.4c-0.8,1-1.4,2-2.2,3
                        c-0.5,0.7-1.1,1.4-1.6,1.9c-0.5,0.5-0.9,1-1.1,1.6c-0.1,0.4-0.3,1-0.1,1.4c0.2,0.3,0.4,0.7,0.5,1.1c0.2,0.4,0.7,0.6,1.2,0.8
                        c0.7,0.2,1.4,0,2.1-0.1c0.4,0,0.8-0.1,1.2-0.3c0.4-0.3,0.8-0.5,1.2-0.8c0.4-0.2,0.8-0.3,1.2-0.5c0.3-0.1,0.6-0.3,1-0.2
                        c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0.1c0.2,0,0.4,0.2,0.6,0.3c0.2,0,0.4,0.1,0.6,0.1c0.4,0.2,0.8,0.4,1.2,0.6
                        c0.1,0,0.2,0.1,0.3,0.3c0.1,0,0.2,0.1,0.3,0.2c0.3,0.3,0.4,0.8,0.4,1.2c-0.1,0.6,0,1.1,0.1,1.7c0,0.6,0.2,1.1,0.3,1.7
                        c0,0.3,0,0.6,0,0.9c0,0.3,0,0.7,0,1.1c0,0.7,0.1,1.3,0.2,2c0,0.3,0.2,0.6,0.3,0.8c0.2,0.6,0.3,1.1,0.5,1.7
                        c0.1,0.5,0.2,0.9,0.7,1.1c0.4,0.1,0.8,0.1,1.2,0.3c0.5,0.1,1,0.3,1.5,0.3c0.2,0,0.4,0.1,0.6,0.2c0.2,0,0.5,0.1,0.7,0.2
                        c0.2,0.1,0.3,0.3,0.5,0.3c0.2,0.1,0.4,0.3,0.6,0.4c0,0,0,0,0-0.1c0.2,0.2,0.4,0.4,0.6,0.5c0.3,0.2,0.7,0.2,1,0.3
                        c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.5,0.3,0.8,0.3c0.3,0.1,0.5,0.2,0.7,0.3c0.6,0.3,1.3,0.7,2.1,0.7c0.2,0,0.5,0.1,0.7,0
                        c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.3-0.5,0.6-0.6c0.5-0.4,1.1-0.8,1.6-1.2c0.6-0.5,1.1-1.2,1.6-1.8c0.4-0.5,1-1.1,1.7-1.1
                        c0.6,0,1.2,0.6,1.7,1c0.6,0.6,1.4,1.1,1.9,1.8c0.6,0.7,0.8,1.5,1.1,2.4c0.3,0.9,0.6,1.8,1,2.6C609.1,278.4,609.6,279.2,609.6,280z
                        "
                        />
                      </a>
                      <path
                        class="st0"
                        fill="#36393a"
                        d="M810.2,279.3c-0.7,1.5-3.6,7.4-4.9,9.3c-1.3,1.9-4.1,5.8-4.6,7.4c-0.5,1.6-4,8-5.9,9.4
                        c-2,1.4-4.2,2.8-5.4,3.2c-1.2,0.5-1.3,0.9-1.5,1.7c-0.1,0.8-0.6,4.6-2.3,6c-1.7,1.3-5.5,2.1-5.5,4.4c0,2.3,0,3.6-1.4,3.6
                        c-1.3,0.1-3-0.1-4.4,0.8c-1.4,0.9-3.3,2.3-4.6,2.2c-1.2-0.1-2.2,0-3,0.9c-0.7,0.9-3.3,3.6-6.1,3.7c-2.9,0.1-6.4-0.2-7.7,2.4
                        c-1.4,2.5-5.5,9.5-7.4,10.8c-1.9,1.3-3.9,4.2-4,6.4c-0.1,2.2-1.2,7.2-2.5,8.9c-1.4,1.7-2.5,2.9-3,4c-0.5,1.1-2.5,4.3-5.6,5.2
                        c-3,0.9-4.6,2.6-10.5,2.2c0,0-1.1-0.2-1.9,0.1c-0.1-0.5-0.9-0.8-0.9-0.8c-0.3,0-0.6-0.2-0.8-0.3c-0.3-0.1-0.6-0.3-0.9-0.4
                        c-0.6-0.3-1.1-0.7-1.7-0.9c-0.2-0.1-0.4-0.2-0.6-0.2h-0.5c-0.4,0-0.7,0-1.1,0c-0.3,0-0.6-0.1-0.9-0.1c-0.3,0-0.7,0-1,0
                        c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.4-0.5-0.5-0.7c-0.2-0.6,0-1.3-0.5-1.7c-0.3-0.4-0.9-0.5-1.1-1.1c-0.2-0.7-0.5-1.4-0.9-2
                        c-0.2-0.3-0.4-0.7-0.6-1c-0.3-0.3-0.6-0.7-0.9-0.9c-0.3-0.2-0.5-0.5-0.8-0.5c-0.8-0.2-1.8,0.1-2.5,0.6c-0.4,0.3-0.8,0.7-1.3,0.8
                        c-0.5,0-0.9-0.1-1.3-0.4c-0.3-0.3-0.4-0.7-0.5-1.1c-0.1-0.7-0.2-1.4-0.3-2.2c0-0.7,0-1.4,0.1-2.1c0.3-1.7,0.2-3.3,0-5
                        c-0.1-1-0.6-2.2-1.7-2.4c-0.7-0.1-1.4,0.3-2.1,0.4c-0.6,0.2-1,0.2-1.3-0.4c-0.2-0.4-0.2-1-0.6-1.2c-0.4-0.2-0.9,0-1.3,0.1
                        c-1.1,0.3-1.8,1.1-2.4,2c-0.3,0.5-0.6,1-1,1.4c-0.4,0.4-0.9,0.5-1.5,0.5c-0.5,0-1.1,0-1.7,0c-0.5,0-0.9-0.1-1.3-0.3
                        c-0.2-0.1-0.4-0.2-0.7-0.3c-0.2,0-0.3,0-0.5-0.1c-0.9-0.5-1.9-1-2.9-1.3c-0.9-0.3-1.7-0.7-2.6-1c-0.4-0.1-0.8-0.1-1.2-0.2
                        c-0.3,0-0.7,0-1,0c-0.3,0-0.5-0.1-0.8-0.1c-0.4,0-0.8,0-1.2,0c-0.1,0-0.2,0-0.3,0c-0.7,0-1.3,0-1.9,0c-0.5,0-0.9,0-1.4-0.1
                        c-0.4,0-0.8,0-1.1-0.1c-0.4,0-0.8-0.1-1.1-0.3c-0.2,0-0.3-0.1-0.5-0.2c-0.2-0.1-0.3-0.3-0.4-0.5c-0.3-0.3-0.4-0.7-0.6-1
                        c-0.3-0.6-0.6-1.2-0.9-1.8c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.2-0.4-0.3-0.6-0.4c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.3-0.3-0.4-0.4
                        c-0.6-0.6-1.4-1.1-2.2-1.4c-0.3-0.1-0.7-0.2-1-0.3c-0.5-0.1-0.9-0.2-1.4-0.3c-0.2-0.1-0.3-0.2-0.4-0.2c0-0.2,0-0.3,0.1-0.5
                        c0.1-0.3,0.1-0.7,0.2-1.1c0.1-0.5,0.2-0.9,0.3-1.4c0.1-0.5,0.2-0.9,0.3-1.4c0.1-0.5,0.2-1,0.4-1.5c0-0.1,0-0.2,0.1-0.3
                        c0.2-0.5,0.3-1,0.5-1.5c0.1-0.4,0.3-0.7,0.5-1.1c0.1-0.5,0.2-0.9,0.3-1.4c0.3-1.1,0.4-2.3,0.9-3.4c0.1-0.2,0.2-0.4,0.3-0.6
                        c0.1-0.3,0.2-0.5,0.2-0.8c0.1-0.3,0.1-0.7,0.2-1.1c0.1-0.3,0.2-0.6,0.3-1c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.2,0.3-0.5,0.5-0.7
                        c0.2-0.2,0.4-0.3,0.6-0.5c0.3-0.1,0.5-0.2,0.8-0.3c0.2-0.1,0.3-0.2,0.5-0.3c0.3-0.1,0.5-0.2,0.8-0.3c0.2-0.1,0.4-0.3,0.6-0.5
                        c0.5-0.3,1-0.5,1.4-0.9c0.6-0.6,1.2-1.3,1.4-2.1c0.3-1.1-0.3-1.9-0.8-2.8c-0.3-0.4-0.5-0.8-0.9-1.2c-0.4-0.3-0.8-0.5-1.3-0.8
                        c-0.5-0.3-1-0.6-1.4-1.1c-0.1-0.2-0.2-0.4-0.2-0.6c0-1.4-0.1-2.8-0.2-4.2c0-0.4,0-0.8-0.1-1.2c-0.1-1.4-0.1-2.9,0-4.3
                        c0-0.7-0.1-1.3,0-2c0-0.3,0.1-0.7,0.1-1c0.1-0.3,0.3-0.5,0.6-0.6c0.3-0.3,0.8-0.3,1.1-0.5c0.3-0.1,0.6-0.2,0.8-0.3
                        c0.3-0.1,0.5-0.3,0.8-0.3c0.3,0,0.5-0.1,0.7-0.2c0.5-0.2,1-0.6,1.3-1.1c0.3-0.3,0.2-0.7,0.3-1.1c0-0.5,0.1-0.9,0.1-1.4
                        c0-0.2,0-0.4,0.1-0.6c0.2-0.5,0.3-0.9,0.5-1.4c0.5-0.8,0.8-1.7,1-2.7c0.2-0.8,0.9-1,1.6-1.2c0.3-0.1,0.6-0.2,0.9-0.3
                        c0.3-0.1,0.6-0.3,1-0.3c0.8,0,1.7,0,2.6,0c0.7,0,1.4,0.1,2.1-0.3c0.3-0.2,0.5-0.3,0.6-0.7c0.1-0.5,0-1.1,0.1-1.6
                        c0-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.1-0.5,0.1-0.7c-0.1-0.5-0.5-0.8-0.7-1.2c-0.3-0.5-0.5-1-0.6-1.5c-0.2-0.7-0.3-1.4-0.6-2.2
                        c-0.2-0.4-0.5-0.8-0.6-1.3c-0.1-0.3,0-0.7,0-1.1c0-0.3-0.1-0.4,0-0.7c0.2-0.6,0.4-1.2,0.6-1.9c0.2-0.7,0.5-1.4,0.8-2
                        c0.1-0.3,0.4-0.6,0.5-0.9c0.2-0.3,0.4-0.6,0.6-1c0.1-0.5,0.3-1,0.5-1.5c0.1-0.3,0.1-0.6,0.3-0.9c0.1-0.2,0.2-0.5,0.3-0.8
                        c0.3-0.7,0.6-1.4,0.7-2.2c0.1-0.4,0.1-0.8,0.3-1.1c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.3,0.3-0.5,0.4-0.8c0.2-0.4,0.3-0.8,0.4-1.1
                        c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.2,0.1-0.4,0.1-0.6c0.1-0.5,0.3-1,0.3-1.4c0-0.3,0-0.6,0-0.8c0-0.4,0.2-0.8,0.3-1.2
                        c0.3-0.6,0.3-1.3,0.3-2c0-0.3,0.2-0.6,0.3-0.8c0.3-0.4,0.4-0.9,0.6-1.3c0.2-0.5,0.4-1.1,0.6-1.6c0.1-0.2,0.2-0.3,0.4-0.5
                        c0.1-0.1,0.2-0.3,0.3-0.5c0.1-0.2,0.3-0.3,0.5-0.4c0.1-0.1,0.2-0.4,0.3-0.6c0.2-0.3,0.3-0.7,0.3-1.1c0-0.5,0.2-0.9,0.1-1.4
                        c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2-0.1-0.4-0.1-0.7c-0.1-0.5-0.3-0.9-0.4-1.4c-0.1-0.4-0.3-0.8-0.5-1.2c-0.2-0.4-0.5-0.6-0.7-0.9
                        c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.5-0.6c-0.3-0.3-0.4-0.5-0.6-0.8c-0.3-0.5-0.6-1-0.9-1.4
                        c-0.2-0.3-0.5-0.5-0.5-0.8c0-0.2,0.1-0.5,0-0.6c0-0.3,0-0.6-0.1-0.9c0-0.3,0-0.6-0.1-1c0-0.6,0-1.2-0.1-1.8c0-0.6,0-1.2-0.1-1.8
                        c0-0.3,0-0.5,0-0.8c0-0.3-0.1-0.7-0.1-1.1c0,0,0-1.9-0.8-2.4c0.4-0.6,0.9-2,0.2-4c-1.1-3-2.9-8.1-1.5-9.7c1.4-1.7,3.5-2.6,3.5-2.6
                        s9-0.6,9.5,1.5c0.6,2,1.4,4.6,1.4,4.6l7.3,0.1l4.7-4.3c0,0,1.6-1.1,2.5,0.4c1,1.5,3.6,5.8,3.6,5.8l2.1-0.1l1.9-1.6
                        c0,0,2.4,1.9,2.5,1.9c0-0.1,6.2-0.7,6.2-0.7l2.5-1.8l-0.4-5c0,0,1.9-2.4,2-2.4c0.1,0,4.6,1.6,4.6,1.6l4.1,7.2l12.4,0.7l6.7-4.7
                        c0,0,6.3,4.2,5.2,5.7c-1.2,1.4-2.4,2.5-2.4,4.5c0,1.9,0.3,5.1,1.8,5.1c1.5,0,2.5-0.6,3.2,0.1c0.7,0.7,1.8,1.1,1,2.2
                        c-0.8,1.1-1.8,1.7-1.7,3.1c0.2,1.4,0.5,8.6-0.5,9.8c-0.9,1.1-3.9,6.1-2.4,8.3c1.6,2.2,7.4,9.3,8,10c0.7,0.6,2.8,3.9,3.7,2.4
                        c0.9-1.5,1.5-2.5,2.8-2.4c1.2,0.2,10.4-0.3,10.5-0.3s13.4,5.5,13.4,5.5s1,2.5,1.7,3.3c0.7,0.8,5.7,5.8,7,6.4
                        C810.7,277.1,810.9,277.8,810.2,279.3z"
                      />
                      <path
                        class="st2"
                        fill="#36393a"
                        d="M688.6,245.7c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2-0.1-0.4-0.1-0.7c-0.1-0.5-0.3-0.9-0.4-1.4
                        c-0.1-0.4-0.3-0.8-0.5-1.2c-0.2-0.4-0.5-0.6-0.7-0.9c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.5-0.6
                        c-0.3-0.3-0.4-0.5-0.6-0.8c-0.3-0.5-0.6-1-0.9-1.4c-0.2-0.3-0.5-0.5-0.5-0.8c0-0.2,0.1-0.5,0-0.6c0-0.3,0-0.6-0.1-0.9
                        c0-0.3,0-0.6-0.1-1c0-0.6,0-1.2-0.1-1.8c0-0.6,0-1.2-0.1-1.8c0-0.3,0-0.5,0-0.8c0-0.3-0.1-0.7-0.1-1.1c0,0,0-1.9-0.8-2.4
                        c-0.2,0.3-0.4,0.5-0.4,0.5s-13.4,7.8-13.5,7.8c-0.1,0-5.6,1.1-5.6,1.1l-1.9-2.1c0,0-0.3,0.2-1.6,1c-1.2,0.8-1.4,1.7-2,3.4
                        c-0.7,1.7-1.9,2.4-2.1,2.4c-0.3,0-3.1-3.1-4.5-4.1c-1.4-1-2.4-2.9-2.2-4.2c0.2-1.3-5-2.8-6.3-1.7c-1.3,1,0.8,2.4,0.8,3.6
                        c0,1.3-5.2,1.6-7.4,1.8c-2.2,0.2-3.2,2.1-5.5,1.7c-2.4-0.4,0.4-5.7,2.6-6.9c2.2-1.2-3.3-2.7-3.3-2.7l-5.8,0.9l-3.9-3.7
                        c0,0-16.3,3-16.4,3.1c-0.1,0-4.8,4.8-4.8,4.8l-1.7-0.2l-1.9-14l-4.4,0.8v6.1l-4.6,0.9l-3.3,3.2c0,0-0.2,4.4-0.2,4.5
                        c0,0.1-5.9,3-6.9,3.6c0,0,0.8,0.8,2.4,1.7c1.5,0.9,0.8,3.6,0.8,3.6c0,0.5,0,1.2,0,1.7c0,0.3,0,0.6-0.2,0.8
                        c-0.1,0.3-0.2,0.5-0.4,0.6l-0.6,0.6c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.2-0.5,0.4-0.6,0.6c-0.3,0.5-0.6,1-0.9,1.4
                        c-0.8,1-1.4,2-2.2,3c-0.5,0.7-1.1,1.4-1.7,1.9c-0.5,0.5-0.9,1-1.1,1.7c-0.1,0.4-0.3,1-0.1,1.4c0.2,0.3,0.4,0.7,0.6,1.1
                        c0.2,0.4,0.7,0.6,1.2,0.8c0.7,0.2,1.4,0,2.1-0.1c0.4,0,0.8-0.1,1.2-0.3c0.4-0.3,0.8-0.5,1.2-0.8c0.4-0.2,0.8-0.3,1.2-0.5
                        c0.3-0.1,0.6-0.3,1-0.2c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0.1c0.2,0,0.4,0.2,0.6,0.3c0.2,0,0.4,0.1,0.6,0.1
                        c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.3c0.1,0,0.2,0.1,0.3,0.2c0.3,0.3,0.4,0.8,0.4,1.2c-0.1,0.6,0,1.1,0.1,1.7
                        c0,0.6,0.2,1.1,0.3,1.7c0,0.3,0,0.6,0,0.9c0,0.3,0,0.7,0,1.1c0,0.7,0.1,1.3,0.2,2c0,0.3,0.2,0.6,0.3,0.8c0.2,0.6,0.3,1.1,0.5,1.7
                        c0.1,0.5,0.2,0.9,0.7,1.1c0.4,0.1,0.8,0.1,1.2,0.3c0.5,0.1,1,0.3,1.5,0.3c0.2,0,0.4,0.1,0.6,0.2c0.2,0,0.5,0.1,0.7,0.2
                        c0.2,0.1,0.3,0.3,0.6,0.3c0.2,0.1,0.4,0.3,0.6,0.4c0,0,0,0,0-0.1c0.2,0.2,0.4,0.4,0.6,0.5c0.3,0.2,0.7,0.2,1,0.3
                        c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.5,0.3,0.8,0.3c0.3,0.1,0.5,0.2,0.7,0.3c0.6,0.3,1.3,0.7,2.1,0.7c0.2,0,0.5,0.1,0.7,0
                        c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.3-0.5,0.6-0.6c0.5-0.4,1.1-0.8,1.6-1.2c0.6-0.5,1.1-1.2,1.6-1.8c0.4-0.5,1-1.1,1.7-1.1
                        c0.6,0,1.2,0.6,1.7,1c0.6,0.6,1.4,1.1,1.9,1.8c0.6,0.7,0.8,1.5,1.1,2.4c0.3,0.9,0.6,1.8,1,2.6c0.4,0.7,0.8,1.5,0.8,2.4
                        c0,0.6-0.3,1.2-0.7,1.7c-0.1,0.2-0.3,0.5-0.4,0.6c-0.2,0.2-0.4,0.3-0.6,0.6c-0.1,0-0.2,0.1-0.3,0.2c0,0-0.1,0.2-0.2,0.2
                        c-0.5,0.5-0.7,1.2-1.3,1.5c-0.3,0.2-0.6,0.3-0.9,0.5c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.1-0.6,0.3-0.9,0.5c-0.5,0.2-0.8,0.6-1.2,0.8
                        c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.1-0.3,0.2-0.4,0.3c-0.5,0.3-1,0.6-1.4,0.9c-0.4,0.3-0.8,0.6-1.3,0.9c-0.2,0.2-0.3,0.3-0.5,0.4
                        c-0.8,0.4-1.2,1.2-1.8,1.9c-0.3,0.3-0.6,0.8-0.9,1.2c-0.3,0.4-0.5,0.8-0.6,1.2c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2-0.1,0.4-0.1,0.6
                        c0,0.2-0.1,0.3-0.1,0.4c-0.1,0.4-0.2,0.7-0.3,1.1c0,0.1-0.2,0.3-0.3,0.5c-0.3,0.3-0.6,0.7-0.9,1.1c-0.2,0.2-0.4,0.4-0.6,0.6
                        c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.2-0.3,0.6-0.5,0.8c-0.2,0.1-0.3,0.3-0.5,0.5c-0.1,0.2-0.3,0.4-0.4,0.6c-0.3,0.4-0.5,0.8-0.8,1.3
                        c-0.3,0.4-0.6,0.7-0.9,1c-0.4,0.3-0.7,0.5-1,0.9c-0.2,0.3-0.4,0.8-0.4,1.1v1.3c0,0.4,0,0.8,0,1.2c0,1,0,2-0.3,3
                        c0.2,0,0.3,0.2,0.5,0.3c0.2,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.2,0.3,0.4,0.5,0.5c0.2,0.1,0.4,0.2,0.5,0.5
                        c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.3-0.3,0.5-0.3,0.8c-0.1,0.5-0.3,1.6,0.2,1.9c0.2,0.3,0.5,0.2,0.8,0.3c0.5,0.1,0.9,0.5,1.4,0.7
                        c0.5,0.3,1,0.6,1.5,0.9c0.2,0.2,0.5,0.3,0.7,0.5c0.1,0.2,0.2,0.4,0.3,0.6c0.3,0.6,0.3,0.9,0.2,1.5c0,0.5-0.3,1-0.4,1.5
                        c0,0.5-0.2,1.1,0,1.6c0.1,0.5,0.3,1,0.5,1.5c0.3,0.7,0.9,1.2,1.5,1.6c0.6,0.4,1.3,0.7,1.8,1.3c0,0.2,0,0.5,0,0.7
                        c0,0.2-0.2,0.3-0.2,0.5c0,0.1,0,0.3,0,0.5c0,0.4,0,0.8-0.1,1.1c-0.1,0.7-0.3,1.5-0.3,2.2c0,0.4,0,0.7,0,1.1c0,0.3-0.2,0.7-0.3,1
                        c-0.2,0.6-0.1,1.1-0.2,1.7c-0.1,1.5-0.3,2.9-1,4.2c-0.3,0.6-0.2,1.2-0.3,1.8c-0.1,0.5-0.1,1.1-0.2,1.6c-0.1,0.6-0.1,1.2-0.3,1.7
                        c-0.3,0.6-0.4,1.1-0.3,1.8c0,0.3,0,0.6,0,0.9c0,0,0.4,1.9,0.6,2.2c0.3-0.3,0.4-0.7,0.5-0.9c0.1-0.2,0.2-0.4,0.3-0.5
                        c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.3-0.4,0.5-0.6c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.3-0.4,0.5-0.5c0.2-0.2,0.4-0.3,0.5-0.5
                        c0.3-0.3,0.6-0.4,0.8-0.7c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.1,0.6,0,0.9,0c0.8,0.1,1.3,0.5,2,0.9c0.3,0.1,0.5,0.3,0.8,0.4
                        c0.2,0,0.4,0,0.7,0c0.3,0,0.6,0,0.9-0.1c0.4-0.1,0.9-0.2,1.2-0.5c0.4-0.3,0.8-0.6,1.3-0.8c0.2-0.1,0.5-0.2,0.7-0.2
                        c0.3,0,0.6-0.1,0.9-0.1c0.5-0.1,1-0.1,1.5-0.1c0.6,0,1.1-0.1,1.7-0.1c0.5,0,1.1,0.1,1.5,0.5c0.2,0.2,0.4,0.3,0.6,0.4
                        c0.2,0.2,0.4,0.3,0.7,0.5c0.4,0.3,0.8,0.6,1.2,0.9c0.8,0.6,1.9,0.6,2.7,1.1c0.6,0.4,1.5,0.4,2.2,0.5c0.8,0.1,1.5-0.4,2.1-0.8
                        c0.3-0.3,0.6-0.6,0.8-0.9c0.2-0.4,0.6-0.7,0.9-1c0.3-0.3,0.6-0.5,1-0.6c0.4-0.1,0.9,0,1.4,0c0.2,0,0.4,0,0.6,0
                        c0.2,0,0.4,0.1,0.6,0.2c0.4,0.2,0.7,0.4,1.1,0.7c0.3,0.3,0.6,0.5,1.1,0.5c0.4,0,0.8,0,1.3,0c0.4,0,0.9,0,1.3-0.1
                        c0.4-0.1,0.8-0.3,1.1-0.6c0.2-0.1,0.4-0.1,0.7-0.1c0.2,0,0.5-0.2,0.7-0.3c0.8-0.3,1.5-0.5,2.1-1.1c0.7-0.6,1.3-1.1,2-1.6
                        c0.8-0.5,1.6-1,2.2-1.6c0.6-0.5,1.1-1.1,1.6-1.6c1.1-1.2,2.6-2.1,4.2-2.2c1.1,0,2.1-0.2,3.2-0.2c0.5,0,1.1,0,1.6,0.1
                        c0.4,0,0.8,0,1.2,0h1.8c0.3,0,0.5,0.2,0.7,0.3c0.3,0.1,0.5,0.2,0.7,0.3c0.2,0,0.5,0.1,0.7,0.3c0-0.2,0-0.3,0.1-0.5
                        c0.1-0.3,0.1-0.7,0.2-1.1c0.1-0.5,0.2-0.9,0.3-1.4c0.1-0.5,0.2-0.9,0.3-1.4c0.1-0.5,0.2-1,0.4-1.5c0-0.1,0-0.2,0.1-0.3
                        c0.2-0.5,0.3-1,0.5-1.5c0.1-0.4,0.3-0.7,0.5-1.1c0.1-0.5,0.2-0.9,0.3-1.4c0.3-1.1,0.4-2.3,0.9-3.4c0.1-0.2,0.2-0.4,0.3-0.6
                        c0.1-0.3,0.2-0.5,0.2-0.8c0.1-0.3,0.1-0.7,0.2-1.1c0.1-0.3,0.2-0.6,0.3-1c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.2,0.3-0.5,0.5-0.7
                        c0.2-0.2,0.4-0.3,0.6-0.5c0.3-0.1,0.5-0.2,0.8-0.3c0.2-0.1,0.3-0.2,0.5-0.3c0.3-0.1,0.5-0.2,0.8-0.3c0.2-0.1,0.4-0.3,0.6-0.5
                        c0.5-0.3,1-0.5,1.4-0.9c0.6-0.6,1.2-1.3,1.4-2.1c0.3-1.1-0.3-1.9-0.8-2.8c-0.3-0.4-0.5-0.8-0.9-1.2c-0.4-0.3-0.8-0.5-1.3-0.8
                        c-0.5-0.3-1-0.6-1.4-1.1c-0.1-0.2-0.2-0.4-0.2-0.6c0-1.4-0.1-2.8-0.2-4.2c0-0.4,0-0.8-0.1-1.2c-0.1-1.4-0.1-2.9,0-4.3
                        c0-0.7-0.1-1.3,0-2c0-0.3,0.1-0.7,0.1-1c0.1-0.3,0.3-0.5,0.6-0.6c0.3-0.3,0.8-0.3,1.1-0.5c0.3-0.1,0.6-0.2,0.8-0.3
                        c0.3-0.1,0.5-0.3,0.8-0.3c0.3,0,0.5-0.1,0.7-0.2c0.5-0.2,1-0.6,1.3-1.1c0.3-0.3,0.2-0.7,0.3-1.1c0-0.5,0.1-0.9,0.1-1.4
                        c0-0.2,0-0.4,0.1-0.6c0.2-0.5,0.3-0.9,0.5-1.4c0.5-0.8,0.8-1.7,1-2.7c0.2-0.8,0.9-1,1.6-1.2c0.3-0.1,0.6-0.2,0.9-0.3
                        c0.3-0.1,0.6-0.3,1-0.3c0.8,0,1.7,0,2.6,0c0.7,0,1.4,0.1,2.1-0.3c0.3-0.2,0.5-0.3,0.6-0.7c0.1-0.5,0-1.1,0.1-1.6
                        c0-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.1-0.5,0.1-0.7c-0.1-0.5-0.5-0.8-0.7-1.2c-0.3-0.5-0.5-1-0.6-1.5c-0.2-0.7-0.3-1.4-0.6-2.2
                        c-0.2-0.4-0.5-0.8-0.6-1.3c-0.1-0.3,0-0.7,0-1.1c0-0.3-0.1-0.4,0-0.7c0.2-0.6,0.4-1.2,0.6-1.9c0.2-0.7,0.5-1.4,0.8-2
                        c0.1-0.3,0.4-0.6,0.5-0.9c0.2-0.3,0.4-0.6,0.6-1c0.1-0.5,0.3-1,0.5-1.5c0.1-0.3,0.1-0.6,0.3-0.9c0.1-0.2,0.2-0.5,0.3-0.8
                        c0.3-0.7,0.6-1.4,0.7-2.2c0.1-0.4,0.1-0.8,0.3-1.1c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.3,0.3-0.5,0.4-0.8c0.2-0.4,0.3-0.8,0.4-1.1
                        c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.2,0.1-0.4,0.1-0.6c0.1-0.5,0.3-1,0.3-1.4c0-0.3,0-0.6,0-0.8c0-0.4,0.2-0.8,0.3-1.2
                        c0.3-0.6,0.3-1.3,0.3-2c0-0.3,0.2-0.6,0.3-0.8c0.3-0.4,0.4-0.9,0.6-1.3c0.2-0.5,0.4-1.1,0.6-1.6c0.1-0.2,0.2-0.3,0.4-0.5
                        c0.1-0.1,0.2-0.3,0.3-0.5c0.1-0.2,0.3-0.3,0.5-0.4c0.1-0.1,0.2-0.4,0.3-0.6c0.2-0.3,0.3-0.7,0.3-1.1
                        C688.6,246.6,688.7,246.1,688.6,245.7z M613.6,248.2c-0.3,0.3-0.6,0.5-0.8,0.7c-0.6,0.4-1.3,0.9-1.7,1.5c-0.4,0.5-0.6,1.1-1,1.5
                        c-0.5,0.4-1.1,0.6-1.7,0.7c-0.5,0.1-0.9,0-1.4,0c-0.5,0-1,0.2-1.4,0.3c-0.7,0.1-1.4,0.4-2.1,0.3c-0.2,0-0.3-0.1-0.5-0.1
                        c-0.3-0.1-0.7-0.3-1-0.3c-0.1,0-0.2,0-0.3,0c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1,0-0.2-0.1-0.2-0.1c-0.3,0-0.6,0-0.6-0.3
                        c0-0.1-0.1-0.2,0-0.3c0-0.2,0-0.3-0.1-0.3c0-0.3,0-0.5,0-0.7c0-0.2,0.1-0.3,0.1-0.5c0-0.3,0.4-0.3,0.6-0.5
                        c1.1-0.4,2.2-0.6,3.3-0.8c1.3-0.2,2.6-0.3,3.9-0.4c1.1,0,2.2,0,3.2-0.6c0.4-0.2,0.8-0.5,1.3-0.6c0.3-0.1,1.1-0.3,1.2,0.1
                        C613.9,247.9,613.7,248.1,613.6,248.2z"
                      />
                      <a
                        href="javascript:void(0);"
                        class="svg"
                        v-b-tooltip.hover
                        title="Porto"
                      >
                        <path
                          class="st3"
                          fill="#4ab0c3"
                          v-b-modal.modal-no-backdrop
                          @click="modal('Porto', '/en/search?city=Porto&country=portugal&categoryId=3&specialityId=18&language&insuranceId&start=0&inc=20&latitude=41.1579438&longitude=-8.629105299999999', '/en/search?city=Porto&country=portugal&categoryId=5&specialityId=33&language&insuranceId&start=0&inc=20&latitude=41.1579438&longitude=-8.629105299999999', '/en/search?city=Porto&country=portugal&categoryId=4&specialityId=28&language&insuranceId&start=0&inc=20&latitude=41.1579438&longitude=-8.629105299999999','/en/search?city=Porto&country=portugal&categoryId=2&specialityId=&language&insuranceId&start=0&inc=20&latitude=41.1579438&longitude=-8.629105299999999')"
                          d="M597,330.4c0,0.2,0,0.5,0,0.7c0,0.2-0.2,0.3-0.2,0.5c0,0.1,0,0.3,0,0.5c0,0.4,0,0.8-0.1,1.1
                        c-0.1,0.7-0.3,1.5-0.3,2.2c0,0.4,0,0.7,0,1.1c0,0.3-0.2,0.7-0.3,1c-0.2,0.6-0.1,1.1-0.2,1.7c-0.1,1.5-0.3,2.9-1,4.2
                        c-0.3,0.6-0.2,1.2-0.3,1.8c-0.1,0.5-0.1,1.1-0.2,1.6c-0.1,0.6-0.1,1.2-0.3,1.7c-0.3,0.6-0.4,1.1-0.3,1.8c0,0.3,0,0.6,0,0.9
                        c0,0,0.4,1.9,0.6,2.2c-0.1,0.2-0.3,0.3-0.5,0.3c-0.3,0-0.6,0-0.9,0c-0.2,0-0.3-0.1-0.5-0.2c-0.2,0-0.3,0-0.5,0
                        c-0.3,0-0.6-0.1-0.9-0.1c-0.4,0-0.8,0-1.2,0.1c-0.5,0-1,0.1-1.5,0.2c-0.4,0-0.7,0-1.1,0c-0.5,0-0.8-0.2-1.3-0.2
                        c-0.5,0-0.9,0-1.3,0.1c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.2-0.4,0.3-0.6,0.5c-0.1,0.1-0.3,0.3-0.4,0.5c-0.2,0.2-0.4,0.4-0.6,0.5
                        c-0.4,0.3-0.8,0.5-1.2,0.8c-0.4,0.3-0.8,0.6-1.2,0.9c-0.2,0.1-0.4,0.2-0.6,0.3c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0-0.2,0-0.2,0l0,0
                        c-0.3,0.1-0.6,0.1-0.8,0.1c-0.4,0.1-0.7,0.1-1.1,0.1c-0.4,0-0.8-0.1-1.1-0.1c-0.3,0-0.7,0-1-0.1c-0.3-0.1-0.7-0.3-1-0.5
                        c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.3-0.4-0.6-0.5c-0.5-0.3-1.1-0.3-1.6-0.3c-0.3,0-0.7-0.1-1,0c-0.2,0-0.5,0.1-0.6,0.2
                        c-0.2,0.1-0.4,0.3-0.6,0.4c-0.3,0.2-0.5,0.5-0.8,0.8c-0.1,0.1-0.2,0.2-0.3,0.3l-0.4,0.4c-0.2,0.2-0.4,0.4-0.7,0.5
                        c-0.2,0.1-0.3,0.1-0.5,0.2c-0.2,0-0.3,0.1-0.4,0.3c-0.2,0.1-0.5,0.1-0.7,0.1c-0.3,0-0.5,0-0.8-0.1c-0.2,0-0.4-0.1-0.6-0.2
                        c-0.2-0.1-0.5-0.2-0.6-0.3c-0.1-0.1-0.3-0.2-0.4-0.2c-0.3-0.1-0.7,0-0.9-0.1c-0.3-0.1-0.7-0.2-1-0.3c-0.6-0.2-1.2-0.3-1.9-0.3
                        c-0.2,0-0.5,0.1-0.7,0.2c-0.2,0-0.4,0.2-0.6,0.3c-0.5,0.3-0.9,0.8-1.4,1.2c-0.2,0.2-0.5,0.4-0.7,0.6c-0.2,0.2-0.3,0.4-0.5,0.6
                        c-0.3,0.3-0.7,0.6-0.9,1c0,0.1-0.1,0.2-0.2,0.2l-0.4,0.4c-0.3,0.2-0.6,0.3-0.8,0.5c-0.4,0.3-1,0.5-1.5,0.5c-0.2,0-0.5,0-0.7-0.1
                        c-0.2-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3-0.1-0.5-0.2c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.1,0c-0.3-0.1-0.3-0.4-0.6-0.5
                        c-0.3-0.1-0.6-0.3-0.9-0.4c-0.3,0-0.5-0.1-0.8-0.2c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0-0.8,0.1c-0.3,0.1-0.5,0.2-0.7,0.3
                        c-0.6,0.3-0.9,0.6-1.3,1c-0.4,0.4-0.8,0.6-1.3,0.9c-0.2,0.2-0.5,0.3-0.7,0.4c-0.2,0.1-0.4,0.2-0.6,0.3c-0.5,0.2-1.1,0.4-1.6,0.5
                        c-0.6,0.2-1.1,0.3-1.7,0.4c-0.3,0-0.5,0-0.8,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0
                        c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.3,0c-0.3,0-0.6,0-0.8,0.3c-0.2,0.2-0.3,0.5-0.4,0.8c-0.1,0.2-0.1,0.4,0,0.7
                        c0.1,0.3,0.3,0.5,0.4,0.8c0.4,0.7,0.6,1.5,0.9,2.2c0.1,0.4,0.7,1.6,0.1,1.8c-0.3,0.1-0.5,0-0.8,0c-0.3,0-0.6,0.2-0.8,0.3
                        c-0.8,0.3-1.5-0.4-2-0.8c-0.5-0.5-1.2-0.8-1.9-1.1c-0.6-0.3-1.2-0.3-1.6-0.9c-0.2-0.3-0.1-0.5,0.1-0.6c0.2-0.1,0.4-0.3,0.4-0.5
                        c-0.1-0.3-0.3-0.5-0.5-0.7c-0.2-0.2-0.4-0.5-0.6-0.7c-0.5-0.4-1.2-0.4-1.6-0.9c-0.3-0.4-0.6-1.1-1.3-0.8c-0.2,0.1-0.3,0.3-0.5,0.5
                        c-0.3,0.2-0.5,0.1-0.8,0.2c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.3,0.7c0.1,0.3,0.1,0.5,0.1,0.8c0,0.3,0,0.6,0,0.8
                        c0,0.3,0,0.6-0.1,0.8c-0.1,0.3-0.4,0.3-0.7,0.3c-0.3,0-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.2-0.5,0c-0.3-0.1-0.4-0.2-0.6,0
                        c-0.2,0.2-0.4,0.3-0.6,0.2c-0.3-0.1-0.5-0.4-0.6-0.6c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.3-0.1-0.6,0c-0.3,0.1-0.8,0-1.1-0.1
                        c-0.3-0.1-0.3-0.5-0.3-0.8c0-0.3,0.1-0.5,0.2-0.7c0.1-0.3,0-0.7-0.1-1c-0.2-0.4-0.7-0.4-1-0.2c-0.2,0.1-0.2,0.3-0.3,0.4
                        c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.7,0-1.1-0.2c-0.3-0.1-0.6,0-0.8,0.1c-0.3,0.2-0.4,0.5-0.5,0.8c-0.1,0.1-0.2,0.3-0.2,0.4
                        c0,0.1-0.1,0.3-0.1,0.5c-0.1,0.4-0.3,0.5-0.6,0.6c-0.3,0-0.7,0.1-0.8,0.4c0,0.1,0,0.3-0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        c-0.3,0.2-0.6,0.3-0.9,0.3c-0.3,0.1-0.6,0.1-0.9,0c-0.3-0.1-0.6-0.3-1-0.1c-0.7,0.3-1.6,0.1-2.2-0.2c-0.3-0.1-0.6-0.3-0.8-0.4
                        c-0.3-0.2-0.6-0.3-0.8-0.5c-0.3-0.2-0.5-0.3-0.8-0.3c-0.1,0-0.1,0-0.3,0c-0.2,0.2-0.3,0.6-0.5,0.7c-0.4,0.2-0.9,0-1.3,0
                        c-0.3-0.1-0.5-0.2-0.8-0.3c0.1-2.5,0.2-8.1-0.3-9.9c-0.5-2.1-2-7.5-1.2-8.7c0.8-1.1,2.1-1.4,0-1.7c-2.1-0.4-2.2-0.3-2.6-2.3
                        c-0.4-2-2.2-8.4-2.4-9.6c-0.2-1.2-0.9-6.6-1.4-8c-0.5-1.4-1.8-9.7-1.9-11.2c-0.1-1.5-1.9-6-3-7.4c-1-1.5-2.2-4.1-1.9-5.8
                        c0.3-1.7,3.4-4.6,1.8-6.9c-1.3-1.8-2.5-5.3-3.3-7.5c1.7,0.4,3.5,0.9,4.8,2.1c0.6,0.5,1.1,1.3,1.6,1.9c0.3,0.4,0.8,0.6,1.3,0.8
                        c0.4,0.2,0.8,0.4,1.1,0.6c0.3,0.2,0.8,0.3,1.1,0.6c0.6,0.2,1.1,0.5,1.5,0.8c0.7,0.6,1.6,0.8,2.4,1.2c0.8,0.4,1.6,0.8,2.4,1.2
                        c0.7,0.4,1.3,0.8,1.9,1.2c0.6,0.3,1.4,0.5,2,0.8c0.7,0.3,1.4,0.6,2.1,0.9c0.6,0.3,0.9,0.7,1.2,1.2c0.3,0.5,0.7,1.1,0.9,1.7
                        c0.2,0.6,0.1,1.3,0.1,1.9c0,0.7-0.3,1.1-0.8,1.6c-0.4,0.5-0.5,1-0.3,1.6c0.3,0.6,0.8,1,1.2,1.6c0.3,0.6,0.8,1.3,1.4,1.5
                        c0.6,0.3,1.3,0,1.9-0.2c0.7-0.1,1.4,0,2-0.2c0.3-0.1,0.4-0.3,0.6-0.3c0.3-0.1,0.7-0.1,1.1-0.2c0.3-0.1,0.5-0.2,0.7-0.3
                        c0.2-0.1,0.4-0.1,0.6-0.2c0.3-0.1,0.5-0.3,0.7-0.4c0.9-0.4,1.7-0.7,2.7-0.7c0.8,0,1.5,0.3,2.3,0.3c0.4,0,0.8-0.1,1.3-0.1h1.4
                        c0.4,0,0.9,0,1.3-0.2c0.5-0.2,0.9-0.4,1.4-0.5c0.2-0.1,0.4-0.1,0.6-0.1c0.3,0,0.5-0.2,0.8-0.3c0.4-0.1,0.8-0.2,1.2-0.3
                        c0.8-0.2,1.6-0.2,2.5-0.2c0.5,0,0.9,0,1.4,0.3c0.4,0.2,0.8,0.4,1.1,0.7c0.5,0.5,1.1,0.8,1.8,1.1c0.5,0.3,1.1,0.3,1.7,0.4
                        c0.8,0.1,1.6,0.4,2.5,0.4c0.4,0,0.8,0,1.2-0.1c0.4,0,0.8,0,1.3-0.1c0.7-0.1,1.2-0.5,1.9-0.4c0.7,0.1,1.4-0.3,2.1-0.4
                        c0.5-0.1,1-0.3,1.4-0.6c0.3-0.3,0.4-0.7,0.7-1.1c0.4-0.5,0.8-1,1.3-1.4c0.4-0.4,0.8-0.9,1.1-1.3c0.3-0.5,0.7-0.9,1.2-1.3
                        c0.3-0.3,0.8-0.5,1.1-0.7c0.6-0.3,1.1-0.3,1.7-0.4c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.7,0c0.6,0.3,1.1,0.7,1.5,1
                        c0.5,0.4,0.9,0.9,1.4,1.3c0.4,0.3,0.8,0.6,1.2,1c0.5,0.4,0.9,1,1.4,1.4c0.2,0.3,0.5,0.5,0.8,0.7c0.3,0.2,0.5,0.5,0.7,0.8
                        c0.2,0.3,0.5,0.4,0.7,0.6c0.2,0.2,0.4,0.5,0.5,0.7c0.3,0.4,0.7,0.6,1.1,1c0.4,0.3,0.8,0.4,1.3,0.5c1.1,0.1,2.1,0,3.2,0.1
                        c1.1,0.1,1.7,1.3,2.5,1.9c0.9,0.8,1.7,1.7,2.7,2.4c0.4,0.3,0.9,0.6,1.4,1c0.3,0.2,0.5,0.5,0.8,0.4c0.3-0.1,0.5-0.3,0.7-0.5
                        c0.6-0.7,1.2-1.4,1.8-2c0.3-0.3,0.6-0.4,0.8-0.6c0.3-0.2,0.6-0.5,0.9-0.8c1.1-0.9,2.1-1.8,2.8-3c0.2-0.3,0.5-0.5,0.8-0.3
                        c0.2,0,0.3,0.2,0.5,0.3c0.2,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.2,0.3,0.4,0.5,0.5c0.2,0.1,0.4,0.2,0.5,0.5
                        c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.3-0.3,0.5-0.3,0.8c-0.1,0.5-0.3,1.6,0.2,1.9c0.2,0.3,0.5,0.2,0.8,0.3c0.5,0.1,0.9,0.5,1.4,0.7
                        c0.5,0.3,1,0.6,1.5,0.9c0.2,0.2,0.5,0.3,0.7,0.5c0.1,0.2,0.2,0.4,0.3,0.6c0.3,0.6,0.3,0.9,0.2,1.5c0,0.5-0.3,1-0.4,1.5
                        c0,0.5-0.2,1.1,0,1.6c0.1,0.5,0.3,1,0.5,1.5c0.3,0.7,0.9,1.2,1.5,1.6C595.9,329.5,596.6,329.8,597,330.4z"
                        />
                      </a>
                      <path
                        class="st3"
                        fill="#36393a"
                        d="M739.1,486.3c0,1,0,4.4-1.9,5c-1.9,0.5-4.7,0.8-5.1,2.3c-0.5,1.4-3.4,8.6-3.4,8.6s-4.9-0.6-7.6,0.2
                        c-2-1.9-5.6-5.4-6.2-6.1c-0.8-1.1-1.8-0.9-1.8-0.9s-6-0.4-8.1-0.3c-2.1,0.1-3-1-3.9-1.6c-0.8-0.6-3.3-2.1-4.1-2.3
                        c-0.7-0.2-2.2,1.5-2.8,1.8c-0.6,0.3-1,1.5-1.3,2.3c-0.3,0.8-1,0.7-1.8,1c-0.8,0.3-5,0.7-6.2,0.6c-1.3-0.1-6.3,0.9-7.2,0.8
                        c-0.9-0.1-7.9-1.2-8.8-1.1c-0.9,0.1,1.1-2.9,2-4.1c0.9-1.2,2.5-4.5,3.4-5.9c0.9-1.4,1-9.3,1.1-10.3c0.1-1-1.6-2.1-2.8-3
                        c-1.2-0.9-4.1-1-4.9-0.9c-0.8,0-1.9,2.5-1.4,3.2c0.5,0.7,0,1.1-0.9,1.4c-1,0.3-3.1-1.4-3.8-1.9c-0.7-0.6-3.8-0.3-4.7-0.6
                        c-0.9-0.3-3.9,0-4.6,0c-0.8,0-1.2,0.3-1.3,0.5c-0.1,0.2-0.8,0.2-0.9,0c-0.1-0.3-0.9-0.3-1.8-0.1c-0.9,0.2-2.7,6.5-3,7.3
                        c-0.3,0.8-1.9,4.6-2.1,5.4c-0.2,0.8-1.3,0.7-1.6,0.8c-0.3,0.1-0.6,0.2-0.9,0.4c-0.4,0.1-0.9,0.3-1.7,0.4c-0.8,0.1-1.9,0.7-2.6,0.8
                        c-0.7,0.1-2.7-0.4-3.7,0c-1,0.4-1.9-0.3-3-0.3c-1.1,0-2.4,1.7-3,2.3c-0.6,0.6-3.3,3.6-4.4,4.4c-1.2,0.8-4.6,4.7-5,5.2
                        c-0.4,0.6-1.2,0.8-1.9,0.6c-0.8-0.2-5-0.2-6.6-0.2c-0.3,0-0.6-0.2-1-0.5c-1.5-1.2-3.4-4.5-3.5-4.6c0-0.3,4.5-6.6,5.8-8.5
                        c1.3-1.9,0.3-4.1,0-5.1c-0.3-1.1-0.9-4.4-1.1-5.7c-0.1-1.3-5.1-4.7-6-5.1c-0.8-0.4-0.6-2.8-0.6-3.7c0-1,2.2-1.4,3.6-1.4
                        c1.3,0,1.6-0.6,1.7-2.2c0.1-1.7-3.6-4.7-3.6-4.7c1.4-1.3,2.2-2.3,4.2-2.4c2.3-0.1,10.7-0.5,12.6-2c1.9-1.5,4.1-3.3,6.8-3.8
                        c2.8-0.4,9.1-2.1,9.2-3.9c0.1-1.9,0-3.6,0.9-4.7c0.9-1.1,0.3-1.5,0.8-2.2c0.5-0.7,1.7-2.3,1.7-4.2c0-1.9,0.6-5.8,0.8-7
                        c0.2-1.1,0.6-3.2-0.7-3.3c-1.2-0.1-5.8-0.8-5.8-1.5c0-0.7,1.8-8.6,1.8-8.6s0.4-1.1-0.6-1.7c-1-0.6-5.6-4.2-5.6-4.2
                        s-0.6-0.4-0.1-1.3c0.5-0.9,8.2-14.2,8.2-14.2l11.6,13l5-8.3c0,0,0.8-1-0.3-2.2c-1.1-1.1-4-3.6-2.9-4.7c1.1-1.1,2.3-2.2,4-2.2
                        c1.7,0,2.5-0.1,3.4-0.8c1-0.7,6.5-3.7,6.4-6.4c-0.2-2.6-0.3-3.7-1.1-4.5c-0.7-0.8-2.9-3-1.9-4.3c1-1.3,5.3-7.1,5.8-9.8
                        c0.5-2.7,1.8-5.9,2.1-6.8c0.3-0.9,1.9-4.5,2-5.8c0.1-1.4-0.1-3.9-0.1-3.9c0.4,0,0.8-0.1,1.2,0c0.3,0,0.6,0.1,0.8,0.1
                        c0.3,0,0.7,0,1,0c0.4,0,0.8,0,1.2,0.2c0.9,0.3,1.7,0.7,2.6,1c1,0.3,1.9,0.8,2.9,1.3c0.2,0.1,0.3,0.1,0.5,0.1
                        c0.3,0,0.5,0.2,0.7,0.3c0.4,0.2,0.8,0.3,1.3,0.3c0.6,0,1.1,0,1.7,0c0.6,0,1.1-0.1,1.5-0.5c0.4-0.4,0.7-0.9,1-1.4
                        c0.6-0.9,1.3-1.7,2.4-2c0.4-0.1,0.9-0.3,1.3-0.1c0.4,0.3,0.5,0.8,0.6,1.2c0.3,0.6,0.7,0.6,1.3,0.4c0.7-0.2,1.4-0.5,2.1-0.4
                        c1.1,0.2,1.6,1.4,1.7,2.4c0.2,1.7,0.2,3.3,0,5c-0.1,0.7-0.2,1.4-0.1,2.1c0.1,0.7,0.2,1.4,0.3,2.2c0.1,0.4,0.1,0.8,0.5,1.1
                        c0.3,0.3,0.8,0.5,1.3,0.4c0.5-0.1,0.9-0.4,1.3-0.8c0.7-0.5,1.6-0.8,2.5-0.6c0.3,0,0.6,0.3,0.8,0.5c0.3,0.3,0.6,0.6,0.9,0.9
                        c0.2,0.3,0.4,0.6,0.6,1c0.4,0.7,0.7,1.3,0.9,2c0.2,0.6,0.8,0.6,1.1,1.1c0.4,0.5,0.3,1.2,0.5,1.7c0.1,0.3,0.3,0.5,0.5,0.7
                        c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.7,0,1,0c0.3,0,0.6,0.1,0.9,0.1c0.3,0,0.7,0,1.1,0h0.5c0.2,0,0.4,0.1,0.6,0.2
                        c0.6,0.2,1.1,0.6,1.7,0.9c0.3,0.1,0.6,0.3,0.9,0.4c0.3,0.1,0.6,0.3,0.8,0.3c0,0,0.8,0.3,0.9,0.8c-0.5,0.2-0.8,0.6-0.7,1.4
                        c0.3,2,1.4,5.5,2.5,6c1.1,0.4,2.4,1.4,3.2,2.5c0.8,1.2,2.9,3.1,2.8,4.5c0,1.5,0.9,5.3,1.4,6c0.6,0.7,3.6,5.9,5.8,7.6
                        c0,0,0.6,3.1-0.5,3.6c-1.1,0.4-1.3,0.3-1.1,1.5c0.1,1.2,2,8.8,1.9,10.9c-0.2,2.1-1.4,7.5-0.8,9c0.7,1.5,2.9,6.5,2.7,9
                        c-0.2,2.5,0.3,6.1-0.8,7.9c-1.1,1.8-5.6,9.1-3.1,9.4c2.5,0.3,3.8,0.5,3.9,2.5c0,2,0.6,6.3,0.6,6.3s-7.5,8.6-6.7,10.7
                        c0.8,2.2,5.3,10.8,6.6,11.8C737.2,483.7,739.1,485.3,739.1,486.3z"
                      />
                      <path
                        class="st4"
                        fill="#36393a"
                        d="M672.2,352.8c0,1.3-1.7,5-2,5.8c-0.3,0.9-1.6,4.1-2.1,6.8c-0.5,2.7-4.8,8.5-5.8,9.8c-1,1.4,1.2,3.5,1.9,4.3
                        c0.8,0.8,0.9,1.9,1.1,4.5c0.1,2.7-5.4,5.7-6.4,6.4c-1,0.7-1.7,0.8-3.4,0.8c-1.7,0-2.9,1.1-4,2.2c-1.1,1.1,1.7,3.5,2.9,4.7
                        c1.2,1.2,0.3,2.2,0.3,2.2l-5,8.3l-11.6-13c0,0-7.7,13.3-8.2,14.2c-0.5,0.9,0.1,1.3,0.1,1.3s4.6,3.6,5.6,4.2
                        c1.1,0.6,0.6,1.7,0.6,1.7s-1.7,7.9-1.8,8.6c0,0.6,4.6,1.4,5.8,1.5c1.3,0.1,0.9,2.2,0.7,3.3c-0.2,1.2-0.8,5.1-0.8,7
                        c0,1.9-1.2,3.6-1.7,4.2c-0.5,0.7,0.1,1.1-0.8,2.2c-0.8,1.1-0.8,2.8-0.9,4.7c-0.1,1.8-6.4,3.5-9.2,3.9c-2.8,0.5-4.9,2.2-6.8,3.8
                        c-1.9,1.5-10.3,1.9-12.6,2c-2.1,0.1-2.9,1.1-4.2,2.4c-0.2,0.2-0.3,0.3-0.5,0.5c-1.6,1.6-5.4,5.7-6.5,6.7c-1.1,1.1-5.8,3.6-7.5,4.4
                        c-1.6,0.7-4.7,2.8-5.3,3.4c-0.5,0.6-3.3,3-5.2,4.6c-1.9,1.7-5.2,5-6.8,6.4c-1.6,1.4-5.7,0.4-7-0.1c-1.3-0.5-3.1-0.5-4.9-0.5
                        c-1.7,0-6,2.1-6.9,2.6c-0.8,0.5-1.5-0.3-1.9-0.8c-0.4-0.5-2.7-1.2-3.9-1.9c-1.1-0.8-4.1-2.1-5-2.6c-0.9-0.6-2.6-3.6-3.2-4.7
                        c-0.6-1.1-2.5-0.9-3.9-0.8c-0.1,0-0.2,0-0.3,0.1c0,0-0.6-6.4,0.4-7.5c1-1,5-5.1,4.6-5.8c-0.4-0.7-3.3-3.7-3.3-4.6
                        c0.1-0.9,0.3-1.7,1.1-1.9c0.8-0.1,10.3-1.6,10.3-2.6c-0.1-1,0.2-2.8-0.8-3.5c-1.1-0.7-2.8-2.7-3.1-4.4c-0.4-1.8-0.8-3.6-1.2-4.5
                        c-0.4-0.9-1.2-1.8-0.4-2.2c0.8-0.4,5.2-1.8,5-3.1c-0.2-1.4,0.4-2.2-0.7-3.1c-1.1-0.8-2.5-1.2-2.5-1.7c0-0.5-0.6-2.7-0.9-3.8
                        c-0.3-1.1-2.1-5.3-2.2-6.1c0-0.9-0.3-4.4,0.6-5.5c1-1.2,4.6-6.5,5.1-7.3c0.5-0.8,1.5-2.1,2.7-3.2c1.1-1.1,3-1.9,2.1-3.5
                        c-0.9-1.6-3-3.9-1.9-5c1-1.1,2.3-2.3,2.3-2.3s0.7-0.2,1.6,0.8c0.9,1,3.4,3.6,4,3.2c0.6-0.4,2.2-2.2,2.8-1.3
                        c0.6,0.9,4.1,5.8,5.8,5.2c1.7-0.6,2.3-3.6,2.3-3.8c0-0.2,0.7-3.3,1.1-4c0.5-0.8,0.8-1.7,0.1-1.9c-0.7-0.2-1.7-0.8-2.1-1.8
                        c-0.5-1.1-2.8-8-2.8-8s-0.6-0.9,0.1-1.6c0.7-0.7,2.7-3.1,4.2-3.7c1.4-0.5,3.6-1.1,3.1-2c-0.5-0.8-3.6-5.5-3.6-5.5l-5.5,3.7
                        c0,0-1,0.8-2.3,0c-1.3-0.7-4.3-1.9-5-2.1c-0.7-0.2-2.4-0.6-2.9-1.5c-0.6-1-0.8-1.9-1.2-2.5c-0.4-0.6-0.4-0.8-0.2-1.4
                        c0.3-0.5,2.7-4.3,2.1-5.7c0.1,0,0.2-0.1,0.2-0.2c0.3-0.4,0.6-0.7,0.9-1c0.2-0.2,0.3-0.4,0.5-0.6c0.2-0.2,0.5-0.3,0.7-0.6
                        c0.4-0.5,0.9-0.9,1.4-1.2c0.2-0.1,0.4-0.3,0.6-0.3c0.2-0.1,0.5-0.2,0.7-0.2c0.6,0,1.3,0.1,1.9,0.3c0.3,0.1,0.7,0.2,1,0.3
                        c0.3,0.1,0.6,0,0.9,0.1c0.1,0,0.3,0.1,0.4,0.2c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6,0.1,0.8,0.1
                        c0.2,0,0.5,0,0.7-0.1c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.2c0.3-0.1,0.5-0.3,0.7-0.5l0.4-0.4c0.1-0.1,0.3-0.1,0.3-0.3
                        c0.3-0.3,0.5-0.6,0.8-0.8c0.2-0.2,0.4-0.3,0.6-0.4c0.2-0.1,0.4-0.2,0.6-0.2c0.3,0,0.7,0,1,0c0.5,0,1.1,0,1.6,0.3
                        c0.3,0.1,0.4,0.3,0.6,0.5c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.7,0.4,1,0.5c0.3,0.1,0.7,0.1,1,0.1c0.4,0,0.8,0.1,1.1,0.1
                        c0.4,0,0.7,0,1.1-0.1c0.3,0,0.6,0,0.8-0.1l0,0c0,0,0.1,0,0.2,0c0.1,0,0.2-0.1,0.3-0.2c0.2-0.1,0.4-0.2,0.6-0.3
                        c0.4-0.3,0.8-0.7,1.2-0.9c0.4-0.3,0.8-0.5,1.2-0.8c0.2-0.2,0.4-0.4,0.6-0.5c0.2-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.4-0.3,0.6-0.5
                        c0.1-0.1,0.1-0.2,0.3-0.3c0.4-0.2,0.8-0.1,1.3-0.1c0.4,0,0.8,0.2,1.3,0.2c0.4,0,0.7,0,1.1,0c0.5,0,1-0.1,1.5-0.2
                        c0.4,0,0.8-0.1,1.2-0.1c0.3,0,0.6,0,0.9,0.1c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.5,0.2c0.3,0,0.6,0,0.9,0c0.3,0,0.4-0.1,0.5-0.3
                        c0.3-0.3,0.4-0.7,0.5-0.9c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.3-0.4,0.5-0.6c0.1-0.1,0.2-0.2,0.3-0.3
                        c0.2-0.2,0.3-0.4,0.5-0.5c0.2-0.2,0.4-0.3,0.5-0.5c0.3-0.3,0.6-0.4,0.8-0.7c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.1,0.6,0,0.9,0
                        c0.8,0.1,1.3,0.5,2,0.9c0.3,0.1,0.5,0.3,0.8,0.4c0.2,0,0.4,0,0.7,0c0.3,0,0.6,0,0.9-0.1c0.4-0.1,0.9-0.2,1.2-0.5
                        c0.4-0.3,0.8-0.6,1.3-0.8c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.6-0.1,0.9-0.1c0.5-0.1,1-0.1,1.5-0.1c0.6,0,1.1-0.1,1.7-0.1
                        c0.5,0,1.1,0.1,1.5,0.5c0.2,0.2,0.4,0.3,0.6,0.4c0.2,0.2,0.4,0.3,0.7,0.5c0.4,0.3,0.8,0.6,1.2,0.9c0.8,0.6,1.9,0.6,2.7,1.1
                        c0.6,0.4,1.5,0.4,2.2,0.5c0.8,0.1,1.5-0.4,2.1-0.8c0.3-0.3,0.6-0.6,0.8-0.9c0.2-0.4,0.6-0.7,0.9-1c0.3-0.3,0.6-0.5,1-0.6
                        c0.4-0.1,0.9,0,1.4,0c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0.1,0.6,0.2c0.4,0.2,0.7,0.4,1.1,0.7c0.3,0.3,0.6,0.5,1.1,0.5
                        c0.4,0,0.8,0,1.3,0c0.4,0,0.9,0,1.3-0.1c0.4-0.1,0.8-0.3,1.1-0.6c0.2-0.1,0.4-0.1,0.7-0.1c0.2,0,0.5-0.2,0.7-0.3
                        c0.8-0.3,1.5-0.5,2.1-1.1c0.7-0.6,1.3-1.1,2-1.6c0.8-0.5,1.6-1,2.2-1.6c0.6-0.5,1.1-1.1,1.6-1.6c1.1-1.2,2.6-2.1,4.2-2.2
                        c1.1,0,2.1-0.2,3.2-0.2c0.5,0,1.1,0,1.6,0.1c0.4,0,0.8,0,1.2,0h1.8c0.3,0,0.5,0.2,0.7,0.3c0.3,0.1,0.5,0.2,0.7,0.3
                        c0.2,0,0.5,0.1,0.7,0.3c0.1,0,0.2,0.1,0.4,0.2c0.4,0.2,0.9,0.2,1.4,0.3c0.3,0.1,0.7,0.1,1,0.3c0.8,0.3,1.6,0.8,2.2,1.4
                        c0.1,0.1,0.3,0.3,0.4,0.4c0.1,0.1,0.3,0.3,0.4,0.5c0.2,0.2,0.4,0.3,0.6,0.4c0.1,0.1,0.2,0.3,0.3,0.5c0.3,0.6,0.6,1.2,0.9,1.8
                        c0.2,0.3,0.3,0.7,0.6,1c0.1,0.2,0.3,0.3,0.4,0.5c0.2,0.1,0.3,0.1,0.5,0.2c0.3,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.7,0.1,1.1,0.1
                        c0.5,0,0.9,0.1,1.4,0.1c0.6,0,1.3,0,1.9,0c0.1,0,0.2,0,0.3,0C672.1,349,672.3,351.4,672.2,352.8z"
                      />
                      <path
                        class="st2"
                        fill="#36393a"
                        d="M727.6,545.1c0.9-1.7-0.3-2.7-0.3-2.7s-5.4-6.2-6.4-7.5c-1-1.3-1-2.8-1.3-3.9c-0.3-1.1-8.7-4.8-8.7-4.8
                        s-0.1-8.5-0.1-12.6c0-4.1,7-9.2,8.9-10.7c0.3-0.3,0.7-0.4,1.2-0.6c-2-1.9-5.6-5.4-6.2-6.1c-0.8-1.1-1.8-0.9-1.8-0.9
                        s-6-0.4-8.1-0.3c-2.1,0.1-3-1-3.9-1.6c-0.8-0.5-3.3-2.1-4.1-2.3c-0.7-0.2-2.2,1.5-2.8,1.8c-0.5,0.3-1,1.5-1.3,2.3
                        c-0.3,0.8-1,0.7-1.8,1c-0.8,0.3-5,0.7-6.2,0.6c-1.3-0.1-6.3,0.9-7.2,0.8c-0.9-0.1-7.9-1.2-8.8-1.1c-0.9,0.1,1.1-2.9,2-4.1
                        c0.9-1.2,2.5-4.5,3.4-5.9c0.9-1.4,1-9.3,1.1-10.3c0.1-1-1.6-2.1-2.7-3c-1.2-0.9-4.1-1-4.9-0.9c-0.8,0-1.9,2.5-1.4,3.2
                        c0.5,0.7,0,1.1-0.9,1.4c-1,0.3-3.1-1.4-3.8-1.9c-0.7-0.5-3.8-0.3-4.7-0.5c-0.9-0.3-3.9,0-4.6,0c-0.8,0-1.2,0.3-1.4,0.5
                        c-0.1,0.2-0.8,0.2-0.8,0c-0.1-0.3-0.9-0.3-1.8-0.1c-0.9,0.2-2.7,6.5-3,7.3c-0.3,0.8-1.9,4.6-2.1,5.4c-0.2,0.8-1.3,0.7-1.6,0.8
                        c-0.3,0.1-0.6,0.2-0.9,0.4c-0.4,0.1-0.9,0.3-1.7,0.4c-0.8,0.1-1.9,0.7-2.6,0.8c-0.7,0.1-2.7-0.4-3.7,0c-1,0.4-1.9-0.3-3-0.3
                        c-1.1,0-2.4,1.7-3,2.3c-0.6,0.6-3.3,3.6-4.4,4.4c-1.2,0.8-4.6,4.7-5,5.2c-0.4,0.6-1.2,0.8-1.9,0.6c-0.8-0.2-5-0.2-6.6-0.2
                        c-0.3,0-0.6-0.2-1-0.5c0,0-1.1,2.8-1.4,3.5c-0.3,0.8-0.1,2-1.1,3.4c-1,1.4,0.2,2.5,0.2,2.5s12.7,12.7,13.3,13.3
                        c0.6,0.5-3.1,3-4.7,4c-1.6,1-2.5,2.6-3.8,4.6c-1.3,2-2.9,2-4.5,2.5c-1.6,0.6-4.4-0.9-6.1-1.3c-1.7-0.5-5,1.9-5.9,2.6
                        c-0.7,0.6,0.7,4.2,1.3,5.5c0.2,0,0.3,0,0.5,0c0.9,0,1.8,0,2.7,0c0.5,0,1,0,1.5,0c0.3,0,0.8,0.1,0.9,0.4c0.2,0.7-1.7,0.9-2.1,1
                        c-0.9,0.1-1.8,0.2-2.7,0.6c-1,0.4-2,0.8-3,1.3c-0.3,0.2-0.6,0.4-0.9,0.7c-0.3,0.2-0.5,0.5-0.8,0.8c-0.6,0.5-1.4,0.9-2,1.4
                        c-0.4,0.3-0.8,0.6-1.1,0.9c-0.5,0.5-1.2,0.8-1.9,1c-1.3,0.3-2.7,0.6-3.8,1.5c-0.5,0.4-1,0.6-1.6,0.8c-0.3,0.1-0.6,0.2-0.9,0.2
                        c-0.2,0-0.4,0-0.5,0.1c-0.3,0-0.6,0.3-0.9,0.3c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.4,0.2-0.6,0.2
                        c-0.3,0.1-0.7,0.1-1,0.3c-0.5,0.2-1,0.7-1.5,1c-0.3,0.2-0.5,0.4-0.8,0.5c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.2-0.5,0.5-0.7,0.7
                        c-0.3,0.2-0.5,0.4-0.8,0.7c-0.5,0.5-0.9,1-1.2,1.6c-0.3,0.6-0.7,1.1-1.1,1.6c-0.2,0.3-0.4,0.6-0.6,0.8c-0.2,0.3-0.4,0.6-0.6,1
                        c-0.3,0.5-0.8,0.9-1.2,1.3c-0.3,0.3-0.6,0.5-0.8,0.8c-0.3,0.3-0.5,0.5-0.7,0.8c-0.2,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.5,0.6-0.7,1
                        c-0.1,0.1-0.2,0.3-0.3,0.4c-0.2,0.1-0.3,0.3-0.5,0.4c-0.6,0.6-1.3,1.1-1.9,1.7c-0.3,0.3-0.7,0.6-1,1c-0.4,0.4-0.8,0.8-1.4,1.1
                        c-0.7,0.3-1.4,0.5-2.1,0.7c-0.5,0.2-1,0.3-1.6,0.3c-0.5,0-1,0-1.4-0.1c-0.5-0.1-1-0.3-1.4-0.3c-1.1,0-1.7,1-1.9,1.9
                        c-0.2,0.7-0.4,1.4-0.5,2c-0.2,0.6-0.3,1.3-0.3,1.9c0,0.6,0.1,1.1,0.2,1.7c0,0.5,0,0.9,0.3,1.4c0.3,0.5,0.8,0.9,1.2,1.2
                        c0.6,0.4,1.1,0.8,1.8,0.9c0.5,0.1,1.2,0,1.7,0.2c0.6,0.3,0.8,0.8,1,1.4c0.2,0.7,0.2,1.5,0.2,2.2c0,0.5-0.1,1.2,0.2,1.7
                        c0.2,0.5,0.6,0.8,1,1.1c0.5,0.5,0.4,1.1,0.2,1.7c0,0.2-0.1,0.4-0.2,0.6c0,0.1-0.2,0.3-0.2,0.4c-0.2,0.4-0.1,0.8-0.3,1.1
                        c-0.1,0.2-0.2,0.2-0.3,0.4c-0.1,0.3-0.2,0.6-0.3,0.8c-0.1,0.3-0.2,0.6-0.3,1c-0.1,0.6-0.2,1.3-0.2,2c-0.1,0.5-0.1,1-0.1,1.5
                        c0.2,1.9,0.5,3.7,1,5.5v0c1.1,0.6,2.7,1.4,3.7,1.5c1.9,0.3,4,1.1,4.8,1.4c0.8,0.3,1,0.7,3.1,0c2.1-0.7,3.4-0.5,3.4-1.9
                        c0-1.4,0.6-8.1,0.8-10.8c0.3-2.8,0-7.2,1.2-7c1.3,0.2,3.3,0.3,5.4,0.2c2-0.1,7.4,0,7.6,0.5c0.1,0.6,0.4,1.3,0.7,1.4
                        c0.3,0.1,0.9,1.3,0.5,2.7c-0.4,1.4-0.6,4.2-0.7,4.5c0,0.3-0.3,1.1,0.8,1.2c1.1,0.1,3.7,0.8,5,0.9c1.3,0.1,2.9,0.8,3.3,1.5
                        c0.4,0.7,4.7,6.8,5.6,8.2c0.9,1.4,4.5,7.8,6.3,7.8c1.1,0,1.7,0.5,2.6,0.5c0.6,0,1.3-0.2,2.3-0.8c2.5-1.7,3.8-1.7,4.4-3
                        c0.7-1.4,5.1-7.1,6.8-7.3c1.7-0.2,3,1.6,5,1.4c2-0.3,7-2.4,8.3-3.4c1-0.8,5.4-2.3,8.4-0.8c0.4-0.1,1-0.2,1.4-0.3
                        c1.4-0.2,2.8,1,3.2,1.9c0.5,0.8,1.2,0.5,1.5,0c0.3-0.5,2.1-0.5,3.2,0.1c1.1,0.6,4.9,0.8,6.8,0.8c1.9,0,6.9,0.6,9.1,1.2
                        c2.2,0.6,5.8-0.6,7.3-2c1.6-1.3,2.9,0.7,4.7,0.4c1.8-0.3,2.9,0,4.1,0.4c1.1,0.4,1.9,0.4,3.1-0.8c1.2-1.2,5.3,1.6,7.2,1.7
                        c2,0,7.4-1.2,9.2-1.6c1.9-0.5,6-4.9,6.3-5.3c0.3-0.5,2.1-3.6,2.8-5.6c0.7-2.1,2.3-8.7,2.8-9.9c0.5-1.3,1.1-4.4,0.8-7.3
                        c-0.4-3,0.5-3.9,2-5.4c1.5-1.5,4.9-5.1,5.1-6.1c0.2-1-2.9-5.6-3.2-7c-0.3-1.4,2.1-3,3.6-4.1c1.6-1.1,0.3-4.3-0.5-5.8
                        C725.7,547.6,726.6,546.7,727.6,545.1z M690.8,549.4c-0.5,1.1-1.2,2.1-2,3c-0.4,0.4-0.8,0.9-1.1,1.4c-0.4,0.5-0.6,1.1-0.9,1.7
                        c-0.1,0.2-0.3,0.7-0.7,0.7c-0.2,0-0.4-0.3-0.4-0.5c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.5
                        c0-0.1,0.1-0.3,0.1-0.4c0.1-0.5,0.2-0.9,0.3-1.4c0.1-0.4-0.2-0.7-0.4-0.9c-0.2-0.2-0.4-0.3-0.6-0.4c-0.2-0.1-0.4-0.2-0.5-0.4
                        c-0.1-0.3,0.1-0.6,0.3-0.8c0.3-0.4,0.5-0.8,0.8-1.1c0.3-0.4,0.5-0.8,0.7-1.3c0.1-0.3,0.2-0.5,0.2-0.8c0.1-0.2,0.2-0.4,0.3-0.6
                        c0.2-0.3,0.6,0,0.8,0.2c0.2,0.3,0.6,0.8,1,0.7c0.2,0,0.3-0.2,0.4-0.4c0.2-0.2,0.3-0.4,0.4-0.7c0.2-0.3,0.5-0.6,0.8-0.3
                        c0.4,0.3,0.6,1,0.7,1.5C691.3,548.1,691.1,548.8,690.8,549.4z"
                      />
                      <path
                        class="st3"
                        fill="#36393a"
                        d="M709.8,733.5l0.3-4.1l10-12.8l-1.2-3.5l1.1-3.2c0,0-3.2-3.1-3.3-3.1c-0.1,0,0.4-3.2,0.3-3.2
                        c-0.1,0-5.4-5.4-7.7-6.3c-2.4-0.9-9.3,2.5-9.3,2.5s-2.9-2.5-2.9-2.6c0-0.1-0.4-8.5-0.4-8.5c-3.3-0.4-4.8-2.5-8.6-4.4
                        c-3.7-1.9-5.5-9.1-5.5-9.1l1.2-5.3c0,0-5.7-5.9-7.7-7.7c-1.9-1.8-3.1-6.2-3.5-8.3c-0.3-2.1,2.6-4.3,3.2-5.5c0.6-1.2-0.3-2.2-1-2.8
                        c-0.7-0.6,0-1.2,0.4-2.5c0.4-1.3-0.5-3.6-0.7-4.6c-0.2-1-1-1.6-2.2-1.7c-1.3-0.2-4.8-3.6-5.7-4.3c-0.9-0.7-1.6-1.7-2.3-3.3
                        c-0.7-1.6-2.7-3.7-7.2-6.2c-4.6-2.5-4.4-5.7-4.9-7.3c-0.5-1.6-5.4-8.2-6.7-9.9c-0.8-1.1-0.4-1.6,0.4-1.8c-3-1.5-7.4-0.1-8.4,0.8
                        c-1.3,1-6.3,3.2-8.3,3.4c-2,0.2-3.3-1.6-5-1.4c-1.7,0.2-6.1,5.9-6.8,7.3c-0.6,1.3-1.9,1.3-4.4,3c-1,0.7-1.7,0.9-2.3,0.8l-9.1,8.2
                        c0,0-11.6-8.8-12.8-9.2c-1.2-0.4-6.9,11.5-7.6,13c-0.8,1.4-0.6,2.1-0.9,3.1c-0.3,1,2.9,4.9,3.4,5.7c0.6,0.8,1.5,2,2.1,2.8
                        c0.5,0.8-0.3,3.6-0.4,5c-0.1,1.4-7.7,3.3-8.5,3.9c-0.8,0.5-1.7,7.7-2,9.1c-0.3,1.4-6.1,3.5-8.6,4.2c-2.5,0.7-4.1,2.7-5,3.7
                        c-0.8,1.1-6.9,8.7-8.3,10.3c-1.4,1.6-5.9,1.1-7.4,1.3c-1.5,0.2-10.5,11-10.5,11l5.7,8c0,0,9.2,12,10.1,13.1
                        c0.1,0.2,0.2,0.4,0.3,0.6c1.3-0.8,3.2-2.8,4.4-3.9c1.2-1.2,7,0,8.4,0c1.3,0,0.4,3.4,0.3,4.8c0,1.4,2.3,4.6,2.3,4.6
                        s3.3-6.4,3.7-7.7c0.4-1.3,1.4-0.1,2.2,0.8c0.9,0.9,5.5,4,7.1,4.9c1.6,1,1.4,2,1.2,4.9c-0.2,2.9,5.3-0.3,7.1-0.6
                        c1.7-0.4,1,0.1,3.2,0.9c2.2,0.8,2.6,4,3,5.1c0.5,1.1,1.1,1,1.9,1.3c0.8,0.3,4.1,1.1,6.3,1.8c2.2,0.7,3,0.6,5.8,0.8
                        c2.7,0.2,4.3-3,5.4-4.1c1.1-1.1,1.9-0.1,2.4,0.7c0.5,0.8,2.3,1.7,3,1.7c0.7,0,0-2.4,0.6-3.1c0.6-0.7,1.7,0.3,2.4,0.6
                        c0.7,0.3,1.7,1.7,3.9,1.9c2.3,0.1,2.8-2.6,3-3.8c0.2-1.3,4.9-1.7,7.2-2c2.3-0.3,2.7-1.9,3.4-3.2c0.7-1.3-1.3-3.2-2-4.1
                        c-0.6-0.9,1.9-1.8,3.2-2.4c1.4-0.6,4.2,1.7,5.3,2.3c1.1,0.6,2.9,7,3.3,8.3c0.4,1.3,2,3.5,3.9,6.5c1.9,3,1.6,3.3,2.1,5
                        c0.5,1.7,0.7,4.4,0.6,7c-0.1,2.7,1,4.1,3.5,4.4c2.5,0.3,4,1.9,5.5,4.2c1.4,2.3,8-1.4,9.7-2.8c1.8-1.4,4.4-1.4,6.5-1.4
                        c2.1,0,2.9,3.9,2.9,3.9l-6.8,6.5l5,5h0c1.2-0.7,3.1-1.1,5.8-2.2c4.4-1.8,5.7-6.4,7.1-9.1c1.4-2.7,5.6-2.5,7.8-2.5
                        c2.2,0,2.9-0.8,3.5-2.4c0.7-1.6,3-2.7,4.1-3.7c1.1-1-2.3-3.9-2.5-4.7C707.8,734.2,709.8,733.5,709.8,733.5z M577.3,677.9
                        c-0.1,0.5-0.3,1-0.4,1.5c-0.1,0.3-0.3,0.7-0.4,1.1c-0.2,0.4-0.5,0.8-0.8,1.2c-0.3,0.3-0.6,0.6-0.8,1c-0.2,0.4-0.3,0.9-0.6,1.4
                        c-0.3,0.3-0.5,0.7-0.7,1.1c-0.3,0.6-0.7,1.1-1,1.7c-0.1,0.3-0.3,0.6-0.4,0.8c-0.1,0.1-0.3,0.3-0.3,0.5c0,0.3,0.2,0.6,0.4,0.9
                        c0.1,0.2,0.3,0.3,0.3,0.5c0,0.2-0.2,0.3-0.3,0.5c-0.2,0.1-0.3,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.5,0.2c-0.3,0.1-0.6,0.3-0.9,0.5
                        c-0.2,0.2-0.5,0.3-0.7,0.5c-0.3,0.4-0.6,0.8-0.8,1.2c-0.3,0.3-0.5,0.7-0.7,1l-0.4,0.5c-0.1,0.2-0.3,0.3-0.5,0.5
                        c-0.3,0.5-0.6,0.9-0.8,1.4c-0.1,0.3-0.3,0.5-0.4,0.8c-0.2,0.3-0.3,0.6-0.5,0.9c-0.3,0.4-0.6,0.8-0.9,1.1c-0.2,0.2-0.4,0.3-0.5,0.4
                        c-0.1,0.2-0.4,0.4-0.5,0.6c-0.2,0.2-0.3,0.3-0.4,0.6c-0.1,0.3-0.1,0.5-0.2,0.8c0.2,0,0.2,0.3,0.3,0.4c0.2,0.2,0.4,0.3,0.5,0.5
                        c0.1,0.3,0.1,0.4-0.1,0.6c-0.3,0.3-0.6,0.4-0.9,0.3c-0.4,0-0.8-0.1-1.2-0.2h-0.1c-0.3-0.2-0.7-0.4-1-0.6c-0.1-0.1-0.3-0.2-0.5-0.3
                        c-0.3-0.1-0.4-0.3-0.5-0.6c-0.2-0.3-0.2-0.8,0-1c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.3-0.3,0.4-0.4c0.3-0.3,0.6-0.7,0.9-1.1
                        c0.3-0.4,0.8-0.7,1.2-1c0.6-0.5,1-1.3,1.3-1.9c0.2-0.4,0.4-0.6,0.7-0.9c0.3-0.3,0.6-0.8,0.9-1.1c0.3-0.3,0.5-0.8,0.7-1.1
                        c0.1-0.3,0.4-0.5,0.6-0.7c0.3-0.5,0.6-1,0.9-1.5c0.3-0.6,0.9-1,1.3-1.5c0.3-0.4,0.5-0.8,0.8-1.2c0.2-0.3,0.5-0.5,0.7-0.8
                        c0.6-0.6,1-1.2,1.4-1.9c0.3-0.4,0.6-0.8,0.8-1.3c0.2-0.4,0.4-0.8,0.7-1.1c0.2-0.3,0.4-0.5,0.5-0.8c0.3-0.3,0.5-0.6,0.7-0.9
                        c0.2-0.3,0.3-0.5,0.5-0.7c0.2-0.1,0.3-0.2,0.5-0.4c0.5-0.5,0.7-1.1,1-1.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.3,0.3-0.5
                        c0.2-0.1,0.5-0.2,0.5,0.1C577.4,677.5,577.4,677.8,577.3,677.9z M604.8,692.5c-1.1-0.3-2.4,0-3.1,0.9c-0.4,0.5-0.6,1.1-1,1.6
                        c-0.3,0.4-0.6,0.8-0.9,1.2c-0.3,0.3-0.6,0.6-0.8,1c-0.4,0.6-0.8,1.1-1.4,1.5c-0.6,0.5-1.1,1-1.6,1.6c-0.3,0.4-0.8,1.1-0.6,1.6
                        c0.2,0.5,0.8,0.4,1.2,0.4c0.6,0,1.3,0,1.9,0c0.7,0,1.4,0,2.2,0c0-0.2,0.4-0.2,0.5-0.2c0.3,0,0.6,0,0.8,0c0.4,0,0.8,0,1.1,0.1
                        c0.6,0,1.1,0.2,1.6,0.3c0.5,0,0.9,0.2,1.4,0.3c0.4,0.1,0.8,0.2,0.9,0.6c0,0.5-0.4,0.7-0.8,0.7c-0.5,0-1-0.3-1.5-0.4
                        c-0.5-0.2-1.1-0.3-1.7-0.3c-0.6,0-1.3,0-1.9,0c-0.6,0-1.3,0-1.9,0c-0.7,0-1.4,0-2.2,0c-0.7-0.1-1.3,0-1.9,0.3
                        c-0.5,0.3-1.1,0.6-1.6,0.9c-0.6,0.3-1.1,0.6-1.6,1.1c-0.2,0.2-0.5,0.4-0.7,0.6c-0.2,0.1-0.4,0.2-0.6,0.3c-0.8,0.6-1.3,1.3-1.9,2.1
                        c-0.5,0.7-1.1,1.4-1.6,2c-0.6,0.7-1.1,1.4-1.9,1.9c-0.5,0.4-1.3,1.1-2,1.1c-0.3,0-0.6-0.2-0.9-0.3c-0.3-0.2-0.6-0.3-0.8-0.6
                        c-0.4-0.6,0.3-1.3,0.6-1.7c0.6-0.5,1.3-0.9,1.9-1.4c0.3-0.3,0.6-0.6,0.8-1.1c0.1-0.3,0.2-0.7,0.3-1.1c0.2-0.7,0.7-1.2,1.4-1.4
                        c0.3-0.1,0.5-0.3,0.8-0.5c0.4-0.3,0.8-0.7,1.2-1c0.3-0.3,0.8-0.3,1.2-0.4c0.2-0.1,0.5-0.3,0.7-0.4c0.2-0.1,0.4-0.2,0.5-0.3
                        c0.1-0.2,0.2-0.3,0.3-0.5c0.3-0.3,0.5-0.8,0.7-1.1c0.1-0.2,0.3-0.4,0.4-0.5c0.1-0.2,0.3-0.3,0.4-0.5c0.7-0.7,1.6-1.2,2.2-2
                        c0.6-0.8,1.1-1.6,1.7-2.4c0.3-0.4,0.5-0.6,0.9-0.9c0.2-0.2,0.4-0.3,0.6-0.5c0.5-0.4,0.8-0.9,1.1-1.4c0.1-0.2,0.3-0.3,0.4-0.4
                        c0.2-0.2,0.3-0.5,0.4-0.7c0.3-0.5,0.5-1.1,0.7-1.6c0.4-1.1,0.7-2.2,1.2-3.2c0.5-0.9,1.1-1.7,1.6-2.6c0.5-0.8,1-1.7,1.4-2.7
                        c0.4-0.8,0.9-1.8,1.6-2.5c0.2-0.1,0.5-0.3,0.7-0.3c0.2,0.1,0.3,0.3,0.3,0.5c0,0.9-0.5,1.7-0.9,2.5c-0.4,0.8-0.8,1.7-1.1,2.5
                        c-0.3,0.7-0.5,1.5-0.8,2.2c-0.3,0.6-0.8,1.2-1,1.8c-0.2,0.4-0.3,1,0,1.4c0.3,0.4,0.8,0.4,1.2,0.4c0.7,0,1.3,0.1,1.9,0.4
                        c0.4,0.2,1.1,0.8,1.1,1.3C607.8,694,605.3,692.7,604.8,692.5z M695.1,714.3c-0.7,0.5-1.2,1.1-1.7,1.8c-0.4,0.5-0.8,0.8-1.5,0.9
                        c-0.5,0.1-1.4,0.2-1.8-0.4c-0.4-0.7,0.2-1.5,0.7-1.9c0.2-0.2,0.6-0.3,0.6-0.6c0-0.3-0.2-0.5-0.4-0.7c-0.6-0.4-1.3-0.5-1.9-0.3
                        c-0.8,0.3-1.6,0.5-2.3,0.9c-0.3,0.2-0.7,0.4-1,0.6c-0.2,0.1-0.6,0.2-0.9,0.1c-0.3-0.1-0.4-0.3-0.5-0.5c-0.3-0.4-0.5-0.7-0.4-1.2
                        c0.1-0.8,1.1-1.3,0.8-2.1c-0.2-0.7-0.9-0.5-1.4-0.5c-0.5,0-0.9,0-1.4,0c-0.7,0-1.9,0.2-2.2-0.6c-0.3-0.8-0.1-2,0.8-2.4
                        c0.9-0.3,2-0.3,3-0.2c1,0.2,1.9,0.7,2.8,1c1,0.3,1.4-1,2.2-0.9c0.5,0.1,0.9,0.6,1.2,1c0.3,0.4,0.6,0.8,1.1,1.1
                        c1,0.4,1.9-0.4,2.9-0.4c1.2-0.1,1,1.4,0.8,2.2c0.6,0.2,1.4,0.5,1.6,1.1C696.6,713.2,695.7,713.9,695.1,714.3z"
                      />
                      <a
                        href="javascript:void(0);"
                        class="svg"
                        v-b-tooltip.hover
                        title="Santarém"
                      >
                        <path
                        stroke = "#ED1C24"
                          @click="
                            modal(
                              'Santarém',
                              '/en/search?city=Santarém&country=Portugal&categoryId=3&specialityId=18&language&insuranceId&start=0&inc=20&latitude=39.2366552&longitude=-8.686017399999999',
                              '/en/search?city=Santarém&country=Portugal&categoryId=5&specialityId=33&language&insuranceId&start=0&inc=20&latitude=39.2366552&longitude=-8.686017399999999',
                              '/en/search?city=Santarém&country=portugal&categoryId=4&specialityId=28&language&insuranceId&start=0&inc=20&latitude=39.2366552&longitude=-8.686017399999999',
                              '/en/search?city=Santarém&country=portugal&categoryId=2&specialityId&language&insuranceId&start=0&inc=20&latitude=39.2366552&longitude=-8.686017399999999'
                            )
                          "
                          class="st4"
                          fill="#4ab0c3"
                          d="M610.6,617.8l-9.1,8.2c0,0-11.6-8.8-12.8-9.2c-1.2-0.4-6.9,11.5-7.6,13c-0.8,1.4-0.6,2.1-0.9,3.1
                        c-0.3,1,2.9,4.9,3.4,5.7c0.6,0.8,1.5,2,2.1,2.8c0.5,0.8-0.3,3.6-0.4,5c-0.1,1.4-7.7,3.3-8.5,3.9c-0.8,0.5-1.7,7.7-2,9.1
                        c-0.3,1.4-6.1,3.5-8.6,4.2c-2.5,0.7-4.1,2.7-5,3.7c-0.8,1.1-6.9,8.7-8.3,10.3c-1.4,1.6-5.9,1.1-7.4,1.3c-1.5,0.2-10.5,11-10.5,11
                        l5.7,8c0,0,9.2,12,10.1,13.1c0.1,0.2,0.2,0.4,0.3,0.6c0.1,1.1-1.3,2.7-1.7,3.5c-0.4,0.9-4.6,9.7-4.9,10.2
                        c-0.3,0.5-1.2,1.9,1.1,2.8c2.4,0.8,9.3,4,10.3,4.1c1.1,0.1,0.7,0.3,0.9,1.3c0.2,0.9-0.4,1.8-0.9,2.6c-0.5,0.9,5.1,9,5.5,9.7
                        c0.4,0.7,0.5,1.2-0.3,1.6c-0.8,0.4-2.2,2.2-2.9,2.7c-0.7,0.5-4.7-6.1-6-8c-1.3-1.9-9-5.6-10.4-6.3c-1.4-0.8-10.2-0.1-11.6,0
                        c-1.4,0-1.8,0.5-2.2,0.9c-0.5,0.5-2.8,0.5-3.6,0.8c-0.9,0.4-2.5,1-3.1,1.2c-0.6,0.1,0.7,2.6,1.1,3.4c0.4,0.8-0.2,1.5-1,2.2
                        c-0.8,0.7-1.1,1.5-1.4,2.4c-0.3,0.8-6.4-2.5-7-2.9c-0.6-0.3-0.6,2.3-0.6,3.3c0,1-3.3,0.8-5.5,1.1c-2.2,0.3-4.5-0.4-5.4-0.5
                        c-0.8,0,1.3-5.1,2.2-7c0.9-1.9-2.1-1.4-3.4-1.2c-1.3,0.3-1.6,2.1-2.1,3.8c-0.4,1.7-9.2-5.1-10-5.7c-0.8-0.6-1.6,0-1.9,0.4
                        c-0.3,0.4-2.4,1.2-3.5,1.3c-1.1,0.1-1.1,4.5-1.4,6c-0.3,1.5-1,5.8-1,7c0,1.2-2,1.8-3,2.7c-1,0.8-1.6,0-1.6,0s-4.1-3.3-5-4.1
                        c-0.9-0.8-5.1,1.7-6.9,2.4c-1.7,0.6-2.9,0-3.3-0.3c-0.5-0.3-2.9-1-4.1-1.3c-0.5-0.1-1.4-0.4-2.2-0.7c0.6-0.6,1-1.3,1-1.9
                        c0-1.4-1.9-3.7-1.7-4.7c0.2-1,1.3-1.6,1.3-2.5c0-0.9,0.7-3.4-0.3-2c-1,1.4-2.5,2-2.4,0.2c0.1-1.8,0.2-3.8,0.8-4.5
                        c0.7-0.7,1.1-1.4,0.3-2.5c-0.8-1.1-1.9-3.8-1.8-5c0.1-1.2,1.5-4.7,2.2-6.4c0.8-1.7,3.9-5.6,4.4-6.9c0.5-1.3,2.7-4.3,1.6-4.6
                        c-0.2-0.1-0.4-0.2-0.5-0.3c3.9-4.3,9.1-2.7,9.1-2.7s6.3-4.6,8-6.1c1.7-1.5-3.1-6.6-3.8-7.2c-0.7-0.7-2.7-3.1-4.3-5.2
                        c-1.6-2.2-7.2-9-7.7-9.7c-0.5-0.7,8-0.9,9.4-0.9c1.4,0.1,2.1-2.6,2.6-3.8c0.5-1.1-2.8-4.2-3.3-4.8c-0.5-0.6-1.5-0.8-2.8-0.8
                        c-1.3,0-7.7-0.3-9.1-0.4c-1.3-0.2-3-0.1-4.5-0.3c-1.5-0.2-0.7-2.7-0.3-5c0.4-2.2-2-2.5-3.5-2.8c-1-0.1-2.1-1.9-2.7-3
                        c2.1-0.2,3.9-1.1,3.8-2.6c0-2.2-0.4-8.3,0.4-8.8c0.8-0.4,2-2,3.4-2.3c1.5-0.3,4.4-1.9,5-3c0.6-1.1,3.1-7.9,4.2-8.3
                        c1.1-0.4,5.2-2.4,7.1-2.6c1.8-0.2,7.7-1.3,9.4-1.3c1.7,0,3.5,0.4,3.9-1.2c0.4-1.6,1.2-5.5,1.9-5.5c0.7,0,4.8,0.9,5,0
                        c0.2-1,1.4-5.3,0.4-7.6c-1-2.3-5.1-7.8-2.4-9.6c2.7-1.7,6-3.5,6.6-5.2c0.6-1.7,0.9-2.5,1.2-3c0.4-0.6,0.8-1.7,0-2.7
                        c-0.8-1.1-2.9-4.1-3-5.7c0-1.6-0.2-5.7-0.2-5.7s-0.3-1.2,1.5-1.7c1.8-0.6,9.7-2.2,11.1-3.1c1.4-0.9,0.8-2.1,3.9-3
                        c3.2-0.9,3.6-1.8,5-2.2c1.3-0.5,3.8-2.3,4.4-0.5c0.7,1.8,3.4,12.6,3.4,12.6s12.5-2.4,14.6-2.5c2.1-0.1,3.9,0.2,4-1.1
                        c0.2-1.3,0.3-2.8,1.2-3c0.3,0,1.6-0.1,2.7-0.3c0,0.1-0.1,0.2-0.1,0.3c-0.3,0.8-0.2,1.7-0.2,2.5c0,0.4,0,0.8,0.1,1.2
                        c0.1,0.6,0.1,1.2,0.1,1.7c0,0.5,0.3,0.9,0.5,1.4c0.1,0.2,0.2,0.3,0.3,0.6c0,0.2,0.2,0.5,0.3,0.6c0.4,0.5,0.9,0.8,1.4,1.3
                        c0.3,0.3,0.7,0.5,1.1,0.6c0.5,0.1,0.8,0.4,1.2,0.6c0.3,0.2,0.7,0.3,1,0.4c0.4,0.1,0.8,0.2,1,0.6c0.2,0.4,0.3,0.8,0.3,1.1
                        c0.1,0.5,0.2,0.9,0.3,1.4c0.1,1,0.2,1.9,0.1,3c-0.1,1.7-1,3.3-1.1,5.1c0,0.5-0.1,0.9-0.1,1.4c0,0.5,0.1,0.9,0.1,1.4
                        c-0.1,0.8-0.8,1.4-1.4,1.9c-0.6,0.4-1.1,1-1.8,1.4c-0.3,0.2-0.6,0.4-0.8,0.5c-0.3,0.2-0.6,0.3-0.9,0.3c-0.3,0-0.6,0-0.8,0.2
                        c-0.4,0.3,0,1.1,0,1.5c0.1,0.4,0,0.9,0,1.4c0,0.9-0.6,1.6-1.1,2.3c-0.5,0.6-0.9,1.4-1.1,2.2c-0.1,0.3-0.2,0.6-0.3,1
                        c-0.2,0.5-0.3,1-0.6,1.4c-0.2,0.5-0.2,0.8-0.2,1.3c0,0.3,0,0.5,0,0.8c0,0.2,0,0.2,0.1,0.4c0,0.3-0.1-0.1-0.1,0
                        c0,0.3,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.6,0.4,0.8c0.6,0.6,1.3-0.2,1.7-0.6c0.5-0.5,1-1,1.4-1.6c0.5-0.6,1.1-1.1,1.6-1.8
                        c0.2-0.3,0.3-0.6,0.5-0.8c0.1-0.3,0.2-0.5,0.3-0.8c0.1-0.2,0.2-0.3,0.3-0.4c0.4-0.4,0.5-1,0.7-1.5c0.2-0.3,0.3-0.7,0.4-1
                        c0.1-0.4,0.4-0.7,0.6-1c0.2-0.3,0.3-0.7,0.4-1c0.3-0.7,0.5-1.5,0.9-2.1c0.2-0.2,0.4-0.5,0.6-0.7c0.3-0.3,0.6-0.2,1-0.3
                        c0.7,0,1.5,0,2.2-0.2c0.3-0.1,0.9-0.1,1.1-0.4c0.1-0.3-0.1-0.7-0.2-1c0-0.1,0-0.1,0-0.2c1.1,0.6,2.7,1.4,3.7,1.5
                        c1.9,0.3,4,1.1,4.8,1.4c0.8,0.3,1,0.7,3.1,0c2.1-0.7,3.4-0.5,3.4-1.9c0-1.4,0.6-8.1,0.8-10.8c0.3-2.8,0-7.2,1.2-7
                        c1.3,0.2,3.3,0.3,5.4,0.2c2-0.1,7.4,0,7.6,0.5c0.1,0.6,0.4,1.3,0.7,1.4c0.3,0.1,0.9,1.3,0.5,2.7c-0.4,1.4-0.6,4.2-0.7,4.5
                        c0,0.3-0.3,1.1,0.8,1.2c1.1,0.1,3.7,0.8,5,0.9c1.3,0.1,2.9,0.8,3.3,1.5c0.4,0.7,4.7,6.8,5.6,8.2c0.9,1.4,4.5,7.8,6.3,7.8
                        C609.1,617.3,609.7,617.7,610.6,617.8z"
                        />
                      </a>
                      <path
                        class="st1"
                        fill="#36393a"
                        d="M695.8,842.3c-0.3-1.5-5-5.3-5-5.3c-0.1,0-10.2-14.1-11.9-15.9c-1.7-1.8-4.7-7.8-5.1-9
                        c-0.5-1.1-2.1-1.1-3.2-1c-1.1,0.1-0.6-2.2-0.7-3.4c-0.1-1.3,1.3-1.8,2.5-2.9c1.1-1.1,0.2-3.4,0.1-4.7c0-1.3,0-1.8,0.4-3.1
                        c0.5-1.3,0-4.4,0-6.8c0-2.5,1.9-5,4.2-7.3c2.4-2.3,1.2-11.4,1.1-13.6c-0.2-2.2,1.1-5.1,2.2-7.6c0.4-0.9,0.9-1.5,1.6-1.9l-5-5
                        l6.8-6.5c0,0-0.8-3.9-2.9-3.9c-2.1,0-4.7,0-6.5,1.4c-1.8,1.4-8.3,5.1-9.7,2.8c-1.5-2.3-3-3.9-5.5-4.2c-2.5-0.3-3.6-1.7-3.5-4.4
                        c0-2.6-0.1-5.3-0.6-7c-0.6-1.7-0.2-2-2.1-5c-1.9-3-3.5-5.2-3.9-6.5c-0.5-1.3-2.2-7.7-3.3-8.3c-1.1-0.6-4-2.9-5.3-2.3
                        c-1.3,0.6-3.8,1.5-3.2,2.4c0.7,0.9,2.7,2.8,2,4.1c-0.7,1.3-1.1,3-3.4,3.2c-2.3,0.3-6.9,0.7-7.2,2c-0.2,1.2-0.7,3.9-3,3.8
                        c-2.3-0.2-3.2-1.5-3.9-1.9c-0.7-0.3-1.8-1.3-2.4-0.6c-0.6,0.7,0.1,3.1-0.6,3.1c-0.6,0-2.4-0.9-3-1.7c-0.5-0.8-1.3-1.8-2.4-0.7
                        c-1.1,1.1-2.6,4.4-5.4,4.1c-2.8-0.2-3.6-0.1-5.8-0.8c-2.2-0.7-5.4-1.4-6.3-1.8c-0.8-0.3-1.4-0.3-1.9-1.3c-0.4-1.1-0.8-4.4-3-5.1
                        c-2.2-0.8-1.5-1.3-3.2-0.9c-1.7,0.3-7.2,3.5-7.1,0.6c0.1-2.9,0.4-3.9-1.2-4.9c-1.6-0.9-6.2-4-7.1-4.9c-0.8-0.9-1.8-2.1-2.2-0.8
                        c-0.4,1.3-3.7,7.7-3.7,7.7s-2.4-3.2-2.3-4.6c0.1-1.4,1-4.7-0.3-4.8c-1.4,0-7.2-1.2-8.4,0c-1.2,1.2-3,3.2-4.4,3.9
                        c0.1,1.1-1.3,2.7-1.7,3.5c-0.4,0.9-4.6,9.7-4.9,10.2c-0.3,0.5-1.2,1.9,1.1,2.8c2.4,0.8,9.3,4,10.3,4.1c1.1,0.1,0.7,0.3,0.9,1.3
                        c0.2,0.9-0.4,1.8-0.9,2.6c-0.5,0.9,5.1,9,5.5,9.7c0.4,0.7,0.5,1.2-0.3,1.6c-0.8,0.4-2.2,2.2-2.9,2.7c-0.7,0.5-4.7-6.1-6-8
                        c-1.3-1.9-9-5.6-10.4-6.3c-1.4-0.8-10.2-0.1-11.6,0c-1.4,0-1.8,0.5-2.2,0.9c-0.5,0.5-2.8,0.5-3.6,0.8c-0.9,0.4-2.5,1-3.1,1.2
                        c-0.6,0.1,0.7,2.6,1.1,3.4c0.4,0.8-0.2,1.5-1,2.2c-0.8,0.7-1.1,1.5-1.4,2.4c-0.3,0.8-6.4-2.5-7-2.9c-0.6-0.3-0.6,2.3-0.6,3.3
                        c0,1-3.3,0.8-5.5,1.1c-2.2,0.3-4.5-0.4-5.4-0.5c-0.8,0,1.3-5.1,2.2-7c0.9-1.9-2.1-1.4-3.4-1.2c-1.3,0.3-1.6,2.1-2.1,3.8
                        c-0.4,1.7-9.2-5.1-10-5.7c-0.8-0.6-1.6,0-1.9,0.4c-0.3,0.4-2.4,1.2-3.5,1.3c-1.1,0.1-1.1,4.5-1.4,6c-0.3,1.5-1,5.8-1,7
                        c0,1.2-2,1.8-3,2.7c-1,0.8-1.6,0-1.6,0s-4.1-3.3-5-4.1c-0.9-0.8-5.1,1.7-6.9,2.4c-1.7,0.6-2.9,0-3.3-0.3c-0.5-0.3-2.9-1-4.1-1.3
                        c-0.5-0.1-1.4-0.4-2.2-0.7c-0.7,0.7-1.6,1.3-2.3,1.7c-1.2,0.6-2-0.4-2.8-0.5c-0.8-0.1-3.6,1-4.7,2.2c-1.1,1.2-2.2,2.1-3.8,3
                        c-1.6,0.9-1.1,2.5-0.8,3.9c0.4,1.3,2,0.2,3-0.4c1-0.5,1.7,0.3,2.3,0.7c0.6,0.4,0.9-0.4,2-1.3c1.2-0.8,2,0.6,2.4,1.3
                        c0.4,0.8,1.5,0.5,2.9,0.3c1.4-0.1,1.4,0.7,0.2,0.6c-1.2-0.1,0.1,0.7,0,1.3c-0.1,0.5-1.6-0.5-3.3-0.9c-1.6-0.3-3.3,0-3.7,1.5
                        c-0.4,1.5,2.7,3,2.1,3.5c-0.6,0.5-2.4-0.5-3.3-1c-0.9-0.5-1.7,0.3-1,2c0.7,1.7-1.4-0.6-1.7-1.4c-0.3-0.8-1.9-0.8-3-0.8
                        c-1,0-1.2,1-3.1,1.5c-1.9,0.5-1.1,2-1.1,2.9c0,0.9,1.4,0.6,2.8,1.1c1.4,0.6,1.2,2.1,1.1,2.6c-0.1,0.5,0.8,1.6,0.8,3.7
                        c0,2.1-0.9,0.4-1.3-0.8c-0.3-1.2-2.3-2.4-3.2-3.3c-0.9-0.9-2.3-0.6-3.2-0.2c-0.9,0.4-1.7-0.5-1.9-0.9c-0.3-0.3,1.4-1.9,1.5-2.8
                        c0.1-0.8-2.2-0.8-3.4-1.3c-1.3-0.5,0.1-3.5-0.8-4.9c-0.9-1.4-1.6,0.9-2.8,1.7c-1.2,0.8-2.1,0.5-3,1c-0.9,0.5-2.5,0.3-4.2,0.2
                        c-1.7-0.2-3.2,0.6-3.8,0.8c-0.6,0.2-2.9-0.6-4.7-0.6c-1.8,0-0.6,1-0.1,1.7c0.5,0.7,1.6,0.3,2.7,0.3c1.1-0.1,1.9,0.9,2.6,2
                        c0.7,1.1,1.5,1.2,2.9,2.6c1.4,1.4,1.6,4.1,1.8,5.4c0.2,1.2,0.5,2.5,1.1,3.2c0.6,0.7,1.7,2.6,2.2,4.7c0.5,2.1,0.2,3.7-0.2,4.6
                        c-0.3,0.8-0.4,6.4-0.3,8.3c0,1.8-0.5,2.3-0.8,3c-0.3,0.6-1.1,3.3-1.5,4.3c-0.5,1-1.8,2.7-2.5,3.6c-0.6,1,0.6,1,1.6,0.9
                        c0.9,0,0.6,0.5,1.2,1.1c0.5,0.6,3.8-1.8,5-2.7c1.1-1,3-0.5,4.5-0.3c1.5,0.2,3.1-0.5,4.5-1.3c1.4-0.8,8.6-1.6,10.2-1.6
                        c1.6,0,4.2-2.3,5.7-3.5c1.5-1.1,6.4-3.3,7.2-4c0.8-0.6,0.6-0.9,0.6-1.3c0-0.5,0-1.4,0.8-1.6c0.9-0.3,0.9-1.9,3.2-2.4
                        c2.3-0.5,6.7,2.9,8,4c1.3,1.1,1.6,0.9,2.2,2.2c0.6,1.3,1.6,0.6,2.2,0.6c0.7,0,1.1-0.1,2.1,0.4c1,0.5,1.2-0.1,2.7-0.1
                        c1.4,0,2.2-4.2,2.6-5.3c0.3-1.1-1.7-2.5-1.8-3.1c-0.2-0.7,1-1.6,1.7-1.9c0.6-0.2,0.4-1.9,0.5-2.4c0-0.5,0.4-1,1-1.1
                        c0.6-0.1,1.2-0.8,1.5-0.5c0.3,0.3-0.5,1.1-1,1.6c-0.6,0.6,0.5,2,1.1,2.4c0.6,0.5-0.6,0.8-0.9,1c-0.3,0.2,0,0.6,0.4,1.1
                        c0.3,0.5,0,0.3,0.1,1.1c0,0.8,0.4,0.3,1,0.4c0.6,0.1,0.8,0.7,1.2,1.6c0.4,0.8-1.2,0.3-1.8,0.6c-0.5,0.3,0.3,2.4,0.3,4.1
                        c0,1.7-0.5,3.6-0.6,4.7c-0.2,1.1,0.5,1.5,0.9,2.3c0.4,0.8,0.8,0.5,1.4,0c0.5-0.5,0.5-0.9,1.7-0.3c1.2,0.6,1.6,1.6,1.7,2.9
                        c0.2,1.3,3.3,2.2,3.3,3c0,0.8-4.7,0.2-6.2,0c-1.4-0.1-2.6-2.1-3.6-3.3c-1-1.1-2.4-2-3.1-2c-0.6,0-0.8,1.1-1,2.1
                        c-0.3,1-1.4-0.8-1.4-1.2c-0.1-0.5,0-0.9,0.4-1.2c0.5-0.3-0.2-0.8-0.6-1c-0.5-0.2-1,0.5-1.3,1c-0.3,0.5-0.6,0-0.6-0.4
                        c0-0.5-0.5-0.4-1.2-0.4c-0.7,0-1.2-1.2-1.8-1.4c-0.5-0.3-0.8,0.5-0.8,1.3c0,0.8,0.8,1.1,1.2,1.9c0.5,0.8-0.1,0.9-0.7,1.4
                        c-0.6,0.5-1-1.2-1.6-2.3c-0.5-1.1-3.8-3.2-4.7-3.9c-0.9-0.8-0.6-2.8-2-4.5c-1.4-1.7-3-1.3-4.3-1.1c-1.3,0.1-0.2,1.4,0.3,1.9
                        c0.5,0.5,1.4,1.3,1.7,2.6c0.3,1.4,2.2,3.2,4.6,3.9c2.4,0.7,2.9,3,3.3,3.9c0.4,0.8,1.9,3.2,2.7,5.2c0.8,2,1.8,5.8,2.4,7.5
                        c0.6,1.8,1,6.5,1.3,8.8c0.3,2.3,0.5,14.1,0.8,15.5c0.3,1.4-2.6,8-3,8.8c-0.4,0.8-0.6,3.3-0.6,4.5c-0.1,1.3-1.1,2.2-1.7,2.8
                        c-0.6,0.6-1.3,4.9-1.6,7.2c-0.3,2.2-2.3,6.7-2.7,8.5c-0.4,1.8-2.4,4-2.8,4.7c-0.4,0.7-1.1,1-2.2,1.1c-1.1,0-2.4,1.5-2.7,3.5
                        c-0.3,2,0.9,0.7,2,0.6c1-0.1,1,1.2,1,1.6c0,0.3,0.7,0.7,2.2,1.8c1.6,1.1,2.5,1.2,3.6,1.2c1.1,0,1.1,1.6,1.2,2
                        c0.2,0.4,0.7,1.6,1.4,3.4c0.7,1.7-0.4,3-0.9,4.2c-0.5,1.2,0.5,7.7,1.1,9.2c0.1,0.2,0.1,0.4,0.1,0.6c1.2,0.6,2.4,1.3,2.9,1.6
                        c1.1,0.5,3.3-0.6,4.5-0.9c1.2-0.4,1.5,1.5,1.8,1.9c0.3,0.4,1.6,1.8,2.1,2.6c0.5,0.8,3.2,4.3,3.7,5.4c0.5,1.1,1.4,0.2,2.4,0.1
                        c0.9-0.1,1.9,0.8,2.8,1.4c0.9,0.6,6.3,0,7.1-0.1c0.7-0.2,1.8-3,2.3-4.4c0.5-1.4,2.5-4.5,2.9-5.6c0.5-1.1-0.3-2.9-0.6-3.6
                        c-0.3-0.6,0.3-1,1.4-1.4c1.1-0.4,1.1-0.5,2.3-1.3c1.3-0.7,5.1-0.9,8-1.3c2.8-0.3,7.6-0.6,9.5-1c2-0.3,2.4,0.5,3.7,1.3
                        c1.4,0.8,2.5,0.5,3.9,0.3c1.4-0.3,4.3-0.3,5.1-0.3c0.8,0,1.2-0.5,1.1-1.2c-0.1-0.8,0.6-2.8,0.9-3.6c0.3-0.7-0.2-1.7-0.6-2.7
                        c-0.5-1.1-0.3-3.2-0.4-4c0-0.7-0.5-8.2-0.5-10.4c0-2.2-2.4-3.9-3.3-4.3c-0.9-0.4-1.4-1.7-1.7-2.8c-0.3-1.1,0.6-2,1.5-2.8
                        c0.9-0.8,0.3-3.4,0.2-4c-0.1-0.6,0.5-1.6,1-2.3c0.5-0.7,2.4-4.4,3.8-6.5c1.4-2.1,0.8-4.8,0.8-6.6c0-1.8,6.6-4.4,7.7-5
                        c1.1-0.6,10.5-5.2,12-6c1.4-0.9,1.6-1.1,1.4-2.9c-0.3-1.8-1.5-10.7-1.6-12.4c0-0.4-0.2-0.8-0.4-1.1c0,0,11.3-0.4,12.1,0.5
                        c0.8,0.8,3.8,3.5,4.7,2.7c0.9-0.7,1.3-2.7,3.8-2.1c2.5,0.6,3.7,1.5,5.2,2.5c1.4,1,16,10.8,17,10.3c0.9-0.5,2.2-1.1,3-1
                        c0.8,0.1,3.5,2.2,4.5,2.7c1,0.6,6.4,4.6,9.2,5.1c2.9,0.5,7.8,1.9,8.9,2.2c1.1,0.4,4.2,0.9,5.6,0.6c1.4-0.3,2.3-0.5,4.9-0.6
                        c2.6-0.1,3.4,0.4,5.3-0.8c1.9-1.2,5.7-3.5,7.2-4.5c1.6-1.1,2.5-1.5,3.4-1.9c0.9-0.4,2.2-1.2,2.9-2.2c0.6-0.9,1.5-2.8,2.1-3.4
                        c0.6-0.6,2.2-2.6,2.5-3.1c0.3-0.4,0.7-1.4,1.3-1.8c0.6-0.3,2.2-1,3.5-1.4c1.4-0.3,3-1.1,4-1.6c1.1-0.4,1.9-0.9,2.8,0
                        c0.9,0.9,1.7,2,2.1,2.2c0.4,0.2,1.2,1,1.1,1.8c-0.1,0.8-0.9,5.8,0.6,6.1c1.6,0.3,6.5,2.4,8,3.1c1.5,0.7,4.1,1.6,3.9,3.1
                        c-0.3,1.5-0.5,3.4,0.4,4.3c0.9,0.9,1.2,0.6,1.1,1.8c-0.1,1.1,0.3,2,0.6,2.3c0.4,0.3,0.6,3.1,1.1,2c0.5-1.1,1.1-2.8,2.2-3.1
                        c0.8-0.3,4-1,5.5-2.3C698.2,851.2,696.1,843.6,695.8,842.3z M533.2,814.7c-0.6-0.1-1.2,0-1.9-0.1c-0.1,0-0.4,0-0.5,0
                        c-0.4,0-0.8-0.2-1.2-0.2c-0.4,0-0.8-0.1-1.2-0.2c-0.7-0.3-1.6,0-2.3-0.5c-0.3-0.2-0.5-0.3-0.8-0.4c-0.3-0.1-0.8-0.2-1-0.5
                        c-0.3-0.3,0.2-0.7,0.3-0.9c0.8-1,1.8-1.8,2.5-2.9c0.7-1.1,1-2.4,1.9-3.3c0.4-0.5,0.9-0.9,1.3-1.4c0.3-0.5,0.7-0.9,1.3-1.1
                        c0.9-0.3,0.5,0.8,0.3,1.2c-0.6,1-1.2,2-1.7,3c-0.4,0.7-0.9,1.4-1.4,2c-0.3,0.5-0.6,1.1-0.2,1.7c0.7,0.9,2.4,0.8,3.4,0.7
                        c0.6,0,1.1-0.2,1.7-0.3c0.9-0.2,1.7-0.3,2.6-0.3c0.5,0,1.3-0.2,1.6,0.3c0.2,0.4,0,1.1-0.2,1.4c-0.5,0.7-1.3,1.2-2,1.5
                        C534.9,814.5,534,814.8,533.2,814.7z M545.1,836.4c-0.4,0.6-0.9,1.1-1.4,1.7c-0.3,0.3-0.6,0.6-0.9,0.9c-0.3,0.2-0.5,0.6-0.8,0.8
                        c-0.1,0.1-0.3,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c0,0,0,0-0.1,0.1c-0.2,0.3-0.5,0.5-0.7,0.8c-0.2,0.2-0.3,0.5-0.6,0.6
                        c-0.1,0.1-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.1-0.5,0.2-0.8,0.3h-0.4c-0.2,0-0.3,0.1-0.5,0.1
                        c-0.5,0.1-1.1,0-0.9-0.6c0.1-0.4,0.5-0.8,0.8-1.1c0.3-0.3,0.7-0.6,1.1-0.9c0.7-0.6,1.4-1.1,1.9-1.8c0.5-0.5,0.9-1,1.4-1.4
                        c0.5-0.4,1.1-0.7,1.6-1c0.6-0.4,1.1-0.7,1.8-0.8c0.2,0,0.6-0.1,0.7,0.2C545.6,835.9,545.3,836.2,545.1,836.4z M603.2,830.3
                        c-0.7-0.2-1.4-0.5-2.1-0.5c-0.8,0.1-1.7,0.4-2.2,0.9c-0.2,0.2-0.4,0.4-0.3,0.7c0,0.3,0.2,0.6,0.3,0.9c0.3,0.6,0.8,1.4,0.2,1.9
                        c-0.6,0.5-1.6,0.5-2.4,0.4c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.1-1,0-1.5,0c-0.6,0-1-0.7-1-1.2c0.1-0.6,0.3-1.2,0.4-1.8
                        c0.1-0.4,0-0.7-0.3-1c-0.3-0.3-0.6-0.5-0.8-0.7c-0.3-0.3-0.5-0.5-0.7-0.9s-0.3-0.8-0.6-1.1c-0.2-0.5-0.5-0.9-0.8-1.3
                        c-0.3-0.5-1.1-1.6-0.4-2c0.8-0.5,1.7,0.3,2.1,0.8c0.7,0.9,1.3,2,1.9,2.9c0.5,0.7,1.1,1.6,1.9,1.9c0.8,0.3,1.6-0.1,2.2-0.6
                        c0.3-0.3,0.6-0.7,0.7-1.1c0.2-0.3,0.3-0.7,0.6-1c0.6-0.6,1.5-0.6,2.3-0.3c0.8,0.3,1.5,0.9,2.2,1.4c0.3,0.3,0.6,0.5,0.8,0.8
                        c0.2,0.2,0.3,0.4,0.3,0.7C604.5,830.6,603.6,830.4,603.2,830.3z"
                      />
                      <path
                        class="st2"
                        fill="#36393a"
                        d="M720.6,851.7c0-0.1-2-1.9-2-1.9s-13.5,4.9-14.9,5.5c-1.4,0.7-3.1-0.6-4.2-1.8c-0.1-0.1-0.2-0.2-0.3-0.3
                        c-1.6,1.3-4.7,2-5.5,2.3c-1.1,0.4-1.7,2-2.2,3.1c-0.5,1.1-0.7-1.7-1.1-2c-0.4-0.3-0.7-1.2-0.6-2.3c0-1.2-0.3-0.9-1.1-1.8
                        c-0.9-0.9-0.6-2.8-0.4-4.3c0.2-1.5-2.4-2.5-3.9-3.1c-1.5-0.7-6.4-2.7-8-3.1c-1.6-0.3-0.7-5.3-0.6-6.1c0.1-0.8-0.7-1.6-1.1-1.8
                        c-0.4-0.2-1.2-1.3-2.1-2.2c-0.9-0.9-1.8-0.4-2.8,0c-1.1,0.4-2.6,1.2-4,1.6c-1.4,0.4-2.9,1.1-3.5,1.4c-0.6,0.4-1,1.4-1.3,1.8
                        c-0.3,0.5-1.9,2.5-2.5,3.1c-0.6,0.6-1.5,2.5-2.1,3.4c-0.7,0.9-1.9,1.7-2.9,2.2c-1,0.4-1.9,0.8-3.4,1.9c-1.5,1-5.3,3.3-7.2,4.5
                        c-1.9,1.2-2.7,0.7-5.3,0.8c-2.6,0.1-3.6,0.3-4.9,0.6c-1.4,0.3-4.4-0.2-5.6-0.6c-1.1-0.3-6.1-1.7-8.9-2.2c-2.8-0.5-8.2-4.5-9.2-5.1
                        c-1-0.5-3.7-2.6-4.5-2.7c-0.8-0.2-2.1,0.4-3,1c-1,0.6-15.5-9.3-17-10.3c-1.5-1-2.7-1.8-5.2-2.5c-2.5-0.6-2.9,1.4-3.8,2.1
                        c-0.9,0.7-3.9-1.9-4.7-2.7c-0.8-0.8-12.1-0.5-12.1-0.5c0.3,0.3,0.4,0.7,0.4,1.1c0.1,1.7,1.3,10.5,1.6,12.4c0.3,1.8,0.1,2-1.4,2.9
                        c-1.4,0.8-10.9,5.4-12,6c-1.1,0.6-7.7,3.2-7.7,5c0,1.8,0.6,4.5-0.8,6.6c-1.4,2.1-3.3,5.8-3.8,6.5c-0.5,0.7-1.1,1.7-1,2.3
                        c0,0.6,0.7,3.3-0.2,4c-0.9,0.8-1.8,1.7-1.5,2.8c0.3,1.1,0.8,2.4,1.7,2.8c0.9,0.4,3.3,2.1,3.3,4.3c0,2.2,0.5,9.7,0.5,10.4
                        c0,0.8-0.1,2.9,0.4,4c0.4,1.1,1,2,0.6,2.7c-0.3,0.7-1,2.8-0.9,3.6c0.1,0.8-0.3,1.2-1.1,1.2c-0.8,0-3.7,0.1-5.1,0.3
                        c-1.4,0.2-2.6,0.5-3.9-0.3c-1.4-0.8-1.7-1.7-3.7-1.3c-1.9,0.4-6.7,0.7-9.5,1c-2.9,0.3-6.7,0.6-8,1.3c-1.2,0.7-1.2,0.9-2.3,1.3
                        c-1.1,0.4-1.7,0.8-1.4,1.4c0.2,0.7,1.1,2.5,0.6,3.6c-0.5,1.1-2.4,4.2-2.9,5.6c-0.5,1.4-1.6,4.2-2.3,4.4c-0.8,0.2-6.2,0.7-7.1,0.1
                        c-0.8-0.5-1.9-1.4-2.8-1.4c-0.9,0.1-1.9,1-2.4-0.1c-0.5-1.1-3.2-4.6-3.7-5.4c-0.5-0.8-1.8-2.2-2.1-2.6c-0.3-0.5-0.6-2.3-1.8-1.9
                        c-1.2,0.4-3.5,1.4-4.5,0.9c-0.5-0.3-1.7-1-2.9-1.6c0,1.1-1.2,2.1-1.6,3c-0.4,1.1-0.9,4.7-1,6.4c-0.1,1.7,0.3,2.2,1,2.6
                        c0.7,0.4,0.6,1.3,0.6,2.1c0,0.8,0.4,0.8,1.6,0.9c1.2,0.1,0,1.7-0.6,2.3c-0.6,0.6,0.1,0.9,0.3,4.2c0.2,3.3-0.5,3.6-1.6,4.5
                        c-1.1,0.9-0.3,4.8-0.2,5.8c0.1,1.1-1.4,4.3-1.6,5.3c-0.3,1.1-0.1,1.7,0.3,2.3c0.3,0.6,0.3,1.1,0.3,2.1c0.1,1,0.8,2.2,1.6,3
                        c0.8,0.8,1.1,6.6,1.4,7.9c0.3,1.3-1.8,4.9-2.5,6.7c-0.2,0.6-0.4,1.4-0.4,2.3c2.1,0.3,6.4,1,6.9,2.7c0.6,2.3,1.9,6.2,3.8,6.6
                        c1.9,0.4,9.3,2.3,10.8,2.5c1.6,0.3,2.7,0.2,3.6-0.3c0.9-0.5,5.4-3.8,7-3.5c1.6,0.4,17.4,3.6,17.4,3.6l6.4-6.7c0,0,9.3,0.2,9.4,0.2
                        s4.6-2.9,4.7-2.9c0.1,0,4.8,4.1,4.4,6.3c-0.4,2.2-1.2,4.9,0.7,5.3c1.9,0.5,15.6,4.5,17.2,5.1c1.6,0.5,9.4,3.2,10.7,2.7
                        c1.3-0.5,12.1-4.8,9.7-6.1c-2.4-1.2-3.5-2.2-1.8-3.5c1.7-1.3,2.5-1.6,3.8-1.6c1.3,0,11.9,0.9,11-0.8c-0.8-1.7-0.3-1.9,0-3
                        c0.4-1.1,0.4-2.7,1.3-2.6c0.9,0.1,3.5,0.8,4-0.3c0.5-1.2,1.4-2.7,2.8-3c1.4-0.3,11.1-2,13.8-4.2c2.8-2.2,4.2-4.1,6.2-3.4
                        c1.9,0.7,7.2,3,8.3,2.1c1.1-1,4-4.6,5.6-4.4c1.6,0.2,4.1,0.9,5.2,0.2c0.9-0.6,3.3-1.8,5.3-2.4c-0.7-1.5-1.4-2.9-1.8-4
                        c-1.6-4.1,10.2-23.7,10.2-23.7l0.7-8.5l17.2-16l7.9-23.5l15.3-2.8l3.7-4.8l7.8,3.1l6.2-2.4l-1.4-4.8
                        C712.3,875.7,720.6,851.8,720.6,851.7z M537.2,956.8c-0.2,0.2-0.4,0.3-0.6,0.5c-0.3,0.2-0.6,0.4-0.8,0.6c-0.4,0.4-0.8,0.7-1.3,1
                        c-0.2,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.2,0.1-0.3,0.3c-0.2,0.2-0.4,0.4-0.3,0.7c0.1,0.2,0.2,0.3,0.2,0.4c0,0.2,0.1,0.4,0.1,0.6
                        c0.1,0.2,0.1,0.4,0.1,0.6c0,0.4-0.1,0.7-0.4,1c-0.1,0.1-0.3,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0-0.2,0.1-0.3,0.1
                        c-0.3,0.1-0.5,0.2-0.8,0.2c-0.3,0-0.6,0.2-0.8,0.3c-0.2,0.1-0.3,0.3-0.5,0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.1,0.4,0,0.6
                        c0.1,0.5,0.2,1,0.3,1.5c0,0.2,0.1,0.5,0.1,0.8c0,0.1-0.1,0.4-0.2,0.5c-0.2,0.1-0.4-0.1-0.6-0.2c-0.3-0.1-0.5-0.3-0.7-0.4
                        c-0.3-0.1-0.5-0.2-0.8-0.3c-0.1,0-0.2-0.1-0.3-0.2c-0.3-0.2-0.6-0.4-0.8-0.5c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1-0.1-0.3-0.2-0.4-0.3
                        c-0.8-0.5-1.6-0.5-2.4,0c-0.7,0.4-1.4,1.1-1.8,1.9c-0.3,0.7-0.2,1.4,0.1,2c0.3,0.6,0.7,1.1,1,1.7c0.3,0.6,0.4,1.3,0.4,1.9
                        c0,0.4,0.1,1.3-0.4,1.5c-0.6,0.2-1.2-0.6-1.4-1c-0.5-0.7-0.8-1.4-1.1-2.2c-0.3-0.7-0.5-1.4-0.8-2c-0.2-0.5-0.2-1-0.3-1.5
                        c-0.2-0.6-0.6-1.2-0.9-1.7c-0.5-0.6-0.9-1.2-1.2-2c-0.2-0.6-0.3-1.3-0.3-1.9c0-0.8,0-1.6,0.3-2.3c0.2-0.5,0.7-1,1.3-0.7
                        c0.6,0.3,1,0.9,1.4,1.4c0.5,0.6,1,1,1.5,1.5c0.3,0.3,0.5,0.6,0.8,0.8c0.2,0.2,0.5,0.5,0.8,0.5c0.4,0.1,0.8,0,1.1-0.3
                        c0.1-0.2,0.3-0.2,0.4-0.3c0.2-0.1,0.3-0.4,0.3-0.6c0-0.2,0.1-0.3,0.2-0.4c0.1-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.7
                        c0-0.3,0.1-0.6,0.3-0.8c0.1-0.2,0.2-0.3,0.4-0.3c0.3,0,0.7,0,1,0c0.1,0,0.3,0,0.4,0.1c0.3,0.2,0.7,0.1,1.1,0.1
                        c0.4,0,0.8,0,1.2-0.2c0.4-0.2,0.8-0.4,1.2-0.6c0.4-0.3,0.8-0.8,1.1-1.1c0.4-0.5,0.9-0.9,1.3-1.4c0.3-0.3,0.6-0.6,0.9-0.9
                        c0.4-0.3,0.9-0.5,1.5-0.6c0.6-0.1,1.1,0,1.5,0.4C537.3,956.2,537.6,956.4,537.2,956.8z M543.2,928.9c-0.1,0.5-0.3,1.1-0.8,1.3
                        c-0.6,0.3-1.1,0-1.6,0.2c-0.6,0.3-0.6,1.1-0.5,1.7c0.3,0.8,1,1.5,1.3,2.3c0.1,0.2,0.3,0.6,0.1,0.9c-0.1,0.2-0.4,0.1-0.6,0
                        c-0.5-0.3-0.8-1.1-1.4-1.3c-0.5-0.2-0.9,0.3-1,0.8c-0.1,0.7,0.1,1.5,0,2.2c-0.1,0.3-0.2,0.7-0.4,1c-0.1,0.2-0.3,0.5-0.6,0.5
                        c-0.4,0-0.8-0.5-0.9-0.8c0-0.1,0-0.3-0.1-0.4c-0.1-0.3-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.6-0.3-0.8c-0.2-0.5-0.4-1.1-0.5-1.6
                        c-0.1-0.3-0.3-0.6-0.5-0.9c-0.3-0.3-0.6-0.6-0.9-0.9c-0.3-0.3-1.3-1.6-0.5-2c0.3-0.1,0.8,0,1.1,0.1c0.5,0.2,0.9,0.4,1.4,0.6
                        c0.4,0.1,0.8,0.3,1.1,0.1c0.3-0.1,0.5-0.5,0.5-0.8c0.1-0.5,0-1,0-1.5c0-0.4-0.1-0.9,0-1.3c0.4-0.9,1.4,0.4,1.7,0.7
                        c0.4,0.5,1.1,1.8,1.9,1.4c0.4-0.2,0.5-0.7,0.6-1.1c0.1-0.5,0.2-1,0.2-1.5c0-0.2,0-0.7,0.3-0.7c0.3,0,0.5,0.4,0.6,0.6
                        C543.3,927.5,543.5,928.2,543.2,928.9z M564.4,855.9c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.3
                        c-0.3-0.2-0.6-0.3-0.9-0.4c-0.4-0.2-0.8-0.1-1.3,0c-0.6,0-1.2-0.2-1.7-0.6c-0.6-0.6,0-1.3,0.5-1.7c0.8-0.6,1.7-0.9,2.7-1.2
                        c0.7-0.2,1.4-0.3,2.1-0.4c0.6-0.1,1.2-0.1,1.8-0.2c0.4-0.1,0.7-0.2,1-0.4c0.3-0.1,0.5-0.3,0.8-0.3c0.8,0,0.1,1.1-0.1,1.4
                        c-0.5,0.8-1,1.6-1.5,2.5c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.5-0.2,0.8c0,0.3-0.1,0.7-0.3,1c0,0.1-0.1,0.3-0.2,0.3
                        c-0.2,0.1-0.5-0.1-0.6-0.2c-0.2-0.2-0.3-0.4-0.5-0.5C564.5,856.1,564.4,856,564.4,855.9z M573.5,905.4c-0.5,0.1-1.1-0.4-1.6-0.6
                        c-0.6-0.3-1.2-0.4-1.9-0.5c-0.7,0-1.3-0.2-1.7-0.8c-0.2-0.3-0.3-0.7-0.3-1c-0.1-0.3-0.1-0.7-0.2-1c-0.1-0.4-0.5-0.6-0.8-0.9
                        c-0.3-0.3-0.6-0.6-1-0.8c-0.4-0.3-0.9-0.7-1-1.2c-0.1-0.5,0.3-1,0.6-1.4c0.4-0.6,0.8-1.1,1.2-1.7c0.4-0.7,0.7-1.5,1.1-2.2
                        c0.1-0.2,0.3-0.4,0.6-0.5c0.2-0.1,0.4,0,0.5,0.2c0.5,0.4,0.9,0.8,1.5,1.1c0.6,0.2,1.3,0.1,1.9,0.1c0.5,0,1.1,0.2,1.2,0.7
                        c0.1,0.6-0.1,1.1-0.3,1.6c-0.2,0.5-0.3,1.1-0.6,1.6c-0.3,0.6-0.7,0.8-1.2,1.1c-0.5,0.2-1.1,0.4-1.1,1c0,0.6,0.3,1.2,0.7,1.7
                        c0.3,0.5,0.8,0.8,1.3,1.1c0.5,0.3,1,0.7,1.3,1.3C573.9,904.6,574,905.3,573.5,905.4z"
                      />
                      <g>
                        <path
                          class="st2"
                          fill="#36393a"
                          d="M565.5,382.6c-0.7,0.8-0.1,1.6-0.1,1.6s2.3,7,2.8,8c0.4,1,1.4,1.6,2.1,1.8c0.7,0.2,0.4,1.2-0.1,1.9
                          c-0.5,0.7-1.1,3.9-1.1,4c0,0.2-0.6,3.2-2.3,3.8c-1.7,0.6-5.2-4.3-5.8-5.2c-0.6-0.9-2.2,0.9-2.8,1.3c-0.6,0.4-3.1-2.2-4-3.2
                          c-0.9-1-1.6-0.8-1.6-0.8s-1.3,1.2-2.3,2.3c-1,1.1,1.1,3.4,1.9,5c0.9,1.6-0.9,2.4-2.1,3.5c-1.2,1.1-2.2,2.4-2.7,3.2
                          c-0.5,0.8-4.1,6.1-5.1,7.3c-0.9,1.2-0.6,4.6-0.6,5.5c0.1,0.9,1.9,5,2.2,6.1c0.3,1.1,0.9,3.3,0.9,3.8c0,0.5,1.4,0.9,2.5,1.7
                          c1.1,0.8,0.5,1.7,0.7,3.1c0.2,1.4-4.2,2.8-5,3.1c-0.8,0.3,0,1.3,0.4,2.2c0.4,0.9,0.8,2.8,1.2,4.5c0.3,1.8,2,3.8,3.1,4.4
                          c1.1,0.7,0.8,2.5,0.8,3.5c0,1-9.5,2.5-10.3,2.6c-0.8,0.2-0.9,0.9-1.1,1.9c-0.1,0.9,2.8,3.8,3.3,4.6c0.4,0.7-3.6,4.8-4.6,5.8
                          c-1,1.1-0.4,7.5-0.4,7.5c-1.6,0.3-5,2.6-5.8,2.9c-0.7,0.3-0.8,7.4-1,9.3c-0.1,1.9-3.2,3.2-4.4,3.3c-1.2,0.1-3-0.1-3.6-0.3
                          c-0.7-0.2-3.3-0.2-5-0.3c-1.6-0.2-2.6-3.5-3-4.1c-0.4-0.6,0.3-0.9,1.4-1.1c1-0.2,4.8-1.6,5.8-1.8c0.9-0.3-0.2-3.1-0.3-3.6
                          c-0.2-0.5-0.5-1.7-0.3-2.8c0.1-1.1-0.7-3.4-2.5-6.8c-1.8-3.4-5.3-0.2-6.9-0.5c-1.5-0.4-1.3-1.2-2.3-2.7c-1-1.6,2.3-6.3,2.3-6.3
                          l-3.9-5.1l-7.7,9.3l-4.2-2.9c-0.3-0.3-0.4-0.6-0.6-0.9c-0.2-0.2-0.3-0.3-0.5-0.5c-0.1-0.2-0.2-0.3-0.4-0.5
                          c-0.2-0.2-0.3-0.4-0.5-0.7c-0.1-0.2-0.3-0.4-0.3-0.7c0-0.1,0-0.3,0-0.4c0-0.2-0.1-0.4-0.1-0.6c0-0.2,0-0.3-0.1-0.5
                          c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.3-0.1-0.5-0.1-0.8c0-0.2-0.1-0.3-0.2-0.5c-0.2-0.4-0.5-0.8-0.8-1.1c-0.2-0.2-0.4-0.3-0.6-0.5
                          c-0.2-0.1-0.3-0.3-0.5-0.5c-0.2-0.1-0.3-0.2-0.5-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.5-0.2-0.7-0.3c-0.2-0.2-0.4-0.4-0.6-0.6
                          c-0.2-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.1-0.3-0.3c-0.1-0.1-0.2-0.3-0.3-0.4c0-0.7,0.3-1.4,0.6-1.8c0.9-1.1,1.5-2.9,1.9-3.6
                          c0.4-0.7,1.7-2.8,1.7-4.1c-0.1-1.3-0.5-5,1-6c1.5-1,2.1-1.6,2.7-1c0.5,0.6,0.8,1.3,1.4,0.3c0.6-0.9,1.1-1.2,1.9-1.8
                          c0.9-0.6,2.8-0.9,2.8-2.1c0-1.2-0.2-2,0.8-2.7c1-0.7,1.7-0.3,2.8-0.1c1.1,0.2,1.8,2,2.4,1.1c0.6-0.9-1.3-2.6-2.5-3
                          c-1.3-0.4-5.9-2-5.6-3.3c0.3-1.3,1.5-2.2,2.3-1.3c0.8,0.8,1.1,0.5,1.4,0.2c0.3-0.3,1.8-0.5,2.6-0.6c0.8-0.1,1.1,0.6,1.2-0.3
                          c0.1-0.9,0.3-1.4,0.6-1.7c0.3-0.3,0.8-1.2,0.1-1.5c-0.7-0.3-1.4,0.4-1.8,0.8c-0.3,0.5-0.6,0.6-1.1,0.4c-0.6-0.3-0.1-2.3-0.8-1.6
                          c-0.7,0.7-1,1.3-1.8,1.4c-0.8,0-1.6,0.4-1.8-0.3c-0.3-0.6-0.3-1.5-0.7-1c-0.4,0.5-1.3,1.7-1.7,0.6c-0.5-1.1-0.5-2.1-0.3-3
                          c0.2-0.9,0.3-1,0.2-1.7c-0.2-0.7-0.4-1.1,0.2-2.2c0.6-1,1.7-1.8,2.8-2.4c1.1-0.6,3.1-1.2,3.8-2.3c0.6-1.1,0.9-1.2,0.5-1.6
                          c-0.5-0.4-0.6-0.5-1,0.3c-0.4,0.7-0.5,0.6-0.6,0c-0.1-0.6-0.8-2.8-1-1.4c-0.1,1.4-0.1,2.3-0.9,2.9c-0.8,0.6-2.2,1.6-2.3,0.3
                          c-0.1-1.4-0.1-4.3,0.5-5.3c0.6-1.1,1.7-2.5,1.3-3c-0.4-0.4-1.4-2.1-1.9-0.6c-0.5,1.5-2.4,6.3-1.6,7.8c0.8,1.5,1.3,2.6,0.3,4.2
                          c-1,1.6-1.7,3-2.3,3.8c-0.6,0.7-1,1.2-0.7,2.5c0.3,1.3,0.3,5.5-0.6,6.6c-0.9,1.1-2.9,3.2-2.8,5.1c0.1,1.9,0.3,3.3,0.4,3.3
                          c0.2,0,0.5,1.1-0.3,1.7c-0.8,0.6-1.2,1-1.7,0.6c-0.5-0.5-0.8,0-0.8-0.8c0-0.8,0.4-5.5,0.8-6.9c0.5-1.4,1.6-4.6,1.7-6.1
                          c0-1.5,0.6-4.6,1.4-5.8c0.8-1.3,2.2-3.9,2.3-5.7c0.2-1.7,0.7-7.4,1.2-8.8c0.5-1.4,1.3-3.9,1.7-5.7c0.3-1.7,2-9.9,2.1-11.6
                          c0.1-1.6,1.3-12.1,1.4-13.7v-0.8c0.3,0.1,0.5,0.2,0.8,0.3c0.4,0,0.9,0.2,1.3,0c0.3-0.1,0.3-0.5,0.5-0.7c0.1,0,0.2,0,0.3,0
                          c0.3,0.1,0.5,0.2,0.8,0.3c0.3,0.2,0.5,0.3,0.8,0.5c0.3,0.2,0.5,0.3,0.8,0.4c0.6,0.3,1.5,0.4,2.2,0.2c0.3-0.1,0.6,0,1,0.1
                          c0.3,0.1,0.6,0,0.9,0c0.3-0.1,0.6-0.2,0.9-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1,0-0.3,0.1-0.3c0.1-0.3,0.5-0.3,0.8-0.4
                          c0.4,0,0.6-0.2,0.6-0.6c0-0.2,0-0.3,0.1-0.5c0-0.2,0.1-0.3,0.2-0.4c0.1-0.3,0.2-0.6,0.5-0.8c0.3-0.2,0.6-0.2,0.8-0.1
                          c0.3,0.1,0.7,0.2,1.1,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.3-0.4c0.3-0.2,0.8-0.2,1,0.2c0.1,0.3,0.2,0.6,0.1,1
                          c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.3,0.1,0.7,0.3,0.8c0.3,0.2,0.8,0.3,1.1,0.1c0.3-0.1,0.3-0.2,0.6,0c0.3,0.2,0.5,0.4,0.7,0.7
                          c0.2,0.2,0.3,0.5,0.6,0.6c0.3,0.1,0.4,0,0.6-0.2c0.2-0.1,0.3-0.1,0.6,0c0.2,0.1,0.3,0.1,0.5,0c0.2-0.2,0.3-0.3,0.6-0.4
                          c0.3,0,0.6,0,0.7-0.3c0.1-0.2,0.1-0.5,0.1-0.8c0-0.3,0-0.5,0-0.8c0-0.3,0-0.5-0.1-0.8c-0.1-0.2-0.3-0.4-0.3-0.7
                          c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0,0.8-0.2c0.2-0.1,0.3-0.3,0.5-0.5c0.6-0.3,0.9,0.5,1.3,0.8c0.4,0.5,1.1,0.5,1.6,0.9
                          c0.3,0.2,0.4,0.5,0.6,0.7c0.2,0.2,0.4,0.4,0.5,0.7c0,0.3-0.2,0.4-0.4,0.5c-0.3,0.2-0.3,0.4-0.1,0.6c0.3,0.6,1,0.7,1.6,0.9
                          c0.7,0.3,1.3,0.6,1.9,1.1c0.5,0.4,1.3,1.1,2,0.8c0.3-0.1,0.5-0.3,0.8-0.3c0.2,0,0.5,0.1,0.8,0c0.6-0.3,0-1.4-0.1-1.8
                          c-0.3-0.8-0.6-1.5-0.9-2.2c-0.1-0.3-0.3-0.6-0.4-0.8c-0.1-0.3,0-0.5,0-0.7c0.2-0.3,0.3-0.6,0.4-0.8c0.2-0.3,0.5-0.3,0.8-0.3
                          c0.1,0,0.3,0,0.3,0c0.2,0,0.3,0,0.5,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.4-0.1c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0
                          c0.3,0,0.5,0.1,0.8,0c0.6-0.1,1.1-0.2,1.7-0.4c0.5-0.1,1.1-0.3,1.6-0.5c0.2-0.1,0.4-0.1,0.6-0.3c0.2-0.1,0.5-0.3,0.7-0.4
                          c0.4-0.3,0.9-0.5,1.3-0.9c0.4-0.4,0.8-0.8,1.3-1c0.3-0.1,0.5-0.2,0.7-0.3c0.3-0.1,0.5-0.1,0.8-0.1c0.3,0,0.6,0,0.9,0
                          c0.3,0.1,0.5,0.2,0.8,0.2c0.3,0.1,0.6,0.3,0.9,0.4c0.3,0.1,0.3,0.4,0.6,0.5c0,0,0,0,0.1,0c0,0,0.1,0.1,0.2,0.1
                          c0.1,0,0.3,0.1,0.5,0.2c0.2,0,0.3,0.1,0.5,0.2c0.2,0,0.5,0.1,0.7,0.1c0.5,0,1.1-0.3,1.5-0.5c0.3-0.1,0.6-0.3,0.8-0.5l0.4-0.4
                          c0.6,1.4-1.8,5.2-2.1,5.7c-0.3,0.6-0.2,0.9,0.2,1.4c0.4,0.6,0.7,1.5,1.2,2.5c0.5,1,2.2,1.4,2.9,1.5c0.7,0.2,3.6,1.4,5,2.1
                          c1.3,0.8,2.3,0,2.3,0l5.5-3.7c0,0,3,4.7,3.6,5.5c0.5,0.9-1.7,1.5-3.1,2C568.2,379.5,566.2,381.9,565.5,382.6z"
                        />
                        <path
                          class="st2"
                          fill="#36393a"
                          d="M496.1,426c-0.2,0-0.2-0.1-0.3-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.2-0.1-0.3-0.1-0.5
                          c0-0.1,0-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.2,0.2-0.1,0.4-0.2c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.2-0.1,0.2-0.1
                          c0.1,0,0.2-0.1,0.2,0c0.1,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0,0.2,0.1,0.5,0,0.8c-0.1,0.2-0.4,0.3-0.6,0.5
                          C496.4,425.8,496.3,426,496.1,426z"
                        />
                        <path
                          class="st2"
                          fill="#36393a"
                          d="M492.5,428.7c-0.1,0.2-0.2,0.4-0.4,0.6c-0.1,0.2-0.3,0.4-0.5,0.6c-0.2,0.1-0.3,0.1-0.5,0
                          c-0.3-0.3,0-0.9,0.1-1.2c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.3-0.3,0.4-0.5
                          c0.2-0.3,0.6-0.4,0.9-0.7c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.1,0.6,0.2,0.6,0.4c0.1,0.3,0.1,0.6,0,0.9c0,0.1-0.1,0.2-0.2,0.3
                          c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.5,0.2-0.7,0.3
                          C492.9,428.3,492.6,428.5,492.5,428.7z"
                        />
                        <path
                          class="st2"
                          fill="#36393a"
                          d="M490.6,433.9c0.1-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0.1-0.2,0.1-0.4,0.2-0.6
                          c0-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.3-0.1,0.4-0.1c0.6,0,0.5,0.7,0.5,1.1c0,0.2,0,0.7-0.2,0.8
                          c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.3,0-0.4,0.1c-0.2,0.1-0.4,0.2-0.6,0.2C490.6,434.3,490.6,434.1,490.6,433.9z"
                        />
                        <path
                          class="st2"
                          fill="#36393a"
                          d="M487.1,440.4c0.1-0.5,0.3-1,0.4-1.5c0.1-0.3,0.2-0.6,0.4-0.8c0.2-0.2,0.3-0.4,0.5-0.7c0.2-0.4,0.2-1-0.3-1.2
                          c-0.6-0.3-1.1,0.4-1.3,0.8c-0.3,0.5-0.5,1-0.5,1.6c-0.1,0.5-0.1,1-0.2,1.5c-0.1,0.6-0.3,1.2-0.4,1.8c-0.1,0.6-0.3,1.2-0.5,1.8
                          c-0.1,0.4-0.3,0.8-0.4,1.1c-0.1,0.2-0.1,0.4-0.2,0.6c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0,0.7
                          c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.4,0,0.5-0.1c0.2-0.1,0.4-0.3,0.5-0.6c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.4
                          c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2,0-0.4,0.1-0.6c0-0.2,0.1-0.4,0.1-0.6c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.7,0.2-1
                          c0.1-0.3,0.1-0.7,0.2-1.1C487,440.8,487,440.6,487.1,440.4z"
                        />
                      </g>
                      <g>
                        <path
                          class="st0"
                          fill="#36393a"
                          d="M482.5,458.2c0-0.2,0.1-0.4,0.2-0.6c0.2-0.5,0.3-1.1,0.5-1.6c0.2-0.5,0.4-1,0.3-1.5c0-0.2-0.1-0.3-0.1-0.5
                          c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.2,0-0.5-0.2-0.6c-0.1-0.1-0.3,0.1-0.4,0.2c-0.3,0.4-0.3,1-0.4,1.5c0,0.8-0.1,1.5-0.3,2.3
                          c-0.1,0.8-0.4,1.5-0.6,2.3c-0.1,0.3-0.2,0.5-0.2,0.8c0,0.2-0.1,0.5,0,0.7c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1
                          c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.2-0.2c0.1-0.1,0.1-0.3,0.1-0.4c0.1-0.3,0.1-0.5,0.2-0.8C482.4,459,482.4,458.6,482.5,458.2z"
                        />
                        <g>
                          <path
                            class="st0"
                            fill="#36393a"
                            d="M614,528.3c-1.6,1-2.5,2.6-3.8,4.6c-1.3,2-2.9,2-4.5,2.5c-1.6,0.6-4.4-0.9-6.1-1.3c-1.7-0.5-5,1.9-5.9,2.6
                            c-0.7,0.6,0.7,4.2,1.3,5.5c-0.9,0.1-1.7,0.4-2.5,1c-0.2,0.1-0.4,0.3-0.6,0.4c-0.1,0.1-0.3,0.3-0.5,0.5c-0.3,0.3-0.7,0.5-1.1,0.5
                            c-0.3,0.1-0.6,0-1,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.3,0.1-0.5,0.3-0.7,0.4
                            c-0.3,0.2-0.6,0.2-0.8,0.3c-1.2,0.5-2.4,0.9-3.5,1.5c-1.7,0.9-3,2.4-4.9,2.9c-0.7,0.2-1.4,0.3-2.2,0.2c-0.3-0.1-0.8-0.1-1-0.4
                            c-0.1-0.3,0.2-0.8,0.4-1c0.3-0.5,0.6-0.9,1-1.4c0.8-1.1,1.4-2.3,2.2-3.4c0.4-0.5,0.8-1,1.3-1.4c0.4-0.4,0.9-0.8,1.3-1.2
                            c0.3-0.3,0.6-0.9,0.5-1.4c-0.2-0.4-0.8-0.4-1.1-0.3c-1,0.1-2,0.5-2.8,1.1c-0.5,0.4-0.9,0.8-1.3,1.2c-0.3,0.4-0.7,0.8-1,1.2
                            c-0.3,0.3-0.3,0.7-0.5,1c-0.4,0.9-1.4,1.5-1.9,2.2c-0.3,0.4-0.6,0.9-1.1,1.1c-0.6,0.2-1.2,0-1.8-0.1c-0.7-0.2-1.5-0.3-2.2-0.1
                            c-0.4,0-0.8,0.3-1,0.6l-1.4-1.6c-0.1-0.1-0.3-0.3-0.3-0.5c-0.1-0.3-0.3-0.5-0.5-0.7c-0.3-0.4-0.6-1-0.8-1.4
                            c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.2-0.3-0.3c0-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.1-0.3
                            c-0.1-0.3-0.3-0.6-0.4-0.8c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.1-0.2-0.3c-0.1-0.3-0.3-0.6-0.4-0.9
                            c-0.1-0.4-0.3-0.8-0.5-1.3c-0.2-0.4-0.3-0.8-0.3-1.3c0-0.8,0.7-1.3,1.1-2c0.1-0.2,0.2-0.4,0.1-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                            c-0.6-0.2-1.2-0.4-1.8-0.7c-0.6-0.3-1.2-0.7-1.9-1c-0.4-0.3-0.9-0.6-1.4-0.6c-0.6,0-1.1,0.4-1.5,0.8c-0.6,0.5-1.2,1.1-1.9,1.4
                            c-0.6,0.4-1.4,0.7-2,1.1c-0.6,0.3-1.1,0.7-1.5,1.1c0,0,0,0-0.1,0.1c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.1-0.4,0.2-0.6,0.3
                            c-0.3,0.2-0.5,0.3-0.8,0.5c-0.3,0.2-0.7,0.3-1.1,0.4c-0.3,0.1-0.6,0.3-0.7,0.6c-0.1,0.3-0.1,0.7-0.1,1c0,0.4,0,0.8,0.2,1.3
                            c0.1,0.4,0.3,0.8,0.3,1.2c0.2,0.6,0.2,1.2,0.3,1.8c0.1,0.5,0.3,0.9,0.5,1.3c0.2,0.4,0.3,0.9,0.3,1.3c0.1,0.5,0.2,0.9,0.2,1.4
                            c-0.1,0.3-0.3,0.5-0.6,0.6c-0.3,0.1-0.5,0.3-0.8,0.6c-0.3,0.3-0.6,0.4-0.9,0.3c-0.3-0.2-0.6-0.5-1-0.6c-0.4-0.2-0.8-0.2-1.3-0.3
                            c-0.3-0.1-0.7-0.2-1.1-0.3c-0.4,0-0.8,0-1.1,0.3c-0.3,0.2-0.4,0.6-0.5,0.9c-0.2,0.3-0.3,0.7-0.4,1.1c-0.1,0.2-0.2,0.4-0.3,0.5
                            c-0.1,0.2-0.3,0.3-0.4,0.4c-0.2,0.1-0.3,0.2-0.3,0.5c-0.1,0.4-0.3,0.8-0.4,1.3c-0.1,0.4-0.3,0.8-0.5,1.2
                            c-0.3,0.3-0.6,0.4-0.9,0.5c-0.4,0-0.8,0-1.3,0.1c-0.4,0-0.8,0.1-1.2,0.1c-1.1-0.1-1.1-1.3-1.1-2.1c0-0.6,0-1.3-0.3-1.9
                            c-0.1-0.5-0.3-0.8-0.6-1.2c-0.5-0.9-0.8-1.9-1.1-2.9c-0.3-1.1-0.3-2.2-0.5-3.3c0-0.3-0.1-0.8-0.3-1.1c-0.2-0.3-0.5-0.3-0.9-0.3
                            c-0.8,0-1.4,0.7-2.2,0.9c-0.5,0.1-1,0.2-1.4,0.3c-0.3,0.1-0.5,0.2-0.7,0.3c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0-0.2,0-0.3,0.1
                            c-0.1,0-0.3,0.1-0.4,0.2c-0.3,0.1-0.5,0.1-0.8,0.2c-0.5,0.1-0.9,0.2-1.4,0.3c-0.3,0-0.6,0.3-0.8,0.4c-0.3,0.1-0.6,0.3-0.9,0.3
                            c-0.4,0.1-0.8,0.1-1.2,0.1c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0.1-0.4,0.2c-0.3,0.1-0.5,0.3-0.6,0.6c-0.1,0.3-0.3,0.5-0.4,0.8
                            c-0.2,0.3-0.5,0.5-0.6,0.8c-0.3,0.4-0.5,0.8-0.6,1.3c0,0.1,0,0.3-0.1,0.4c-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.2-0.2,0.5-0.3,0.7
                            c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.2,0.5-0.3,0.7c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.3-0.3,0.5-0.5,0.8c-0.1,0.3-0.3,0.2-0.6,0.1
                            c-0.2-0.1-0.4-0.3-0.6-0.3c-0.2,0-0.5,0-0.7,0c-0.5,0-0.6-0.4-0.7-0.8c-0.1-0.3,0-0.5-0.1-0.8c0-0.5-0.1-1.1-0.2-1.5
                            c0-0.2-0.1-0.3-0.2-0.4c0-0.3,0-0.5-0.1-0.8c-0.1-1.2,0-2.4,0-3.5c0-1.1-0.1-2.1-0.3-3.1c0-0.3-0.1-0.6-0.2-0.9
                            c0-0.2-0.1-0.4-0.3-0.6c-0.2-0.1-0.5-0.1-0.8-0.1c-0.3,0-0.7,0.1-1,0.1c-0.7,0-1.4,0.1-1.9,0.5c-0.6,0.5-0.9,1.3-1.4,1.9
                            c-0.3,0.3-0.6,0.6-0.9,0.8c-0.4,0.3-0.6,0.7-0.8,1.1c-0.2,0.4-0.3,0.9-0.6,1.3c-0.3,0.4-0.7,0.6-1.1,0.8
                            c-0.4,0.2-0.8,0.3-1.1,0.3c-0.3,0-0.7-0.2-1-0.3c-0.3-0.1-0.6-0.2-0.7-0.5c-0.2-0.3-0.3-0.5-0.4-0.8c-0.1-0.4-0.1-0.9-0.5-1.2
                            c-0.3-0.3-0.6-0.8-0.9-1.1c-0.1-0.1-0.2-0.3-0.3-0.5c-0.2-0.2-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.3-0.3-0.5
                            c-0.1-0.2-0.3-0.4-0.4-0.6c-0.2-0.4-0.4-0.8-0.6-1.1c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.2-0.6-0.5-0.9-0.7
                            c-0.3-0.2-0.6-0.4-0.9-0.5c-0.3-0.2-0.7-0.3-1.1-0.3c-0.3,0-0.7-0.1-1.1,0c-0.1,0-0.3,0-0.4,0.1c-0.5,0.1-1.1,0-1.5,0
                            c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0c-0.3,0-0.6,0-0.9,0c-0.5,0-0.9,0-1.3-0.1h-0.6c-0.3,0-0.7-0.1-1-0.3
                            c-0.4-0.1-0.8-0.1-1.2,0c-0.6,0-1.4-0.1-1.9,0.3c-0.5,0.5-1.2,0.7-1.7,1.2c-0.3,0.2-0.5,0.4-0.8,0.6c-0.3,0.2-0.5,0.4-0.7,0.7
                            c-0.2,0.3-0.4,0.5-0.6,0.8c-0.3,0.2-0.5,0.3-0.8,0.3c-0.5,0.2-1.3,0.2-1.7-0.3c-0.4-0.5-0.7-1.1-1.1-1.5
                            c-0.3-0.3-0.6-0.5-0.8-0.7c-0.3-0.3-0.6-0.6-0.8-0.8c-0.4-0.4-0.7-0.8-1.1-1.1c-0.2-0.1-0.3-0.3-0.4-0.3c-0.2-0.1-0.5,0-0.8,0
                            c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.8-0.5-1.1-0.8c1-3.4,1.8-6.4,1.9-6.7c0.2-0.6,1.5-3.2,3.2-3.9c1.6-0.8,2.2-1.1,2.9-0.4
                            c0.7,0.7,2,1.6,1.4,0.1c-0.6-1.4-1.3-3.4-2.7-3.7c-1.4-0.3-4.8-0.7-5.1-1.7c-0.3-1,0.4-2.5-1.1-2.8c-1.5-0.3-2.1-0.7-2-1.4
                            c0-0.7-0.7-1.3-0.6-2.1c0.1-0.8,0-1.9,1.2-2.5c1.3-0.7,1.4-1.5,1.7-2.2c0.3-0.8,4.4-9.8,4.8-10.9c0.4-1.1,3-8.1,3.2-9.4
                            c0.2-1.2,1.3-5.5,1.7-7.1c0.4-1.6,1.1-5.5,1.3-6.2c0.3-0.7,1.1-5.5,1.3-6.3c0.3-0.8,0.6-3.8,1.9-5c1.4-1.2,1.8-1.5,1.9-2.4
                            c0.1-0.8,0-2.6,0.8-3.1c0.9-0.5,1.4-0.6,1.4-1.5c0-0.6-0.1-1.5,0-2.4c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.2,0.3,0.3
                            c0.1,0.1,0.3,0.3,0.4,0.4c0.2,0.2,0.4,0.4,0.6,0.6c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.3,0,0.4,0.1c0.2,0.1,0.3,0.2,0.5,0.3
                            c0.2,0.2,0.3,0.4,0.5,0.5c0.2,0.2,0.5,0.3,0.6,0.5c0.3,0.3,0.6,0.7,0.8,1.1c0.1,0.1,0.2,0.3,0.2,0.5c0,0.3,0.1,0.5,0.1,0.8
                            c0.1,0.3,0.1,0.5,0.2,0.8c0.1,0.2,0,0.3,0.1,0.5c0,0.2,0.1,0.4,0.1,0.6c0,0.2,0,0.3,0,0.4c0,0.3,0.2,0.5,0.3,0.7
                            c0.2,0.3,0.3,0.5,0.5,0.7c0.2,0.2,0.3,0.3,0.4,0.5c0.2,0.2,0.3,0.4,0.5,0.5c0.3,0.3,0.4,0.6,0.6,0.9l4.2,2.9l7.7-9.3l3.9,5.1
                            c0,0-3.3,4.7-2.3,6.3c1,1.5,0.8,2.3,2.3,2.7c1.6,0.4,5.1-2.9,6.9,0.5c1.8,3.4,2.7,5.8,2.5,6.8c-0.2,1.1,0.1,2.3,0.3,2.8
                            c0.2,0.5,1.3,3.3,0.3,3.6c-0.9,0.3-4.7,1.6-5.8,1.8c-1,0.2-1.7,0.4-1.4,1.1c0.3,0.6,1.4,3.9,3,4.1c1.7,0.1,4.3,0.1,5,0.3
                            c0.7,0.2,2.4,0.4,3.6,0.3c1.2-0.1,4.3-1.4,4.4-3.3c0.1-1.9,0.3-9,1-9.3c0.7-0.3,4.2-2.5,5.8-2.9c0.1,0,0.3-0.1,0.3-0.1
                            c1.4-0.1,3.3-0.3,3.9,0.8c0.6,1.1,2.3,4.1,3.2,4.7c0.9,0.5,3.9,1.9,5,2.6c1.2,0.8,3.5,1.4,3.9,1.9c0.4,0.6,1.1,1.3,1.9,0.8
                            c0.8-0.5,5.1-2.5,6.9-2.6c1.8,0,3.6,0,4.9,0.5c1.3,0.5,5.4,1.6,7,0.1c1.6-1.4,4.9-4.7,6.8-6.4c1.9-1.6,4.7-4,5.2-4.6
                            c0.5-0.6,3.6-2.7,5.3-3.4c1.6-0.8,6.3-3.3,7.5-4.4c1.1-1.1,4.9-5.1,6.5-6.7c0.2-0.2,0.3-0.3,0.5-0.5c0,0,3.7,3,3.6,4.7
                            c-0.2,1.7-0.4,2.2-1.7,2.2c-1.3,0-3.6,0.4-3.6,1.4c0,1-0.3,3.3,0.6,3.7c0.8,0.3,5.8,3.8,6,5.1c0.1,1.3,0.8,4.7,1.1,5.7
                            c0.3,1,1.2,3.2,0,5.1c-1.3,1.9-5.8,8.2-5.8,8.5c0.1,0.1,2,3.3,3.5,4.6c0,0-1.1,2.8-1.4,3.5c-0.3,0.8-0.1,2-1.1,3.4
                            c-1,1.4,0.2,2.5,0.2,2.5s12.7,12.7,13.3,13.2C619.2,524.8,615.5,527.3,614,528.3z"
                          />
                          <path
                            class="st0"
                            fill="#36393a"
                            d="M472.4,522.8c-0.3,0.1-0.6,0.2-0.8,0.4c-0.4,0.2-0.7,0.6-1,0.8c-0.2,0.2-0.6,0.5-0.9,0.2
                            c-0.3-0.3-0.3-0.9-0.2-1.3c0.1-0.4,0.2-0.8,0.3-1.2c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.4-0.5,0.7-0.6c0.4-0.1,1-0.1,1.4,0
                            c0.4,0.1,0.8,0.2,1.1,0.4c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.2,0.1,0.3,0.1,0.5c0,0.2-0.1,0.3-0.2,0.5c-0.2,0.2-0.5,0.2-0.8,0.3
                            c-0.1,0-0.2,0.1-0.3,0.1C472.7,522.6,472.5,522.7,472.4,522.8z"
                          />
                        </g>
                      </g>
                      <g>
                        <path
                          class="st1"
                          fill="#36393a"
                          d="M567.2,556.2c0,0.6,0,1.1-0.1,1.6c-0.1,0.6-0.3,1.2-0.7,1.8c-0.3,0.5-0.5,1.1-0.8,1.6
                          c-0.4,0.6-0.8,1.1-1.3,1.6c-0.5,0.5-1,0.9-1.6,1.3c-0.5,0.4-0.8,0.8-1.2,1.2c-0.5,0.5-1,0.9-1.5,1.4c-0.9,0.8-2.1,1.5-3.3,1.7
                          c-0.4,0-0.8,0-1.1,0c-0.3,0-0.7,0.2-1.1,0.3c-0.5,0.1-1,0.2-1.4,0.3c-0.8,0.2-1.7,0.4-2.6,0.6c-0.4,0.1-0.8,0.1-1.2,0.1
                          c-0.5,0.1-1.1,0.3-1.5,0.6c-0.8,0.6-0.8,1.5-1,2.4c-0.2,0.9-0.3,1.8-0.6,2.6c-0.2,0.7-0.6,1.3-0.8,2c-1.1,0.1-2.4,0.2-2.7,0.3
                          c-1,0.1-1.1,1.7-1.2,3c-0.1,1.3-1.9,1-4,1.1c-2.1,0.2-14.6,2.5-14.6,2.5s-2.7-10.7-3.4-12.6c-0.7-1.8-3.1,0-4.4,0.5
                          c-1.4,0.4-1.8,1.3-5,2.2c-3.2,0.9-2.5,2.1-3.9,3c-1.4,0.9-9.3,2.5-11.1,3.1c-1.8,0.5-1.5,1.7-1.5,1.7s0.2,4.1,0.2,5.7
                          c0,1.6,2.2,4.6,3,5.7c0.8,1,0.4,2.1,0,2.7c-0.3,0.5-0.6,1.3-1.2,3c-0.6,1.7-3.8,3.5-6.6,5.2c-2.7,1.7,1.4,7.3,2.4,9.6
                          c1,2.3-0.2,6.6-0.4,7.6c-0.3,0.9-4.4,0-5,0c-0.7-0.1-1.4,3.9-1.9,5.5c-0.5,1.6-2.3,1.2-3.9,1.2c-1.6,0-7.5,1.1-9.4,1.3
                          c-1.9,0.2-5.9,2.2-7.1,2.6c-1.1,0.4-3.6,7.2-4.2,8.3c-0.6,1.1-3.5,2.8-5,3c-1.4,0.3-2.6,1.9-3.4,2.3c-0.8,0.4-0.4,6.6-0.4,8.8
                          c0,1.5-1.7,2.4-3.8,2.6c-0.1-0.3-0.3-0.5-0.3-0.6c-0.1,0-0.3,0-0.5-0.1c-3.3-0.6-5.2,1.1-6.5,1.7c-1.4,0.6-5,4.9-6.6,6.5
                          c-1.5,1.5-2.3,5.4-2.6,6.9c-0.3,1.5-2.3,1-3.4,0.9c-1.2-0.1-0.5-2.8-0.5-3.9c0.1-1.1-0.1-2-1.6-2.1c-1.6-0.1-1.3-6.3-1.2-7.8
                          c0.1-1.6-4.9-1.7-6.5-1.7c-1.7,0-3.7,2.1-4.4,3.1c-0.7,1-3.3-0.1-4.3-0.7c-0.7-0.4-2.4,1.2-3.5,2.3c0,0,0,0,0,0
                          c-0.9-0.6-3.6-1.9-3.6-3.2c0-1.3,1.6-3.1,0.4-3.5c-1.1-0.3-1.7-1.6-2.5-1c-0.8,0.6-1.4,0.7-2,0.3c-0.6-0.3-2.3-1.9-1.9-2.2
                          c0.4-0.4,1-1.5,1.6-1.4c0.5,0.1,1.4,0.6,2.1-0.3c0.7-0.8,0.9-1.1,1.2-0.3c0.3,0.8,0.5,0.9,1.2,1.2c0.7,0.3,1.7,0.6,1.8-0.3
                          c0.1-0.9-0.1-2.2,0.7-2.5c0.8-0.3,1,0.5,1.1,1c0.1,0.5,1.1,1.7,2.5,0c1.3-1.7,6.9-7.3,7.9-8.8c1.1-1.6,1.7-1.9,2.2-1.2
                          c0.4,0.7,1.1,1.4,1.7,1.3c0.6-0.2,2.2-0.2,1.8,0.4c-0.4,0.6-1,0.9-0.3,1c0.7,0,0.8,1,0.1,1.1c-0.7,0-1,0.4-0.7,0.5
                          c0.3,0.1,0.8,1.1,0.1,1.2c-0.7,0.1-1,0.5-0.6,0.6c0.5,0.1-0.6,1.3-0.6,1.9c0,0.6,0.5,2.1,1.1,1.5c0.6-0.6,1.4-2.6,2.1-2.2
                          c0.7,0.4,1.9,1.2,1.9,0.5c0-0.7,0-1.4,0.5-1.3c0.5,0.1,1.4,0.5,1.4,0c0-0.6,0.7-1.7-0.6-1.7c-1.2,0-2.1-0.3-2.3-1
                          c-0.2-0.8-0.1-3.7-1.1-4.1c-0.9-0.5-2.2-1.2-2.2-2c0-0.8,0.5-1.4,1.1-1.7c0.6-0.3,2.2-1.4,2.4-1.9c0.3-0.6,3.6-5.2,4.1-5.2
                          c0.6,0,2.2-0.2,2.2-1.2c0-1,0.7-2,1.1-2.4c0.4-0.3,4.6-4.7,4.7-5.4c0.2-0.7,1.1-2.7,1.7-3c0.6-0.4,3.5-2.3,2.7-3.2
                          c-0.8-0.9-2.3-2.2-1.8-2.8c0.5-0.5,5.7-10.7,5.8-12.6c0.1-1.9,0.3-7.2,1-8.7c0.6-1.6,3.2-7.2,4-8.4c0.8-1.1,4-6.3,4.4-7.2
                          c0.3-0.8,2.9-6.1,3.3-7.4c0.4-1.3,2.8-6.3,3.3-7.5c0.5-1.2,3.8-13.2,3.8-13.2s1.6-6,3-11c0.4,0.3,0.8,0.6,1.1,0.8
                          c0.2,0.1,0.3,0.2,0.6,0.2c0.2,0,0.6-0.1,0.8,0c0.1,0.1,0.3,0.3,0.4,0.3c0.4,0.3,0.8,0.8,1.1,1.1c0.3,0.3,0.6,0.6,0.8,0.8
                          c0.3,0.3,0.5,0.5,0.8,0.7c0.4,0.4,0.7,1,1.1,1.5c0.4,0.5,1.1,0.4,1.7,0.3c0.3-0.1,0.5-0.2,0.8-0.3c0.3-0.2,0.5-0.5,0.6-0.8
                          c0.2-0.3,0.4-0.5,0.7-0.7c0.3-0.2,0.5-0.4,0.8-0.6c0.5-0.5,1.2-0.7,1.7-1.2c0.5-0.5,1.3-0.3,1.9-0.3c0.4,0,0.8-0.1,1.2,0
                          c0.3,0.1,0.6,0.2,1,0.3h0.6c0.4,0.1,0.8,0.1,1.3,0.1c0.3,0,0.6,0,0.9,0c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.4,0.1
                          c0.5,0.1,1.1,0.2,1.5,0c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.7,0,1.1,0c0.4,0,0.8,0.1,1.1,0.3c0.3,0.1,0.6,0.3,0.9,0.5
                          c0.3,0.2,0.6,0.5,0.9,0.7c0.3,0.2,0.6,0.5,0.8,0.8c0.2,0.3,0.4,0.8,0.6,1.1c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.3,0.3,0.5
                          c0.1,0.2,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.4,0.3,0.5c0.3,0.4,0.5,0.8,0.9,1.1c0.3,0.3,0.3,0.8,0.5,1.2c0.1,0.3,0.2,0.6,0.4,0.8
                          c0.2,0.3,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.3,1,0.3c0.4,0,0.8-0.1,1.1-0.3c0.4-0.2,0.8-0.4,1.1-0.8c0.3-0.4,0.4-0.8,0.6-1.3
                          c0.2-0.5,0.5-0.8,0.8-1.1c0.3-0.3,0.7-0.5,0.9-0.8c0.5-0.6,0.8-1.4,1.4-1.9c0.5-0.4,1.2-0.5,1.9-0.5c0.3,0,0.7-0.1,1-0.1
                          c0.3,0,0.5,0,0.8,0.1c0.2,0.2,0.3,0.4,0.3,0.6c0.1,0.3,0.1,0.6,0.2,0.9c0.2,1,0.3,2,0.3,3.1c0,1.1-0.1,2.3,0,3.5
                          c0,0.3,0,0.5,0.1,0.8c0,0.1,0.1,0.3,0.2,0.4c0.1,0.5,0.2,1,0.2,1.5c0,0.3,0,0.5,0.1,0.8c0.1,0.4,0.2,0.8,0.7,0.8
                          c0.2,0,0.5,0,0.7,0c0.2,0.1,0.4,0.3,0.6,0.3c0.3,0.1,0.5,0.1,0.6-0.1c0.2-0.3,0.4-0.5,0.5-0.8c0.1-0.2,0.1-0.4,0.2-0.6
                          c0.1-0.3,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.4-0.6c0.1-0.1,0.1-0.3,0.1-0.4
                          c0.1-0.5,0.3-0.9,0.6-1.3c0.2-0.3,0.5-0.5,0.6-0.8c0.2-0.3,0.3-0.5,0.4-0.8c0.2-0.3,0.3-0.5,0.6-0.6c0.1-0.1,0.3-0.2,0.4-0.2
                          c0.1,0,0.3,0,0.4,0c0.4,0,0.8,0,1.2-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.3-0.1,0.5-0.3,0.8-0.4c0.5-0.1,0.9-0.2,1.4-0.3
                          c0.3,0,0.5,0,0.8-0.2c0.1,0,0.3-0.1,0.4-0.2c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.3-0.2c0.2-0.1,0.4-0.2,0.7-0.3
                          c0.5-0.1,1-0.1,1.4-0.3c0.8-0.2,1.4-0.9,2.2-0.9c0.3,0,0.7,0,0.9,0.3c0.3,0.3,0.3,0.8,0.3,1.1c0.1,1.1,0.2,2.2,0.5,3.3
                          c0.3,1,0.6,2,1.1,2.9c0.2,0.4,0.4,0.8,0.6,1.2c0.2,0.6,0.3,1.2,0.3,1.9c0.1,0.8,0,2,1.1,2.1c0.4,0,0.8,0,1.2-0.1
                          c0.4-0.1,0.8-0.1,1.3-0.1c0.3-0.1,0.7-0.2,0.9-0.5c0.3-0.3,0.4-0.8,0.5-1.2c0.1-0.4,0.3-0.8,0.4-1.3c0-0.3,0.1-0.3,0.3-0.5
                          c0.1-0.1,0.3-0.3,0.4-0.4c0.1-0.1,0.3-0.3,0.3-0.5c0.1-0.3,0.2-0.7,0.4-1.1c0.1-0.3,0.2-0.7,0.5-0.9c0.3-0.2,0.7-0.3,1.1-0.3
                          c0.4,0,0.8,0.2,1.1,0.3c0.5,0.1,0.9,0.2,1.3,0.3c0.3,0.2,0.6,0.5,1,0.6c0.3,0.1,0.6,0,0.9-0.3c0.3-0.3,0.4-0.5,0.8-0.6
                          c0.3-0.1,0.5-0.3,0.6-0.6c0-0.4-0.1-0.9-0.2-1.4c-0.1-0.4-0.2-0.9-0.3-1.3c-0.2-0.4-0.4-0.8-0.5-1.3c-0.1-0.6-0.2-1.2-0.3-1.8
                          c-0.1-0.4-0.3-0.8-0.3-1.2c-0.1-0.4-0.1-0.8-0.2-1.3c0-0.3,0-0.7,0.1-1c0.1-0.3,0.4-0.5,0.7-0.6c0.4-0.1,0.8-0.2,1.1-0.4
                          c0.3-0.2,0.6-0.3,0.8-0.5c0.2-0.1,0.4-0.3,0.6-0.3c0.3-0.1,0.5-0.3,0.6-0.5c0.1,0,0.2,0,0.1-0.1c0.5-0.4,1-0.8,1.5-1.1
                          c0.7-0.4,1.4-0.7,2-1.1c0.7-0.4,1.3-0.9,1.9-1.4c0.4-0.3,0.9-0.8,1.5-0.8c0.5,0,1,0.4,1.4,0.6c0.6,0.3,1.3,0.7,1.9,1
                          c0.6,0.3,1.2,0.5,1.8,0.7c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0,0.4-0.1,0.6c-0.3,0.7-1,1.2-1.1,2c0,0.5,0.1,0.9,0.3,1.3
                          c0.2,0.4,0.4,0.8,0.5,1.3c0.1,0.3,0.3,0.6,0.4,0.9c0,0.1,0.1,0.2,0.2,0.3c0,0.2,0.1,0.3,0.1,0.5c0,0.3,0.1,0.6,0.3,0.9
                          c0.1,0.3,0.3,0.5,0.4,0.8c0,0.1,0,0.2,0.1,0.3c0,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.3,0.3,0.4
                          c0.1,0.2,0.3,0.3,0.3,0.5c0.3,0.5,0.5,1,0.8,1.4c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.2,0.2,0.4,0.3,0.5l1.4,1.6c0,0-0.1,0.1-0.1,0.1
                          c-0.7,1-0.3,2.2-0.1,3.2c0.1,0.6,0.3,1.1,0.4,1.7c0.1,0.5,0.1,0.9,0.2,1.4C567.2,555,567.2,555.6,567.2,556.2z"
                        />
                      </g>
                      <g>
                        <a
                          href="javascript:void(0);"
                          class="svg"
                          v-b-tooltip.hover
                          title="Lisbon"
                        >
                          <path
                            @click="
                              modal(
                                'Lisbon',
                                '/en/search?city=Lisbon&country=Portugal&categoryId=5&specialityId=33&language&insuranceId&start=0&inc=20&latitude=38.7222524&longitude=-9.1393366',
                                '/en/search?city=Lisbon&country=Portugal&categoryId=5&specialityId=33&language&insuranceId&start=0&inc=20&latitude=38.7222524&longitude=-9.1393366',
                                '/en/search?city=lisbon&country=Portugal&categoryId=4&specialityId=28&language&insuranceId&start=0&inc=20&latitude=38.7222524&longitude=-9.1393366',
                                '/en/search?city=lisbon&country=portugal&categoryId=2&specialityId&language&insuranceId&start=0&inc=20&latitude=38.7222524&longitude=-9.1393366'
                              )
                            "
                            class="st3"
                            fill="#4ab0c3"
                            d="M476.5,701c-1.7,1.5-8,6.1-8,6.1s-5.3-1.7-9.1,2.7c-0.8-0.4-1.4-0.8-2,0.4c-0.8,1.5-4.5,8.4-5.8,9.5
                          c-1.3,1.1-4.6,6.6-5.5,8.8c-0.9,2.2-2.5,4.4-2.8,6.3c-0.3,2-0.6,3.5-1.2,4c-0.7,0.5-2.8,2.8-3.3,3.3c-0.5,0.5-2.4-0.2-2.4,1.5
                          c0,1.7,0.5,3.6,0.4,4.7c-0.2,1.1-1.6,5.7-2.6,6.5c-1,0.8-4.7,3.3-5.3,4.6c-0.5,1.2-2.2,4.4-4.9,4.2c-2.7-0.1-13.2-0.6-14.7,0.1
                          c-1.5,0.6-6,2.8-7,2.6c-1-0.2-1.8-0.4-3-1.5c-1.2-1.1-3.4-3.2-4.6-3.1c-1.2,0.1-3.9,2.4-5.2,2.1c-1.3-0.3-5.7-3.2-5.6-4.5
                          c0.2-1.3,2-3.7,1.5-5.1c-0.5-1.4-4.6-5.1-4.2-6.9c0.4-1.8,6.1-4.8,6.4-7.7c0.3-2.8,0-5.7,0.6-6.5c0.6-0.8,1.4-1.5,1.3-2.8
                          c-0.1-1.3-0.3-3.4,0.3-4.2c0.6-0.8,1.6-2.3,1.6-4.4c0-2.2-0.4-7.7,0.1-9.2c0.4-1.4,1.1-3.4,1-5.2c-0.2-1.8-0.8-7.7,0-9.2
                          c0.8-1.5,1.9-3.4,2.1-4.9c0.3-1.4,1-4.7,1.8-5.3c0.8-0.6,4.1-2.6,4.5-4.1c0.3-1.5,1.8-5.6,2-6.5c0.3-0.9,0.8-2.7,0.8-4.4
                          c-0.1-1.7-0.4-3.2,0-4.7c0.5-1.5,1.6-5.8,0.8-6.5c1.1-1.1,2.8-2.7,3.5-2.3c1,0.6,3.6,1.7,4.3,0.7c0.7-1,2.7-3.2,4.4-3.1
                          c1.7,0,6.6,0.1,6.5,1.7c-0.1,1.6-0.3,7.7,1.2,7.8c1.5,0.1,1.7,1,1.6,2.1c-0.1,1.1-0.7,3.8,0.5,3.9c1.1,0,3.1,0.6,3.4-0.9
                          c0.3-1.5,1.1-5.4,2.6-6.9c1.6-1.6,5.2-5.9,6.6-6.5c1.3-0.6,3.3-2.3,6.5-1.7c0.2,0,0.3,0,0.5,0.1c0.1,0.2,0.2,0.4,0.3,0.6
                          c0.6,1.2,1.7,2.9,2.7,3c1.5,0.3,3.9,0.6,3.5,2.8c-0.4,2.2-1.3,4.7,0.3,5c1.6,0.2,3.2,0.1,4.5,0.3c1.3,0.1,7.7,0.4,9.1,0.4
                          c1.3,0,2.3,0.2,2.8,0.8c0.5,0.6,3.8,3.6,3.3,4.8c-0.5,1.2-1.1,3.8-2.6,3.8c-1.4,0-9.9,0.2-9.4,0.9c0.5,0.7,6.1,7.5,7.7,9.7
                          c1.6,2.1,3.6,4.5,4.3,5.2C473.4,694.5,478.2,699.5,476.5,701z"
                          />
                        </a>
                        <path
                          class="st3"
                          fill="#36393a"
                          d="M449.9,729.4c0.1-0.4,0.2-0.8,0.3-1.2c0.2-0.5,0.3-1,0.5-1.6c0.1-0.3,0.2-0.7,0.3-1c0.1-0.2,0.1-0.4,0.1-0.6
                          c-0.2-0.4-0.8-0.1-0.9,0.2c-0.3,0.4-0.5,1-0.8,1.4c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.2,0,0.4-0.1,0.6
                          c-0.1,0.2-0.2,0.3-0.3,0.4c-0.3,0.3-0.6,0.8-0.5,1.3c0,0.3,0.1,0.6,0.2,1c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.3,0.2,0.4,0.2
                          c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3,0c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1,0.1-0.2,0.2-0.3C449.6,730.1,449.8,729.7,449.9,729.4z"
                        />
                        <path
                          class="st3"
                          fill="#36393a"
                          d="M445,738.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.2-0.4-0.2-0.6c0-0.4,0.3-0.6,0.5-0.9
                          c0.2-0.3,0.4-0.7,0.6-1c0.2-0.3,0.4-0.7,0.7-1c0.3-0.3,0.6-0.6,0.9-0.8c0.3-0.2,0.6-0.5,1-0.7c0.5-0.4,1,0.2,1.3,0.5
                          c0.5,0.4,1,0.8,1.4,1.4c0.1,0.2,0.3,0.4,0.2,0.6c-0.1,0.4-0.4,0.7-0.5,1c-0.3,0.6,0,1.3-0.7,1.7c-0.4,0.2-0.8,0.2-1.2,0.3
                          c-0.5,0.1-1.1,0-1.5-0.2c-0.1-0.1-0.3-0.2-0.5-0.1c-0.2,0-0.4,0.2-0.7,0.3C445.5,738.3,445.3,738.4,445,738.1z"
                        />
                      </g>
                      <g>
                        <a
                          href="javascript:void(0);"
                          class="svg"
                          v-b-tooltip.hover
                          title="Faro"
                        >
                          <path
                            fill="#4ab0c3"
                            @click="
                              modal(
                                'Faro',
                                '/en/search?city=Faro&country=Portugal&categoryId=3&specialityId=18&language&insuranceId&start=0&inc=20&latitude=37.0193548&longitude=-7.9304397',
                                '/en/search?city=Faro&country=Portugal&categoryId=5&specialityId=33&language&insuranceId&start=0&inc=20&latitude=37.0193548&longitude=-7.9304397',
                                '/en/search?city=Faro&country=Portugal&categoryId=4&specialityId=28&language&insuranceId&start=0&inc=20&latitude=37.0193548&longitude=-7.9304397',
                                '/en/search?city=faro&country=portugal&categoryId=2&specialityId&language&insuranceId&start=0&inc=20&latitude=37.0193548&longitude=-7.9304397'
                              )
                            "
                            class="st0"
                            d="M659,1023.9c-0.7,1.3-0.8,2.9-1.3,1.5c-0.5-1.4-1.1-2.4-3-2.5c-1.9,0-11.9,0.1-14.2,1.1
                          c-2.3,0.9-7.7,4-8.9,6.2c-1.2,2.2-3.2,4.5-5.2,5.8c-2,1.2-6.1,5.3-7.2,5.7c-1.1,0.4-4.9,0.5-6.4,1.8c-1.5,1.2-3.7,3.8-5.4,3.7
                          c-1.7-0.1-3.8,0.3-5.7,2.3c-1.9,2.1-5.2,5.1-7.4,5.2c-2.3,0.1-4.2,0.8-4.7,0.5c-0.5-0.3-2.8-0.8-3.2-0.4
                          c-0.4,0.3-0.5,1.1-1.7,0.1c-1.2-1.1-24.3-14.6-25.2-14.9c-0.9-0.2-1.8,0-3.1-1.3c-1.2-1.3-1.3-2.5-3.9-2.2
                          c-2.7,0.4-2.8,0.2-3.8,1c-1,0.8-1.8,1-3.1,0.9c-1.3-0.1-2.6-1.7-3.7-1.4c-1.1,0.3-2.8,2.5-2.8,2.5s-0.6,0.4-1.3,0.3
                          c-0.8-0.1-3.4-1.8-3.4-1.8s-2.9-3.5-4.6-3.4c-1.6,0.1-3.9,0.2-5.4,1c-1.5,0.8-3.5-0.4-5.5-0.2c-2,0.2-4.7-0.3-5.7-0.1
                          c-1,0.1-3.7,0-4.3-1c-0.6-1-1.5-2.9-2.3-2.9c-0.8,0-1.1,2.1-1.8,2c-0.8-0.1-1.8-1.5-2.6-1.1c-0.9,0.4-2.9,1.1-4.1,1.1
                          c-1.2,0-3.3,0.7-3.6-0.2c-0.3-0.8,0.4-1.1-0.3-1.6c-0.7-0.5-1.1-1.2-1.6-1.2c-0.5,0-1.4,0.8-1,1.3c0.4,0.4,1.1,0.8,0.6,1
                          c-0.6,0.2-1.4,0.8-1.9,0.3c-0.5-0.5-0.5-0.9-1.1-0.7c-0.5,0.2-2.9,1.5-2.3,2.3c0.5,0.8,0.6,2.1,0.3,2.8c-0.3,0.7-0.8,2.2-1.1,1.1
                          c-0.4-1-0.5-1.4-1.4-1.5c-0.9,0-7.4-0.3-7.9,0.4c-0.4,0.8-1.2,2.4-2.9,2.4c-1.6,0.1-2.5,0.3-3.4-0.5c-0.8-0.8-1.4-1.5-2.3-1.3
                          c-0.9,0.2-1.9,1.6-2.2,2.1c-0.2,0.5-1.5,2.7-2.5,2.7c-1.1-0.1-0.9-1-2.2-0.9c-1.4,0.1-3.1,0.1-3.7,1c-0.6,0.9-1.2,1.8-2,1.8
                          c-0.8-0.1-2.7-0.4-2.8,0.8c-0.2,1.2-0.1,2.8-0.8,2.9c-0.8,0-1.3,0-1.5,0.7c-0.2,0.6-0.3,1.8-0.9,1.5c-0.7-0.3-1.2-1.4-0.9-2.6
                          c0.3-1.2-0.1-2-0.8-2.7c-0.7-0.6-2.4-2-2.5-1.4c-0.2,0.6-0.2,1.5-0.8,1.4c-0.5-0.1-1.3-0.8-1.3-1.4c0-0.5,1-1.2,1.4-1.6
                          c0.5-0.4,1-1,1.1-1.7c0.2-0.7,0.3-1.8,0.8-2c0.5-0.2,1.6-0.5,1.4-1.6c-0.2-1.1,0.1-3.5,0.6-4.2c0.5-0.6,3.5-4.7,4.8-5.3
                          c1.4-0.6,2-1.9,2.1-3.1c0-1.3,0.7-3.3-0.1-3.9c-0.8-0.5-1.1-0.7-1.1-1.3c0-0.5,0.5-1.2,0-1.4c-0.5-0.3-1.4-0.9,0.5-1.4
                          c2-0.5,2.2-0.5,3.1-2c0.9-1.5,4.3-6.7,3.6-8.5c-0.6-1.8-2-4-1.4-4.7c0.6-0.6,1-1.3,0.5-1.8c-0.6-0.5-1.3-0.8-0.7-1.5
                          c0.6-0.7,0.8-1.1,0.8-2.3c-0.1-1.2-0.4-2.2,0.5-2.6c1-0.4,1.5-1.2,2.3-2.6c0.8-1.4,5.3-8.5,5.1-10.5c-0.2-1.4-0.3-3.6-0.1-5.4
                          c2.1,0.3,6.4,1,6.9,2.7c0.6,2.3,1.9,6.2,3.8,6.6c1.9,0.4,9.3,2.3,10.8,2.5c1.6,0.3,2.7,0.2,3.6-0.3c0.9-0.5,5.4-3.8,7-3.5
                          c1.6,0.4,17.4,3.6,17.4,3.6l6.4-6.7c0,0,9.3,0.2,9.4,0.2s4.6-2.9,4.7-2.9c0.1,0,4.8,4.1,4.4,6.3c-0.4,2.2-1.2,4.9,0.7,5.3
                          c1.9,0.5,15.6,4.5,17.2,5.1c1.6,0.5,9.4,3.2,10.7,2.7c1.3-0.5,12.1-4.8,9.7-6.1c-2.4-1.2-3.5-2.2-1.8-3.5
                          c1.7-1.3,2.5-1.6,3.8-1.6c1.3,0,11.9,0.9,11-0.8c-0.8-1.7-0.3-1.9,0-3c0.4-1.1,0.4-2.7,1.3-2.6c0.9,0.1,3.5,0.8,4-0.3
                          c0.5-1.2,1.4-2.7,2.8-3c1.4-0.3,11.1-2,13.8-4.2c2.8-2.2,4.2-4.1,6.2-3.4c1.9,0.7,7.2,3,8.3,2.1c1.1-1,4-4.6,5.6-4.4
                          c1.6,0.2,4.1,0.9,5.2,0.2c0.9-0.6,3.3-1.8,5.3-2.4c1.8,3.7,4,7.7,4.3,8.7c0.4,1.4,2.3,8.6,2.1,11.2c-0.2,2.6-0.5,12.8,0.4,14.7
                          c0.9,1.8,4.5,5.1,3.5,7.4c-1,2.3-2.5,5-1.5,6.7c0.9,1.7,2.7,3.7,1.9,5.1c-0.8,1.4-1,2.1-0.5,2.6
                          C657,1020.1,659.8,1022.7,659,1023.9z"
                          />
                        </a>
                        <path
                          class="st0"
                          fill="#36393a"
                          d="M591.8,1058.1c-0.2,0-0.3-0.1-0.5-0.1c-0.2-0.1-0.3-0.3-0.4-0.4c-0.1-0.3,0.2-0.4,0.4-0.4
                          c0.1,0,0.3-0.1,0.4-0.1c0.1-0.1,0.3-0.2,0.4-0.2c0.3,0,0.4,0.2,0.7,0.4c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0.1,0.4,0.1
                          c0.3,0,0.5-0.1,0.7-0.1c0.2,0,0.6,0,0.8,0.1c0.3,0.2,0.2,0.6,0,0.8c-0.3,0.2-0.6,0.3-1,0.4c-0.3,0.1-0.8,0.1-1.1,0
                          c-0.1,0-0.1,0-0.2,0C592.6,1058.4,592.2,1058.2,591.8,1058.1z"
                        />
                        <path
                          class="st0"
                          fill="#36393a"
                          d="M599.5,1056.1c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.2-0.1-0.2-0.3-0.2-0.5
                          c0-0.2,0.3-0.4,0.5-0.5c0.2-0.1,0.3-0.2,0.5-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.2,0.3-0.3,0.5-0.4c0.1-0.1,0.2-0.2,0.4-0.2
                          c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0,0.4,0.1c0,0.1-0.1,0.3-0.1,0.3c-0.1,0.2-0.1,0.4-0.2,0.5c-0.1,0.2-0.3,0.2-0.5,0.4
                          c-0.1,0.1-0.2,0.2-0.3,0.3C599.9,1055.8,599.7,1056,599.5,1056.1z"
                        />
                        <path
                          class="st0"
                          fill="#36393a"
                          d="M599.1,1053.6c0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0c-0.1-0.4,0.6-0.6,0.9-0.7
                          c0.1-0.1,0.3-0.1,0.5-0.2c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.2,0.4-0.3,0.6-0.2c0.2,0.1,0.3,0.5,0.1,0.6c-0.2,0.2-0.5,0.5-0.8,0.7
                          c-0.1,0-0.2,0.1-0.3,0.1C599.4,1053.6,599.2,1053.6,599.1,1053.6z"
                        />
                        <path
                          class="st0"
                          fill="#36393a"
                          d="M603.1,1052.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.3,0-0.5
                          c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2,0-0.3,0.1-0.5c0.4-0.6,0.9-1,1.5-1.4c0.1-0.1,0.3-0.1,0.4-0.2
                          c0.2-0.1,0.3-0.2,0.5-0.3c0.3-0.2,0.5-0.2,0.8-0.3c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.3-0.1,0.6,0.1,0.7,0.5
                          c0.1,0.2,0.1,0.4,0.1,0.6c-0.1,0.3-0.5,0.6-0.8,0.7c-0.1,0-0.3,0-0.4,0.1c-0.2,0.1-0.4,0.3-0.6,0.4c-0.3,0.2-0.6,0.3-0.8,0.4
                          c-0.4,0.2-0.7,0.5-1,0.8c-0.1,0.2-0.3,0.3-0.4,0.5C603.1,1052.9,603.1,1052.9,603.1,1052.9z"
                        />
                        <path
                          class="st0"
                          fill="#36393a"
                          d="M609.5,1049.1c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0.1-0.3,0.3-0.4,0.3c-0.1,0-0.3,0-0.4,0
                          c-0.1-0.1-0.1-0.3-0.1-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.3-0.4,0.5-0.6c0.4-0.4,0.8-0.4,1.3-0.6c0.5-0.2,0.8-0.6,1.2-0.8
                          c0.3-0.2,0.6-0.2,0.8-0.4c0.2-0.1,0.3-0.3,0.4-0.5c0.2-0.2,0.5-0.5,0.8-0.4c0.3,0.1,0.3,0.6,0.2,0.9c-0.1,0.2-0.3,0.5-0.4,0.7
                          c-0.3,0.3-0.6,0.6-0.9,0.9c-0.1,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.3-0.6,0.3c-0.1,0-0.2,0-0.3,0.1c-0.2,0.1-0.5,0.2-0.7,0.3
                          C610,1048.9,609.7,1049,609.5,1049.1z"
                        />
                        <path
                          fill="#4ab0c3"
                          class="st0"
                          d="M620.2,1043.9c0.5-0.2,1-0.4,1.5-0.6c1.1-0.6,1.8-1.7,2.5-2.6c0.4-0.5,0.8-1.1,1.3-1.6
                          c0.4-0.4,0.9-0.7,1.4-1.1c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.6-0.7,0.5-1.1c-0.1-0.4-0.6-0.3-0.9-0.2c-0.5,0.2-1,0.6-1.4,1
                          c-0.8,0.8-1.5,1.7-2.3,2.6c-0.5,0.6-1,1.4-1.6,2c-0.8,0.8-1.9,1.1-3,1.3c-0.5,0.1-0.9,0.1-1.4,0.2c-0.5,0.1-1,0.4-1.4,0.7
                          c-0.5,0.3-1.6,0.9-0.9,1.6c0.5,0.5,1.3,0.3,1.9,0.2c0.4-0.1,0.9-0.3,1.2-0.6C619.3,1044.2,619.7,1044.1,620.2,1043.9z"
                        />
                        <a
                          href="javascript:void(0);"
                          class="svg"
                          v-b-tooltip.hover
                          title="Faro"
                        >
                          <path
                            fill="#4ab0c3"
                            @click="modal('Faro')"
                            class="st0"
                            d="M632.3,1033.4c0.1-0.2,0.1-0.3,0.2-0.6c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.1-0.5,0.3-0.7
                          c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.2-0.2,0.5-0.4,0.8-0.6c0.2-0.1,1.2-0.4,1-0.7c-0.1-0.2-0.5-0.1-0.7-0.1
                          c-0.3,0.1-0.5,0.2-0.8,0.3c-0.4,0.2-0.7,0.3-1,0.7c-0.4,0.5-0.6,1-0.8,1.6c-0.2,0.4-0.4,0.8-0.7,1.1c-0.2,0.3-0.5,0.5-0.8,0.7
                          c-0.2,0.2-0.4,0.5-0.5,0.8c0,0.1-0.1,0.3,0,0.4c0.2,0.2,0.4,0.2,0.6,0.1c0.2,0,0.4-0.1,0.6-0.2c0,0,0.1-0.1,0.1-0.1
                          c0.2-0.2,0.3-0.3,0.4-0.5C632.1,1033.8,632.2,1033.6,632.3,1033.4z"
                          />
                        </a>
                      </g>
                    </g>
                    <polygon
                      class="st5"
                      fill="#36393a"
                      points="420.1,745.6 422.8,750.9 428.7,751.8 424.4,756 425.4,761.9 420.1,759.1 414.8,761.9 415.8,756 
                      411.5,751.8 417.5,750.9 	"
                    />
                  </g>
                </svg>
              </b-col>
            </b-row>
          </b-container>
        </b-row>
      </b-container>
    </div>

   
    <div id="how">
      <h3 class="pop-img">{{ $t("kovHow.howitworks") }}</h3>

      <b-container>
        <b-row>
          <b-col lg="12" sm="12" class="text-center addimg">
            <p style="text-align:left;font-weight:500;">
              {{ $t("kovHow.text") }}
            </p>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid>
        <b-row>
          <b-col lg="12" sm="12" class="text-center addimg">
            <template id="my-template">
              <div class="container">
                <!-- <img src="../assets/frontend/Aero 1.svg" /> -->
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
                      <span class="dot">{{ article.id }}</span>
                      <!-- <p class="article-date">{{ article.published_at }}</p> -->
                      <!-- <h3>
                      <a>{{ article.title }}</a>
                    </h3> -->
                      <b-container fluid>
                        <b-row>
                          <b-col
                            cols
                            style="padding:10px;"
                            class="text-center addimg"
                          >
                            <h4 style="padding-top:15%;">
                              {{ article.title }}
                            </h4>
                          </b-col>
                          <b-col
                            cols
                            style="padding:10px;"
                            class="text-center addimg"
                          >
                            <img :src="article.img" />
                          </b-col>
                        </b-row>
                      </b-container>
                    </div>
                  </div>
                </div>
                <p v-else>No articles found.</p>
              </div>
            </template>
          </b-col>
        </b-row>
      </b-container>
    </div>
     <div>
      <h3 style="color:white;" class="pop-img">
        {{ $t("kovhome.join.title") }}
      </h3>
      <b-container>
        <b-row>
          <b-col lg="12 text-left">
            <p style="color:black;text-align:left;font-weight:400;font-size:16px;">
              <ul style="color:#2c3e50;text-align:left;font-weight:500;font-size:18px;">
               <li>{{ $t("kovhome.join.bullet1") }}</li>
               <li>{{ $t("kovhome.join.bullet2") }}</li>
               <li>{{ $t("kovhome.join.bullet3") }}</li>
               <li>{{ $t("kovhome.join.bullet4") }}</li>
                <!--b-list-group-itemVestibulum at eros</li> -->
              </ul>
            </p>
            
          </b-col>
        </b-row>
		<b-button
              class="btn-color" style="font-size:16px !important;"
              target="blank"
              href="https://business.kovered.io/en"
              >{{ $t("kovhome.join.btn") }}</b-button
            >
      </b-container>
    </div>
   
   
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
export default {
  name: "Home",
  
  mounted()
  {
  
                window.scrollTo(0,0);
           
           },
  data() {
    return {
    profilemsg:false,
    errorEmail:'',
     reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    
      showmodal: false,
      modaltitle: null,
      isLoading: false,
      slide: 0,
      sliding: null,
    
      searchQuery: "",
      datesArticles: {
        "September, 2016": [
          {
            title: "Download Kovered App",
            id: "1",
            img: "/static/img/download app images 300.png"
          },
          {
            title: "Choose Category",
            id: "2",
            img: "/static/img/category 300.png"
          }
        ],
        "April, 2016": [
          {
            title: "Choose Nearby Professional",
            id: "3",
            img: "/static/img/nearby 300.png"
          },
          {
            title: "Book an Appointment",
            id: "4",
            published_at: "02.04.2016.",
            img: "/static/img/appointment 300.png"
          }
        ],
        "December, 2015": [
          {
            title: "Consult a Specialist",
            id: "5",
            published_at: "25.12.2015.",
            img: "/static/img/consalt 300.png"
          },
          {
            title: "Rate US",
            id: "6",
            teaser: "one",
            published_at: "01.12.2015.",
            img: "/static/img/Rate us 300.png"
          }
        ]
      },
      yogalink: null,
      nurselink: null,
      parmacy: null,
      diet: null,
      token: this.$route.params.token,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "role", "service_provider"]),
    ...mapState(["user"]),
    searchedArticles() {
      var searchRegex = new RegExp(this.searchQuery, "i");
      var searchedObj = {};

      if (this.searchQuery == "") {
        return this.datesArticles;
      }

      for (var date in this.datesArticles) {
        searchedObj[date] = this.datesArticles[date].filter(article => {
          return (
            searchRegex.test(article.title) ||
            searchRegex.test(article.teaser) ||
            searchRegex.test(article.published_at) ||
            searchRegex.test(date)
          );
        });
      }
      return searchedObj;
    }
  },
  components: {
    Loading
  },
  methods: {
  
  unSubscribe()
  {
  var self=this;
  axios
          .post("Unsubscribed", {token:self.token,id:self.id})
          .then(function(response) {
             alert('You are now unsubscribed the kovered.');
             self.$router.push('/en');

          })
          .catch(function(error) {
            console.log(error);
          });
  },
  subscriptionClose()
  {
 this.subscribe=false;
  },
    modal(data, link, linknurse, linkdiet, linkphar) {
      console.log("fhkgfs uisdf usdfjhsdfu");
      this.showmodal = true;
      this.modaltitle = data;
      this.yogalink = link;
      this.nurselink = linknurse;
      this.parmacy = linkphar;
      this.diet = linkdiet;
      console.log(data, this.modaltitle, "fjfjfj", this.showmodal);
    },
    anyArticle() {
      return this.countAllArticles() ? true : false;
    },
    countAllArticles() {
      var count = 0;
      for (var date in this.searchedArticles) {
        count += this.searchedArticles[date].length;
      }
      return count;
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    logout() {
      const self = this;
      this.isLoading = true;
      self.$store.dispatch("AUTH_LOGOUT").then(() => {
        self.isLoading = false;
        self.$router.push("/");
      });
    }
  },
  created() {
   //if (!this.$session.exists())
 //  {
  //      this.$session.start();
  //      if(!this.token)
 //   this.subscribe=true;
 //   else
 //   this.unSubscribe();
 // }
//if(this.isAuthenticated && this.role === 'user')
//{
//var self=this;
//  axios
//          .get("user/getuserprofilemsg")
//          .then(function(response) {
          
 //          if(response.data.msg)
 //          { 
 //          self.profilemsg=true; }
 //         })
 //         .catch(function(error) {
 //           console.log(error);
 //         });
//}

   }
   
};
</script>
<style scoped>
.subscribe {
   background-color: red !important;
}
/* map */
.braga:hover {
  transition: fill 0.3s ease-out;
  fill: deepPink;
}
.showmodal {
  border: 2px solid #4ab0c3;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
/* map end */
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}
area:hover {
  border: 3px solid black;
}
.bv-example-row {
  background-image: url("../assets/background/Home-page-1.jpg");
  height: auto;
}
.kov-backimg {
  background-image: url("../assets/frontend/backgrnd.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-bottom: 3%;
  height: 650px;
}
.h3head {
  /* background-color: #4ab0c3; */
  background-image: url("../assets/frontend/book.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
}
.card-div {
  background-color: #4ab0c3;
  border: 0px;
  border-radius: 0px;
  position: absolute;
  bottom: 0%;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  padding: 3px;
}
.card-body {
  padding: 0%;
}
.how {
  padding: 10px;
}
.pop-img {
  background-image: url("../assets/frontend/pattern.png");
  background-size: 65% 70%;
  background-repeat: no-repeat;
  height: 110px;
  text-align: left;
  padding-left: 15%;
  padding-top: 20px;
  font-weight: 700;
  color: white;
  /* text-transform: capitalize; */
  margin: 0%;
}
img {
  width: 500px;
}
.about-kov {
  height: 380px;
  width: 410px;
}
h4 {
  font-weight: 300;
}
.mob-kov {
  width: auto;
  height: auto;
}
.col {
  padding: 30px;
}
.text-left {
  color: black;
  text-align: center !important;
  font-size: 14px;
}
#about {
  margin-top: 3%;
}
.mapimg {
  background-image: url("../assets/frontend/map.png");
  background-size: 100%;
  height: 1000px;
}
.card-img {
  background-image: url("/static/img/doctor.png");
  background-size: 210px 200px;
  height: 220px;
  padding-top: 90px;
  background-repeat: no-repeat;
  /* max-width: 50%; */
}
.near-img img {
  width: 100px;
  height: 80px;
  margin-bottom: 40px;
}
.cardimghos {
  background-image: url("/static/img/hos.png");
  background-size: 90% 90%;
  height: 220px;
  padding-top: 90px;
  background-repeat: no-repeat;
  margin: 0% !important;
}
.card-img2 {
  background-image: url("../assets/frontend/clinic.png");
  background-size: 90% 90%;
  height: 220px;
  padding-top: 90px;
  background-repeat: no-repeat;
  margin: 0% !important;
}
.card-img3 {
  background-image: url("../assets/frontend/pharme.png");
  background-size: 90% 90%;
  height: 220px;
  padding-top: 90px;
  background-repeat: no-repeat;
  margin: 0% !important;
}
.btn-color {
  background-color: #4ab0c3 !important;
  border: none;
  outline: #4ab0c3;
  /* height: 38px; */
  font-size: 18px;
  display: block;
  /* width: auto; */
  font-weight: 700;
  border-radius: 0px;
  color: white;
}
.btn-color :hover {
  background-color: #ffffff;
}

@media (max-width: 600px) {
  .col {
    padding: 20px;
  }
  img {
    width: 300px;
  }
  .kov-backimg {
    height: 100%;
  }
  .flip-card {
    width: auto;
    height: auto;
  }
}
@media (max-width: 1200px) {
}
@media (max-width: 780px) {
  /* .hide {
    display: none;
  } */
}
@media (min-width: 1400px) {
  .row {
    /* margin-left: 20px; */
    /* margin-right: 70px; */
    background-size: 200px 80px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
h2 {
  font-weight: 600;
}
.appimg {
  border-radius: 7px;
}
.margin {
  margin-top: 12%;
  margin-bottom: 40px;
  text-align: left;
}
.bv-example-row {
  background-image: url("../assets/background/Home-page-1.jpg");
  background-size: 100% 100%;
  height: auto;
  padding-bottom: 10%;
}
.mobile-back {
  background-image: url("../assets/background/hom1.jpg");
  background-size: 100% 100%;
  padding-bottom: 140px;
}
.list {
  background-image: url("../assets/background/Home-page-3.jpg");
  background-size: 100%;
  padding: 5%;
}
.join {
  background-image: url("../assets/background/Home-page-4.jpg");
  background-size: 100% 100%;
  padding: 5%;
  height: auto;
}
.search {
  background-image: url("../assets/background/Home-page-5.jpg");
  background-size: 100% 100%;
  padding: 3%;
}
.b-table {
  background-color: white;
  padding: 20px;
  opacity: 0.8;
}
.btn-color {
  background: #4ab0c3;
  border: #76c2d0 1px solid;
  box-shadow: 3px 4px 2px 2px #cacdcf;
}
h4 {
  font-weight: 300;
}
.kov_row-3 {
  width: 100%;
  margin-bottom: 20px;
  margin-bottom: 20px;
}
.Kov_fit {
  margin: 8px;
  height: 90px;
  text-align: center !important;
  padding-top: 20px;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
}
.medical {
  background-image: url("../assets/homepage-tiles/button_medical.svg");
  background-size: 270px 100px;
  height: 100px;
}
.medical2 {
  background-image: url("../assets/services/medical2.jpg");
  background-size: 270px 80px;
  /* height: 100px; */
}
.health {
  background-image: url("../assets/homepage-tiles/button_health_wellbeing.svg");
  background-size: 270px 100px;
  height: 100px;
}
.health2 {
  background-image: url("../assets/services/health&wellness.jpg");
  background-size: 270px 80px;
}
.near {
  background-image: url("../assets/homepage-tiles/button_nearby.svg");
  background-size: 270px 100px;
  height: 100px;
}
.near2 {
  background-image: url("../assets/services/NearBy.jpg");
  background-size: 270px 100px;
}
.vc {
  background-image: url("../assets/homepage-tiles/video_camera.svg");
  background-size: 270px 100px;
  height: 100px;
}
.vc2 {
  background-image: url("../assets/services/vc1.jpg");
  background-size: 270px 100px;
}
.Pharmacy {
  background-image: url("../assets/homepage-tiles/button_pharmacy.svg");
  background-size: 270px 100px;
  height: 100px;
}
.Pharmacy2 {
  background-image: url("../assets/services/pharmacy.jpg");
  background-size: 270px 80px;
  /* height: 100px; */
}
.fitness {
  background-image: url("../assets/homepage-tiles/button_fitness.svg");
  background-size: 270px 100px;
  height: 100px;
}
.fitness2 {
  background-image: url("../assets/services/Fitness.jpg");
  background-size: 270px 80px;
}
.alternative {
  background-image: url("../assets/homepage-tiles/button_alternative.svg");
  background-size: 270px 100px;
  height: 100px;
}
.alternative2 {
  background-image: url("../assets/services/Alt-new.png");
  background-size: 270px 80px;
}
.senior {
  background-image: url("../assets/homepage-tiles/button_home_nursing.svg");
  background-size: 270px 100px;
  height: 100px;
}
.senior2 {
  background-image: url("../assets/services/home_nursing.jpg");
  background-size: 270px 80px;
}
.list-items a {
  color: black;
  font-weight: 700;
  font-size: 20px;
}
.search1 {
  width: 100%;
  height: 100%;
  padding-top: 32px;
}
.search2 {
  width: 100%;
  height: 100%;
  padding-top: 53px;
}
.near-mar {
  padding: 1px;
}
@media (max-width: 990px) {
  .pop-img {
    background-size: 100% 90%;
    font-weight: 700;
    padding-top: 33px;
    font-size: 28px;
  }
  .kov-backimg {
    height: 850px;
  }
  .near-mar {
    margin-left: 7px;
    padding: 2px;
  }
  .about-kov {
    height: 300px;
    width: 300px;
  }
  .mob-kov {
    width: 180px;
    height: auto;
  }
  .margin {
    margin-top: 30px;
  }
  .card-img {
    background-image: url("/static/img/doctor.png");
    background-size: 90% 90%;
    /* height: 220px; */
    padding-top: 90px;
    background-repeat: no-repeat;
    margin: 0% !important;
  }
  .cardimghos {
    background-image: url("/static/img/hos.png");
    background-size: 90% 90%;
    /* height: 220px; */
    padding-top: 90px;
    background-repeat: no-repeat;
    margin: 0% !important;
  }
  .card-img2 {
    background-image: url("../assets/frontend/clinic.png");
    background-size: 90% 90%;
    /* height: 220px; */
    padding-top: 90px;
    background-repeat: no-repeat;
    margin: 0% !important;
  }
  .card-img3 {
    background-image: url("../assets/frontend/pharme.png");
    background-size: 90% 90%;
    /* height: 220px; */
    padding-top: 90px;
    background-repeat: no-repeat;
    margin: 0% !important;
  }
  .Kov_fit {
    width: 100%;
    background-size: 100%;
  }
  .kov_row-3 {
    margin-left: 0px !important;
    margin-right: 0px !important;
    text-align: center;
  }

  .flip-card {
    background-color: transparent;
    height: 70px;
    perspective: 1000px;
  }
}
@media (max-width: 1200px) {
  .kov_row-3 {
    /* margin-left: 100px; */
    /* margin-right: 70px; */
    background-size: 200px 80px;
  }
}
@media (max-width: 990px) {
  .mobile-back,
  .join,
  .list {
    display: none;
  }
  .Kov_fit {
    padding-left: 0px;
    padding-right: 0px;
  }
  /* .kov_row-3 {
    margin-left: 40px;
    margin-right: 70px;
  } */
}
@media (max-width: 1400px) {
  .kov_row-3 {
    margin-left: 40px;
    /* margin-right: 70px; */
    background-size: 200px 80px;
  }
}
@media (max-width: 1540px) {
  .kov_row-3 {
    margin-left: 40px;
    /* margin-right: 70px; */
    background-size: 200px 80px;
  }
}
@media only screen and (max-width: 1229px) and (min-width: 996px) {
  .kov_row-3 {
    margin-left: 75px;
  }
}
@media only screen and (max-width: 1500px) and (min-width: 1230px) {
  .kov_row-3 {
    /* margin-left: 90px; */
    margin-right: 45px;
  }
}
@media only screen and (max-width: 1701px) and (min-width: 1501px) {
  .kov_row-3 {
    margin-left: 90px;
  }
}
a {
  text-decoration: none !important;
}
/* flip */
.flip-card {
  background-color: transparent;
  width: 270px;
  height: 100px;
  perspective: 1000px;
  background-position-y: 100%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2); */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: black;
}

.flip-card-back {
  margin-left: 6px;
  background-color: #4ab0c3;
  color: white;
  transform: rotateY(180deg);
  height: 90px;
  width: 90%;
}
​.animate {
  height: 100px;
  width: 100px;
  background-color: #c00;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: absolute;
  left: 0; /*or bottom, top, right*/
}
/* how it works */
.search-box {
  padding: 10px;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 5px;
}

.timeline {
  position: relative;
  border-left: 3px solid #47d0ee;
}

.date {
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  left: 15px;
  margin: 15px 0;
}
.date::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -16px;
  border: 1px solid black;
  width: 14px;
}

.article {
  position: relative;
  left: 20px;
  box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  /* padding: 10px; */
  margin: 12px 0;
  font-weight: 700;
  background-color: white;
}

a {
  color: green;
  text-decoration: none;
}
img {
  width: 200px;
  height: 200px;
}

.article-date {
  font-weight: 300;
  font-size: 14px;
}
.dot {
  display: block;
  color: white;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #080808c4;
  border: 2px dotted #080808c4;
  left: -36.5px;
  top: calc(50% - 5px);
}
.dot:hover {
  background: green;
}
.article:hover {
  box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.4);
  background-color: rgb(240, 236, 236);
}
@media (max-width: 600px) {
  .kov-backimg {
    height: 1150px;
  }
  .margin-pop {
    margin-top: 4%;
  }
  .btn-color {
    height: auto;
  }
  .col {
    padding: 8px;
  }
  .flip-card {
    width: auto;
  }
  .kov_col {
    padding-right: 15px;
    /* padding-left: 0px; */
  }
  .search2 {
    width: 100%;
    height: 100%;
    padding-top: 53px;
  }
  .pop-img {
    background-size: 100% 90%;
    font-weight: 700;
    padding-top: 38px;
    font-size: 20px;
  }
  .extra {
    padding-top: 28px;
  }
  .hide {
    display: none;
  }
}
@media (max-width: 320px) {
  .pop-img {
    background-size: 100% 90%;
    font-weight: 700;
    padding-top: 28px;
    font-size: 20px;
  }
  .extra {
    padding-top: 24px;
  }
  .extra2 {
    padding-top: 30px;
  }
}
.modal-body {
  /* background-color: red !important; */
}
.modal {
   background : rgba(34,36,38,.15) !important; 
}
</style>
