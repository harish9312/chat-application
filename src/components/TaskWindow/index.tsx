import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './taskWindow.scss'

export interface ITaskWindowProps {
}

export class TaskWindowImpl extends React.Component<ITaskWindowProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: ITaskWindowProps;
    render() {
        return (
            <BasePage>
                <div className="right-side-window">
                    <h1>Task Window</h1>
                </div>
            </BasePage>
        )
    }
}

export function mapStateToProps() {
    return {
    };
}

export const TaskWindow = connect<{}, {}, ITaskWindowProps>(mapStateToProps, null, null, { pure: false })(TaskWindowImpl)