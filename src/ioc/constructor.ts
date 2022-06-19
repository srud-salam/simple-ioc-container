// Constructs a new object of type 'T' (Generics)
export type Constructor<T> = new(...args: any[]) => T;