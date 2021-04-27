import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

export default function Login() {
  const login = e => {
    e.preventDefault();
    auth.signInWithPopup(provider)
      .catch(err => alert(err.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
        <h1>Sign in to the Slack 2.0</h1>
        <p>beyond-slack.slack.com</p>
        <Button type="submit" onClick={login}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: var(--login-bg-color);
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 10rem;
  text-align: center;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 .1rem .3rem rgba(0, 0, 0, .12), 0 .1rem .2rem rgba(0, 0, 0, .24);

  img {
    object-fit: contain;
    height: 10rem;
    margin-bottom: 4rem;
  }

  button {
    font-size: 1.2rem;
    margin-top: 5rem;
    text-transform: inherit !important;
    background-color: var(--login-button-bg-color) !important;
    color: white;
  }
`;
