import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/homepage.component";
import { MoviesPageComponent } from "./pages/moviespage.component";
import { ActorsPageComponent } from "./pages/actorspage.component";

export const appRoutes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "movies", component: MoviesPageComponent },
    { path: "actors", component: ActorsPageComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(
          appRoutes,
          { useHash: false }
      )
    ]
})

export class AppRoutingModule {}
