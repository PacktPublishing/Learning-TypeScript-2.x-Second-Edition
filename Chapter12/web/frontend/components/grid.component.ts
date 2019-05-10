import { Component, Attribute } from "@angular/core";

// In the bootstrap grid system the max size is 12
type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DeviceSize = "sm" | "md" | "lg" | "xl";

@Component({
    selector: "app-container",
    template: `
        <div class="container">
            <ng-content></ng-content>
        </div>
    `
})
export class ContainerComponent {}

@Component({
    host: {
        "[class]": "'row'"
    },
    selector: "app-row",
    template: `
        <ng-content></ng-content>
    `
})
export class RowComponent {}

@Component({
    host: {
        "[class]": "columnClass"
    },
    selector: "app-column",
    template: `
        <ng-content></ng-content>
    `
})
export class ColumnComponent {

    public columnClass: string;

    public constructor(
        @Attribute("width") width: ColumnWidth,
        @Attribute("size") size: DeviceSize | null,
    ) {
        this.columnClass = this._getClass(width, size);
    }

    private _getClass(width: ColumnWidth, size: DeviceSize | null) {
        if (size) {
            return `col-${size}-${width}`;
        } else {
            return `col-${width}`;
        }
    }
}
