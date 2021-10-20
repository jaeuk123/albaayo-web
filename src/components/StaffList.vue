<template>
    
    <v-data-table
      :headers="headers"
      :items=this.fetchMember.data
      sorty-by="names"
      class="elevation-1"
    >
      <template v-slot:top >
          <v-toolbar flat>
              <v-toolbar-title>직원목록</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
          </v-toolbar>
      </template>
      <template v-slot:no-data>
          <v-btn
            color="primary"
            >
              Reset
            </v-btn>
      </template>
    </v-data-table>
</template>
    
<script>
import { mapGetters } from 'vuex'
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'memberName'
            },
            { text: 'Birth', value: 'memberBirth'},
            { text: 'Role', value: 'memberRole'},
            
        ],
        
    }),
    

    computed: {
        ...mapGetters(['fetchMember','fetchGroup'])
        
    },

    created(){
        const GroupId  = this.$route.params.groupid;
        this.$store.dispatch('Fetch_Group',GroupId)
        this.$store.dispatch('Fetch_Member',GroupId) 
    },
    
}
</script>
<style>
.elevation-1 {
    margin-top: 75px;
    width: 1200px;
}
</style>