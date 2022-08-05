import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { JwtStrategyProvider } from "../provider/jwt-strategy.provider";
@Injectable()
export class JwtApiStrategy extends PassportStrategy(Strategy, "jwt-api") {
  constructor(private readonly jwtStrategyProvider: JwtStrategyProvider) {
    super({
      jwtFromRequest: jwtStrategyProvider.requestFrom,
      ignoreExpiration: jwtStrategyProvider.ignoreExpiration,
      secretOrKey: jwtStrategyProvider.secretOrKey,
      passReqToCallback: jwtStrategyProvider.passReqToCallback,
      algorithms: jwtStrategyProvider.algorithms,
    });
  }

  async validate(payload: any): Promise<any> {
    return this.jwtStrategyProvider.validate(payload);
  }
}
