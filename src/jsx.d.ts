import { SafeAny } from "./types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: SafeAny;
      a: SafeAny;
    }
  }
}
