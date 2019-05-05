import axios from 'axios'
import qs from 'qs'


const req = axios.create({
    baseURL:'http://192.168.43.100:80'
})

//登录
export function login(acc,pwd){
    return req.post('/login.php',qs.stringify({acc,pwd}))
}
//注册
export function reg(acc,pwd){
    return req.post('/reg.php',qs.stringify({acc,pwd}))
}

// 产品列表 /gethouselist.php
export function getlist(){
    return req.get('/gethouselist.php')
}