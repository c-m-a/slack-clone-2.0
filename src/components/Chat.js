import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';

import styled from 'styled-components';

import ChatForm from './ChatForm';

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

export default function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages] = useDocument(
    roomId &&
    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );

  return (
    <ChatContainer>
      <ChatHeader>
        <HeaderLeft>
          <h4>#{roomDetails?.data().name}</h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <InfoOutlinedIcon />
        </HeaderRight>
      </ChatHeader>
      <ChatMessages>
        Messages
      </ChatMessages>
      <ChatForm
        channelId={roomId}
        channelName={roomDetails?.data().name}
      />
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.2rem;
  padding-right: 2.6rem;
  height: 6.65rem;
  border-bottom: .1rem solid var(--chat-header-border-color);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    font-size: 1.8rem;
  }

  > h4 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: .5rem;
  }
`;

const HeaderRight = styled.div`
  > .MuiSvgIcon-root {
    font-size: 2.2rem;
    color: rgba(29, 28, 29, 0.7);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

