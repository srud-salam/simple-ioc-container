import DBContext, { UserRequestDto } from "../database";
import { Injectable } from "../../ioc";

@Injectable
export class UserRepository {
  constructor() {}

  async createUser(userData: UserRequestDto) {
    return await DBContext.create(userData);
  }
}
