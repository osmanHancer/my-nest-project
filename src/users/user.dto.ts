import { Type } from "class-transformer";

export class UserDTO {

 
  mail: string;

  name: string;

  surname: string;

  hashedPassword: string; 
  
  createdAt: Date;

  imgname: string | null;


  }