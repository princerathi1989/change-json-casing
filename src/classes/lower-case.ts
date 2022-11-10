import { Json } from "./Json";

export class LowerCase extends Json {
  constructor(data: any) {
    super(data);
  }

  getPropertyName(key: any) {
    return key.toLowerCase();
  }
}