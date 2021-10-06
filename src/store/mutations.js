export default {
      // 로그인이 실패했을 때.
      loginError(state) {
        state.isLogin = false;
        state.isLoginError = true;
      },
      logout(state) {
        state.isLogin = false;
        state.isLoginError = false;
        state.userInfo = null;
      },
      SET_LOGIN(state,data) {
          state.Data.userId = data.email;
          state.Data.password = data.password;
      },
      SET_LOGINDATA(state,data) {
        state.loginData.Id = data.id;
        state.loginData.accesstoken = data.accessToken;
        state.isLogin = true;
        state.isLoginError = false;
      },
      SET_GROUPLIST(state,data) {
        // state.grouplist.push(data);
        state.grouplist = data;
      },      
      PLUS_GROUP(state) {
        state.grouplist;
      },
      SET_MEMBER(state,data){
        state.memberlist = data;
      },
      SET_GROUP(state,data){
        state.groupData = data;
      },
      SET_INVITEMEMBER(state){
        state.groupData;
      },
      SET_NOTICELIST(state,data){
        state.Noticelist = data;
      },
      SET_NOTICE(state,data){
        state.Notice.contents = data.contents;
        state.Notice.title = data.title;
        state.Notice.noticeId = data.noticeId;
        state.Notice.date = data.date;
        state.Notice.memberId = data.memberId;
        state.Notice.name = data.name;
        
      }
      
      
}