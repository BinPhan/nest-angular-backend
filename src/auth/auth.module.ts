import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/user.module';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  imports: [UsersModule]
})
export class AuthModule { }
