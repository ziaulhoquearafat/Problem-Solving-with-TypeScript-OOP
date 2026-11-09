# Access Modifiers in TypeScript OOP

## Introduction

Object-Oriented Programming (OOP) is an important part of TypeScript. Access modifiers help us control where we can access class properties and methods. TypeScript has three main access modifiers: `public`, `private`, and `protected`. It also provides `readonly` to prevent changing a property after initialization.

## 1. Public

`public` properties can be accessed from anywhere. It is the default access modifier in TypeScript.

```ts
class Student {
  public name: string = "Rakib";
}

const student = new Student();
console.log(student.name);
```

Here, we can access the name from outside the class.

## 2. Private

`private` properties can only be accessed inside their own class. We cannot directly access them from outside.

```ts
class BankAccount {
  private balance: number = 5000;
}
```

The balance is hidden from outside access.

## 3. Protected

`protected` properties can be accessed inside their own class and its child classes.

```ts
class Employee {
  protected name: string = "Rakib";
}

class Manager extends Employee {
  showName(): string {
    return this.name;
  }
}
```

Here, the Manager class can access the name because it extends Employee.

## 4. Readonly

`readonly` properties can be assigned when they are declared or inside the constructor. After that, we cannot change their values.

```ts
class Product {
  readonly id: number = 101;
}
```

## Conclusion

Access modifiers help us write more organized and safe code. `public` allows access from anywhere, `private` keeps data inside its class, and `protected` allows access in child classes. `readonly` prevents changing a property after initialization. These features are very useful when building real-world applications with TypeScript.