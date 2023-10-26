
export class User {
    
   
 
    public fullName:string="";
    public email:string="";
    public userName:string="";
    public firstName:string="";
    public lastName:string="";
    public token:string="";
    public dateCreated:string="";
    public role:string="";


    constructor(fullName:string,email:string,userName:string,role:string) {
        this.fullName= fullName;
        this.email=email;
        this.userName = userName;
        this.role=role;

    }

}