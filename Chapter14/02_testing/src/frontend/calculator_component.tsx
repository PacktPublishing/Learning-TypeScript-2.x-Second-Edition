import * as React from "react";
import { MathClient } from "./math_client";
import { NumericInput } from "./numeric_input_component";

const ids = {
  base: "#base",
  exponent: "#exponent",
  result: "#result",
  submit: "#submit"
};

interface CalculatorProps {
  client: MathClient;
}

interface CalculatorState {
  base: string;
  exponent: string;
  result: string;
}

export class Calculator extends React.Component<CalculatorProps, CalculatorState> {

  public constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      base: "1",
      exponent: "1",
      result: "1"
    };
  }

  public render() {
    return (
      <div className="well" id="calculator">
        <div className="row">
          <div className="col">
            <NumericInput
              id="base"
              name="Base"
              value={this.state.base}
              onChangeHandler={(v) => this.setState({ base: v })}
            />
          </div>
          <div className="col">
            <NumericInput
              id="exponent"
              name="Exponent"
              value={this.state.exponent}
              onChangeHandler={(v) => this.setState({ exponent: v })}
            />
          </div>
          <div className="col">
            <div className="form-group">
                  <label>Result</label>
                  <div id="result">{this.state.result}</div>
              </div>
          </div>
          <div className="col">
            <button
              id="submit_btn"
              type="Submit"
              className="btn btn-primary"
              onClick={() => this._onSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  private _onSubmit() {
    (async () => {
      const result = await this.props.client.pow(
        parseFloat(this.state.base),
        parseFloat(this.state.exponent)
      );
      this.setState({ result });
    })();
  }

}
