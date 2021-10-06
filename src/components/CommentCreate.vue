<template>
    <div>
        <b-input-group :prepend="name" class="mt-3">
            <b-form-textarea
                id="textarea"
                v-model="context"
                :placeholder="'코멘트를 달아주세요.'"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
            <b-input-group-append>
                <b-button variant="outline-primary" @click="isSubComment ? createSubComment() :createComment()">작성</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>
<script>
import data from "@/data"

export default {
    name: 'CommentCreate',
    props: {
        contentId: Number,
        commentId: Number,
        isSubComment: Boolean,
        reloadComment: Function,
        subCommentToggle: Function,
        reloadSubComments: Function
    },
    data() {
        return {
            name: '박영준',
            context: ""
        }
    },
    methods: {
        createComment() {
            data.Comment.push({
                comment_id: data.Comment[data.Comment.length - 1].comment_id + 1,
                user_id: 1,
                content_id: this.contentId,
                context: this.context,
                created_at: '2021-06-19 14:11:11',
                updated_at: null
            });
            this.reloadComment();
            this.context = ""
        },
        createSubComment() {
            data.SubComment.push({
                subcomment_id: data.SubComment[data.SubComment.length - 1].subcomment_id + 1,
                user_id: 1,
                comment_id: this.commentId,
                context: this.context,
                created_at: '2021-06-19 14:11:11',
                updated_at: null
            });
            this.subCommentToggle();
            this.reloadSubComments();
            this.context = ""
        }
    }
}
</script>
<style>
    
</style>