<template> 
    <header>
        <b-button v-b-toggle.sidebar-1 id="logo">
            <img alt="main logo" src="../img/logo.png" width="160">
        </b-button>

        <div class='title'>
            <h4>{{ title }}</h4>
        </div>

        <b-button id="login">
                <a href="https://naver.com"><img alt="login button" src="../img/loginbtn.png" width="100"></a>
        </b-button>
        <b-sidebar 
            id="sidebar-1"
            title="Menu"
            :backdrop-variant="variant"
            backdrop 
            bg-variant="info"  
            text-variant="light">
            <v-card
                class="mx-auto"
                width="300"
                height="600"
                tile
            >
                <v-list shaped>
                <v-list-item href="http://localhost:8080/">
                    <v-list-item-icon>
                    <v-icon >mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                    :value="false"
                    prepend-icon="mdi-account-circle"
                >
                    <template v-slot:activator>
                    <v-list-item-title>Group Management</v-list-item-title>
                    </template>

                    <v-list-item id="menu1" link="">
                        <v-list-item-icon>
                            <v-icon>mdi-account-plus-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Group Invite</v-list-item-title>
                    </v-list-item>

                    <v-list-item id="menu2" link="">
                        <v-list-item-icon>
                            <v-icon>mdi-format-list-text</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Group List</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Group Chat</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-calendar</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Schedule</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Employee List</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-cash-check</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Salary</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-bulletin-board</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Notice</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-card>
        </b-sidebar>
    </header>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    data() {
        return {
            title: '알바에요',
            variant: 'dark',
            variants: [
                'transparent',
                'white',
                'light',
                'dark',
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',

            ]
        }
    },
}
</script>

<style scoped>
    #menu1 {
        margin-left: 20px;
    }
    #menu2 {
        margin-left: 20px;
    }
    a {
        text-decoration:none; color : white;
        font-size: 25px;
    }
    #sidebar-1 {
        background-color: #747fA5;
    }
    
    header {
        margin-left: -8px;
        margin-top: -8px;
        margin-right: 0px;
        height:200px;
        background-color: #8dc1e9;
        align-items: center;
        justify-content: space-between;
        display: flex;
    }
    #logo {
        margin-left: 40px;
        background-color: #8dc1e9;
        border-color: #8dc1e9;
    }
    
    Header h4{
        width: 100%;
        height: 100%;
        font-size: 40px;
        color: white;
        font-family: 'Yu Gothic';
        display: flex;
    }
    #login {
        display: flex;
        margin-right: 40px;
        background-color: #8dc1e9;
        border-color: #8dc1e9;
    }
</style>
