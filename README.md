<p align="center">
  <a href="http://nestjs.com"><img src="https://nestjs.com/img/logo_text.svg" width="320" /></a>
</p>

<p align="center">
  Winston for <a href="https://github.com/nestjs/nest">NestJS</a> has never been this easy!
  <br /><br />
  <a href="https://dev.azure.com/payk/PayK/_build/latest?definitionId=3&branchName=master"><img src="https://dev.azure.com/payk/PayK/_apis/build/status/pay-k.nestjs-winston?branchName=master" /></a>

## Installation

```bash
npm install --save @payk/nestjs-winston
```

## Quick Start

Import `WinstonModule` and use the `forRoot()` method to configure it. This method accepts the same options object as [`createLogger()`](https://github.com/winstonjs/winston#usage) function from the winston package:

```typescript
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    WinstonModule.forRoot({
      // options here
    }),
  ],
})
export class AppModule {}
```


## Async configuration

> **Caveats**: because the way Nest works, you can't inject dependencies exported from the root module itself (using `exports`). If you use `forRootAsync()` and need to inject a service, that service must be either imported using the `imports` options or exported from a [global module](https://docs.nestjs.com/modules#global-modules).

Maybe you need to asynchronously pass your module options, for example when you need a configuration service. In such case, use the `forRootAsync()` method, returning an options object from the `useFactory` method:

```typescript
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useFactory: () => ({
        // options
      }),
      inject: [],
    }),
  ],
})
export class AppModule {}
```

The factory might be async, can inject dependencies with `inject` option and import other modules using the `imports` option.

## Use as the main Nest Logger (preferred way)

If you want to use winston logger across the whole app, including bootstrapping and error handling, use the following:

Define:
```typescript
import { WINSTON_MODULE_NEST_PROVIDER } from '@payk/nestjs-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
}
bootstrap();
```

Use:
```typescript
export class ClassName {
  private readonly logger = new Logger(ClassName.name);
}
```

## Injection usage

`WinstonModule` is a global module, it will be available in all you feature modules.
A provider will then be exposed to allow easy injection.

```typescript
import { Controller, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from '@payk/nestjs-winston';

@Controller('cats')
export class CatsController {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }
}
```



