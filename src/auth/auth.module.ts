import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, JwtService, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '600s' },
      secretOrPrivateKey: process.env.JWT_KEY
    })
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }
