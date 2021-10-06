<template>
    <div>
        <div class="comment-item">
            <div class="comment-item-name">
                <div>{{name}}</div>
                <div>{{commentObj.created_at}}</div>
            </div>
            <div class="comment-empty-1"></div>
            <div class="comment-item-context">{{commentObj.context}}</div>
            <div class="comment-empty-2"></div>
            <div class="comment-item-button">
                <div class="empty-slot"></div>
                <div class="comment-update">
                    <b-button variant="outline-primary">수정</b-button>
                </div>
                <div class="comment-delete">
                <b-button variant="outline-primary">삭제</b-button>
                </div>
                <b-button variant="outline-primary" @click="subCommentToggle">덧글 달기</b-button>
            </div>
        </div>
        <template v-if="subCommentCreateToggle">
            <CommentCreate :isSubComment="true" :commentId="commentObj.comment_id" :reloadSubComments="reloadSubComments" :subCommentToggle="subCommentToggle"/>
        </template>
        <template v-if="subCommentList.length > 0">
            <div
              class="comment-item-subcomment-list"
              :key="item.subcomment_id"
              v-for="item in subCommentList"
            >
                <div class="comment-item-name">
                    <div>{{item.user_name}}</div>
                    <div>{{item.created_at}}</div>
                </div>
                <div class="comment-empty-1"></div>
                <div class="comment-item-context">{{item.context}}</div>
                <div class="comment-empty-2"></div>
                <div class="comment-item-button">
                    <div class="empty-slot"></div>
                    <b-button variant="outline-primary">수정</b-button>
                    <b-button variant="outline-primary">삭제</b-button>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import data from '@/data';
import CommentCreate from './CommentCreate';

export default {
    name: "CommentItem",
    props: {
        commentObj: Object
    },
    components: {
        CommentCreate
    },
    data() {
        return {
            name: data.User.filter(
                item => item.user_id === this.commentObj.user_id
            )[0].name, 
            subCommentList: data.SubComment.filter(
                item => item.comment_id === this.commentObj.comment_id
            ).map(subCommentItem => ({
                ...subCommentItem,
                user_name: data.User.filter(
                    item => item.user_id === subCommentItem.user_id
                )[0].name
            })),
            subCommentCreateToggle: false,
        }
    },
    methods: {
        subCommentToggle() {
            this.subCommentCreateToggle = !this.subCommentCreateToggle;
        },
        reloadSubComments() {
            this.subCommentList = data.SubComment.filter(
                item => item.comment_id === this.commentObj.comment_id
            ).map(subCommentItem => ({
                ...subCommentItem,
                user_name: data.User.filter(
                    item => item.user_id === subCommentItem.user_id
                )[0].name
            }))
        }
    }
    
}
</script>
<style scoped>
.comment-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  height: 150px;
}
.comment-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
  width: 120px;
}
.comment-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38em;
  border: 0.5px solid black;
}
.comment-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.empty-slot {
    height: 10px;
}
.btn {
  margin-bottom: 1em;
}
.comment-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 5em;
  height: 125px;
}
.comment-empty-1 {
  display: flex;
  width: 10px;
}
.comment-empty-2 {
  display: flex;
  width: 10px;
}
.comment-update {
  margin-right: 65px;
  margin-top: 20px;
}
.comment-delete {
  margin-left: 65px;
  margin-top: -52.5px;
}
</style>