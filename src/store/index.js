import Vue from "vue";
import Vuex from "vuex";
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    Data : {
        userId: '',
        password: '',
    },
    loginData:{
        Id:'',
        accesstoken:'',
    },
    groupData:{
      Id:'',
    },
    isLogin: false,
    isLoginError: false,
    grouplist:[],
    memberlist:[],
    Noticelist:[],
    Schedule:[],
    Notice:{
      contents: '',
      date: '',
      memberId: '',
      name: '',
      noticeId: '',
      title: ''
    },
    invite:{}
  
  },
  getters:{
    fetchedUser(state) {
      return state.loginData;
    },
    fetchedGrouplist(state) {
      return state.grouplist;
    },
    fetchGroup(state){
      return state.groupData;
    },
    fetchMember(state){
      return state.memberlist;
    },
    fetchedNoticelist(state){
      return state.Noticelist;
    },
    fethcedNotice(state){
      return state.Notice;
    },
    fetchSchedule(state) {
      return state.Schedule;
    },
    fetchInvite(state) {
      return state.invite;
    }
  },

  // state값을 변화시키는 로직
  mutations,
  // 비즈니스 로직
  actions,
  modules: {},
});