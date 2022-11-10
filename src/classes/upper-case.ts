import { Json } from "./Json";

export class UpperCase extends Json {
  constructor(data: any) {
    super(data);
  }

  getPropertyName(key: any) {
    return key.toUpperCase();
  }
}