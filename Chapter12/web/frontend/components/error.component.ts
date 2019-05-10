import { Component, Input } from "@angular/core";

@Component({
    selector: "app-error",
    template: `
        <div class="alert alert-danger" role="alert">
            {{msg}}
        </div>`
})
export class ErrorComponent {
    @Input() public msg!: string;
}
