import { Component, Input } from "@angular/core";

@Component({
    host : {
        "[class]": "itemClass"
    },
    selector: "app-list-group-item",
    template: `
        <ng-content></ng-content>
    `
})
export class ListGroupItemComponent {
    public itemClass = "list-group-item";
}

@Component({
    selector: "app-list-group",
    template: `
        <div *ngIf="errorMsg">
            <app-error [msg]="errorMsg"></app-error>
        </div>
        <div *ngIf="!isLoaded">
            <app-loading></app-loading>
        </div>
        <div *ngIf="isLoaded && !errorMsg">
            <ul class="list-group">
                <ng-content></ng-content>
            </ul>
        </div>
    `
})
export class ListGroupComponent {
    @Input() public errorMsg!: string | null;
    @Input() public isLoaded!: boolean | null;
}
