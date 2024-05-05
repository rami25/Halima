export interface RegisterUser{

    id?:number,
    email:string,
    password:string,
    role:string,
    name:string,
    issent?:number
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

export interface Login {
    
    user:{


    email:string
    role:string, 
    name:string, 

    }
    
    token:string,
    message:string

}