import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}

    async validateUser(username: string, password: string){
        const user = await this.userService.findOne({where: {username}})

        if (!user){
            throw new UnauthorizedException('Invalid credentians');
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if (!passwordValid){
            throw new UnauthorizedException('Invalid credentians');
        }

        if (user && passwordValid){
            return {
                userId: user.id,
                username: user.username,
                email: user.email,
            }
        }
    }
}
