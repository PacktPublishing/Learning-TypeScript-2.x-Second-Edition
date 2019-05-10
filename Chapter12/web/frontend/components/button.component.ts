import { Component, Attribute, Input, Output, EventEmitter } from "@angular/core";

type Kind = "primary" | "secondary" | "success" |
            "danger" | "warning" | "info" | "light" |
            "dark" | "link";

@Component({
    selector: "app-button",
    template: `
        <button
            type="button"
            [class]="btnClass"
            (click)="click()"
        >
            <ng-content></ng-content>
        </button>`
})
export class ButtonComponent {

    public btnClass: string;
    @Output() public clicked = new EventEmitter();

    public constructor(
        @Attribute("kind") kind: Kind,
        @Attribute("className") className: string
    ) {
        this.btnClass = this._getBtnClass(kind, className);
    }

    private _getBtnClass(kind: Kind | null, className: string | null) {
        if (className) {
            return className;
        } else {
            const actualKind = kind ? kind : "primary";
            return `btn btn-${actualKind}`;
        }
    }

    public click() {
        this.clicked.emit();
    }

}
