import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './sentWindow.scss';

export interface ISentWindowProps {
}

export class SentWindowImpl extends React.Component<ISentWindowProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: ISentWindowProps;
    render() {
        return (
            <BasePage>
                <div className="right-side-window">
                    <h1>Sent Window</h1>
                </div>
            </BasePage>
        );
    }
}

export function mapStateToProps() {
    return {
    };
}

export const SentWindow = connect<{}, {},
    ISentWindowProps>(mapStateToProps, null, null, { pure: false })(SentWindowImpl);
