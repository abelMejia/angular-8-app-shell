import {ILogin} from '../interfaces/Ilogin';

export class Login implements ILogin {
  constructor(public username?: string, public password?: string, entrance?: any) {}

}