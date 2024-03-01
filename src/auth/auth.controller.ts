import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//handles all the req, res
@Controller('auth')
export class AuthController {
    //Injects the service in the controller
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup()
  }

  @Post("signin")
  signin(){
    return this.authService.signin()
  }
}
