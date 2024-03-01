import { Injectable } from '@nestjs/common';

//Handles all the business logic
@Injectable({})
export class AuthService {
  signup() {
    return 'Signup';
  }

  signin() {
    return { msg: 'SignIn' };
  }
}
