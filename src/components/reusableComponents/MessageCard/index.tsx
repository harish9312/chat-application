import * as React from 'react';
import './messageCard.scss';
export interface IMessageCardProps {
    avatarURL: string;
    name: string;
    messageContent: string;
    isActive: boolean;
    onClick: () => void;
    timeOrDate: string;
}

export class MessageCard extends React.Component<IMessageCardProps> {
    constructor() {
        super();
    }

    render() {
        const message = this.props.messageContent.substring(0, 30);
        return (
            <div
                onClick={this.props.onClick}
                className="message-card"
                style={this.props.isActive ? { backgroundColor: '#F6F7FB' } : {}}
            >
                <div className="avatar-container" >
                    <img width="100%" height="100%" src={this.props.avatarURL} />
                </div>
                <div className="card" >
                    <div className="username">
                        {this.props.name}
                        <div className="time-string">{this.props.timeOrDate}</div>
                    </div>
                    <div className="message" >{message + '...'}</div>
                </div>
            </div >
        );
    }
}
