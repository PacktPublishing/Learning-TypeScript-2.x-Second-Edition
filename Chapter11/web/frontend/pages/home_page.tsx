import * as React from "react";
import { Card } from "../components/card_component";
import { Container, Row, Column } from "../components/grid_component";

export const HomePage = () => (
    <Container>
        <Row>
            <Column width={6}>
                <Card
                    title="Movies"
                    description="Explore our database of movies"
                    linkPath="/movies"
                    linkText="Movies"
                    img={null}
                />
            </Column>
            <Column width={6}>
                <Card
                    title="Actors"
                    description="Explore our actors of movies"
                    linkPath="/actors"
                    linkText="Actors"
                    img={null}
                />
            </Column>
        </Row>
    </Container>
);
