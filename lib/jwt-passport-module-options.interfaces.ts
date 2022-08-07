import * as jwt from "jsonwebtoken";

export type JwtPassportType = "secret" | "rsa";

export interface JwtPassportOption {
  type: JwtPassportType;
  secret?: string | Buffer;
  publicKey?: string | Buffer;
  privateKey?: jwt.Secret;
  signOptions?: jwt.SignOptions;
  verifyOptions?: jwt.VerifyOptions;
}

export interface JwtPassportOptions {
  jwt: JwtPassportOption;
  refresh?: JwtPassportOption;
  api?: JwtPassportOption;
}
