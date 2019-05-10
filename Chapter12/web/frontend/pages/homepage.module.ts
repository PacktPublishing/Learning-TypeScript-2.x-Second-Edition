import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./homepage.component";
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [CommonModule, RouterModule, ComponentsModule]
})
export class HomePageModule {}
