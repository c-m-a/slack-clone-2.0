import styled from 'styled-components';

import { Button } from '@material-ui/core';

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

export default function ChatForm({ channelName, channelId }) {
  return (
    <ChatFormContainer>
      <form>
        <input placeholder={`Message #{$channelName}`} />
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
            <SendIcon />
          </ChatIconsRight>
        </ChatIcons>
      </form>
    </ChatFormContainer>
  );
}

const ChatFormContainer = styled.div`
  height: 8rem;
  margin: 0 2rem 2.4rem 2rem;
  border: .1rem solid var(--chat-form-border-color);
  border-radius: .5rem;
  padding: .1rem .3rem;

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
