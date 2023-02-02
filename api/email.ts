import http from "./http";

/**
 * 
 * @param data 
 * @returns 用户提建议
 */
export function SendEmail(data:any){
    return http.request({
        method:"POST",
        url:"/sendEmail",
        data
    })
}