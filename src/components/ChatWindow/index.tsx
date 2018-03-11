import * as React from 'react';
import { connect } from 'react-redux';
import { BasePage } from '../reusableComponents/BasePage/index';
import './chatWindow.scss';
import { MessageCard } from '../reusableComponents/MessageCard/index';
import { getAvatars } from 'src/services/chatService';
import { GuestMessage } from 'src/components/reusableComponents/MessageDisplay/GuestMessage';
import { UserMessage } from 'src/components/reusableComponents/MessageDisplay/UserMessage';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export interface IChatWindowProps {
    avatars: {
        url: string;
    }[];
}

export interface IChatWindowState {
    isPeopleChat: boolean;
    isGroupChat: boolean;
    isActive?: number;
    name?: string;
    place?: string;
    avatarURL?: string;
    currentUserName: string;
    inputValue: string;
    messages: {
        name: string;
        messageContent: string;
    }[];
    message: string;
    newMessage: string[];
}

export class ChatWindowImpl extends React.Component<IChatWindowProps, IChatWindowState> {
    constructor(props: IChatWindowProps) {
        super(props);
        this.state = {
            isPeopleChat: true,
            isGroupChat: false,
            isActive: 1,
            inputValue: '',
            currentUserName: 'Harish',
            name: 'Andrej Victor',
            place: 'United Kingdom, London',
            avatarURL: 'https://splashbase.s3.amazonaws.com/travelcoffeebook/large/tumblr_oy9lrtcE2j1ta0hnbo1_1280.jpg',
            messages: messageData,
            newMessage: [],
            message: ''
        };
    }

    setPeopleChatActive = () => {
        this.setState({
            isPeopleChat: true,
            isGroupChat: false
        });
    }

    componentDidMount() {
        getAvatars();
        const conversationWindow = document.getElementById('conversation');
        conversationWindow.scrollTop = 500;
    }

    setGroupChatActive = () => {
        this.setState({
            isPeopleChat: false,
            isGroupChat: true
        });
    }

    handleChatChange = (index, name, avatarURL) => {
        this.setState({ isActive: index, name, avatarURL });
    }

