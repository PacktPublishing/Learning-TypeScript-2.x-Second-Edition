import * as React from "react";
import { observer } from "mobx-react";
import { ActorInterface } from "../../universal/entities/actor";
import { Container, Row, Column } from "../components/grid_component";
import { ListGroup } from "../components/list_group_component";
import { Modal } from "../components/modal_component";
import { TextField } from "../components/textfield_component";
import { Button } from "../components/button_component";
import { lazyInject } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

function isValidNewActor(o: any) {
    if (
        o === null ||
        o === undefined ||
        // new actors don't have ID
        o.id !== undefined ||
        typeof o.name !== "string" ||
        isNaN(o.yearBorn)
    ) {
        return false;
    }
    return true;
}

@observer
export class ActorPage extends React.Component {
    @lazyInject(TYPE.ActorStore) public actorStore!: interfaces.ActorStore;
    public componentWillMount() {
        this.actorStore.getAll();
    }
    public render() {
        const error = this.actorStore.loadStatus === "error" ? new Error("Actors could not be loaded!") : null;
        const actors = this.actorStore.loadStatus === "pending" ? null : this.actorStore.actors;
        return (
            <Container>
                <Row>
                    <Column width={12} style={{ textAlign: "right", marginBottom: "10px" }}>
                        <Button
                            onClick={() => {
                                this.actorStore.focusEditor();
                            }}
                        >
                            Add Actor
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column width={12}>
                        <ListGroup
                            error={error}
                            items={actors}
                            itemComponent={(actor: ActorInterface) => (
                                <Row>
                                    <Column width={8}>
                                        <h5>{actor.name}</h5>
                                        <p>{actor.yearBorn}</p>
                                    </Column>
                                    <Column width={4} style={{ textAlign: "right" }}>
                                        <Button
                                            kind="danger"
                                            onClick={() => {
                                                this.actorStore.focusDeleteDialog(actor.id);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Column>
                                </Row>
                            )}
                        />
                    </Column>
                </Row>
                <Modal
                    title="Actor Editor"
                    isVisible={this.actorStore.editorValue !== null}
                    onAcceptLabel="Save"
                    onAccept={() => {
                        if (isValidNewActor(this.actorStore.editorValue)) {
                            const actor: any = this.actorStore.editorValue;
                            this.actorStore.create(actor);
                        }
                    }}
                    onCancelLabel="Cancel"
                    onCancel={() => {
                        this.actorStore.focusOutEditor();
                    }}
                    error={this.actorStore.saveStatus === "error" ? new Error("Something went wrong") : undefined}
                >

                    <form>
                        <TextField
                            id="actor_title"
                            value={this.actorStore.editorValue ? this.actorStore.editorValue.name : ""}
                            title="Name"
                            placeholder="Name"
                            isValid={(val) => val !== undefined && val !== ""}
                            onChange={(val) => {
                                this.actorStore.edit("name", val);
                            }}
                        />
                        <TextField
                            id="actor_year"
                            value={this.actorStore.editorValue ? this.actorStore.editorValue.yearBorn : 2018}
                            title="Year of Birth"
                            placeholder="Year of Birth"
                            isValid={(val) => typeof val === "number"}
                            onChange={(val) => {
                                const n = parseInt(val);
                                if (!isNaN(n)) {
                                    this.actorStore.edit("yearBorn", n);
                                }
                            }}
                        />
                    </form>
                </Modal>
                <Modal
                    title="Are you sure?"
                    isVisible={this.actorStore.deleteActorId !== null}
                    onAcceptLabel="Delete"
                    onAccept={() => {
                        if (this.actorStore.deleteActorId) {
                            this.actorStore.delete(this.actorStore.deleteActorId);
                        }
                    }}
                    onCancelLabel="Cancel"
                    onCancel={() => {
                        this.actorStore.focusOutDeleteDialog();
                    }}
                    error={this.actorStore.deleteStatus === "error" ? new Error("Something went wrong") : undefined}
                >
                    The actor will be deleted permanently!
                </Modal>
            </Container>
        );
    }
}
