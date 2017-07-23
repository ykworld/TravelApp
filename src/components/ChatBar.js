import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { GiftedChat } from 'react-native-gifted-chat';
import { Container, Content, Button, Text, Icon } from 'native-base';
import { connectWatson, disconnectWatson, sendChatMessage } from '../actions'

class ChatBar extends Component {

  componentWillMount() {
    this.props.connectWatson();
  }

  onSend(messages = []) {
    this.props.sendChatMessage(messages);
  }
  
  render() {
    return (
      <GiftedChat
        messages={this.props.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

const mpaStateToProps = state => {
  const { user } = state.auth;
  const { messages } = state.chat;
  //console.log("#########", messages);
  return { user, messages };
};

export default connect(mpaStateToProps, { connectWatson, sendChatMessage })(ChatBar);