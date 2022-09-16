import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }


    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    addUser(user) {
        return this.userRepository.insert(user)
    }

    async login(username: string, password: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({
            username: username,
            password: password
        })
    }
}
