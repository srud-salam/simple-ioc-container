import DBContext from '../database';
import { Container } from '../ioc';
import { UserService } from './user.service';
import { UserRepository } from '../respository/user.repository';

describe('User service', () => {
  const container = new Container();
  const userService = container.bind<UserService>(UserService);

  it('should inject and constract an instance of UserService', () => {
    expect(userService).toBeDefined();
    expect(userService).toBeInstanceOf(UserService);
  });

  it('Should have access to the user repository', () => {
    expect(userService.userRepo).toBeDefined();
    expect(userService.userRepo).toBeInstanceOf(UserRepository);
  });

  it('Should have a method called createUser', () => {
    expect(userService.createUser).toBeDefined()
  });

  it('Should return a created user', async () => {
    const createUserSpyRepository = jest.spyOn(userService.userRepo, 'createUser');
    const createUserSpyService = jest.spyOn(userService, 'createUser');

    const createdUser1 = await userService.createUser({ username: 'Asra' })
    const createdUser2 = await userService.createUser({ username: 'Adam' })

    expect(createUserSpyRepository).toHaveBeenCalledTimes(2);
    expect(createUserSpyService).toHaveBeenCalledTimes(2);
    expect(createdUser1).toEqual({
      id: 1,
      username: 'Asra',
    });
    expect(createdUser2).toEqual({
      id: 2,
      username: 'Adam',
    });
  });
});