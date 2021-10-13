import axios from 'axios';




const config = {
    baseUrl: 'http://localhost:9000'
}


function signUpemployer(payload) {
    return axios.post(`${config.baseUrl}/employer/signup`,
    payload,
    { headers: { 'Content-Type': 'application/json' }});
}


function Idcheck(userId) {
    return axios.get(`${config.baseUrl}/duplicate/`+userId,{userId:userId} );
}

function login(payload) {
    // return axios.post(`${config.baseUrl}/login`, 
    return axios.post(`${config.baseUrl}/login`,
    payload,{ headers: { 'Content-Type': 'application/json' } }
    );
}

function logout(memberId) {
    return axios.get(`${config.baseUrl}/logout/`+memberId)
}

export {
    signUpemployer,Idcheck,login,logout
}