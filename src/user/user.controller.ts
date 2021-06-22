import { Controller, Post, Req, Body } from '@nestjs/common';
import { UserService} from './user.service'
import { UserDTO } from "./dto/user.dto";
import { Request } from "express";

@Controller('user')
export class UserController {
    constructor(private authService: UserService) { }
    @Post('new')
    public async createNewUser(@Req() req: Request, @Body() userDto: UserDTO): Promise<any> {
        const { displayName, password, email, role, id } = userDto;
        return this.authService.createUser(displayName, password, email, role, id)
    }
}