    handleSearchInput = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value
        });
        const messageArrays = [];
        messageData.forEach((data, index) => {
            if (data.messageContent.toLocaleLowerCase().indexOf(value.toLowerCase()) > -1) {
                messageArrays.push(messageData[index]);
            } else if (data.name.toLocaleLowerCase().indexOf(value.toLowerCase()) > -1) {
                messageArrays.push(messageData[index]);
            }
        });
        this.setState({
            messages: messageArrays
        });
    }

    renderCard = () => {
        const { messages } = this.state;
        if (!this.props.avatars) {
            return;
        }
        return (
            messages.map((instance, index) => {
                const { name, messageContent } = instance;
                return (
                    <MessageCard
                        key={index}
                        onClick={() => this.handleChatChange(index, name, this.props.avatars[index].url)}
                        name={name}
                        messageContent={messageContent}
                        avatarURL={this.props.avatars[index].url}
                        isActive={index === this.state.isActive}
                        timeOrDate="3sec"
                    />
                );
            })
        );
    }

    handleReplyInput = (e) => {
        this.setState({
            message: e.target.value
        });
    }
    newMessages = [];

    addNewMessage = () => {
        this.newMessages.push(this.state.message);
        this.setState({
            newMessage: this.newMessages,
            message: ''
        });
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
                            <input
                                onChange={this.handleSearchInput}
                                className="search-bar"
                                placeholder="Search.."
                                value={this.state.inputValue}
                            />
                        </div>
                        <div className="chat-heading">
                            <div
                                onClick={this.setPeopleChatActive}
                                className={`chat-title ${this.state.isPeopleChat ? 'active' : ''}`}
                            >
                                People Chat
                            </div>
                            <div
                                onClick={this.setGroupChatActive}
                                className={`chat-title ${this.state.isGroupChat ? 'active' : ''}`}
                            >
                                Group Chat
                            </div>
                        </div>
                        <div className="messages">
                            <PerfectScrollbar>
                                {this.renderCard()}
                            </PerfectScrollbar>
                        </div>
                    </div>
                    <div className="conversation-tab">
                        <i className="fa fa-phone"></i>
                        <i className="fa fa-video-camera"></i>
                        <div className="selected-user-detail">
                            <div className="avatar-container" >
                                <img width="100%" height="100%" src={this.state.avatarURL} />
                            </div>
                            <div className="name-and-place">
                                <div className="username">{this.state.name}</div>
                                <div className="message" >{this.state.place}</div>
                            </div>
                        </div>
                        <div className="conversation" id="conversation" >
                            <PerfectScrollbar>
                                <GuestMessage
                                    message={messageData[this.state.isActive].messageContent}
                                    guestAvatarURL={this.state.avatarURL}
                                    guestName={this.state.name}
                                />
                                <UserMessage
                                    message={`Let me know what do you think about
                                    another new project,
                                    I think we will start very soon?`}
                                    userAvatarURL={'https://harish9312.github.io/static/media/myImg.21393c7c.jpg'}
                                    currentUserName={'Harish'}
                                />
                                <GuestMessage
                                    message={messageData[this.state.isActive].messageContent}
                                    guestAvatarURL={this.state.avatarURL}
                                    guestName={this.state.name}
                                />
                                {this.state.newMessage.map((message, index) => {
                                    return <UserMessage
                                        key={index}
                                        message={message}
                                        userAvatarURL={'https://harish9312.github.io/static/media/myImg.21393c7c.jpg'}
                                        currentUserName={'Harish'}
                                    />;
                                })}
                            </PerfectScrollbar>
                        </div>
                        <div className="type-message" >
                            <div className="message-container" >
                                <textarea
                                    onChange={this.handleReplyInput}
                                    value={this.state.message}
                                    placeholder="Type a message here..."
                                    rows={3} />
                            </div>
                            <div className="icon-container" >
                                <i className="fa fa-paperclip"></i>
                                <i className="fa fa-smile-o"></i>
                                <i className="fa fa-image"></i>
                                <button
                                    onClick={this.addNewMessage}
                                    type="button"
                                    className="reply-button"
                                >
                                    Reply
                                </button>
                            </div>
                        </div>                    </div>
                    <div className="task-tab">
                        <div className="task-container" >
                            <div className="task-header">Upcoming Task</div>
                            <div className="task-one" >
                                <div>
                                    <div className="pyramid"></div>
                                    <div className="circle"></div>
                                    <div className="content">
                                        12 <br /> FEB
                                </div>
                                </div>
                            </div>
                            <div className="title">
                                Today 11:30pm
                        </div>
                        </div>
                        <div className="task-list" >
                            <p><input type="checkbox" />&nbsp; Dinner with friends</p>
                            <p><input type="checkbox" />&nbsp; Watching Movie with Girlfriend</p>
                            <p><input type="checkbox" />&nbsp; Watching football match</p>
                            <p><input type="checkbox" />&nbsp; Watching football match</p>
                        </div>
                        <div className="task-container" >
                            <div className="task-one" >
                                <div>
                                    <div className="pyramid"></div>
                                    <div className="circle"></div>
                                    <div className="content">
                                        13 <br /> FEB
                                </div>
                                </div>
                            </div>
                            <div className="title">
                                Tomorrow 11:30pm
                        </div>
                        </div>
                        <div className="task-list" >
                            <p><input type="checkbox" />&nbsp; Dinner with friends</p>
                            <p><input type="checkbox" />&nbsp; Watching Movie with Girlfriend</p>
                            <p><input type="checkbox" />&nbsp; Watching football match</p>
                            <p><input type="checkbox" />&nbsp; Watching football match</p>
                        </div>
                    </div>
                </div>
            </BasePage >
        );
    }
}

export function mapStateToProps(state) {
    return {
        avatars: state.chat.get('avatars')
    };
}

/* tslint:disable */
const messageData = [
    {
        name: "Martin Strba",
        messageContent: "Let me know what do you think..??",
    },
    {
        name: "Andrej Victor",
        messageContent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ",
    },
    {
        name: "Jaromir Kveton",
        messageContent: "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean ",
    },
    {
        name: "Jaromir Kveton",
        messageContent: "rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus",
    },
    {
        name: "AI Rayhan",
        messageContent: "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
    },
    {
        name: "Raaz Dash",
        messageContent: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
    }
];


export const ChatWindow = connect<{}, {}, IChatWindowProps>(mapStateToProps)(ChatWindowImpl as any)