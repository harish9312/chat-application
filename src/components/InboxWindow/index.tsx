import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './inboxWindow.scss'

export interface IInboxWindowProps {
}

export class InboxWindowImpl extends React.Component<IInboxWindowProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: IInboxWindowProps;
    render() {
        return (
            <BasePage>
                <div className="right-side-window">
                    <h1>Inbox Window</h1>
                </div>
            </BasePage>
        )
    }
}

export function mapStateToProps() {
    return {
    };
}

export const InboxWindow = connect<{}, {}, IInboxWindowProps>(mapStateToProps, null, null, { pure: false })(InboxWindowImpl)