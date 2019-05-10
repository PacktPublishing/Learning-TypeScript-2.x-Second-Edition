import { Component } from "@angular/core";

@Component({
    selector: "home-page",
    template: `
        <app-container>
            <app-row>
                <app-column width="6">
                    <app-card
                        title="Movies"
                        description="Explore our database of movies"
                        linkPath="movies"
                        linkText="Movies"
                    ></app-card>
                </app-column>
                <app-column width="6">
                    <app-card
                        title="Actors"
                        description="Explore our actors of movies"
                        linkPath="actors"
                        linkText="Actors"
                    ></app-card>
                </app-column>
            </app-row>
        </app-container>
    `
})
export class HomePageComponent {
}
