// user.model.ts
/*
export interface User {
    username: string;
    password: string;
  } */

import { UserRole } from "../enums/user-role.enum";


export class User {
    constructor(public username: string, public password: string, public role: UserRole) {}
}
  