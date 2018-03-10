import * as React from 'react';
import './basepage.scss';
import { Link } from 'react-router-dom';
const logo = require('../../../logo.png');
const myImg = require('../../../images/myImg.png');

export interface IBasePageProps {
}

export class BasePage extends React.Component<IBasePageProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: IBasePageProps;

    getClassName = (route: string) => {
        const currentPath = location.href.split('/')
        if (currentPath[currentPath.length - 1] === route) {
            return true;
        }
        return false;
    }

    render() {
        const { getClassName } = this;
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
            <div style={{ height: '100%' }} >
                <div className="left-sidebar">
                    <div className="button-container" >
                        <button className="compose-button" >
                            <i className="fa fa-pencil-square-o"></i>
                            &nbsp;
                        Compose
                    </button>
                        <div className="option-container">
                            <Link replace to="/inbox">
                                <div className={`option ${getClassName('inbox') ? 'active' : ''}`}>
                                    < i className="fa fa-inbox"></i>
                                    &nbsp;
                                    Inbox
                            </div>
                            </Link>
                            <Link replace to="/sent">
                                <div className={`option ${getClassName('sent') ? 'active' : ''}`}>
                                    <i className="fa fa-send"></i>
                                    &nbsp;
                                    Sent
                            </div>
                            </Link>
                            <Link replace to="/drafts">
                                <div className={`option ${getClassName('drafts') ? 'active' : ''}`}>
                                    <i className="fa fa-inbox"></i>
                                    &nbsp;
                                    Drafts
                            </div>
                            </Link>
                            <Link replace to="/chat">
                                <div className={`option ${getClassName('chat') ? 'active' : ''}`}>
                                    <i className="fa fa-comments"></i>
                                    &nbsp;
                                    Chat
                            </div>
                            </Link>
                            <Link replace to="/trash">
                                <div className={`option ${getClassName('trash') ? 'active' : ''}`}>
                                    <i className="fa fa-trash"></i>
                                    &nbsp;
                                    Trash
                            </div>
                            </Link>
                            <hr />
                            <Link replace to="/task">
                                <div className={`option ${getClassName('task') ? 'active' : ''}`}>
                                    <i className="fa fa-wpforms"></i>
                                    &nbsp;
                                    Task
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        </div >;
    }
}