import * as React from "react";

interface ErrorMsgProps {
    msg: string;
}

export class ErrorMsg extends React.Component<ErrorMsgProps> {
    public render() {
        return (
            <div className="alert alert-danger" role="alert">
                {this.props.msg}
            </div>
        );
    }
}
