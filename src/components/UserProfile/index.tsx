import * as React from 'react';
import './userProfile.scss';
import { BasePage } from '../reusableComponents/BasePage/index';

export interface IUserProfileProps {
}

export interface IUserProfileState {
    firstName: string;
    lastName: string;
    email: string;
    avatarURL: string;
    isEmailDisabled: boolean;
    password: string;
    oldPassword: string;
    confirmPassword: string;
    isEditProfile: boolean;
    profileUpdateSuccess: boolean;
}

export class UserProfile extends React.Component<IUserProfileProps, IUserProfileState> {
    constructor() {
        super();
        this.state = {
            firstName: 'Harish',
            lastName: 'Soni',
            isEmailDisabled: true,
            email: 'hksoni.9312@gmail.com',
            password: 'password',
            oldPassword: 'new password',
            confirmPassword: 'new password',
            avatarURL: 'https://harish9312.github.io/static/media/myImg.21393c7c.jpg',
            isEditProfile: false,
            profileUpdateSuccess: false
        };
    }

    static defaultProps: IUserProfileProps;

    renderProfile = () => {
        return <div className="display-information" >
            <div
                style={{ color: '#60d660', textAlign: 'center' }}
            >
                {this.state.profileUpdateSuccess ?
                    <span>
                        <i className="fa fa-check-circle-o"></i>
                        &nbsp;
                        Account updated successfully..!!
                    </span>
                    : ''}
            </div>
            <div style={{ display: 'flex' }} >
                <img src={this.state.avatarURL} />
                <div className="user-information" >
                    <div className="label" >Full Name:</div>
                    <div className="value" >{this.state.firstName + ' ' + this.state.lastName}</div>
                </div>
                <div className="user-information" >
                    <div className="label" >Email Address:</div>
                    <div className="value" >{this.state.email}</div>
                </div>
            </div>
            <div className="edit-button" onClick={() => this.setState({ isEditProfile: true })}>
                <i className="fa fa-pencil"></i>
            </div>
        </div>;
    }

    handleInputChange = (key, value: string) => {
        this.setState({
            [key]: value
        });
    }

    renderEditProfile = () => {
        return (
            <div className="edit-information" >
                <div style={{ display: 'flex' }} >
                    <img src={this.state.avatarURL} />
                    <div className="info">
                        General Information
                        <div className="first-container" >
                            <div style={{ display: 'inline-block' }} >
                                <span style={{ display: 'block' }} className="label">First Name</span>
                                <input className="edit-input" onChange={e => {
                                    this.handleInputChange('firstName', e.target.value);
                                }} value={this.state.firstName} type="text" />
                            </div>
                            <div style={{ display: 'inline-block', paddingLeft: '25px' }} >
                                <span style={{ display: 'block' }} className="label">Last Name</span>
                                <input className="edit-input" onChange={e => {
                                    this.handleInputChange('lastName', e.target.value);
                                }} value={this.state.lastName} type="text" />
                            </div>
                        </div>
                        <div className="first-container" >
                            <div className="label">Your Email</div>
                            <input
                                className="edit-input"
                                value={this.state.email}
                                type="text"
                                onChange={e => {
                                    this.handleInputChange('email', e.target.value);
                                }}
                                disabled={this.state.isEmailDisabled}
                            />
                            <span
                                onClick={() => this.setState({ isEmailDisabled: false })}
                                className="change-email-button"
                            >Change Email</span>
                        </div>
                        <div className="first-container change-password" >
                            <span className="change-password-label">Change Password</span>
                            <div style={{ display: 'inline-block' }} >
                                <span style={{ display: 'block' }} className="label">Current Password</span>
                                <input className="edit-input"
                                    onChange={e => {
                                        this.handleInputChange('password', e.target.value);
                                    }}
                                    value="password" type="password" />
                            </div>
                            <div style={{ display: 'inline-block', paddingLeft: '25px' }} >
                                <span style={{ display: 'block' }} className="label">New Password</span>
                                <input
                                    onChange={e => {
                                        this.handleInputChange('oldPassword', e.target.value);
                                    }}
                                    className="edit-input" value="password" type="password" />
                            </div>
                            <div style={{ display: 'inline-block', paddingLeft: '25px' }} >
                                <span style={{ display: 'block' }} className="label">Confirm Password</span>
                                <input
                                    onChange={e => {
                                        this.handleInputChange('confirmPassword', e.target.value);
                                    }}
                                    className="edit-input" value="password" type="password" />
                            </div>
                        </div>
                        <div style={{ paddingTop: '15px' }} >
                            <button
                                onClick={() => this.setState({ isEditProfile: false, profileUpdateSuccess: true })}
                                type="button"
                                className="save-button">Save</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    render() {
        return (
            <BasePage>
                <div className="user-profile">
                    <div className="title">Account Setting</div>
                    <div className="profile-information">
                        <div className="profile-heading">Your Profile</div>
                        {this.state.isEditProfile ? this.renderEditProfile() : this.renderProfile()}
                    </div>
                </div>
            </BasePage>
        );
    }
}
