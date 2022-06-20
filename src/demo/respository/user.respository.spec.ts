import DBContext, { IUser } from "../database";
import { Container } from "../../ioc";
import { UserRepository } from "./user.repository";

describe("user repository", () => {
  const container = new Container();
  const userRepository = container.bind(UserRepository);

  afterEach(() => {
    DBContext.clear();
  });

  it("should inject and constract an instance of UserRepository", () => {
    expect(userRepository).toBeDefined();
    expect(userRepository).toBeInstanceOf(UserRepository);
  });

  it("should have a method called createUser", () => {
    expect(userRepository.createUser).toBeDefined();
  });

  it("should create a new user", async () => {
    const createUserSpy = jest.spyOn(userRepository, "createUser");
    const createdUser = await userRepository.createUser({
      username: "Srud Salam",
    });

    expect(createUserSpy).toHaveBeenCalledTimes(1);
    expect(createdUser).toEqual({
      id: 1,
      username: "Srud Salam",
    } as IUser);
  });

  it("should throw an error for invalid user", async () => {
    const createUserSpy = jest.spyOn(userRepository, "createUser");
    const createdUser = async () => await userRepository.createUser();

    expect(createdUser).rejects.toThrowError("Missing userdata");
    expect(createUserSpy).toHaveBeenCalled();
  });
});
