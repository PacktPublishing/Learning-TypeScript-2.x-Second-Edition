import { NgModule } from "@angular/core";
import { ActorsPageComponent } from "./actorspage.component";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { ActorService } from "../services/actor_service";
import { ACTOR_SERVICE } from "../config/types";

@NgModule({
    declarations: [
        ActorsPageComponent
    ],
    exports: [
        ActorsPageComponent
    ],
    imports: [CommonModule, ComponentsModule],
    providers: [
        { provide: ACTOR_SERVICE, useClass: ActorService }
    ]
})
export class ActorsPageModule {
}
