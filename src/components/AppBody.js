import styled from 'styled-components';

import Sidebar from './Sidebar';
import Chat from './Chat';

export default function AppBody() {
  return (
    <AppBodyContainer>
      <Sidebar />
      <Chat />
    </AppBodyContainer>
  );
}

const AppBodyContainer = styled.div`
  flex: 1;
  display: flex;
`;
