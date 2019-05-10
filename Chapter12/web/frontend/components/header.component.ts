import { Component, Input, Attribute } from "@angular/core";

type BgColor = "primary" | "secondary" | "success" |
               "danger" | "warning" | "info" | "light" |
               "dark" | "white";

export interface Route {
    label: string;
    path: string;
}

@Component({
    selector: "app-header",
    template: `
        <nav [ngClass]="navClass">
        <a class="navbar-brand" [routerLink]="rootPath" routerLinkActive="active">
            {{title}}
        </a>
        <ul class="navbar-nav">
            <li *ngFor="let link of links">
                <a class="navbar-brand" [routerLink]="link.path" routerLinkActive="active">
                    {{link.label}}
                </a>
            </li>
        </ul>
    </nav>`
})
export class HeaderComponent {

    public navClass!: string;
    public title!: string;
    public rootPath!: string;
    @Input() public links!: Route[];

    public constructor(
        @Attribute("bg") bg: BgColor,
        @Attribute("title") title: string,
        @Attribute("rootPath") rootPath: string,
    ) {
        this.navClass = `navbar navbar-expand-lg navbar-light bg-${bg}`;
        this.title = title;
        this.rootPath = rootPath;
    }
}
