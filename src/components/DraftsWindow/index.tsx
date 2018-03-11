import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './draftsWindow.scss';

export interface IDraftsWindowProps {
}

export class DraftsWindowImpl extends React.Component<IDraftsWindowProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: IDraftsWindowProps;
    render() {
        return (
            <BasePage>
                <div className="right-side-window">
                    <h1>Drafts Window</h1>
                </div>
            </BasePage>
        );
    }
}

export function mapStateToProps() {
    return {
    };
}

export const DraftsWindow = connect<{}, {},
    IDraftsWindowProps>(mapStateToProps, null, null, { pure: false })(DraftsWindowImpl);
