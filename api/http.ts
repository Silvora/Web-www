import axios from "axios";
import { getToken } from "../utils/token";

let baseURL
if (process.env.NODE_ENV == 'production'){
    baseURL = "http://127.0.0.1:7412/api/"
}else{
    baseURL = "http://127.0.0.1:7412/api/"
}

const http = axios.create({
    baseURL:baseURL,
    timeout: 5000,
})

http.interceptors.request.use(config=>{
    let token= getToken("ZJS-7579-Admin-Token")
    
    if(token){
        config.headers={
            "ZJS-7579-Admin-Token":token
        }
    }
    return config
},err=>{
    return Promise.reject(err)
})

http.interceptors.response.use(res=>{
    return res.data
},err=>{
    return Promise.reject(err)
})


export default http