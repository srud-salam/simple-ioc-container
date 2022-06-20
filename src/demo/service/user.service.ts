import { Injectable } from "../../ioc";
import { UserRequestDto } from "../database/user.types";
import { UserRepository } from "../respository/user.repository";

@Injectable
export class UserService {
  // userRepo is public for ioc testing purpose
  constructor(public readonly userRepo: UserRepository) {}

  async createUser(userData: UserRequestDto) {
    return await this.userRepo.createUser(userData);
  }
}
