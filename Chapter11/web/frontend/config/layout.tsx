import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as React from "react";
import { Header } from "../components/header_component";
import { HomePage } from "../pages/home_page";
import { MoviePage } from "../pages/movies_page";
import { ActorPage } from "../pages/actors_page";
import "../stores/movie_store";
import "../stores/actor_store";

export const Layout = () => (
    <BrowserRouter>
        <div>
            <Header
                bg="primary"
                title="TsMovies"
                rootPath="/"
                links={[
                    { path: "/movies", text: "Movies"},
                    { path: "/actors", text: "Actors"}
                ]}
            />
            <main style={{ paddingTop: "60px" }}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/movies" component={MoviePage}/>
                    <Route path="/actors" component={ActorPage}/>
                </Switch>
            </main>
        </div>
    </BrowserRouter>
);
