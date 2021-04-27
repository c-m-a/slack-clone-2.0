import React from 'react';

import styled from 'styled-components';

import Header from './Header';
import AppBody from './AppBody';

export default function App() {
  return (
    <AppContainer>
      <Header />
      <AppBody />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

