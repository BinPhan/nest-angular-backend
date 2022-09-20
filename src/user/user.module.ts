import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})

export class UsersModule { }