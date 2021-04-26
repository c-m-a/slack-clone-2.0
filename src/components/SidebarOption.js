import styled from 'styled-components';

import { db } from '../firebase';

export default function SidebarOption({ addChannelOption, Icon, id, title }) {

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms')
        .add({
          name: channelName
        })
        .then(() => {
          console.log('Channel saved!');
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  const selectChannel = () => {
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: var(--slack-color);
  }

  > .MuiSvgIcon-root {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  > h3 {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

const SidebarOptionChannel = styled.div`
  font-size: 1.5rem;

  > span {
    margin-left: 1.2rem;
  }
`;
