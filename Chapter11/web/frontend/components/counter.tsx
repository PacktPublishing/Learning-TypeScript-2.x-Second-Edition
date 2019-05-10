import * as React from "react";
import { Button } from "./button_component";

interface CounterProps {
    initialValue: number;
}

interface CounterState {
    value: number;
}

export class Component extends React.Component<CounterProps, CounterState> {
    public constructor(props: CounterProps) {
        super(props);
        this.state = { value: this.props.initialValue };
    }
    public render() {
        return (
            <div>
                The value is: {this.state.value}
                <Button onClick={() => this._increment()}>
                    Increment
                </Button>
            </div>
        );
    }
    private _increment() {
        this.setState({ value: this.state.value + 1 });
    }
}
