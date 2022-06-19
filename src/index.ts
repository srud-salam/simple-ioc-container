import 'reflect-metadata';
import { Container } from "./ioc";
import { UserController } from "./controller/user.controller";

const container = new Container();
const userController = container.bind(UserController);
userController.store({username: 'Srud Salam'}).then(console.log);