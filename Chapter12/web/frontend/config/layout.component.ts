import { Component, OnInit } from "@angular/core";
import { Route } from "../components/header.component";

@Component({
  selector: "app-layout",
  template: `
    <div>
        <app-header
            bg="primary"
            title="TsMovies"
            rootPath=""
            [links]="appRoutes"
        ></app-header>
        <main>
            <router-outlet></router-outlet>
        </main>
    </div>
  `
})
export class LayoutComponent {
    public appRoutes: Route[] = [
        { label: "Movies", path: "movies" },
        { label: "Actors", path: "actors" }
    ];
}
