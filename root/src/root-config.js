import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
import { initTranslation } from "./i18n";

registerApplication(
  "nav",
  () => System.import("@ex/nav"),
  isActive.nav,
  {
  }
);

registerApplication(
  "app1",
  () => System.import("@ex/app1"),
  isActive.app1,
  {
  }
);

registerApplication(
  "app2",
  () => System.import("@ex/app2"),
  isActive.app1,
  {
  }
);

/* 
  Enables production mode in angular as it can only be set once and be in one mode for the whole system.
  Angular app no longer need to call enableProdMode() as It would produce an error.
*/
System.import("@angular/core").then(a => a.enableProdMode());

initTranslation
  .then(() => start({ urlRerouteOnly: true }))
  .catch(err => {
    console.error(`Failed to initialize i18next translations`, err);
  });
