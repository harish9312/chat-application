import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './trashWindow.scss'

export interface ITrashWindowProps {
}

export class TrashWindowImpl extends React.Component<ITrashWindowProps, {}> {
    constructor() {
        super();
    }

    static defaultProps: ITrashWindowProps;
    render() {
        return (
            <BasePage>
                <div className="right-side-window">
                    <h1>Trash Window</h1>
                </div>
            </BasePage>
        )
    }
}

export function mapStateToProps() {
    return {
    };
}

export const TrashWindow = connect<{}, {}, ITrashWindowProps>(mapStateToProps, null, null, { pure: false })(TrashWindowImpl)