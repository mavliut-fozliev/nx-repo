import { myapp } from "@org/myapp";

export function myappSwc(): string {
  console.log("myapp: ", myapp());
  return "myapp-swc";
}

myappSwc();
