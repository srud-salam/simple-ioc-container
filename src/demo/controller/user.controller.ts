import { Injectable } from "../../ioc";
import { UserRequestDto } from "../database";
import { UserService } from "../service/user.service";

@Injectable
export class UserController {
  constructor(private readonly userService: UserService) {}

  async store(requestData: UserRequestDto) {
    return this.userService.createUser(requestData);
  }
}
