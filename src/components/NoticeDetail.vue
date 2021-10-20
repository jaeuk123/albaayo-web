<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
          </div>
          <div class="content-detail-content-info-left-subject">
              {{fethcedNotice.title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{fethcedNotice.name}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{fethcedNotice.date}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{fethcedNotice.contents}}
      </div>
      <div class="content-back-button">
        <b-button variant="outline-primary" router :to="{ name: 'Notice' }">뒤로가기</b-button>  
      </div>      
      <div class="content-detail-button-update">
        <b-button variant="primary" @click="updateData">수정</b-button>
      </div>
      <div class="content-detail-button-delete">
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';


export default {
  name: "NoticeDetail",
  components: {
  },
  

  data() {
    return {
      fethcedNotice:this.$store.state.Notice
    }
  },
  methods: {
    deleteData() {
      this.$store.dispatch('RemoveNotice',this.fethcedNotice.noticeId);
      this.$router.push({
        path: `/Notice/${this.fetchGroup}`
      })
      
    },
    updateData() {
      this.$router.push({
        path: `/Noticeupdate/${this.fethcedNotice.noticeId}`
      })
    }
  },
  created() {
    const Id = this.$route.params.contentId
     this.$store.dispatch('Fetch_Noticecontent',Id); 
     
     
  },
  computed:{
    ...mapGetters['fetchGroup','fethcedNotice']
  }

};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-left: 100px;
  margin-top: 25px;
}
.content-detail-content-info-left {
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 30px;
  padding-left: 30px;
  min-height: 500px;
  width: 1000px;
  margin-left: 100px;
}
.content-detail-button-update {
  /* border: 1px solid black; */
  margin-top: -70px;
  padding: 2rem;
  width: 1000px;
  margin-left: 935px;
}

.content-detail-button-delete {
  padding: 2rem;
  width: 1000px;
  margin-top: -102px;
  margin-left: 1010px;
}

.content-detail-comment {
  border: 1px solid black;
  margin-top: 5px;
  padding: 2rem;
  width: 1000px;
  margin-left: 100px;
}

.content-back-button {
  margin-left: 100px;
  margin-top: 20px;
}
</style>
