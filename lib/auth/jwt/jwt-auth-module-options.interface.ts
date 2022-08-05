import { ModuleMetadata } from "@nestjs/common";

export interface JwtAuthModuleAsyncOptions
  extends Pick<ModuleMetadata, "imports"> {
  inject?: any[];
}
