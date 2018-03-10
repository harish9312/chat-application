import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './chatWindow.scss'

export interface IChatWindowProps {
}

export class ChatWindowImpl extends React.Component<IChatWindowProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: IChatWindowProps;
    render() {
        return (
            <BasePage>
                <div className="chat-container">
                    <div className="message-tab">
                        <div className="heading" >Chat</div>
                        <div className="search-bar-container" >
                            <i className="fa fa-search"></i>
                            <input className="search-bar" placeholder="Search.." />
                        </div>
                    </div>
                    <div className="conversation-tab">

                    </div>
                    <div className="task-tab">

                    </div>
                </div>
            </BasePage >
        )
    }
}

export function mapStateToProps() {
    return {
    };
}

export const ChatWindow = connect<{}, {}, IChatWindowProps>(mapStateToProps, null, null, { pure: false })(ChatWindowImpl)