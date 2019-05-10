import * as React from "react";

export class Loading extends React.Component {
    public render() {
        return (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "50%" }}
                >
                </div>
            </div>
        );
    }
}
