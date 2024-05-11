export interface RegisterUser{
    nom:string,
    email:string,
    password:string,
}
export interface uUser {
    nom : string,
    email : string
}
export  interface User{
    _id? : string,
    nom : string,
    email : string,
    password : string
}
export  interface LoginUser{

    login:string,
    password:string,
}