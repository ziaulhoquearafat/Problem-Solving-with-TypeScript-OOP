# TypeScript Fundamentals — 8 Practical Problems

A collection of 8 practical TypeScript problems designed to strengthen core TypeScript fundamentals, type safety, generics, object-oriented programming, and asynchronous JavaScript concepts.

This repository demonstrates the practical application of TypeScript features through clean, readable, and strongly typed solutions.

## Overview

This project consists of eight TypeScript problems, progressing from fundamental function operations to more advanced concepts such as generics, object-oriented programming, and asynchronous programming.

Each problem focuses on applying TypeScript concepts to solve practical programming challenges while maintaining code readability, type safety, and reusability.

## Project Structure

```text
typescript-fundamentals/
│
├── solutions.ts
├── README.md
├── blog-name-1.md
└── blog-name-2.md
```

| File | Description |
|---|---|
| `solutions.ts` | Contains solutions to all eight TypeScript problems. |
| `README.md` | Project overview, problem descriptions, and documentation. |
| `blog-name-1.md` | First TypeScript learning blog. |
| `blog-name-2.md` | Second TypeScript learning blog. |

## Problems & Concepts

| No. | Problem | Concepts Covered |
|---|---|---|
| 01 | `multiplyValue` | Optional Parameters, Conditional Logic |
| 02 | `processInput` | Union Types, Type Narrowing, `typeof` |
| 03 | `formatCoordinate` | Readonly Tuples, Named Tuples, Destructuring |
| 04 | `concatenateArrays` | Generics, Rest Parameters, Array Methods |
| 05 | `getPopularCourses` | Interfaces, Array Filtering, Type Safety |
| 06 | `pluckValues` | Generics, `keyof`, Indexed Access Types |
| 07 | `Employee` & `Manager` | Classes, Inheritance, Encapsulation, Access Modifiers |
| 08 | `validateAgeAsync` | Promises, Asynchronous Programming, Error Handling |

## Problem Details

### 01. Optional Parameter Handling

Implemented `multiplyValue()` to multiply a number by an optional multiplier.

**Key Features:**
- Uses an optional parameter.
- Defaults to multiplying by `2` when the multiplier is `undefined`.
- Correctly handles `0` as a valid multiplier.

### 02. Union Types & Type Narrowing

Implemented `processInput()` to handle multiple input types.

**Key Features:**
- Accepts `string`, `number`, or `boolean`.
- Trims whitespace and converts strings to lowercase.
- Multiplies numbers by `10`.
- Converts boolean values into `"Active"` or `"Inactive"`.
- Uses `typeof` for type narrowing.

### 03. Readonly Tuples

Implemented `formatCoordinate()` to format geographic coordinates.

**Key Features:**
- Uses a readonly tuple.
- Defines named tuple elements.
- Applies array destructuring.
- Returns a formatted location string.

### 04. Generic Array Concatenation

Implemented `concatenateArrays()` to combine multiple arrays.

**Key Features:**
- Uses generic type parameters.
- Accepts multiple arrays through rest parameters.
- Preserves the original element order.
- Uses the `flat()` array method.

### 05. Interface & Array Filtering

Created a `Course` interface and implemented `getPopularCourses()`.

**Key Features:**
- Defines a structured object type.
- Filters published courses.
- Checks the minimum student requirement.
- Uses `filter()` without mutating the original array.

### 06. Generic Property Extraction

Implemented `pluckValues()` to extract values from a specific property across an array of objects.

**Key Features:**
- Uses generic type parameters.
- Restricts property keys with `keyof`.
- Uses indexed access types (`T[K]`).
- Preserves the original array order.

### 07. Object-Oriented Programming

Created an `Employee` base class and a `Manager` subclass.

**Key Features:**
- Uses `protected` and `private` access modifiers.
- Implements inheritance with `extends`.
- Uses `super()` to initialize the parent class.
- Defines methods with explicit return types.
- Demonstrates encapsulation and constructor parameter properties.

### 08. Asynchronous Age Validation

Implemented `validateAgeAsync()` to demonstrate asynchronous validation.

**Key Features:**
- Explicitly returns `Promise<string>`.
- Uses the `new Promise()` constructor.
- Resolves after a 1-second delay for ages 18 or above.
- Rejects immediately for ages below 18.
- Uses an `Error` instance for rejection.

## Technologies & Tools

- **TypeScript** — Static typing and type-safe programming.
- **JavaScript (ES6+)** — Core programming concepts.
- **Node.js** — JavaScript runtime environment.
- **Git** — Version control.
- **GitHub** — Source code hosting and project documentation.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Git](https://git-scm.com/)

### Installation & Execution

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd typescript-fundamentals
```

**3. Install TypeScript if it is not already available**

```bash
npm install -g typescript
```

**4. Compile the TypeScript file**

```bash
tsc solutions.ts
```

**5. Execute the generated JavaScript file**

```bash
node solutions.js
```

> Note: The repository contains a standalone TypeScript source file and does not include a `package.json` or `tsconfig.json`. Compilation uses the TypeScript compiler's default settings.

## Learning Objectives

The primary learning objectives of this project are:

- Understand TypeScript's type system and type annotations.
- Work confidently with optional parameters and union types.
- Apply type narrowing to handle different data types.
- Understand readonly tuples and destructuring.
- Use generics to build reusable and type-safe functions.
- Understand `keyof` and indexed access types.
- Implement object-oriented programming using TypeScript.
- Apply inheritance, encapsulation, and access modifiers.
- Understand Promises and asynchronous operations.
- Write clean, readable, and maintainable TypeScript code.

## Learning Resources & Blog Posts

This repository also includes two written articles documenting key concepts learned during the project.

1. **[Blog Post 01 — Blog Title](type-vs-interface.md)**
2. **[Blog Post 02 — Blog Title](typescript-access-modifiers.md)**

## Author

**[Your Name]**

Aspiring Software Engineer | MERN Stack Developer | TypeScript Learner

- **GitHub:** [GitHub Profile](https://github.com/ziaulhoquearafat)
- **Portfolio:** [Portfolio](https://arafat-dev-space.vercel.app/)

---

If you find this repository useful, feel free to explore the solutions and learning resources.

**Built with TypeScript and a commitment to continuous learning.**