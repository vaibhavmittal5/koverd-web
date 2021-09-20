import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/MainPage";
import Home from "@/components/Home";
import Sponsors from "@/components/Sponsors";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Terms from "@/components/Terms";
import Appointments from "@/components/Appointments";
import Favourites from "@/components/Favourites";
import Notifications from "@/components/Notifications";
import Special from "@/components/Speciality";
import Insurances from "@/components/Insurances";
import MedicalHistory from "@/components/MedicalHistory";
import Service from "@/components/Service";
import UserInsurance from "@/components/UserInsurance";
import Profile from "@/components/Profile";
import Search from "@/components/Search";
import NavSearch from "@/components/NavSearch";
import ServiceNew from "@/components/ServiceNew";
import Services from "@/components/Services";
import ForgotPassword from "@/components/ForgotPassword";
import RecoverPassword from "@/components/RecoverPassword";
import EmailVerification from "@/components/EmailVerification";
import store from "../store";
import NotFound from "@/components/NotFound";
import RegisterEmployee from "@/components/RegisterEmployee";
import LoginEmployee from "@/components/LoginEmployee";
import EmailVerificationEmployee from "@/components/EmailVerificationEmployee";
import ProfileEmployee from "@/components/ProfileEmployee";
import TermsEmployee from "@/components/TermsEmployee";
import NewPartner from "@/components/NewPartner";
import ManageBranch from "@/components/ManageBranch";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Howitwork from "@/components/Howitwork";
import Whatit from "@/components/Whatit";
import Location from "@/components/SearchLocation";
import Rating from "@/components/SearchRating";
import SearchDoctors from "@/components/SearchDoctors";
import VideoConsultation from "@/components/VideoConsultation";
import Doctors from "@/components/Doctors";
import SearchHospital from "@/components/SearchHospital";
import SearchFacilities from "@/components/SearchFacilities";
import SearchVideoConsultation from "@/components/SearchVideoConsultation";
import SearchOnlineDoctors from "@/components/SearchOnlineDoctors";
import LoginenableX from "@/components/LoginenableX.vue";
import Room from "@/components/Room.vue";
import LoginfromApp from "@/components/loginfromApp.vue";
import Por from "@/components/por-todos";
import LoginfromMail from "@/components/loginfromMail.vue";
import Feedback from "@/components/Feedback.vue";
import Blogs from "@/components/blogs.vue";
import BlogPostDetails from "@/components/blogpostdetails.vue";
import i18n from "../i18n";
import testsearch from "@/components/SearchBar.vue";
import symptomssearch from "@/components/SymptomsBar.vue";
import OnlineDoctors from "@/components/OnlineDoctors.vue";
import UserConfirmAppointmentFromMail from "@/components/UserConfirmAppointmentFromMail.vue";
import UserAppointmentDocs from "@/components/UserAppointmentDocs.vue";
import Payment from "@/components/Payment.vue";
import PaymentAfterBooking from "@/components/PaymentAfterBooking.vue";
Vue.use(Router);

const guestOnly = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    document.title = to.name;
    next();
    return;
  }
  next({
    path: "/",
    
  });
};

const requiresAuth = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    // If is set role middleware
    if (to.meta.role && !to.meta.role.includes(store.getters.role)) {
      next({
        path: "/",
        redirect: `/${i18n.locale}`
      });
      return;
    }
    document.title = to.name;
    next();
    return;
  }
  next({
    path: "login",
    query: { redirect: to.fullPath }
  });
};

const serviceProviderOnly = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (store.getters.service_provider) {
      document.title = to.name;
      next();
      return;
    }
    next({
      path: "/"
    });
  }
  next({
    path: "/employee/login",
    query: { redirect: to.fullPath }
  });
};

