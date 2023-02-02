
export function getToken(key:string):any{
    return window.localStorage.getItem(key)
}

export function setToken(key:string,value:string){
    window.localStorage.setItem(key,value)
}

export function clearToken(key:string){
    window.localStorage.removeItem(key)
}