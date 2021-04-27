import styled from 'styled-components';

export default function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{' '}
          <span>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  padding: .5rem 0 .3rem 0;

  img {
    height: 5rem;
    width: 5rem;
    border-radius: .5rem;
    margin-right: 1rem;
  }
`;

const MessageInfo = styled.div`
  > h4 > span {
    font-weight: normal;
    color: gray;
  }
`;
