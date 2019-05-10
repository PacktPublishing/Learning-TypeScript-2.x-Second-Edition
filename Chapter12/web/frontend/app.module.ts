import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./config/layout.module";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import "./app.scss";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        LayoutModule
    ]
})
export class AppModule {
}
