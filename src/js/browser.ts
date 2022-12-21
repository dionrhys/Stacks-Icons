// @ts-expect-error
import * as Icons from "../../dist/icons.js";
// @ts-expect-error
import * as Spots from "../../dist/spots.js";
import { browserHelper } from "./helpers";

export { Icons, Spots, browserHelper };

// automatically run if in the browser and not being imported
if (typeof window !== "undefined" && window.document && window.document.currentScript) {
  browserHelper(Icons, Spots);
}
