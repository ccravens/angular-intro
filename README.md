# Class 2 - Intro to Typescript

### Project Overview
- Discuss Why Typescript over Javascript
- Visit the Typescript Playground
- Create First Class
- Visit Online Intro to Typescript Tutorial

### Goodbye Javascript, Hello Typescript!
- Typed Definitions
- Autocomplete
- Easy to Organize Code
- Objects
- Inheritance
- Generics
- etc...

### Visit the Typescript Playground
https://www.typescriptlang.org/play

### Enter Typescript Code
```typescript
enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

class Person {
    name: string;
    age: number;
    gender: Gender;

    constructor(name: string, age: number, gender: Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public sayHello() {
        console.log('Hello!');
    }

    public askAge() {
        console.log(`I am ${ this.age } years old!`);
    }

    public haveBirthday() {
        this.age++;
    }
}

const chad = new Person('Chad', 39, Gender.MALE);
chad.sayHello();
chad.askAge();
chad.haveBirthday();
chad.askAge();
```

### Review Typescript Tutorial
https://www.typescripttutorial.net/

### Discuss Typescript Constructs
1. Getting Started
2. Basic Types
3. Control Flow Statements
4. Functions
5. Classes
6. Interfaces
7. Advanced Types
8. Generics
9. Modules
