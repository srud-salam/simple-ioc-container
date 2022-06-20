import { Constructor } from "./constructor";

/**
 * Class decorator factory that allows the class' dependencies to be injected
 * at runtime, without changing its behavior.
 *
 * @param constructor
 */
export function Injectable<T>(constructor: Constructor<T>): Constructor<T> {
  return constructor;
}
