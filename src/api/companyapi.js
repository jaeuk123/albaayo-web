import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9000'
}
//그룹 관리
function grouplist(payload) {
    const id = parseFloat(payload);
    return axios.get(`${config.baseUrl}/employer/`+payload+'/company',{id:id})
}

function creategroup(payload,Id) {
    return axios.post(`${config.baseUrl}/employer/`+Id+'/company',payload,
    { headers: { 'Content-Type': 'application/json' }})
}

function findworker() {
    axios.get(`${config.baseUrl}/company/worker/{workerId}`)
}

function groupmain(memberId,payload) {
    return axios.get(`${config.baseUrl}/`+memberId+'/company/'+payload)
}

function inviteworker(companyId,payload){
    return axios.post(`${config.baseUrl}/company/invite/` + companyId, payload ,
    { headers: { 'Content-Type': 'application/json' }})
}

function memberInfo() {
    axios.get(`${config.baseUrl}/company/member/{memberId}`)
}
function removecompany() {
    axios.delete(`${config.baseUrl}/company/{companyId}`)
}
function updatecompany() {
    axios.patch(`${config.baseUrl}/company/{companyId}`)
}

//스케쥴
function createschedule(data) {
    return axios.post(`${config.baseUrl}/schedule`,data,
    { headers: { 'Content-Type': 'application/json' }})
}

//Notice
function createNotice(memberId,companyId,data) {
    return axios.post(`${config.baseUrl}/notice/`+memberId+'/'+companyId,data,
    { headers: { 'Content-Type': 'application/json' }})
}

function updataeNotice(data) {
    return axios.patch(`${config.baseUrl}/notice`,data,
    { headers: { 'Content-Type': 'application/json' }})
}

function listNotice(compnayId,page){
    return axios.get(`${config.baseUrl}/notice/`+compnayId+'/'+page)
}
function deleteNotice(companyId,page){
    return axios.delete(`${config.baseUrl}/notice/`+companyId+'/'+page)
}
function Noticecontent(noticeId){
    return axios.get(`${config.baseUrl}/notice/`+noticeId)
}




export{ grouplist,creategroup,findworker,groupmain,inviteworker,memberInfo,
removecompany,updatecompany,createschedule,createNotice,updataeNotice,listNotice,deleteNotice,Noticecontent, }
