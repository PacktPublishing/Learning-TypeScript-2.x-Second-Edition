import * as React from "react";

export class Container extends React.Component {
    public render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export class Row extends React.Component {
    public render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

// In the bootstrap grid system the max size is 12
type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DeviceSize = "s" | "m" | "l" | "xl";

interface ColumnProps {
    width: ColumnWidth;
    size?: DeviceSize;
    style?: React.CSSProperties;
}

export class Column extends React.Component<ColumnProps> {
    public render() {
        return (
            <div className={this._getClass()} style={this.props.style ? this.props.style : {}}>
                {this.props.children}
            </div>
        );
    }
    private _getClass() {
        if (this.props.size !== undefined) {
            return `col-${this.props.size}-${this.props.width}`;
        } else {
            return `col-${this.props.width}`;
        }
    }
}
