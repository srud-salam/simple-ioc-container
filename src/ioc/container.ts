import "reflect-metadata";
import { Constructor } from "./constructor";

export class Container {
  private readonly dependencies;

  constructor() {
    this.dependencies = new Map();
  }

  /**
   * Receive an instance of a Constructor Object
   * Using generics, it will return the type it has taken
   * @param constructor
   */
  bind<T>(constructor: Constructor<T>): T {
    // try to get the instance from dependencies list
    let instance = this.dependencies.get(constructor);
    if (instance) return instance;

    // otherwise, get the metadata of the class using reflection
    const metaData: Constructor<T>[] = Reflect.getMetadata(
      "design:paramtypes",
      constructor
    );

    // initialise each constructor function into own instance
    const argumentsInstances = metaData.map((instance) => this.bind(instance));

    // create an instance, and store it as key/value pair
    instance = new constructor(...argumentsInstances);
    this.dependencies.set(constructor, instance);

    return instance;
  }
}
