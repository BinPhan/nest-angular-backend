import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    authService: AuthService
    constructor(authService: AuthService) {
        this.authService = authService
    }

    @Post('login')
    async login(@Req() request: Request) {
        let user = this.authService.validateUser(request.body.userName, request.body.password)

        return user
    }

}
