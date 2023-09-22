import { ApiProperty } from '@nestjs/swagger';


export class LoginUserRequest{
    @ApiProperty({example: 'Ivan'})
    username: string;

    @ApiProperty({example: 'Ivan123'})
    password: string;
}

export class LoginUserResponse{
    @ApiProperty({example: {user:{
        userId: 1,
        usernane: 'Ivan',
        password: 'Ivan123'
    }}})
    user: {
        userId: number;
        usernane: string;
        password: string;
    }

    @ApiProperty({example: 'Logged in'})
    msg: string;
}


export class LogoutUserResponse{
    @ApiProperty({example: 'session has ended'})
    msg: string;

}

export class LoginCheckResponse{
    @ApiProperty({example: 'Ivan'})
    userId: number;

    @ApiProperty({example: 'Ivan123'})
    username: string;

    @ApiProperty({example: 'Ivan@gmail.ru'})
    email: string;

}



export class SignupResponse{
    @ApiProperty({example: 1})
    id: number;

    @ApiProperty({example: 'Ivan'})
    username: string;

    @ApiProperty({example: 'Ivan@gmail.ru'})
    email: string;

    @ApiProperty({example: '$2b$10$dL2G3xLlNk0o5dEvQ.7oKuIMsd.PJT.S4D2NmEYGPeIUqgq9Vh2BC'})
    password: string;
    
    @ApiProperty({example: '2023-09-15T10:20:18.129Z'})
    updatedAt: string;

    @ApiProperty({example: '2023-09-15T10:20:18.129Z'})
    createdAt: string;


}