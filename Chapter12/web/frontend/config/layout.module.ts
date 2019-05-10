import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { MoviesPageModule } from "../pages/moviespage.module";
import { ActorsPageModule } from "../pages/actorspage.module";
import { HomePageModule } from "../pages/homepage.module";
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MoviesPageModule,
        ActorsPageModule,
        HomePageModule,
        ComponentsModule
    ]
})
export class LayoutModule {
}
