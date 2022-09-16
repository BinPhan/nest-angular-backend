import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.login(username, pass);
        if (user) {
            return user;
        }
        return null;
    }
}
