# Class 5 - Docker Compose and Keycloak

### Class Overview
- Create Docker Compose File
- Run Keycloak Service
- Login to Keycloak Service
- Configure Keycloak
- Install Keycloak Angular Libraries
- Configure Keycloak Angular Libraries
- Create Auth Guard
- Create Protected Dashboard Page

### Create Docker Compose File
####FILE
```shell
docker-compose.yml
```

```yaml
version: '3.7'
services:
  postgres:
    image: postgres:11.2-alpine
    environment:
      POSTGRES_DB: 'keycloak'
      POSTGRES_USER: 'admin'
      POSTGRES_PASSWORD: 'admin'
      PGDATA: '/var/lib/postgresql/data/db_data'
    volumes:
      - ./data/postgres:/var/lib/postgresql/data/db_data
    shm_size: '1024m'
    networks:
      - internal

  keycloak:
    image: jboss/keycloak:16.1.1
    environment:
      KEYCLOAK_USER: 'admin'
      KEYCLOAK_PASSWORD: 'admin'
      DB_VENDOR: 'postgres'
      DB_ADDR: 'postgres'
      DB_PORT: '5432'
      DB_DATABASE: 'keycloak'
      DB_USER: 'admin'
      DB_PASSWORD: 'admin'
    ports:
      - '8080:8080'
    networks:
      - internal

networks:
  internal:
    driver: bridge
```

####FILE
```shell
.gitignore
```

```text
data/
```

### Run Keycloak Service
```shell
docker-compose up
```

### Login to Keycloak Service
http://localhost:8080

```text
username: admin
password: admin
```

### Configure Keycloak
https://wkrzywiec.medium.com/step-by-step-guide-how-integrate-keycloak-with-angular-application-d96b05f7dfdd

### Install Keycloak Angular Libraries
```shell
$ npm install keycloak-angular keycloak-js
```

### Configure Keycloak Angular
```shell
$ ng generate class init/keycloak-init --type=factory --skip-tests
```

```typescript
import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080' + '/auth',
          realm: 'test',
          clientId: 'frontend',
        }
      });
}
```

```shell
app/app.module.ts
```
```typescript
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
```
```typescript
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true,
    },
    {
        provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        multi: true,
        deps: [KeycloakService],
    },
],
```

### Create Auth Guard
```shell
$ ng generate guard guard/auth
```

#### Select CanActivate
```shell
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <i>
 to invert selection, and <enter> to proceed)
❯◉ CanActivate
 ◯ CanActivateChild
 ◯ CanDeactivate
 ◯ CanLoad
```
```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  
  constructor(
    protected readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }
  
  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    return this.authenticated;
  }
}
```

### Create Protected Dashboard Page
```shell
$ ng generate component components/dashboard
```

### Add Dashboard Route
```typescript
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];
```


### Add Dashboard Link
```shell
src/app/app.component.html
```

```html
  <ul class="nav navbar-nav ml-auto">
    <li><a class="nav-link" routerLink="dashboard">Dashboard</a></li>
    <li><a class="nav-link" routerLink="login">Login</a></li>
  </ul>
```