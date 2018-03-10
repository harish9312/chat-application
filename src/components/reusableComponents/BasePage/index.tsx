import * as React from 'react';
import './basepage.scss';
const logo = require('../../../logo.png');
const myImg = require('../../../images/myImg.png');

export interface IBasePageProps {
}

export class BasePage extends React.Component<IBasePageProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: IBasePageProps;

    render() {
        return <div className="basepage" >
            <div className="header" >
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="left-toggle" >
                    <span className="line" ></span>
                    <span className="line" ></span>
                    <span className="line" ></span>
                </div>
                <div>
                    <div>
                        <img src={myImg} className="profile-avatar" />
                    </div>
                    <div className="simple-notification" >
                        <span className="notification-circle" ></span>
                        <i className="fa fa-bell-o notification" />
                    </div>
                    <div className="chat-notification">
                        <i className="fa fa-comments notification" />
                    </div>
                </div>
            </div>
            <div className="left-sidebar">
                <div className="button-container" >
                    <button className="compose-button" >
                        <i className="fa fa-pencil-square-o"></i>
                        &nbsp;
                        Compose
                    </button>
                    <div className="option-container">
                        <div className="option">
                            <i className="fa fa-inbox"></i>
                            &nbsp;
                        Inbox
                        </div>
                        <div className="option">
                            <i className="fa fa-send"></i>
                            &nbsp;
                        Sent
                        </div>
                        <div className="option">
                            <i className="fa fa-inbox"></i>
                            &nbsp;
                        Drafts
                        </div>
                        <div className="option active">
                            <i className="fa fa-comments"></i>
                            &nbsp;
                        Chat
                        </div>
                        <div className="option">
                            <i className="fa fa-trash"></i>
                            &nbsp;
                        Trash
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
