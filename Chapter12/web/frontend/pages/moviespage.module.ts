import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesPageComponent } from "./moviespage.component";
import { ComponentsModule } from "../components/components.module";
import { MovieService } from "../services/movie_service";
import { MOVIE_SERVICE } from "../config/types";

@NgModule({
    declarations: [
        MoviesPageComponent
    ],
    exports: [
        MoviesPageComponent
    ],
    imports: [CommonModule, ComponentsModule],
    providers: [
        { provide: MOVIE_SERVICE, useClass: MovieService }
    ]
})
export class MoviesPageModule {
}
