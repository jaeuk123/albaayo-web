<template>
    <div id="pageName">
        <h1>공지사항</h1>
        <b-button id="create_btn" router :to="`/NoticeCreate/${fetchGroup}`" >글쓰기</b-button>
        <b-table 
            id="Notice-table" 
            striped hover 
            :items=this.fetchedNoticelist
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            @row-clicked="rowClick"></b-table>
        <b-pagination
            v-model="currentPage"
            :per-page="perPage"
        ></b-pagination>
    </div>
</template>

<script>
// import data from '@/data';
import { mapGetters } from 'vuex';


export default {
    name: 'Notice',
    data() {
        let items = this.fetchedNoticelist
        // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
        return {
            currentPage: 0,
            perPage: 10,
            fields:[
                
                {
                    key: 'title',
                    label: '제목'
                },
                {
                    key: 'date',
                    label: '작성일'
                },
                {
                    key: 'name',
                    label: '글쓴이'
                }
            ],
            items: items
        }
    },
    methods:{
        rowClick(item) {
            console.log(item.id)
            this.$router.push({
                path: `/NoticeDetail/${item.id}`
            })
        },
       
	},
    computed: {
        ...mapGetters(['fetchGroup','fetchedNoticelist'])
    },

    created(){
        this.$store.dispatch('Fetch_Notice',this.currentPage); 
    },
    
    beforeCreate(){
        this.$store.dispatch('Fetch_Notice',this.currentPage); 
    },
}
</script>
<style>
    #pageName {
        margin-left: 75px;
        margin-top: 75px;
        font-weight: 700;
    }
    #Notice-table {
        /* margin-top: 5px; */
        width: 1500px;
        /* margin: auto; */
    }
    #create_btn {
        margin-top: -80px;
        margin-left: 1400px;
        text-align: right;
    }
</style>