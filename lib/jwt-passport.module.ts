import { DynamicModule, Module } from "@nestjs/common";
import { JwtPassportOptions } from "./jwt-passport-module-options.interfaces";

@Module({})
export class JwtPassportModule {
  static register(options: JwtPassportOptions): DynamicModule {
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
