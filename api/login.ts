import http from "./http";

/**
 * 
 * @param email 
 * @returns 判断是否有此用户
 */
export function GetIsUser(email:string){
    return http.request({
        url:`/login?email=${email}`,
        method:"GET",
    })
}

/**
 * 
 * @param data 
 * @returns 用户登录注册
 */
export function Login(data:object){
    return http.request({
        url: "/login",
        method:"POST",
        data
    })
}