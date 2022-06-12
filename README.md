# Class 3 - Routing, Components, Views and 2-Way Data Binding

### Class Overview
- Review The App Module, Component, HTML and SCSS files
- Remove Default Landing Page Content
- Create Login Component
- Create Login Route
- View New Page
- Add Bootstrap Framework

### Start Angular App
```shell
$ ng serve
```

### Review Initial Module, Component and Routing
```shell
src/app/app.module.ts
src/app/app-routing.module.ts
src/app/app.component.ts
src/app/app.component.html
src/app/app.component.scss
```

### Edit Landing Page
####FILES
```shell
src/app/app.component.html
src/app/app.component.scss
```
####HTML
```html
<nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
    <a class="navbar-brand" href="#">Track My Shipment</a>
    <ul class="nav navbar-nav ml-auto">
        <li><a class="nav-link" href="#">Login</a></li>
    </ul>
</nav>

<router-outlet></router-outlet>
```

### Create Login Component
```shell
$ ng generate component login
```
####Check Files Added
```shell
$ git status -u
```

### Create Login Route

####FILE
```shell
src/app/app-routing.module.ts
```
####TYPESCRIPT
```typescript
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
];
```

####FILE
```shell
src/app/app.component.html
```
####HTML
```html
<a class="navbar-brand" routerLink="">Track My Shipment</a>
```
####HTML
```html
<li><a class="nav-link" routerLink="login">Login</a></li>
```

### Add Bootstrap
####Legacy Peer Deps
```shell
.npmrc
```
```shell
legacy-peer-deps=true
```
####Install Bootstrap
```shell
$ ng add @ng-bootstrap/ng-bootstrap
```
####Review Changes
```shell
package.json
node_modules/bootstrap
```
