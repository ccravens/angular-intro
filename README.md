# Class 4 - Services, HttpClient and HttpInterceptor

### Class Overview
- Injectables and Services
- Observables
- HttpClient Library
- HttpInterceptor
- Implementing a Mocking System

### Start Angular App
```shell
$ ng serve
```

### Create Endpoint Service
```shell
$ ng generate service services/endpoint
```

```shell
src/app/components/endpoint.service.ts
```

### Inject Endpoint Service into Login Component
####FILE
```shell
src/app/components/login/login.component.ts
```
####TYPESCRIPT
```typescript
constructor(private endpointService: EndpointService) {}
```

### Angular Component Lifecycle Hooks
https://angular.io/guide/lifecycle-hooks

- ngOnChanges()
- ngOnInit()
- ngDoCheck()
- ngAfterContentInit()
- ngAfterContentChecked()
- ngAfterViewInit()
- ngAfterViewChecked()
- ngOnDestroy()

### Creating Service
####FILE
```shell
app/services/endoint.service.ts
```
####TYPESCRIPT
```typescript
generateNumbers(): Observable<number> {
    return of(1, 2, 3);
}
```

####Subscribe to Observable
####FILE
```shell
src/app/components/login/login.component.ts
```
####HTML
```typescript
  ngOnInit(): void {
    this.endpointService.generateNumbers().subscribe((value: number) => {
      console.log(`>> GENERATED: ${value}`);
    });
  }
```
####CONSOLE OUTPUT
```shell
>> GENERATED: 1
>> GENERATED: 2
>> GENERATED: 3
```

### Create HTTP Client

####Import HttpClientModule in the App Module
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
],
```

####FILE
```shell
app/services/endoint.service.ts
```
####TYPESCRIPT
```typescript
constructor(private httpClient: HttpClient) {}
```
```typescript
getHelloWorld(): Observable<{ hello: string }> {
    return this.httpClient.get<{ hello: string }>(
        'http://mockbin.org/bin/6c9dd375-2359-4fed-9702-3feb809138fb'
    );
}
```


### Call HTTP Service

####FILE
```shell
src/app/components/login/login.component.ts
```

####TYPESCRIPT
```typescript
ngOnInit(): void {
    this.endpointService
        .getHelloWorld()
        .subscribe((value: { hello: string }) => {
            console.log(value);
        });
}
```


### Create the HTTP Interceptor Service
```shell
$ ng generate service services/http-interceptor
```

####FILE
```shell
src/app/services/http-interceptor.service.ts
```

####TYPESCRIPT
```typescript
export class HttpInterceptorService {
    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return of(
            new HttpResponse({
                status: 200,
                body: {
                    payload: { hello: 'world-mock' },
                },
            })
        );
    }
}
```

### Create the Dev Environment

####FILE
```shell
src/environments/environment.dev.ts
```

####TYPESCRIPT
```typescript
export const environment = {
    production: false,
    mock: true
};
```

### Update the Prod Environment

####FILE
```shell
src/environments/environment.prod.ts
```

####TYPESCRIPT
```typescript
export const environment = {
    production: true,
    mock: false
};
```

### Enable the Dev Environment

####FILE
```shell
angular.json
```

####TYPESCRIPT
```typescript
"development": {
    "buildOptimizer": false,
        "optimization": false,
        "vendorChunk": true,
        "extractLicenses": false,
        "sourceMap": true,
        "namedChunks": true,
        "fileReplacements": [
        {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.dev.ts"
        }
    ]
}
```


### Update the HTTP Interceptor Service
```shell
$ ng generate service services/http-interceptor
```

####FILE
```shell
src/app/services/http-interceptor.service.ts
```

####TYPESCRIPT
```typescript
if (environment.mock) {
    return of(
        new HttpResponse({
            status: 200,
            body: {
                payload: { hello: 'world-mock' },
            },
        })
    );
} else {
    return next.handle(request);
}
```
