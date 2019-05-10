import * as React from "react";
import { Button } from "./button_component";
import { ErrorMsg } from "./error_msg_component";

interface ModalProps {
    title: string;
    isVisible: boolean;
    onAccept(): void;
    onAcceptLabel: string;
    onCancel(): void;
    onCancelLabel: string;
    error?: Error;
}

export class Modal extends React.Component<ModalProps> {
    public render() {
        if (!this.props.isVisible) {
            return null;
        } else {
            return (
                <div
                    className="modal fade show"
                    role="dialog"
                    style={{ display: "block" }}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {this.props.title}
                                </h5>
                                <Button
                                    className="close"
                                    onClick={() => {
                                        this.props.onCancel();
                                    }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </div>
                            <div className="modal-body">
                                {
                                    (() => {
                                        if (this.props.error) {
                                            return <ErrorMsg msg={this.props.error.message} />;
                                        }
                                    })()
                                }
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <Button
                                    onClick={() => {
                                        this.props.onAccept();
                                    }}
                                >
                                    {this.props.onAcceptLabel}
                                </Button>
                                <Button
                                    kind="secondary"
                                    onClick={() => {
                                        this.props.onCancel();
                                    }}
                                >
                                    {this.props.onCancelLabel}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
