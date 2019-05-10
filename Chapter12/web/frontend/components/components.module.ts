import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { ContainerComponent, RowComponent, ColumnComponent } from "../components/grid.component";
import { CardComponent, CardImageComponent } from "../components/card.component";
import { ButtonComponent } from "../components/button.component";
import { ErrorComponent } from "./error.component";
import { LoadingComponent } from "./loading.component";
import { ListGroupItemComponent, ListGroupComponent } from "./listgroup.component";
import { ModalComponent } from "./modal.component";
import { TextFieldComponent } from "./textfield.component";

@NgModule({
    declarations: [
        HeaderComponent,
        ContainerComponent,
        RowComponent,
        ColumnComponent,
        CardComponent,
        CardImageComponent,
        ButtonComponent,
        ErrorComponent,
        LoadingComponent,
        ListGroupItemComponent,
        ListGroupComponent,
        ModalComponent,
        TextFieldComponent
    ],
    exports: [
        HeaderComponent,
        ContainerComponent,
        RowComponent,
        ColumnComponent,
        CardComponent,
        CardImageComponent,
        ButtonComponent,
        ErrorComponent,
        LoadingComponent,
        ListGroupItemComponent,
        ListGroupComponent,
        ModalComponent,
        TextFieldComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})
export class ComponentsModule {
}
