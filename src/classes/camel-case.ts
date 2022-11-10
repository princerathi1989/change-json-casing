import { Json } from "./Json";

export class CamelCase extends Json {
  constructor(data: any) { super(data); }
  getPropertyName(key: any) {
    let propertyName = key.toLowerCase();
    if (key.length > 2) { propertyName = key[0].toLowerCase() + key.slice(1); }
    return propertyName;
  }
}

