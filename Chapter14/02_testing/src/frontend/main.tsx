import * as React from "react";
import * as ReactDOM from "react-dom";
import { Calculator } from "./calculator_component";
import "./main.scss";
import { MathClient } from "./math_client";

ReactDOM.render(
    (
        <div>
            <Calculator client={new MathClient()} />
        </div>
    ),
    document.querySelector("#main")
);
