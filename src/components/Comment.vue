<template>
    <div>
        <div :key="item.comment_id" v-for="item in comments">
            <CommentItem :commentObj="item"/>
        </div>
        <CommentCreate :contentId="contentId" :reloadComment="reloadComment"/>
    </div>
</template>
<script>
import data from '@/data'
import CommentItem from './CommentItem'
import CommentCreate from './CommentCreate'

export default {
    name: 'Comment',
    components: {
        CommentItem,
        CommentCreate
    },
    props: {
        contentId: Number,
    },
    data() {
        return {
            comments: data.Comment.filter(item => item.content_id === this.contentId)
        }
    },
    methods: {
        reloadComment() {
            this.comments = data.Comment.filter(item => item.content_id === this.contentId)
        }
    }
}
</script>

<style>
    
</style>