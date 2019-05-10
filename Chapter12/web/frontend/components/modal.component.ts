import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-modal",
    template: `
        <div
            class="modal fade show"
            role="dialog"
            style="display: block"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{title}}
                        </h5>
                        <app-button (clicked)="onCancel.emit()" [className]="'close'">
                            <span aria-hidden="true">&times;</span>
                        </app-button>
                    </div>
                    <div class="modal-body">
                        <div *ngIf="errorMsg">
                            <app-error [msg]="errorMsg"></app-error>
                        </div>
                        <ng-content></ng-content>
                    </div>
                    <div class="modal-footer">
                        <app-button (clicked)="onAccept.emit()">
                            {{acceptLabel}}
                        </app-button>
                        <app-button (clicked)="onCancel.emit()">
                            {{cancelLabel}}
                        </app-button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ModalComponent {
    @Input() public title!: string;
    @Input() public acceptLabel!: string;
    @Input() public cancelLabel!: string;
    @Input() public error?: Error;
    @Output() public onCancel = new EventEmitter();
    @Output() public onAccept = new EventEmitter();
}
