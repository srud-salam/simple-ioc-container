import { IDatabaseState, IUser } from "./user.types";

// Over simplication, and you can replace it with any ORM
export class Database {
  private state: IDatabaseState = {
    users: [],
  };

  /**
   *   @description Creates a new User with the given data
   */
  async create(user: Omit<IUser, "id">): Promise<IUser> {
    if (!user) {
      throw new Error("Missing userdata");
    }

    const createdUser = {
      id: this.state.users.length + 1,
      ...user,
    };

    const length = this.state.users.push(createdUser);
    return this.state.users[length - 1];
  }

  /**
   *
   * @description returns all the current users
   *
   */
  async all(): Promise<IUser[]> {
    return this.state.users;
  }

  public clear(): void {
    this.state.users = [];
  }
}
