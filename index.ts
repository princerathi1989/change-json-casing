import { CamelCase, LowerCase, UpperCase } from './src/classes';


export function toUpperCase(data: any): any {
  const Case = new UpperCase(data);
  return Case.convert();
}

export function toLowerCase(data: any): any {
  const Case = new LowerCase(data);
  return Case.convert();
}

export function toCamelCase(data: any): any {
  const Case = new CamelCase(data);
  return Case.convert();
}