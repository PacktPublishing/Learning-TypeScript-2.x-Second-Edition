import { Component, Input, Attribute } from "@angular/core";

@Component({
    selector: "app-card-img",
    template: `
        <img class="card-img-top" [src]="imgPath" [alt]="imgAlt" />
    `
})
export class CardImageComponent {
    @Input() public imgPath!: string;
    @Input() public imgAlt!: string;
}

@Component({
    selector: "app-card",
    template: `
        <div class="card">
            <div *ngIf="imgPath">
                <app-card-img [imgPath]="imgPath" [imgAlt]="imgAlt"></app-card-img>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">
                    {{description}}
                </p>
                <a class="btn btn-primary" [routerLink]="linkPath" routerLinkActive="active">
                    {{linkText}}
                </a>
            </div>
        </div>`
})
export class CardComponent {

    public title!: string;
    public description!: string;
    public linkPath!: string;
    public linkText!: string;
    public imgPath?: string;
    public imgAlt?: string;

    public constructor(
        @Attribute("title") title: string,
        @Attribute("description") description: string,
        @Attribute("linkPath") linkPath: string,
        @Attribute("linkText") linkText: string,
        @Attribute("imgPath") imgPath?: string,
        @Attribute("imgAlt") imgAlt?: string
    ) {
        this.title = title;
        this.description = description;
        this.linkPath = linkPath;
        this.linkText = linkText;
        this.imgPath = imgPath;
        this.imgAlt = imgAlt;
    }

}
