import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-text-field",
    template: `
        <div>
            <div *ngIf="errorMsg">
                <app-error [msg]="errorMsg"></app-error>
            </div>
            <div className="form-group">
                <label>{{title}}</label>
                <input
                    type="text"
                    className="form-control"
                    [id]="id"
                    [placeholder]="placeholder"
                    (input)="onEdit($event)"
                />
            </div>
        </div>
    `
})
export class TextFieldComponent {

    @Input() public title!: string;
    @Input() public id!: string;
    @Input() public placeholder!: string;
    @Input() public errorMsg!: null | string;
    @Output() public onChange = new EventEmitter<{k: string; v: string}>();

    public onEdit(event: any) {
        const value = (event.target as any).value;
        const key = (event.target as any).id;
        this.onChange.emit({ v: value, k: key });
    }

}
