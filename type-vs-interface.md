# Type vs Interface in TypeScript: What Is the Difference?

## Introduction

TypeScript has two useful ways to define the structure of data. They are `type` and `interface`. Both help us to define the shape of an object and make our code more safe. But they have some differences. In this blog, I will explain their differences and when we should use them.

## What Is Interface?

An interface is mainly used to describe the structure of an object. It tells us what properties and types an object should have.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rakib",
  age: 25
};
```

Here, the `User` interface says that every User object must have a name and an age.

## What Is Type Alias?

A type alias is another way to give a name to a type. It can define objects, primitive types, unions, and more.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

Here, we use `type` for both an object and a union type.

## Main Differences

Both can define object structures. But an interface can use `extends` to inherit another interface. A type alias can use intersections (`&`) to combine different types.

Another important difference is that interfaces support declaration merging. It means we can declare the same interface more than once, and TypeScript combines them. Type aliases do not support this feature.

## Conclusion

In my opinion, both are useful. I prefer `interface` for object structures and `type` for unions, primitive types, and complex type combinations. But we can use either one when defining simple object structures.