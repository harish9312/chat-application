import * as React from 'react';
import './messageDisplay.scss';

export interface IGuestMessageProps {
    guestAvatarURL: string;
    message: string;
    guestName: string;
}

export class GuestMessage extends React.Component<IGuestMessageProps, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="guest-message">
                <div className="main-container">
                    <div className="guest-avatar">
                        <img className="guest-image" src={this.props.guestAvatarURL} />
                    </div>
                    <div>
                        <span className="guest-name">{this.props.guestName}</span>
                        <span className="time">2 min ago</span>
                        <div className="message-container">
                            <div className="caret-up" ></div>
                            <div className="text">
                                {this.props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
