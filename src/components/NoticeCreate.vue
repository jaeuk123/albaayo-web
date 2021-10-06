<template>
    <div>
        <p id="NC_title">제목: </p>
        <b-form-input
            v-model="title" 
            id="NC_input" 
            placeholder="Enter Title" 
            required>
        </b-form-input>

        <p id="NC_content">내용: </p>
        <b-form-textarea 
            v-model="contents"
            id="NC_input_2" p
            laceholder="Enter Cotent" 
            required>
        </b-form-textarea>

        <div style="text-align: center">
        <b-button 
            variant="outline-primary" 
            id="NC_submitbtn"
            v-on:click='CREATE_NOTICE({title,contents,image})'
            router :to="`/Notice/${fetchGroup}`"
            >
            작성
        </b-button>
        </div>
        <div style="text-align: center">
            <b-button 
            variant="outline-primary"
            id="NC_cancelbtn"
            router :to="`/Notice/${fetchGroup}`"
            >
            취소
        </b-button>
        </div>
    </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";

    export default {
        name: 'NoticeCreate',
        
        data() {
            return {
                    title: '',
                    contents: '',
                    image:[ {
                    image: "",
                    imageContent: ""
                }]
            }
        },
        computed: {
            ...mapGetters(['fetchGroup']),
        },
        methods:{
            ...mapActions(['CREATE_NOTICE']),
        }
    }
</script>
<style>
    #NC_submitbtn {
        margin-right: -304px;
        margin-top: 30px;
    }

    #NC_cancelbtn {
        margin-right: -444px;
        margin-top: -65px;
    }

    #NC_title {
        text-align: center;
        margin-right: 460px;
        margin-top: 20px;
    }

    #NC_content {
        text-align: center;
        margin-right: 460px;
        margin-top: 30px;
    }

    #NC_input {
        margin: 0 auto;
        width: 500px;
    }

    #NC_input_2 {
        margin: 0 auto;
        width: 500px;
        height: 200px;
    }

</style>