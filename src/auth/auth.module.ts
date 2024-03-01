import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";


//Module for each service
@Module({
    controllers:[AuthController],
    providers:[AuthService]
})


export class AuthModule{}