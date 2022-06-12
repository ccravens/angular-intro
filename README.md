# Class 1 - Angular Project Overview

### Project Overview
- Review Project Files
- Review Package and Project Management

### Files Created
```shell
 track-my-shipment/.browserslistrc
 track-my-shipment/.editorconfig
 track-my-shipment/.gitignore
 track-my-shipment/.vscode/extensions.json
 track-my-shipment/.vscode/launch.json
 track-my-shipment/.vscode/tasks.json
 track-my-shipment/README.md
 track-my-shipment/angular.json
 track-my-shipment/karma.conf.js
 track-my-shipment/package-lock.json
 track-my-shipment/package.json
 track-my-shipment/src/app/app-routing.module.ts
 track-my-shipment/src/app/app.component.html
 track-my-shipment/src/app/app.component.scss
 track-my-shipment/src/app/app.component.spec.ts
 track-my-shipment/src/app/app.component.ts
 track-my-shipment/src/app/app.module.ts
 track-my-shipment/src/assets/.gitkeep
 track-my-shipment/src/environments/environment.prod.ts
 track-my-shipment/src/environments/environment.ts
 track-my-shipment/src/favicon.ico
 track-my-shipment/src/index.html
 track-my-shipment/src/main.ts
 track-my-shipment/src/polyfills.ts
 track-my-shipment/src/styles.scss
 track-my-shipment/src/test.ts
 track-my-shipment/tsconfig.app.json
 track-my-shipment/tsconfig.json
```

### Package and Project Management
```shell
track-my-shipment/package.json
```

- scripts
- dependencies
- devDependencies

```shell
node_modules/
package-lock.json
```

### Angular Project Configuration File
```shell
angular.json
```

### Typescript Configuration Files
```shell
tsconfig.json
tsconfig.app.json
```

### Review Project Source Files
```shell
src/
```

### Single Page App Foundation Files
```shell
src/index.html
src/main.ts
```

### Project Files
```shell
src/app/
```

### Static Assets
```shell
src/assets/
```

### Environments
```shell
src/environments/
```

### Project Entrypoint and Bootstrapping
```shell
src/app/app.module.ts
src/app/app.component.ts
src/app/app.component.html
src/app/app.component.html
```

### Project Routing
```shell
src/app/app-routing.module.ts
```

### Angular Testing Files
```shell
src/app/app.component.spec.ts
```

### Run Angular Test
```shell
$ ng test
```

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