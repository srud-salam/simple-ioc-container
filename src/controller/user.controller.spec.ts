// @ts-nocheck
import { Container } from '../ioc';
import { UserController } from './user.controller';

describe('User Controller', () => {
  const container = new Container
  const userController = container.bind(UserController);

  it('should inject and constract an instance of UserController', () => {
    expect(userController).toBeDefined();
    expect(userController).toBeInstanceOf(UserController);
  });

  it('Should have a method called Store', () => {
    expect(userController.store).toBeDefined()
  })

  it('Should store a user for a given name, and then return thier username', async () => {
    const storeSpy = jest.spyOn(userController, 'store');
    const result1 = await userController.store({ username: 'Asra' });
    const result2 = await userController.store({ username: 'Adam' });

    expect(storeSpy).toHaveBeenCalledTimes(2);
    expect(result1.username).toBe('Asra')
    expect(result2.username).toBe('Adam');
  });
});
