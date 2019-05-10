import * as React from "react";
import { observer } from "mobx-react";
import { MovieInterface } from "../../universal/entities/movie";
import { Container, Row, Column } from "../components/grid_component";
import { ListGroup } from "../components/list_group_component";
import { Modal } from "../components/modal_component";
import { TextField } from "../components/textfield_component";
import { Button } from "../components/button_component";
import { lazyInject } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

function isValidNewMovie(o: any) {
    if (
        o === null ||
        o === undefined ||
        // new movies don't have ID
        o.id !== undefined ||
        typeof o.title !== "string" ||
        isNaN(o.year)
    ) {
        return false;
    }
    return true;
}

@observer
export class MoviePage extends React.Component {
    @lazyInject(TYPE.MovieStore) public movieStore!: interfaces.MovieStore;
    public componentWillMount() {
        this.movieStore.getAll();
    }
    public render() {
        const error = this.movieStore.loadStatus === "error" ? new Error("Movies could not be loaded!") : null;
        const movies = this.movieStore.loadStatus === "pending" ? null : this.movieStore.movies;
        return (
            <Container>
                <Row>
                    <Column width={12} style={{ textAlign: "right", marginBottom: "10px" }}>
                        <Button
                            onClick={() => {
                                this.movieStore.focusEditor();
                            }}
                        >
                            Add Movie
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column width={12}>
                        <ListGroup
                            error={error}
                            items={movies}
                            itemComponent={(movie: MovieInterface) => (
                                <Row>
                                    <Column width={8}>
                                        <h5>{movie.title}</h5>
                                        <p>{movie.year}</p>
                                    </Column>
                                    <Column width={4} style={{ textAlign: "right" }}>
                                        <Button
                                            kind="danger"
                                            onClick={() => {
                                                this.movieStore.focusDeleteDialog(movie.id);
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
                    title="Movie Editor"
                    isVisible={this.movieStore.editorValue !== null}
                    onAcceptLabel="Save"
                    onAccept={() => {
                        if (isValidNewMovie(this.movieStore.editorValue)) {
                            const movie: any = this.movieStore.editorValue;
                            this.movieStore.create(movie);
                        }
                    }}
                    onCancelLabel="Cancel"
                    onCancel={() => {
                        this.movieStore.focusOutEditor();
                    }}
                    error={this.movieStore.saveStatus === "error" ? new Error("Something went wrong") : undefined}
                >

                    <form>
                        <TextField
                            id="movie_title"
                            value={this.movieStore.editorValue ? this.movieStore.editorValue.title : ""}
                            title="Title"
                            placeholder="Title"
                            isValid={(val) => val !== undefined && val !== ""}
                            onChange={(val) => {
                                this.movieStore.edit("title", val);
                            }}
                        />
                        <TextField
                            id="movie_year"
                            value={this.movieStore.editorValue ? this.movieStore.editorValue.year : 2018}
                            title="Year"
                            placeholder="Year"
                            isValid={(val) => typeof val === "number"}
                            onChange={(val) => {
                                const n = parseInt(val);
                                if (!isNaN(n)) {
                                    this.movieStore.edit("year", n);
                                }
                            }}
                        />
                    </form>
                </Modal>
                <Modal
                    title="Are you sure?"
                    isVisible={this.movieStore.deleteMovieId !== null}
                    onAcceptLabel="Delete"
                    onAccept={() => {
                        if (this.movieStore.deleteMovieId) {
                            this.movieStore.delete(this.movieStore.deleteMovieId);
                        }
                    }}
                    onCancelLabel="Cancel"
                    onCancel={() => {
                        this.movieStore.focusOutDeleteDialog();
                    }}
                    error={this.movieStore.deleteStatus === "error" ? new Error("Something went wrong") : undefined}
                >
                    The movie will be deleted permanently!
                </Modal>
            </Container>
        );
    }
}
