import { Injectable } from "./injectable";
import { Container } from "./container";

@Injectable
export class MockClassNoArgs {
  constructor() {}

  sayHello() {
    return "Hello from MockClassNoArgs";
  }
}

@Injectable
export class MockClassWithArgs {
  constructor(public mock: MockClassNoArgs) {}
}

@Injectable
class MockClassDeepArgs {
  constructor(
    public mockClassNoArgs: MockClassNoArgs,
    public mockClassWithArgs: MockClassWithArgs
  ) {}
}

describe("Dependency Injection", () => {
  const container = new Container();
  const readableMessage = "Hello from MockClassNoArgs";

  test("Should not inject a null object", () => {
    const instance = container.bind(MockClassNoArgs);

    expect(instance).not.toBe(undefined);
  });

  test("should invoke related mothod", () => {
    const instance = container.bind(MockClassNoArgs);
    const hello = instance.sayHello();

    expect(hello).toBe(readableMessage);
  });

  test("should be able to inject a dependable class", () => {
    const instance = container.bind(MockClassWithArgs);
    const hello = instance.mock.sayHello();

    expect(hello).toBe(readableMessage);
  });

  test("should be able to inject a dependable classes with two or more levels down)", () => {
    const instance = container.bind(MockClassDeepArgs);
    const hello = instance.mockClassNoArgs.sayHello();
    const hello2 = instance.mockClassWithArgs.mock.sayHello();

    expect(hello).toBe(readableMessage);
    expect(hello2).toBe(readableMessage);
  });
});
