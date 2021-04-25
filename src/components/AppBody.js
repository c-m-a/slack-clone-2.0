import styled from 'styled-components';

import Sidebar from './Sidebar';

export default function AppBody() {
  return (
    <AppBodyContainer>
      <Sidebar />
    </AppBodyContainer>
  );
}

const AppBodyContainer = styled.div`
  flex: 1;
  display: flex;
`;
