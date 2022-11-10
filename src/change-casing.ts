import { CamelCase, LowerCase, UpperCase } from "./classes";

export function toCamelCase(data: any) {
  return (new CamelCase(data)).convert();
}
export function toLowerCase(data: any) {
  return (new LowerCase(data)).convert();
}
export function toUpperCase(data: any) {
  return (new UpperCase(data)).convert();
}