export interface Certif{
    _id : string,
    certificat : string,
    nom : string,
    prenom : string,
    email : string,
    cin : number,
    gsm : number,
    date : Date,
    duree : number,
    status : string,
    answerDate : Date
}

export interface ansCertif {
    _id : string,
    ans : string
}