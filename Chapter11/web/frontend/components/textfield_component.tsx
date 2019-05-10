import * as React from "react";
import { ErrorMsg } from "./error_msg_component";

interface TextFieldProps {
    title: string;
    id: string;
    placeholder: string;
    value: any;
    isValid(value: any): boolean;
    onChange(value: string): void;
}

export class TextField extends React.Component<TextFieldProps> {
    public render() {
        return (
            <div>
                {this._renderError()}
                <div className="form-group">
                    <label>{this.props.title}</label>
                    <input
                        type="text"
                        className="form-control"
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        onKeyUp={(e) => this.props.onChange((e.target as any).value)}
                    />
                </div>
            </div>
        );
    }
    private _renderError() {
        if (!this.props.isValid(this.props.value)) {
            return (
                <ErrorMsg msg="Invalid input value!" />
            );
        }
    }
}
