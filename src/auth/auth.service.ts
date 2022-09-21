import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.login(username);

        if (user && await bcrypt.compare(password, user.password)) {
            const payload = {
                username: user.username,
                id: user.id
            }

            return {
                id: user.id,
                name: user.name,
                username: user.username,
                roles: user.roles.map(item => { return item.name }),
                access_token: this.jwtService.sign(payload, {
                    privateKey: process.env.JWT_KEY
                })
            };
        }
        return null;
    }
}
