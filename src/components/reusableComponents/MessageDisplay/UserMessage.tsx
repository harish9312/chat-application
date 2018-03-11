import * as React from 'react';

export interface IUserMessageProps {
    currentUserName: string;
    message: string;
    userAvatarURL: string;
}

export class UserMessage extends React.Component<IUserMessageProps, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="user-message">
                <div className="main-container">
                    <div>
                        <div>
                            <span className="time">2 min ago</span>
                            <span className="user-name">{this.props.currentUserName}</span>
                        </div>
                        <div className="message-container">
                            <div className="caret-up" ></div>
                            <div className="text">
                                {this.props.message}
                            </div>
                        </div>
                    </div>
                    <div className="user-avatar">
                        <img className="user-image" src={this.props.userAvatarURL} />
                    </div>
                </div>
            </div >
        );
    }
}
