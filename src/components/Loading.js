import styled from 'styled-components';

import Spinner from 'react-spinkit';

export default function Loading() {
  return (
    <AppLoading>
      <AppLoadingContents>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
        <Spinner
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
        />
      </AppLoadingContents>
    </AppLoading>
  );
}

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-bottom: 10rem;

  > img {
    height: 10rem;
    padding: 2rem;
    margin-bottom: 4rem;
  }

  > .sk-spinner {
    width: .5rem !important;
    height: .5rem !important;
  }
`;
