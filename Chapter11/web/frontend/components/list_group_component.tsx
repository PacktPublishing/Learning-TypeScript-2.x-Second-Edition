import * as React from "react";
import { ErrorMsg } from "./error_msg_component";
import { Loading } from "./loading_component";

interface ListGroupProps {
    error: Error | null;
    items: any[] | null;
    itemComponent(item: any): JSX.Element;
}

export class ListGroup extends React.Component<ListGroupProps> {
    public render() {
        return (
            <ul className="list-group">
                {this._renderItems()}
            </ul>
        );
    }
    private _renderItems() {
        if (this.props.error) {
            return <ErrorMsg msg={this.props.error.message} />;
        } else if (!this.props.items) {
            return <Loading />;
        } else {
            return this.props.items.map(
                (item, itemIndex) => (
                    <li className="list-group-item" key={itemIndex}>
                        {this.props.itemComponent(item)}
                    </li>
                )
            );
        }
    }

}