const defaultRoute = (to, from, next) => {
  document.title = to.name;
  next();
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: "/por-todos",
      name: "Por-todos",
      component: Por,
      beforeEnter: defaultRoute
    },

    {
      path: "/:lang",
     //path : `/${i18n.locale}`,
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "user/callback",
          component: {
            template: '<div class="auth-component"></div>'
          }
        },
        {
         path: "/:lang",
          //path : `/${i18n.locale}`,
          name: "Kovered",
          component: Home,
         beforeEnter: defaultRoute
        },
        {
          path: "/en/:token/:id/unsubscribe",
          name: "Kovered",
          component: Home,
          beforeEnter: defaultRoute
        },
        {
          path: "testsearch",
          name: "testsearch",
          component: testsearch,
          beforeEnter: defaultRoute
        },
        {
          path: "symptomssearch",
          name: "symptomssearch",
          component: symptomssearch,
          beforeEnter: defaultRoute
        },
        {
          path: "por-todos",
          name: "Por-todos",
          component: Por,
          beforeEnter: defaultRoute
        },

        {
          path: "contact",
          name: "contact",
          component: Contact,
          beforeEnter: defaultRoute
        },
		 
		{
          path: "blogs",
          name: "blogs",
          component: Blogs,
          beforeEnter: defaultRoute
        },
		
		{
			path: "blog-post-details/:pid/:user/",
		  name: "BlogPostDetails",
          component: BlogPostDetails,
          beforeEnter: defaultRoute
		 
		  },
        {
          path: "sponsors",
          name: "sponsors",
          component: Sponsors,
          beforeEnter: defaultRoute
        },
        {
          path: "about",
          name: "about",
          component: About,
          beforeEnter: defaultRoute
        },
        {
          path: "Howitwork",
          name: "Howitwork",
          component: Howitwork,
          beforeEnter: defaultRoute
        },
        {
          path: "Whatit",
          name: "Whatit",
          component: Whatit,
          beforeEnter: defaultRoute
        },
        {
          path: "Speciality",
          name: "Special",
          component: Special,
          beforeEnter: defaultRoute,
          props: route => ({
            specialityId: route.query.specialityId
          })
        },
        {
          path: "Doctors",
          name: "Doctors",
          component: Doctors,
          props: route => ({
            city: route.query.city,
            country: route.query.country,
            categoryId: route.query.categoryId,
            specialityId: route.query.specialityId,
            language: route.query.language,
            insuranceId: route.query.insuranceId,
            start: route.query.start,
            inc: route.query.inc,
            categoryName: route.query.categoryName,
             lat: route.query.latitude,
      long: route.query.longitude
          })
        },
        {
          path: "searchvideoconsultation",
          name: "SearchVideoConsultation",
          component: SearchVideoConsultation,
          props: route => ({
            city: route.query.city,
            country: route.query.country,
            categoryId: route.query.categoryId,
            specialityId: route.query.specialityId,
            language: route.query.language,
            insuranceId: route.query.insuranceId,
            start: route.query.start,
            inc: route.query.inc,
            lat: route.query.latitude,
      long: route.query.longitude
          })
        },
         {
          path: "searchonlinedoctors",
          name: "SearchOnlineDoctors",
          component: SearchOnlineDoctors,
          props: route => ({
            city: route.query.city,
            country: route.query.country,
            start: route.query.start,
            inc: route.query.inc,
            lat: route.query.latitude,
            long: route.query.longitude
          })
        },
        {
          path: "search-home",
          name: "MainPage",
          component: MainPage,
          beforeEnter: defaultRoute,
		   
          props: route => ({
            categoryId: route.query.categoryId
          })
        },
        {
          path: "search-facilities",
          name: "SearchHospital",
          component: SearchHospital,
          beforeEnter: defaultRoute,
          props: route => ({
            category: route.query.category
          })
        },
        {
          path: "search-location",
          name: "Location",
          component: Location,
          beforeEnter: defaultRoute,
          props: route => ({
            locationid: route.query.locationid
          })
        },
        {
          path: "search-ratings",
          name: "Rating",
          component: Rating,
          beforeEnter: defaultRoute
        },
        {
          path: "search-video-consultation",
          name: "VideoConsultation",
          component: VideoConsultation,
          beforeEnter: defaultRoute
        },
         {
          path: "online-doctors",
          name: "OnlineDoctors",
          component: OnlineDoctors,
          beforeEnter: defaultRoute
        },
        {
          path: "search-doctors",
          name: "SearchDoctors",
          component: SearchDoctors,
          beforeEnter: defaultRoute
        },
        {
          path: "login",
          name: "Login",
          component: Login,
          beforeEnter: guestOnly,
          props: route => ({
            slots: route.query.slots,
            remark: route.query.remark,
            service: route.query.service,
            checked: route.query.checked,
            slot_name: route.query.slot_name,
            date: route.query.date
          })
        },
        {
          path: "UserConfirmAppointmentFromMail/:token/:id/:status",
          name: "UserConfirmAppointmentFromMail",
          component: UserConfirmAppointmentFromMail,
          beforeEnter: defaultRoute,
        },
        {
          path: "register",
          name: "Register",
          component: Register,
          beforeEnter: guestOnly
        },
        {
          path: "password/:type/reset",
          name: "Recover Password",
          component: ForgotPassword,
          beforeEnter: guestOnly
        },
        {
          path: ":type?/password/reset/:token",
          name: "Recover Password - Change your password",
          component: RecoverPassword,
          beforeEnter: guestOnly
        },
        {
          path: "verify/:token",
          name: "Verify your e-mail",
          component: EmailVerification,
          beforeEnter: guestOnly
        },
        {
          path: "/terms",
          name: "Terms",
          component: Terms,
          beforeEnter: defaultRoute
        },
        {
          path: "/employee/terms",
          name: "Employee Terms",
          component: TermsEmployee,
          beforeEnter: defaultRoute
        },
        {
          path: "appointments",
          name: "Appointments",
          component: Appointments,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "payment",
          name: "Payment",
          component: Payment,
         beforeEnter: defaultRoute,
      
          props: route => ({
            slots: route.query.slots,
            date: route.query.date,
            is_medical_history:route.query.is_medical_history,
            service:route.query.service,
            consultation_type:route.query.consultation_type,
            home_visit_address:route.query.home_visit_address,
            branch_name:route.query.branch_name,
            branch_id:route.query.branch_id,
            profile_pic:route.query.profile_pic,
            type:route.query.type,
            attachment:route.query.attachment,
            display:route.query.display,
            remarks:route.query.remarks,
            user_name:route.query.user_name,
            user_email:route.query.user_email,
            user_contact:route.query.user_contact,
           tax_per:route.query.tax
          })
         
        },
        {
          path: "payment-after-booking",
          name: "PaymentAfterBooking",
          component: PaymentAfterBooking,
         beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          },
      
          props: route => ({
            appointment_id:route.query.appointment_id,
            start_time: route.query.start_time,
            date: route.query.date,
            is_medical_history:route.query.is_medical_history,
            service:route.query.service,
            consultation_type:route.query.consultation_type,
            home_visit_address:route.query.home_visit_address,
            branch_name:route.query.branch_name,
            branch_id:route.query.branch_id,
            profile_pic:route.query.profile_pic,
            type:route.query.type,
            attachment:route.query.attachment,
            remarks:route.query.remarks,
            tax_per:route.query.tax 
          })
         
        },
        {
          path: "favourites",
          name: "Favourites",
          component: Favourites,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "notifications",
          name: "Notifications",
          component: Notifications,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "video-conferencing/:appointmentId",
          name: "Video",
          component: LoginenableX,
          beforeEnter: defaultRoute,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "VideoCallLoginFromApp",
          name: "LoginfromApp",
          component: LoginfromApp,
          beforeEach: defaultRoute,
        },
		 {
          path: "VideoCallLoginFromMail/:videoconferencingID",
          name: "LoginfromMail",
          component: LoginfromMail,
          beforeEach: defaultRoute,
        },
		{
          path: "Feedback/Mail/:id/:vcid",
          name: "Feedback",
          component: Feedback,
          beforeEach: defaultRoute,
        },
        {
          path: "confo/:userType/:userRef/:random/:appointment_id",
          name: "VideoRoom",
          component: Room,
           
        },
        {
          path: "insurances",
          name: "Insurances",
          component: Insurances,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "medical-history",
          name: "MedicalHistory",
          component: MedicalHistory,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "providers/:id/:name",
          name: "Service",
          component: Service,
          beforeEnter: defaultRoute,
          props: route => ({
            slots: route.query.slots,
            remark: route.query.remark,
            service: route.query.service,
            checked: route.query.checked,
            slot_name: route.query.slot_name,
            date: route.query.date,
            video_consultation:route.query.video_consultation,
          })
        },
        {
          path: "userappointment/docs/:value",
          name: "UserAppointmentDocs",
          component: UserAppointmentDocs,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
          
        },

        {
          path: "providers/:id/:consultationtype/:name",
          name: "Service",
          component: Service,
          beforeEnter: defaultRoute,
          props: route => ({
            slots: route.query.slots,
            remark: route.query.remark,
            service: route.query.service,
            checked: route.query.checked,
            slot_name: route.query.slot_name,
            date: route.query.date,
            video_consultation:route.query.video_consultation,
          })
        },
         
        {
          path: "/user/insurance/:id",
          name: "UserInsurance",
          component: UserInsurance,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },
        {
          path: "user/profile",
          name: "User Profile",
          component: Profile,
          beforeEnter: requiresAuth,
          meta: {
            role: ["user"]
          }
        },

        {
          path: "/employee/register",
          name: "Employee Register",
          component: RegisterEmployee,
          beforeEnter: guestOnly
        },
        {
          path: "/employee/login",
          name: "Employee Login",
          component: LoginEmployee,
          beforeEnter: guestOnly
        },
        {
          path: "/employee/verify/:token",
          name: "Employee Verification",
          component: EmailVerificationEmployee,
          beforeEnter: guestOnly
        },
        // -------------- Employee ------------
        {
          path: "/employee/profile",
          name: "Employee Profile",
          component: ProfileEmployee,
          beforeEnter: requiresAuth,
          meta: {
            role: ["employee"]
          }
        },
        {
          path: "/services",
          name: "My Services",
          component: Services,
          beforeEnter: requiresAuth,
          meta: {
            role: ["employee"]
          }
        },
        // -------------- service provider ------------
        {
          path: "/partner/new",
          name: "New partner",
          component: NewPartner,
          beforeEnter: serviceProviderOnly,
          meta: {
            role: ["employee"]
          }
        },
        {
          path: "/service/new",
          name: "Add service",
          component: ServiceNew,
          beforeEnter: serviceProviderOnly,
          meta: {
            role: ["employee"]
          }
        },
        {
          path: "/branch/:id/manage",
          name: "Manage branch",
          component: ManageBranch,
          beforeEnter: serviceProviderOnly,
          meta: {
            role: ["employee"]
          }
        },
        {
          path: "search",
          name: "Search",
          component: Search,
          props: route => ({
            city: route.query.city,
            country: route.query.country,
            categoryId: route.query.categoryId,
            specialityId: route.query.specialityId,
            language: route.query.language,
            insuranceId: route.query.insuranceId,
            start: route.query.start,
            inc: route.query.inc,
            categoryName: route.query.categoryName,
            ratingcountorder: route.query.ratingcountorder,
             lat: route.query.latitude,
      long: route.query.longitude
          })
        },
		
        {
          path: "navsearch",
          name: "NavSearch",
          component: NavSearch,
       
          props: route => ({
            city: route.query.city,
            country: route.query.country,
            categoryId: route.query.categoryId,
            specialityId: route.query.specialityId,
            language: route.query.language,
            insuranceId: route.query.insuranceId,
            start: route.query.start,
            inc: route.query.inc,
            categoryName: route.query.categoryName,
            ratingcountorder: route.query.ratingcountorder,
      searchtype: route.query.searchtype,
      searchid: route.query.searchid,
      lat: route.query.latitude,
      long: route.query.longitude,
      searchtext:route.query.searchtext,
          })
        },
        
        {
          path: "searchfacilities",
          name: "SearchFacilities",
          component: SearchFacilities,
          props: route => ({
            city: route.query.city,
            country: route.query.country,
            category: route.query.category,

            language: route.query.language,
            insuranceId: route.query.insuranceId,
            start: route.query.start,
            inc: route.query.inc,
            lat: route.query.latitude,
      long: route.query.longitude
          })
        },

        {
          path: "*",
          name: "NotFound",
          component: NotFound,
          props: true,
          beforeEnter: defaultRoute
        }
      ]
    }
  ]
});
