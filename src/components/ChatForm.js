import { useState } from 'react';

import styled from 'styled-components';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LinkIcon from '@material-ui/icons/Link';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import SendIcon from '@material-ui/icons/Send';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';

import { db } from '../firebase';
import firebase from 'firebase';

export default function ChatForm({ channelName, channelId, chatBottomRef }) {
  const [input , setInput] = useState('');

  const sendMessage = e => {
    e.preventDefault();   // Prevents refresh

    if (!channelId) {
      return false;
    }

    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: 'Cma',
        userImage: null
      })
      .then(() => {
        console.log(`Message saved!!`);
        chatBottomRef?.current?.scrollIntoView({
          behavior: 'smooth'
        });
      })
      .catch(err => console.error(err));

    setInput('');
  };

  return (
    <ChatFormContainer>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={e => setInput(e.target.value)}
        />
        <ChatIcons>
          <ChatIconsLeft>
            <CodeIcon />
            <FlashOnIcon />
            <FormatBoldIcon />
            <FormatItalicIcon />
            <FormatListNumberedIcon />
            <FormatListBulletedIcon />
            <FormatQuoteIcon />
            <LinkIcon />
            <DeveloperModeIcon />
            <StrikethroughSIcon />
          </ChatIconsLeft>
          <ChatIconsRight>
            <TextFormatIcon />
            <AlternateEmailIcon />
            <InsertEmoticonIcon />
            <AttachFileIcon />
            <SendIcon
              onClick={sendMessage}
            />
          </ChatIconsRight>
        </ChatIcons>
      </form>
    </ChatFormContainer>
  );
}

const ChatFormContainer = styled.div`
  position: absolute;
  width: calc(100% - 4rem); /* width - left and right padding */
  bottom: 0;
  height: 8rem;
  border: .1rem solid var(--chat-form-border-color);
  border-radius: .5rem;
  padding: .1rem .3rem;
  margin: 0 2rem 2rem 2rem;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  form > input {
    flex: .5;
    width: 100%;
    border: none;
    padding: 0 .6rem;
    background-color: transparent;
  }

  form > input:focus {
    outline: none;
  }
`;

const ChatIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: .5;
  background-color: var(--chat-icons-bg-color);
  border-top: .1rem var(--chat-form-divider-color) solid;
  z-index: 10;

  .MuiSvgIcon-root {
    font-size: 2.2rem;
    color: var(--chat-icons-color);
    margin-right: .5rem;
  }

  .MuiSvgIcon-root:hover {
    color: var(--chat-icons-color-hover);
  }
`;

const ChatIconsLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: .5rem;
`;

const ChatIconsRight = styled.div`
  display: flex;
  align-items: center;
`;
