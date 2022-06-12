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

```shell
Review differences between href (page reload by browser) and routerLink (no page reload).
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

###2-Way Data Binding - Infamous TODO List
####Create Items Model to Hold Items
```shell
src/app/login/login.component.ts
```
```typescript
export class LoginComponent implements OnInit {
    items: string[] = ['This', 'That', 'The Other'];

    constructor() {}

    ngOnInit(): void {}
}
```

####Create Dynamic List
```shell
src/app/login/login.component.html
```
```html
<ul>
    <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

####Create Input Form and Button
```shell
src/app/login/login.component.html
```
```html
<input type="text">
<button>Add Item</button>
```

####Create Model for New Item
```shell
src/app/login/login.component.ts
```
```typescript
export class LoginComponent implements OnInit {
    items: string[] = ['This', 'That', 'The Other'];
    item: string = '';
```

####Create Data Binding
```shell
src/app/login/login.component.html
```
```html
<input type="text" [(ngModel)]="item">
```

####Add FormsModule to AppModule
```shell
src/app/app.module.ts
```
```typescript
imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
]
```

####Create Add Item Event Handler
```shell
src/app/login/login.component.ts
```
```typescript
addItem() {
    this.items.push(this.item);
}
```

####Add Click Event to Button
```shell
src/app/login/login.component.html
```
```html
<button (click)="addItem()">Add Item</button>
```

###How Would We Remove Item?
####Create Button
```shell
src/app/login/login.component.html
```
```html
<button>Remove Item</button>
```

####Create Click Event Handler
```shell
src/app/login/login.component.ts
```
```typescript
removeItem() {
  this.items.pop();
}
```

####Add Click Event to Button
```shell
src/app/login/login.component.html
```
```html
<button (click)="removeItem()">Remove Item</button>
```
