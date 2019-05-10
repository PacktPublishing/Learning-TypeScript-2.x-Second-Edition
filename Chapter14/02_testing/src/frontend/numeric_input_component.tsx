import * as React from "react";

interface NumericInputProps {
    id: string;
    name: string;
    value: string;
    onChangeHandler(val: string): void;
}

export class NumericInput extends React.Component<NumericInputProps> {

    public constructor(props: NumericInputProps) {
        super(props);
    }

    public render() {
        return (
            <div className="form-group">
                {this._renderError()}
                <label>{this.props.name}</label>
                <input
                    id={this.props.id}
                    type="text"
                    defaultValue={this.props.value ? this.props.value.toString() : ""}
                    className="form-control"
                    onChange={(e) => {
                        const val = e.target.value as any;
                        this.props.onChangeHandler(val);
                    }}
                />
            </div>
        );
    }

    private _idValid() {
        const val = this.props.value as any;
        return (val && !isNaN(val));
    }

    private _renderError() {
        if (!this._idValid()) {
            return (
                <div className="error-msg">
                    <p>{`${this.props.name} must be numeric!`}</p>
                </div>
            );
        }
    }

}
