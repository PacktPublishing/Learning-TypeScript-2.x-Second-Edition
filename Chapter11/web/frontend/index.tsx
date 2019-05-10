import "reflect-metadata";
import * as React from "react";
import * as ReacDOM from "react-dom";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import { Layout } from "./config/layout";

const selector = "#root";
const $element = document.querySelector(selector);

if (!$element) {
    throw new Error(`Node ${selector} not found!`);
} else {
    ReacDOM.render(
        <Layout/>,
        $element
    );
}
