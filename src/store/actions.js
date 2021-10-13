import router from "../router/index.js";
import store from '../store/index.js';
import { login } from '../api/loginapi';
import { creategroup, grouplist, groupmain,inviteworker,createNotice,listNotice,Noticecontent,updataeNotice,createschedule,fetchSchedule
        ,deleteNotice,logout } from '../api/companyapi'

export default {
        // 로그인 시도
        FETCH_LOGIN({ commit }, loginObj) {
          commit('SET_LOGIN',loginObj);
          login(JSON.stringify(this.state.Data))
            .then(response => {
            commit ('SET_LOGINDATA',response.data);
            // router.push({ name:"GroupList"});
            router.push({ path:`/GroupList/${this.state.loginData.Id}`});
            // grouplist(this.state.loginData.Id)
            //               .then((response) => {   
            //                 commit('SET_GROUPLIST',response.data);                         
            //                 console.log(this.state.grouplist);
            //               })
          })
          .catch(function (error) {
            console.log(error);
          });
        },
       

        logout({ commit }) {
          commit("logout");
          router.push({ name: "MainContent" });
          logout(store.state.loginData.Id)
          
        },
        // 그룹생성
        CREATE_GROUP({commit},data) {
          const payload =  {
              name : data.form.Name,
              location: data.form.address,
              businessRegistrationNumber: data.form.Number }
              
              creategroup(JSON.stringify(payload),store.state.loginData.Id)
                          .then((response) => {   
                          commit('PLUS_GROUP',payload);                         
                          console.log(response);
                          }).catch(error => {
                                  return console.log(error.response)
                              });
      },
      // 그룹리스트 
      Fetch_Grouplist({commit},userId) {
          grouplist(parseFloat(userId))
                          .then((response) => {   
                            commit('SET_GROUPLIST',response.data);                         
                            console.log(this.state.grouplist);
                          })
      },

      // 멤버 리스트
      Fetch_Member({commit},groupId){
        groupmain(this.state.loginData.Id,groupId)
                            .then((response) =>{
                            commit('SET_MEMBER',response.data)
                          }).catch(error => {
                            return console.log(error.response)
                        });
      },
      
      Fetch_Group({commit},groupId){
        commit('SET_GROUP',groupId)
      },

      //멤버초대
      FIND_inviteMember(state,data){
        const payload =  {
          userId : data
        }
        console.log(data);
        console.log(payload);
        const groupId = this.state.groupData;
        inviteworker(groupId,JSON.stringify(payload))
          .then((response) =>{
            console.log(payload)
            console.log(response.data)
          }).catch(error => {
            return console.log(error.response)
        });
      },

      // NOTICE 생성
      CREATE_NOTICE(state,data){
        const payload = {
          title : data.title,
          contents: data.contents,
          image: data.image
        }
        console.log ("data"+JSON.stringify(payload))
        
        createNotice(this.state.loginData.Id,this.state.groupData,JSON.stringify(payload))
         .then((response) =>{
            console.log(response.data)
          }).catch(error => {
            return console.log(error.response)
        });
      },
      
      Fetch_Notice({commit},data){
        listNotice(this.state.groupData,data)
          .then((response) => {
            console.log(response.data)
            commit('SET_NOTICELIST',response.data)
          }).catch(error => {
            return console.log(error.response)
        });
      },

      Fetch_Noticecontent({commit},data){
        Noticecontent(data)
          .then((response) =>{
            console.log(response.data)
            commit('SET_NOTICE',response.data)
          }).catch(error => {
            return console.log(error.response)
        });
      },

      UpdateNotice(state,data){
        const payload = {
          noticeId : data.noticeId,
          title : data.title,
          contents: data.contents,
          imageList: data.imagelist
        }
        console.log(JSON.stringify(payload))
        updataeNotice(JSON.stringify(payload))
          .then((response) => {
            console.log(response.data)
          }).catch(error => {
            return console.log(error.response)
        });
      },

      RemoveNotice(state,noticeId){
        deleteNotice(noticeId)
      },

      //schedule
      Create_Schedule({commit},data){
        const  payload = {
          workSchedule : data.workSchedule,
          date : data.date
        }
        createschedule(JSON.stringify(data)).
          then((response) =>{
            commit('SET_Schedule',payload)
            console.log(response.data)
          }).catch(error => {
            return console.log(error.response)
        });
      },

      Fetch_Schedule({commit},date){
        fetchSchedule(this.state.groupData,date)
          .then((response) =>{
            const  payload = {
              date: date,
              workSchedule: response.data.workSchedule,
              id: response.data.id
            }
            commit('SET_Schedule',payload)
          }).catch(error => {
            return console.log(error.response)
        });
      }
      
      
      

      
      
}