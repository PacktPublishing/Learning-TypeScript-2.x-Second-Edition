import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { enableProdMode } from "@angular/core";
import { AppModule } from "./app.module";

// if (environment.production) {
//     enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => {
  console.error(err); // tslint:disable-line
});
