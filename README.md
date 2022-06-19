# Simple IoC Container using Typescript
A lightweight library ioc container using typescript
&nbsp;

## How it works
A default `Container` instance named `container` is exported by the library.

A new container can also be instantiated as below:
```ts
const container: Container = new Container();
```

## Injector
Class decorator factory that allows the class' dependencies to be injected at runtime. This relies on `reflect-metadata` to collect metadata about classes to be instantiated.

```ts
@Injectable
export class UserRepository {
    constructor() {}

    async createUser(userData: UserRequestDto) {
        return await DBContext.create(userData);
    }
}
```

## Binding

Calling the `container.bind(ClassName)` method or with interface `container.bind<interface/types/ClassName>(ClassName)` will attempt to bind and construct the requested instance with its related dependencies.

```ts
  const container = new Container();
  const userRepository:UserRepository  = container.bind(UserRepository);
```

example of interface
```ts
  const container = new Container();
  const userRepository: IUserRepository = container.bind<IUserRepository>(UserRepository);
```


&nbsp;
  
## Installation
Install by `npm`
```ts
  # download this repository using https
  git clone https://github.com/srud-salam/simple-ioc-container.git ioc
  
  # change directory
  cd ioc
  
  #install node packages
  npm install
  
  start the example
  npm start
```
Install add `yarn`
```ts
  #download this repository using https
  git clone https://github.com/srud-salam/simple-ioc-container.git ioc
  
  #change directory
  cd ioc
  
  #install node packages
  yarn install
  
  start the example
  yarn start
```

The example will print out a user in terminal as`{ id: 1, username: 'Srud Salam' }`

&nbsp;

## Tests:
```bash
# Unit and feature tests can be executed by running:
npm test 

# watch:
npm run test:watch
```
