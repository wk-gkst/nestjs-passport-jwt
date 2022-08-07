import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class JwtPassportModule {
  static register(): DynamicModule {
    return {
      module: JwtPassportModule,
      imports: [],
    };
  }

  static registerAsync(): DynamicModule {
    return {
      module: JwtPassportModule,
      imports: [],
    };
  }
}
