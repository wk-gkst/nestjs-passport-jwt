import { DynamicModule, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({})
export class JwtAuthModule {
  static registerAsync(): DynamicModule {
    return {
      module: JwtAuthModule,
      imports: [
        JwtModule.registerAsync({
          //imports: [ConfigModule.forFeature(JwtConfig)],
        }),
      ],
      providers: [JwtAuthModule],
      exports: [JwtAuthModule],
    };
  }
}
